/*
 * Freebox Card for Home Assistant
 * ===============================
 * Responsive Lovelace card for the official Freebox integration.
 *
 * License: MIT
 */
const CARD_VERSION = "2026.11.0";

/**
 * Return the Freebox devices exposed by Home Assistant's entity registry.
 */
function getFreeboxDeviceIds(hass) {
	if (!hass) return [];
	const entities = Object.values(hass.entities || {});
	const devices = Object.values(hass.devices || {});
	const candidates = [];

	for (const entity of entities) {
		if (!entity?.device_id || !entity.entity_id?.startsWith("device_tracker.")) continue;
		const device = devices.find((item) => item.id === entity.device_id);
		if (!device) continue;

		const entityText = String(entity.entity_id || "").toLowerCase();
		const deviceText = [device.name, device.name_by_user, device.model, device.manufacturer]
			.filter(Boolean).join(" ").toLowerCase();
		const looksLikeFreeboxTracker = /^device_tracker\.freebox(?:$|_)/i.test(entity.entity_id);
		const hasFreeboxDeviceIdentity = /freebox/i.test(deviceText);
		if (!looksLikeFreeboxTracker || !hasFreeboxDeviceIdentity) continue;

		let score = 100;
		if (entityText === "device_tracker.freebox") score += 100;
		if (/freebox/i.test(String(device.name || ""))) score += 40;
		if (/freebox/i.test(String(device.model || ""))) score += 30;
		if (/freebox/i.test(String(device.manufacturer || ""))) score += 20;
		candidates.push({ deviceId: device.id, score });
	}

	return candidates
		.sort((a, b) => b.score - a.score || a.deviceId.localeCompare(b.deviceId))
		.map((candidate) => candidate.deviceId);
}

/* ---------------------------------------------------------------------- */
/*  Main card                                                             */
/* ---------------------------------------------------------------------- */
class FreeboxCard extends HTMLElement {
	static TRANSLATIONS = {
		en: {
			name: "Freebox",
			connected: "Connected",
			offline: "Offline",
			confirm_wifi_on: "Turn Wi-Fi on?",
			confirm_wifi_off: "Turn Wi-Fi off?",
			confirm_reboot_popup: "Reboot the Freebox?",
			disconnected: "Disconnected",
			internet: "Bandwidth",
			system: "System",
			hardware: "Hardware",
			telephony: "Telephony",
			reset_missed_calls: "Reset",
			temperatures: "Temperatures",
			fans: "Fans",
			disks: "Storage & RAID",
			storage: "Storage",
			wifi: "Wi-Fi",
			devices: "Devices",
			device_trackers: "Device trackers",
			total_devices: "Total",
			home_devices: "Connected",
			away_devices: "Disconnected",
			disabled_devices: "Disabled",
			connected_devices_list: "Connected devices",
			away_devices_list: "Disconnected devices",
			download: "Download",
			latency: "Latency",
			excellent: "Excellent",
			correct: "Fair",
			poor: "Poor",
			internet_status: "Internet status",
			freebox_model: "Model",
			source_type: "Source type",
			mac: "MAC",
			ipv4: "IPv4",
			ipv6: "IPv6",
			connection_type: "Connection type",
			uptime: "Uptime",
			firmware_version: "Firmware version",
			hardware_version: "Hardware version",
			serial: "Serial",
			upload: "Upload",
			used_space: "Space used",
			missed_calls: "Missed calls",
			raid: "RAID",
			healthy: "Healthy",
			degraded: "Degraded",
			reboot: "Reboot",
			no_device: "Select a Freebox device in the card editor.",
			no_entities: "No compatible Freebox entities were found.",
			unavailable: "Unavailable",
			language: "Language",
				auto: "Auto",
			debug: "DEBUG",
		},
		fr: {
			name: "Freebox",
			connected: "Connectée",
			offline: "Hors ligne",
			confirm_wifi_on: "Allumer le Wi-Fi ?",
			confirm_wifi_off: "Éteindre le Wi-Fi ?",
			confirm_reboot_popup: "Redémarrer la Freebox ?",
			disconnected: "Déconnectée",
			internet: "Bande passante",
			system: "Système",
			hardware: "Matériel",
			telephony: "Téléphonie",
			reset_missed_calls: "Réinitialiser",
			temperatures: "Températures",
			fans: "Ventilateurs",
			disks: "Stockage et RAID",
			storage: "Stockage",
			wifi: "Wi-Fi",
			devices: "Appareils",
			device_trackers: "Suivis d’appareils",
			total_devices: "Total",
			home_devices: "Connectés",
			away_devices: "Déconnectés",
			disabled_devices: "Désactivés",
			connected_devices_list: "Appareils connectés",
			away_devices_list: "Appareils déconnectés",
			download: "Téléchargement",
			latency: "Latence",
			excellent: "Excellent",
			correct: "Correcte",
			poor: "Mauvais",
			internet_status: "État Internet",
			freebox_model: "Modèle",
			source_type: "Type de source",
			mac: "MAC",
			ipv4: "IPv4",
			ipv6: "IPv6",
			connection_type: "Type de connexion",
			uptime: "Disponibilité",
			firmware_version: "Version du firmware",
			hardware_version: "Version du matériel",
			serial: "Numéro de série",
			upload: "Envoi",
			used_space: "Espace utilisé",
			missed_calls: "Appels manqués",
			raid: "RAID",
			healthy: "Sain",
			degraded: "Dégradé",
			reboot: "Redémarrer",
			no_device: "Sélectionnez un appareil Freebox dans le configurateur.",
			no_entities: "Aucune entité Freebox compatible trouvée.",
			unavailable: "Indisponible",
			language: "Langue",
			debug: "DEBUG",
		},
	};

	static FIELD_DEFAULTS = {
		name: "",
		language: "auto",
		section_order: ["internet", "system", "hardware", "telephony", "devices", "debug"],
		show_internet: true,
		show_system: true,
		show_hardware: true,
		show_telephony: true,
		show_devices: true,
		show_debug: false,
		show_header: true,
		show_card_background: true,
	};

	static getConfigElement() {
		return document.createElement("freebox-card-editor");
	}

	static getStubConfig() {
		return {};
	}

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this._debugGroupsOpen = { configuration: false, trackers: false };
		this._trackerListsOpen = { connected: false, away: false };
		this._deviceRegistry = [];
		this._entityRegistry = [];
		this._registryLoaded = false;
		this._registryLoading = false;
	}

	setConfig(config) {
		const source = config && typeof config === "object" ? config : {};
		const safeConfig = {};
		const stringFields = ["name", "device_id", "latency_entity", "download_bandwidth", "upload_bandwidth"];
		const booleanFields = ["show_internet", "show_system", "show_hardware", "show_telephony", "show_devices", "show_debug", "show_header", "show_card_background"];
		for (const key of stringFields)
			if (typeof source[key] === "string") safeConfig[key] = source[key].slice(0, 512);
		for (const key of booleanFields)
			if (typeof source[key] === "boolean") safeConfig[key] = source[key];
		if (["auto", "en", "fr"].includes(source.language)) safeConfig.language = source.language;
		const allowedSections = new Set(FreeboxCard.FIELD_DEFAULTS.section_order);
		if (Array.isArray(source.section_order))
			safeConfig.section_order = [...new Set(source.section_order.filter((key) => allowedSections.has(key)))];
		this._config = { ...FreeboxCard.FIELD_DEFAULTS, ...safeConfig };
		this._render();
	}

	set hass(hass) {
		this._hass = hass;
		this._loadRegistries();
		this._render();
	}

	getCardSize() {
		return 5;
	}

	_getLanguage() {
		const selected = this._config?.language;
		const language = selected && selected !== "auto"
			? selected
			: (this._hass?.locale?.language || this._hass?.language || "en").split("-")[0];
		return FreeboxCard.TRANSLATIONS[language] ? language : "en";
	}

	_t(key) {
		return FreeboxCard.TRANSLATIONS[this._getLanguage()][key] || FreeboxCard.TRANSLATIONS.en[key] || key;
	}

	_getSelectedDeviceId() {
		if (this._config?.device_id)
			return this._config.device_id;

		return getFreeboxDeviceIds(this._hass)[0] || "";
	}

	_getDeviceEntities() {
		if (!this._hass)
			return [];

		const configured = [];
		const selectedDeviceId = this._getSelectedDeviceId();
		const registry = this._hass.entities || {};
		const discovered = selectedDeviceId
			? Object.values(registry)
				.filter((entity) => entity.device_id === selectedDeviceId)
				.map((entity) => entity.entity_id)
			: [];

		return [...new Set([...configured, ...discovered])]
			.filter((entityId) => this._hass.states[entityId]);
	}

	async _loadRegistries() {
		if (!this._hass?.connection || this._registryLoaded || this._registryLoading)
			return;

		this._registryLoading = true;
		try {
			const [devices, entities] = await Promise.all([
				this._hass.connection.sendMessagePromise({ type: "config/device_registry/list" }),
				this._hass.connection.sendMessagePromise({ type: "config/entity_registry/list" }),
			]);
			this._deviceRegistry = Array.isArray(devices) ? devices : [];
			this._entityRegistry = Array.isArray(entities) ? entities : [];
			this._registryLoaded = true;
		} catch (error) {
			console.warn("[freebox-card] Unable to load Home Assistant registries", error);
		} finally {
			this._registryLoading = false;
			this._render();
		}
	}

	_getFreeboxConfigEntryIds() {
		const selectedDeviceId = this._getSelectedDeviceId();
		const devices = this._deviceRegistry.length
			? this._deviceRegistry
			: Object.values(this._hass?.devices || {});
		const selectedDevice = devices.find((device) => device.id === selectedDeviceId);
		const configEntryIds = new Set(selectedDevice?.config_entries || []);

		if (!configEntryIds.size) {
			for (const entity of this._entityRegistry.length ? this._entityRegistry : Object.values(this._hass?.entities || {})) {
				if (entity.platform !== "freebox" || !entity.device_id)
					continue;
				const device = devices.find((candidate) => candidate.id === entity.device_id);
				for (const configEntryId of device?.config_entries || [])
					configEntryIds.add(configEntryId);
			}
		}

		return configEntryIds;
	}

	_getIntegrationDeviceIds() {
		const configEntryIds = this._getFreeboxConfigEntryIds();
		const devices = this._deviceRegistry.length
			? this._deviceRegistry
			: Object.values(this._hass?.devices || {});
		return new Set(devices
			.filter((device) => (device.config_entries || []).some((configEntryId) => configEntryIds.has(configEntryId)))
			.map((device) => device.id));
	}

	_getIntegrationEntities() {
		if (!this._hass)
			return [];

		const integrationDeviceIds = this._getIntegrationDeviceIds();
		const merged = new Map();
		const addEntity = (entity) => {
			if (!entity?.entity_id)
				return;
			merged.set(entity.entity_id, { ...(merged.get(entity.entity_id) || {}), ...entity });
		};

		for (const entity of this._entityRegistry)
			if (entity.platform === "freebox" || integrationDeviceIds.has(entity.device_id))
				addEntity(entity);

		for (const entity of Object.values(this._hass.entities || {}))
			if (entity.platform === "freebox" || integrationDeviceIds.has(entity.device_id))
				addEntity(entity);

		for (const [entityId, state] of Object.entries(this._hass.states || {})) {
			const objectId = entityId.split(".", 2)[1] || "";
			const friendlyName = state.attributes?.friendly_name || "";
			if (objectId.startsWith("freebox_") || /(^|\s)freebox(\s|$)/i.test(friendlyName))
				addEntity({ entity_id: entityId, platform: "freebox", device_id: this._hass.entities?.[entityId]?.device_id || null });
		}

		return [...merged.values()].sort((a, b) => a.entity_id.localeCompare(b.entity_id));
	}

	_getIntegrationEntityIds() {
		return this._getIntegrationEntities()
			.map((entity) => entity.entity_id)
			.filter((entityId) => this._hass.states[entityId]);
	}

	_find(domain, terms) {

		const entities = this._getDeviceEntities();
		return entities.find((entityId) => {
			const state = this._hass.states[entityId];
			if (!state || !entityId.startsWith(`${domain}.`)) {
				return false;
			}
			const text = `${entityId} ${state.attributes.friendly_name || ""} ${state.attributes.device_class || ""}`.toLowerCase();
			return terms.some((term) => text.includes(term));
		});
	}

	_getSelectedDeviceInfo() {
		const selectedDeviceId = this._getSelectedDeviceId();
		if (!selectedDeviceId) return {};
		const devices = this._deviceRegistry.length
			? this._deviceRegistry
			: Object.values(this._hass?.devices || {});
		const device = devices.find((item) => item.id === selectedDeviceId);
		return { model: device?.model || "", hw_version: device?.hw_version || "" };
	}

	_getFreeboxModel() {
		const { model = "", hw_version = "" } = this._getSelectedDeviceInfo();

		const text = `${model} ${hw_version}`.toLowerCase();

		if (/\bv9\b/i.test(text)) return "Freebox Ultra";
		if (/\bv8\b/i.test(text)) return "Freebox Pop";
		if (/\bv7\b/i.test(text)) return "Freebox Delta";
		if (/\bv6\b/i.test(text)) return "Freebox Revolution";
		if (/mini/i.test(text)) return "Freebox mini 4K";

		return model || "Freebox";
	}

	_getInternetInfo() {
		const entities = this._getDeviceEntities();
		const info = {};
		const aliases = {
			source_type: ["source_type"],
			mac: ["mac"],
			ipv4: ["IPv4"],
			ipv6: ["IPv6"],
			connection_type: ["connection_type"],
			uptime: ["uptime"],
			firmware_version: ["firmware_version"],
			serial: ["serial"],
		};

		for (const entityId of entities) {
			const state = this._hass.states[entityId];
			if (!state)
				continue;

			for (const [key, keys] of Object.entries(aliases)) {
				if (info[key] !== undefined)
					continue;

				for (const attribute of keys) {
					const value = state.attributes?.[attribute];
					if (value !== undefined && value !== null && value !== "") {
						info[key] = value;
						break;
					}
				}
			}
		}

		return info;
	}

	_formatUptime(value) {
		const seconds = Number(value);
		if (!Number.isFinite(seconds) || seconds < 0)
			return "—";

		const days = Math.floor(seconds / 86400);
		const hours = Math.floor((seconds % 86400) / 3600);
		return `${days}d ${hours}h`;
	}

	_findWanStatus() {
		const candidates = this._getIntegrationEntityIds()
			.filter((entityId) => entityId.startsWith("sensor.") || entityId.startsWith("binary_sensor."))
			.map((entityId) => {
				const state = this._hass.states[entityId];
				const registry = this._getIntegrationEntities().find((entity) => entity.entity_id === entityId) || {};
				const text = [
					entityId,
					state?.attributes?.friendly_name,
					state?.attributes?.device_class,
					registry.name,
					registry.original_name,
				].filter(Boolean).join(" ").toLowerCase();
				let score = 0;
				if (/wan[_\s-]?status/.test(text)) score += 100;
				if (/état du réseau étendu|etat du reseau etendu|wide area network/.test(text)) score += 90;
				if (/\bwan\b/.test(text)) score += 60;
				if (/connectivity|connection|connexion|connected|online/.test(text)) score += 20;
				if (state?.attributes?.device_class === "connectivity") score += 30;
				return { entityId, score };
			})
			.filter((candidate) => candidate.score > 0)
			.sort((a, b) => b.score - a.score || a.entityId.localeCompare(b.entityId));

		return candidates[0]?.entityId;
	}

	_findMissedCalls() {
		const candidates = this._getIntegrationEntityIds().filter((entityId) => {
			if (!entityId.startsWith("sensor."))
				return false;
			const attributes = this._hass.states[entityId]?.attributes || {};
			return attributes.state_class === "measurement"
				&& String(attributes.unit_of_measurement || "").trim().toLowerCase() === "calls";
		});

		return candidates.find((id) => /missed|manque/i.test(`${id} ${this._hass.states[id]?.attributes?.friendly_name || ""}`))
			|| candidates[0];
	}

	_findMissedCallsReset() {
		const candidates = this._getIntegrationEntityIds().filter((id) => id.startsWith("button."));
		const text = (id) => `${id} ${this._hass.states[id]?.attributes?.friendly_name || ""}`.toLowerCase();

		return candidates.find((id) => /mark[_\s-]*calls?[_\s-]*(as[_\s-]*)?read/.test(text(id)))
			|| candidates.find((id) => /marquer[_\s-]*(les[_\s-]*)?appels?[_\s-]*(comme[_\s-]*)?lus?/.test(text(id)));
	}

	_resolveEntities() {
		return {
			download: this._find("sensor", ["download", "telechargement", "vitesse_d_envoi"]),
			upload: this._find("sensor", ["upload", "envoi", "vitesse_de_telechargement"]),
			latency: this._config?.latency_entity && this._hass.states[this._config.latency_entity] ? this._config.latency_entity : undefined,
			uptime: this._getIntegrationEntityIds().find((id) => id === "sensor.freebox_uptime" || /uptime|temps_de_fonctionnement/i.test(id)),
			hardwareTemperatures: this._getIntegrationEntityIds().filter((id) => {
				if (!id.startsWith("sensor."))
					return false;
				const state = this._hass.states[id];
				const text = `${id} ${state?.attributes?.friendly_name || ""} ${state?.attributes?.device_class || ""}`.toLowerCase();
				return state?.attributes?.device_class === "temperature" || /temperature|température|cpu/.test(text);
			}),
			hardwareFans: this._getIntegrationEntityIds().filter((id) => {
				if (!id.startsWith("sensor."))
					return false;
				const state = this._hass.states[id];
				const text = `${id} ${state?.attributes?.friendly_name || ""} ${state?.attributes?.unit_of_measurement || ""}`.toLowerCase();
				return /ventilateur|fan/.test(text) || state?.attributes?.unit_of_measurement === "rpm";
			}),
			hardwareStorage: this._getIntegrationEntityIds().filter((id) => {
				if (!id.startsWith("sensor.")) return false;
				const state = this._hass.states[id];
				const text = `${id} ${state?.attributes?.friendly_name || ""}`.toLowerCase();
				return /free[_\s-]?space|espace libre|disk space|storage/.test(text);
			}),
			hardwareRaid: this._getIntegrationEntityIds().filter((id) => {
				if (!id.startsWith("binary_sensor.")) return false;
				const state = this._hass.states[id];
				return /raid/.test(`${id} ${state?.attributes?.friendly_name || ""}`.toLowerCase());
			}),
			missedCalls: this._findMissedCalls(),
			missedCallsReset: this._findMissedCallsReset(),
			wifi: this._find("switch", ["wifi", "wi-fi"]),
			reboot: this._find("button", ["reboot", "restart", "redemarrer"]),
			wanStatus: this._findWanStatus(),
		};
	}

	_formatEntity(entityId, fallback = "—") {
		const state = this._hass?.states[entityId];
		if (!state || ["unknown", "unavailable"].includes(state.state)) {
			return fallback;
		}
		const value = Number(state.state);
		const formatted = Number.isFinite(value)
			? new Intl.NumberFormat(this._getLanguage(), { maximumFractionDigits: 1 }).format(value)
			: state.state;
		return `${formatted}${state.attributes.unit_of_measurement ? ` ${state.attributes.unit_of_measurement}` : ""}`;
	}

	_isValidEntityId(entityId) {
		return typeof entityId === "string" && /^[a-z0-9_]+\.[a-z0-9_]+$/.test(entityId);
	}
	_safeIcon(icon, fallback = "mdi:devices") {
		return typeof icon === "string" && /^mdi:[a-z0-9-]+$/.test(icon) ? icon : fallback;
	}
	_handleClick(event) {
		const entityId = event.currentTarget?.dataset?.entity;
		const action = event.currentTarget?.dataset?.action;
		if (!this._hass || !this._isValidEntityId(entityId) || !["reset_calls", "wifi", "toggle", "reboot"].includes(action))
			return;

		if (action === "reset_calls") {
			this._hass.callService("button", "press", { entity_id: entityId });
			return;
		}

		if (action === "wifi") {
			const wifiOn = this._hass.states[entityId]?.state === "on";
			const message = wifiOn ? this._t("confirm_wifi_off") : this._t("confirm_wifi_on");
			if (window.confirm(message))
				this._hass.callService("homeassistant", "toggle", { entity_id: entityId });
			return;
		}

		if (action === "toggle") {
			this._hass.callService("homeassistant", "toggle", { entity_id: entityId });
			return;
		}

		if (action === "reboot" && window.confirm(this._t("confirm_reboot_popup")))
			this._hass.callService("button", "press", { entity_id: entityId });
	}

	_getTrackerData(integrationEntities, integrationDeviceIds) {
		const stats = { total: 0, home: 0, away: 0, disabled: 0 };
		const connectedNames = [];
		const awayNames = [];
		const devices = this._deviceRegistry.length
			? this._deviceRegistry
			: Object.values(this._hass?.devices || {});
		const deviceById = new Map(devices.map((device) => [device.id, device]));
		const trackers = integrationEntities.filter((entity) => entity.entity_id.startsWith("device_tracker."));

		for (const entity of trackers) {
			const state = this._hass.states[entity.entity_id];
			const device = deviceById.get(entity.device_id);
			const disabled = Boolean(entity.disabled_by || device?.disabled_by);
			const name = state?.attributes?.friendly_name || entity.name || entity.original_name || entity.entity_id;
			stats.total += 1;
			if (disabled) {
				stats.disabled += 1;
			} else if (state?.state === "home") {
				stats.home += 1;
				connectedNames.push({ name, icon: this._safeIcon(state?.attributes?.icon) });
			} else {
				stats.away += 1;
				awayNames.push({ name, icon: this._safeIcon(state?.attributes?.icon) });
			}
		}

		if (this._deviceRegistry.length) {
			const devicesWithEntities = new Set(integrationEntities.map((entity) => entity.device_id).filter(Boolean));
			for (const deviceId of integrationDeviceIds) {
				if (devicesWithEntities.has(deviceId))
					continue;
				stats.total += 1;
				stats.disabled += 1;
			}
		}

		const sortNames = (a, b) => String(a.name).localeCompare(String(b.name), this._getLanguage(), { sensitivity: "base" });
		connectedNames.sort(sortNames);
		awayNames.sort(sortNames);
		return { stats, connectedNames, awayNames };
	}

	_render() {
		if (!this.shadowRoot || !this._config) {
			return;
		}
		// Preserve tracker list state before Home Assistant triggers a card re-render.
		this.shadowRoot.querySelectorAll("details[data-tracker-list]").forEach((element) => {
			this._trackerListsOpen[element.dataset.trackerList] = element.open;
		});

		const e = this._hass ? this._resolveEntities() : {};
		const internetInfo = this._hass ? this._getInternetInfo() : {};
		const selectedDeviceId = this._hass ? this._getSelectedDeviceId() : "";
		const entities = this._hass ? this._getDeviceEntities() : [];
		const integrationEntities = this._hass ? this._getIntegrationEntities() : [];
		const integrationDeviceIds = this._hass ? this._getIntegrationDeviceIds() : new Set();
		const integrationDevices = this._deviceRegistry.filter((device) => integrationDeviceIds.has(device.id));
		const trackerData = this._hass
			? this._getTrackerData(integrationEntities, integrationDeviceIds)
			: { stats: { total: 0, home: 0, away: 0, disabled: 0 }, connectedNames: [], awayNames: [] };
		const trackerStats = trackerData.stats;
		const defaultSectionOrder = ["internet", "system", "hardware", "telephony", "devices", "debug"];
		const configuredOrder = Array.isArray(this._config.section_order) ? this._config.section_order : [];
		const sectionOrder = [...new Set([...configuredOrder, ...defaultSectionOrder])].filter((key) => defaultSectionOrder.includes(key));
		const sections = {
			internet: () => this._config.show_internet && (e.download || e.upload || e.latency) ? this._internetSection(e, internetInfo) : "",
			system: () => this._config.show_system ? this._systemInfoSection(e, internetInfo) : "",
			hardware: () => this._config.show_hardware ? this._hardwareSection(e) : "",
			telephony: () => this._config.show_telephony ? this._telephonySection(e) : "",
			devices: () => this._config.show_devices && trackerStats.total ? this._deviceTrackersSection(trackerStats, trackerData.connectedNames, trackerData.awayNames) : "",
			debug: () => this._config.show_debug ? this._debugSection(integrationEntities, integrationDevices) : "",
		};

		this.shadowRoot.innerHTML = `
			<style>${this._styles()}</style>
			<ha-card class="${this._config.show_card_background ? "" : "no-card-background"}" style="--freebox-accent:var(--primary-color)">
				${this._config.show_header ? `<header><div class="brand-icon"><ha-icon icon="mdi:router-wireless"></ha-icon></div><h2>${this._escape(this._config.name || this._t("name"))}</h2></header>` : ""}
				${!selectedDeviceId && !entities.length ? `<div class="empty"><ha-icon icon="mdi:router-wireless-settings"></ha-icon>${this._t("no_device")}</div>` : ""}
				${selectedDeviceId && !entities.length ? `<div class="empty"><ha-icon icon="mdi:alert-circle-outline"></ha-icon>${this._t("no_entities")}</div>` : ""}
				<div class="content">${sectionOrder.map((key) => sections[key]()).join("")}</div>
			</ha-card>`;

		this.shadowRoot.querySelectorAll("[data-action]").forEach((element) => {
			element.addEventListener("click", (event) => this._handleClick(event));
		});

		this.shadowRoot.querySelectorAll("[data-debug-export]").forEach((element) => {
			element.addEventListener("click", (event) => {
				event.preventDefault();
				event.stopPropagation();
				this._exportDebugGroup(element.dataset.debugExport);
			});
		});

		this.shadowRoot.querySelectorAll("[data-more-info]").forEach((element) => {
			element.addEventListener("click", () => {
				const entityId = element.dataset.moreInfo;
				if (!this._isValidEntityId(entityId)) return;
				this.dispatchEvent(new CustomEvent("hass-more-info", {
					detail: { entityId },
					bubbles: true,
					composed: true,
				}));
			});
		});

		this.shadowRoot.querySelectorAll("details[data-debug-group]").forEach((element) => {
			element.addEventListener("toggle", () => {
				this._debugGroupsOpen[element.dataset.debugGroup] = element.open;
			});
		});

		this.shadowRoot.querySelectorAll("details[data-tracker-list]").forEach((element) => {
			element.addEventListener("toggle", () => {
				this._trackerListsOpen[element.dataset.trackerList] = element.open;
			});
		});
	}

	_formatSpeed(entityId) {
		const state = this._hass.states[entityId];
		const raw = Number.parseFloat(state?.state);
		if (!Number.isFinite(raw))
			return this._t("unavailable");

		const unit = state.attributes.unit_of_measurement || "Mbit/s";
		if (/gb/i.test(unit))
			return `${raw.toFixed(2)} Gb/s`;
		if (/kb/i.test(unit))
			return `${(raw / 1000).toFixed(2)} Mbit/s`;
		if (raw >= 1000)
			return `${(raw / 1000).toFixed(2)} Gb/s`;
		return `${raw.toFixed(2)} Mbit/s`;
	}

	_speedMetric(entityId, type) {
		if (!entityId)
			return "";
		const state = this._hass.states[entityId];
		const raw = Number.parseFloat(state?.state);
		const speed = Number.isFinite(raw) ? Math.max(0, raw) : 0;
		const configuredMaximum = Number.parseFloat(
			type === "download" ? this._config?.download_bandwidth : this._config?.upload_bandwidth
		);
		const hasConfiguredMaximum = Number.isFinite(configuredMaximum) && configuredMaximum > 0;
		const percent = hasConfiguredMaximum ? Math.min((speed / configuredMaximum) * 100, 100) : 0;
		let color = type === "download" ? "#2196f3" : "#4caf50";
		if (hasConfiguredMaximum && percent >= 80)
			color = "#f44336";
		else if (hasConfiguredMaximum && percent >= 50)
			color = "#ff9800";
		const subtitle = hasConfiguredMaximum
			? `${percent.toFixed(2)} % ${this._getLanguage() === "fr" ? "de" : "of"} ${configuredMaximum >= 1000 ? `${(configuredMaximum / 1000).toFixed(configuredMaximum % 1000 === 0 ? 0 : 1)} Gb/s` : `${configuredMaximum} Mbit/s`}`
			: "";
		return this._internetMetric(entityId, type === "download" ? "mdi:arrow-down" : "mdi:arrow-up", color, this._formatSpeed(entityId), subtitle, type, percent);
	}

	_latencyMetric(entityId) {
		if (!entityId)
			return "";
		const raw = Number.parseFloat(this._hass.states[entityId]?.state);
		const latency = Number.isFinite(raw) ? Math.max(0, raw) : 0;
		const percent = Math.min((latency / 100) * 100, 100);
		let color = "#8B5CF6";
		let quality = this._t("excellent");
		if (latency > 30) {
			color = "#EF4444";
			quality = this._t("poor");
		} else if (latency > 10) {
			color = "#F59E0B";
			quality = this._t("correct");
		}
		const value = Number.isFinite(raw) ? `${raw.toFixed(1)} ms` : this._t("unavailable");
		return this._internetMetric(entityId, "mdi:pulse", color, value, Number.isFinite(raw) ? quality : "", "latency", percent);
	}

	_internetMetric(entityId, icon, color, value, subtitle, type, forcedPercent) {
		const raw = Number.parseFloat(this._hass.states[entityId]?.state);
		const animationDuration = 1800;
		const animationDelay = -((performance.now ? performance.now() : Date.now()) % animationDuration);
		const maximum = type === "download" ? 10000 : type === "upload" ? 900 : 100;
		const percent = forcedPercent ?? Math.min((Number.isFinite(raw) ? Math.max(0, raw) : 0) / maximum * 100, 100);
		const radius = 16;
		const circumference = 2 * Math.PI * radius;
		const offset = circumference * (1 - percent / 100);
		return `<button type="button" class="internet-metric ${type}" data-more-info="${this._escape(entityId)}">
			<svg viewBox="0 0 40 40" aria-hidden="true">
				<circle cx="20" cy="20" r="${radius}" class="metric-track"></circle>
				<circle cx="20" cy="20" r="${radius}" class="metric-value" style="stroke:${color};stroke-dasharray:${circumference};stroke-dashoffset:${offset}"></circle>
			</svg>
			<span class="metric-icon"><ha-icon icon="${icon}" style="color:${color};--metric-animation-delay:${animationDelay}ms"></ha-icon></span>
			<div class="metric-copy ${subtitle ? "" : "single-value"}"><strong>${this._escape(value)}</strong>${subtitle ? `<small>${this._escape(subtitle)}</small>` : ""}</div>
		</button>`;
	}

	_internetSection(e, info) {
		const latencyMetric = this._latencyMetric(e.latency);
		const metrics = [
			this._speedMetric(e.download, "download"),
			this._speedMetric(e.upload, "upload"),
			latencyMetric,
		].filter(Boolean).join("");
		const metricsClass = latencyMetric ? "internet-metrics" : "internet-metrics no-latency";
		return `<section class="panel internet-panel">
			<div class="section-title"><ha-icon icon="mdi:speedometer"></ha-icon>${this._t("internet")}</div>
			${metrics ? `<div class="${metricsClass}">${metrics}</div>` : ""}
		</section>`;
	}

	_systemInfoSection(e, info) {
		const wanState = e.wanStatus ? this._hass.states[e.wanStatus]?.state : undefined;
		const normalizedWanState = String(wanState || "").trim().toLowerCase();
		const wanOnline = ["connected", "on", "online", "home", "up", "ok", "true", "1", "connecté", "connecte", "en ligne"].includes(normalizedWanState);
		const details = [
			[wanOnline ? "mdi:check-circle" : "mdi:alert-circle", "internet_status", e.wanStatus ? (wanOnline ? this._t("connected") : this._t("offline")) : undefined, wanOnline ? "success" : "danger"],
			["mdi:router-wireless", "freebox_model", this._getFreeboxModel()],
			["mdi:memory", "hardware_version", this._getSelectedDeviceInfo().hw_version],
			["mdi:chip", "firmware_version", info.firmware_version],
			["mdi:barcode", "serial", info.serial],
			["mdi:wan", "connection_type", info.connection_type],
			["mdi:source-branch", "source_type", info.source_type],
			["mdi:identifier", "mac", info.mac],
			["mdi:ip-network-outline", "ipv4", info.ipv4],
			["mdi:ip-network", "ipv6", info.ipv6],
			["mdi:clock-outline", "uptime", e.uptime ? this._formatUptime(this._hass.states[e.uptime]?.state) : (info.uptime !== undefined ? this._formatUptime(info.uptime) : undefined)],
		].filter(([, , value]) => value !== undefined && value !== null && value !== "");

		if (!details.length)
			return "";

		const systemActions = `<span class="system-actions">
			${e.wifi ? `<button type="button" class="system-action wifi ${this._hass.states[e.wifi]?.state === "on" ? "active" : ""}" data-action="wifi" data-entity="${this._escape(e.wifi)}" title="${this._t("wifi")}" aria-label="${this._t("wifi")}"><ha-icon icon="${this._hass.states[e.wifi]?.state === "on" ? "mdi:wifi" : "mdi:wifi-off"}"></ha-icon></button>` : ""}
			${e.reboot ? `<button type="button" class="system-action reboot-action" data-action="reboot" data-entity="${this._escape(e.reboot)}" title="${this._t("reboot")}" aria-label="${this._t("reboot")}"><ha-icon icon="mdi:restart"></ha-icon></button>` : ""}
		</span>`;
		return `<section class="panel detail-panel system-info-panel">
			<div class="section-title system-title"><span><ha-icon icon="mdi:server"></ha-icon>${this._t("system")}</span>${systemActions}</div>
			${details.map(([icon, key, value, tone]) => this._detail(icon, this._t(key), String(value), tone)).join("")}
		</section>`;
	}

	_hardwareSection(e) {
		const isAvailable = (entityId) => {
			const state = this._hass.states[entityId]?.state;
			return state && !["unknown", "unavailable"].includes(state);
		};
		const sortEntities = (ids) => [...ids].sort((a, b) => {
			const aName = this._hass.states[a]?.attributes?.friendly_name || a;
			const bName = this._hass.states[b]?.attributes?.friendly_name || b;
			return aName.localeCompare(bName, this._getLanguage(), { sensitivity: "base" });
		});
		const temperatures = sortEntities((e.hardwareTemperatures || []).filter(isAvailable));
		const fans = sortEntities((e.hardwareFans || []).filter(isAvailable));
		const storage = sortEntities((e.hardwareStorage || []).filter(isAvailable));
		const raid = sortEntities((e.hardwareRaid || []).filter(isAvailable));
		if (!temperatures.length && !fans.length && !storage.length && !raid.length) return "";

		return `<section class="panel detail-panel hardware-panel">
			<div class="section-title"><ha-icon icon="mdi:memory"></ha-icon>${this._t("hardware")}</div>
			${storage.length || raid.length ? this._hardwareGroup(this._t("disks"), "mdi:harddisk", [...storage.map((id) => this._hardwareTile(id, "storage")), ...raid.map((id) => this._hardwareTile(id, "raid"))].join("")) : ""}
			${fans.length ? this._hardwareGroup(this._t("fans"), "mdi:fan", fans.map((id) => this._hardwareTile(id, "fan")).join("")) : ""}
			${temperatures.length ? this._hardwareGroup(this._t("temperatures"), "mdi:thermometer", temperatures.map((id) => this._hardwareTile(id, "temperature")).join("")) : ""}
		</section>`;
	}

	_hardwareGroup(title, icon, tiles) {
		return `<div class="hardware-group"><div class="hardware-group-title"><ha-icon icon="${icon}"></ha-icon>${title}</div><div class="hardware-grid">${tiles}</div></div>`;
	}

	_hardwareTile(entityId, type) {
		const state = this._hass.states[entityId];
		if (!state) return "";
		const friendlyName = state.attributes.friendly_name || entityId;
		const label = friendlyName.replace(/^Freebox\s*/i, "") || friendlyName;
		const raw = Number.parseFloat(state.state);
		const isTemperature = type === "temperature";
		const isFan = type === "fan";
		const isRaid = type === "raid";
		const isStorage = type === "storage";
		const degraded = isRaid && state.state === "on";
		const fanAnimationDuration = 2400;
		const fanAnimationDelay = -((performance.now ? performance.now() : Date.now()) % fanAnimationDuration);
		if (isRaid) {
			const color = degraded ? "#ef4444" : "#4caf50";
			const icon = degraded ? "mdi:alert-circle-outline" : "mdi:shield-check-outline";
			const value = degraded ? this._t("degraded") : this._t("healthy");
			return `<button type="button" class="hardware-tile raid raid-status ${degraded ? "degraded" : "healthy"}" data-more-info="${this._escape(entityId)}" style="--raid-color:${color}"><span class="raid-marker"><ha-icon icon="${icon}"></ha-icon></span><div class="raid-copy"><small>${this._t("raid")}</small><strong>${this._escape(value)}</strong></div></button>`;
		}
		const color = isTemperature ? (raw >= 80 ? "#ef4444" : raw >= 60 ? "#f59e0b" : "var(--freebox-accent)") : isFan ? "#42a5f5" : "#8b5cf6";
		const maximum = isTemperature ? 100 : isFan ? Math.max(2500, raw || 0) : 100;
		const sourcePercent = Number.isFinite(raw) ? Math.min(Math.max(raw / maximum * 100, 0), 100) : 0;
		const percent = isStorage ? 100 - sourcePercent : sourcePercent;
		const radius = 17;
		const circumference = 2 * Math.PI * radius;
		const offset = circumference * (1 - percent / 100);
		const icon = isTemperature ? "mdi:thermometer" : isFan ? "mdi:fan" : "mdi:harddisk";
		const usedValue = isStorage && Number.isFinite(raw) ? 100 - raw : undefined;
		const unit = state.attributes.unit_of_measurement || "%";
		const value = isStorage
			? `${new Intl.NumberFormat(this._getLanguage(), { maximumFractionDigits: 1 }).format(Math.max(0, Math.min(100, usedValue ?? 0)))} ${unit}`
			: this._formatEntity(entityId);
		const description = isStorage ? this._t("used_space") : label;
		const fanStyle = isFan ? ` style="--hardware-fan-delay:${fanAnimationDelay}ms"` : "";
		return `<button type="button" class="hardware-tile ${type}" data-more-info="${this._escape(entityId)}"><div class="hardware-gauge"><svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="${radius}" class="hardware-track"></circle><circle cx="22" cy="22" r="${radius}" class="hardware-value" style="stroke:${color};stroke-dasharray:${circumference};stroke-dashoffset:${offset}"></circle></svg><ha-icon icon="${icon}" style="color:${color};--hardware-fan-delay:${fanAnimationDelay}ms"></ha-icon></div><strong>${this._escape(value)}</strong><span title="${this._escape(description)}">${this._escape(description)}</span></button>`;
	}

	_telephonySection(e) {
		if (!e.missedCalls)
			return "";

		const raw = Number.parseInt(this._hass.states[e.missedCalls]?.state, 10);
		const known = Number.isFinite(raw);
		const count = known ? Math.max(0, raw) : 0;
		const hasCalls = known && count > 0;
		const value = known ? new Intl.NumberFormat(this._getLanguage()).format(count) : this._t("unavailable");
		const resetLabel = this._escape(this._t("reset_missed_calls"));
		const resetButton = e.missedCallsReset
			? `<button type="button" class="reset-calls" data-action="reset_calls" data-entity="${this._escape(e.missedCallsReset)}" title="${resetLabel}" aria-label="${resetLabel}"${hasCalls ? "" : " disabled"}><ha-icon icon="mdi:phone-check"></ha-icon>${resetLabel}</button>`
			: "";
		return `<section class="panel detail-panel telephony-panel">
			<div class="section-title"><ha-icon icon="mdi:phone"></ha-icon>${this._t("telephony")}</div>
			<div class="telephony-row${resetButton ? "" : " no-reset"}">
				<button type="button" class="call-metric${hasCalls ? " has-calls" : ""}" data-more-info="${this._escape(e.missedCalls)}"><ha-icon icon="mdi:phone-missed"></ha-icon><div><strong>${this._escape(value)}</strong><span>${this._t("missed_calls")}</span></div></button>
				${resetButton}
			</div>
		</section>`;
	}

	_deviceTrackersSection(stats, connectedNames, awayNames = []) {
		const metrics = [
			["mdi:home", "home_devices", stats.home, "home"],
			["mdi:map-marker-radius", "away_devices", stats.away, "away"],
			["mdi:cancel", "disabled_devices", stats.disabled, "disabled"],
			["mdi:devices", "total_devices", stats.total, "total"],
		];
		const renderList = (key, titleKey, names, count, itemClass = "") => names.length
			? `<details class="connected-devices-list ${itemClass}" data-tracker-list="${key}"${this._trackerListsOpen[key] ? " open" : ""}><summary><span><ha-icon icon="mdi:format-list-bulleted"></ha-icon>${this._t(titleKey)}<em class="connected-count">${count}</em></span></summary><div class="connected-device-names">${names.map((item) => `<div><ha-icon icon="${this._escape(this._safeIcon(item.icon))}"></ha-icon><span>${this._escape(item.name)}</span></div>`).join("")}</div></details>`
			: "";
		const connectedList = renderList("connected", "connected_devices_list", connectedNames, `${stats.home} / ${stats.home + stats.away}`);
		const awayList = renderList("away", "away_devices_list", awayNames, `${awayNames.length} / ${stats.home + stats.away}`, "away-devices-list");
		return `<section class="panel detail-panel trackers-panel">
			<div class="section-title"><ha-icon icon="mdi:devices"></ha-icon>${this._t("device_trackers")}</div>
			<div class="tracker-metrics">
				${metrics.map(([icon, key, value, tone]) => `<div class="tracker-metric ${tone}"><ha-icon icon="${icon}"></ha-icon><div><strong>${value}</strong><span>${this._t(key)}</span></div></div>`).join("")}
			</div>
			${connectedList}
			${awayList}
		</section>`;
	}

	_detail(icon, label, value, tone = "") {
		const toneClass = tone === true ? "danger" : tone;
		const iconClass = toneClass === "danger" ? "danger" : "";
		return `<div class="detail ${toneClass}"><ha-icon icon="${icon}" class="${iconClass}"></ha-icon><span>${label}</span><strong class="${toneClass}">${this._escape(value)}</strong></div>`;
	}

	_getDebugExportEntities(group) {
		const entities = this._getIntegrationEntities();
		if (group === "trackers")
			return entities.filter((entity) => entity.entity_id.startsWith("device_tracker."));

		const selectedDeviceId = this._getSelectedDeviceId();
		const mainFreeboxTracker = entities.find((entity) =>
			entity.entity_id.startsWith("device_tracker.") && entity.device_id === selectedDeviceId
		);
		return entities.filter((entity) =>
			!entity.entity_id.startsWith("device_tracker.") || entity.entity_id === mainFreeboxTracker?.entity_id
		);
	}

	_exportDebugGroup(group) {
		if (!["configuration", "trackers"].includes(group)) return;
		const entities = this._getDebugExportEntities(group);
		const lines = [];
		for (const entity of entities) {
			const state = this._hass.states[entity.entity_id];
			const disabled = Boolean(entity.disabled_by);
			lines.push(`[${entity.entity_id}]`);
			lines.push(`state: ${disabled ? "Disabled" : (state?.state ?? "Unavailable")}`);
			if (state) {
				for (const [key, value] of Object.entries(state.attributes || {}).sort(([a], [b]) => a.localeCompare(b)))
					lines.push(`${key}: ${typeof value === "object" ? JSON.stringify(value) : String(value)}`);
			}
			lines.push("");
		}
		const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `freebox-debug-${group}-${new Date().toISOString().replace(/[:.]/g, "-")}.txt`;
		link.click();
		setTimeout(() => URL.revokeObjectURL(url), 0);
	}

	_debugSection(entities, devices) {
		if (!entities.length && !devices.length)
			return "";

		const selectedDeviceId = this._getSelectedDeviceId();
		const mainFreeboxTracker = entities.find((entity) =>
			entity.entity_id.startsWith("device_tracker.") &&
			entity.device_id === selectedDeviceId
		);
		const configurationEntities = entities
			.filter((entity) =>
				!entity.entity_id.startsWith("device_tracker.") ||
				entity.entity_id === mainFreeboxTracker?.entity_id
			)
			.sort((a, b) => a.entity_id.localeCompare(b.entity_id));
		const trackerEntities = entities
			.filter((entity) => entity.entity_id.startsWith("device_tracker."))
			.sort((a, b) => {
				const enabledOrder = Number(Boolean(a.disabled_by)) - Number(Boolean(b.disabled_by));
				if (enabledOrder !== 0)
					return enabledOrder;

				const aName = this._hass.states[a.entity_id]?.attributes?.friendly_name || a.name || a.original_name || a.entity_id;
				const bName = this._hass.states[b.entity_id]?.attributes?.friendly_name || b.name || b.original_name || b.entity_id;
				return String(aName).localeCompare(String(bName), this._getLanguage(), { sensitivity: "base" });
			});
		const totalDevices = trackerEntities.length;
		const enabledDevices = trackerEntities.filter((entity) => !entity.disabled_by).length;
		const disabledDevices = trackerEntities.filter((entity) => Boolean(entity.disabled_by)).length;
		const renderEntity = (entity) => {
			const entityId = entity.entity_id;
			const state = this._hass.states[entityId];
			const disabled = Boolean(entity.disabled_by);
			const value = disabled
				? "Disabled"
				: (state ? this._formatEntity(entityId, this._t("unavailable")) : this._t("unavailable"));
			const attributes = state
				? Object.entries(state.attributes || {})
					.sort(([a], [b]) => a.localeCompare(b))
					.map(([key, attributeValue]) => {
						const formatted = typeof attributeValue === "object" ? JSON.stringify(attributeValue) : String(attributeValue);
						return `<div class="debug-attribute"><code>${this._escape(key)}</code><span>${this._escape(formatted)}</span></div>`;
					}).join("")
				: "";

			return `<div class="debug-entity">
				<div class="debug-row"><code>${this._escape(entityId)}</code><strong class="${disabled ? "disabled" : ""}">${this._escape(value)}</strong></div>
				${attributes ? `<div class="debug-attributes">${attributes}</div>` : ""}
			</div>`;
		};
		const renderGroup = (key, title, icon, groupEntities, counters = "", showDefaultCount = true) => {
			if (!groupEntities.length)
				return "";
			const open = Boolean(this._debugGroupsOpen[key]);
			const defaultCount = showDefaultCount ? `<small>${groupEntities.length}</small>` : "";
			return `<details class="debug-group" data-debug-group="${key}" ${open ? "open" : ""}>
				<summary><span><ha-icon icon="${icon}"></ha-icon>${title}${defaultCount}${counters}</span><span class="debug-summary-actions"><button type="button" class="debug-export" data-debug-export="${key}" title="Save as text file" aria-label="Save ${title} as text file"><ha-icon icon="mdi:content-save-outline"></ha-icon></button><span class="debug-chevron" aria-hidden="true"></span></span></summary>
				<div class="debug-group-content">${groupEntities.map(renderEntity).join("")}</div>
			</details>`;
		};

		const trackerCounters = `<span class="tracker-count total" title="Total devices">${totalDevices}</span><span class="tracker-count enabled" title="Connected or disconnected devices">${enabledDevices}</span><span class="tracker-count disabled" title="Disabled devices">${disabledDevices}</span>`;
		return `<section class="panel debug-panel">
			<div class="section-title"><ha-icon icon="mdi:bug-outline"></ha-icon>${this._t("debug")}</div>
			<div class="debug-list">
				${renderGroup("configuration", "Configuration", "mdi:cog-outline", configurationEntities)}
				${renderGroup("trackers", "Device trackers", "mdi:devices", trackerEntities, trackerCounters, false)}
			</div>
		</section>`;
	}

	_escape(value) {
		return String(value ?? "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
	}

	_styles() {
		return `
			:host { display:block; }
			ha-card { position:relative; overflow:hidden; padding:20px; color:var(--primary-text-color); background:var(--ha-card-background, var(--card-background-color)); }
			ha-card.no-card-background { padding:0; background:transparent; border:0; box-shadow:none; }
			header { display:flex; align-items:center; gap:10px; margin-bottom:20px; }
			.brand-icon { display:flex; align-items:center; justify-content:center; width:44px; height:44px; flex:0 0 44px; border:1px solid var(--divider-color); border-radius:14px; color:var(--freebox-accent); background:var(--secondary-background-color); }
			.brand-icon ha-icon { --mdc-icon-size:24px; }
			h2 { flex:1; min-width:0; margin:0; overflow:hidden; text-overflow:ellipsis; font-size:1.2em; font-weight:600; line-height:1.2; white-space:nowrap; }
			.system-title { justify-content:space-between; }
			.system-title > span { display:flex; align-items:center; gap:8px; }
			.system-actions { display:flex; align-items:center; gap:6px; margin-left:auto; }
			.system-action { display:flex; align-items:center; justify-content:center; width:28px; height:28px; padding:0; border:1px solid var(--divider-color); border-radius:9px; color:#8a8a8a; background:rgba(128,128,128,.08); }
			.system-action ha-icon { --mdc-icon-size:17px; }
			.system-action.wifi.active { color:#00b8e6; border-color:#00b8e6; background:rgba(0,184,230,.12); }
			.system-action.wifi:not(.active) { color:#8a8a8a; border-color:var(--divider-color); background:rgba(128,128,128,.08); }
			.system-action.reboot-action { color:var(--freebox-accent); }
			.content { display:grid; gap:12px; }
			.panel { border:1px solid var(--divider-color); border-radius:16px; background:color-mix(in srgb, var(--secondary-background-color) 72%, transparent); }
			.internet-panel, .detail-panel { padding:15px; }
			.section-title { display:flex; align-items:center; gap:8px; margin-bottom:13px; color:var(--secondary-text-color); font-size:12px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; }
			.section-title ha-icon { --mdc-icon-size:18px; color:var(--freebox-accent); }
			.internet-metrics { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px; }
			.internet-metrics.no-latency { grid-template-columns:repeat(2,minmax(0,1fr)); }
			.internet-metric { position:relative; display:grid; grid-template-columns:40px minmax(0,1fr); grid-template-rows:min-content min-content; column-gap:8px; align-items:center; min-width:0; padding:7px 8px; border:1px solid var(--divider-color); border-radius:12px; color:var(--primary-text-color); background:var(--card-background-color); font:inherit; text-align:left; }
			.internet-metric svg { grid-row:1 / 3; width:40px; height:40px; transform:rotate(-90deg); }
			.metric-icon { position:absolute; left:8px; top:50%; display:flex; align-items:center; justify-content:center; width:40px; height:40px; transform:translateY(-50%); pointer-events:none; }
			.metric-icon ha-icon { display:block; width:16px; height:16px; --mdc-icon-size:16px; will-change:transform,opacity; }
			.metric-track, .metric-value { fill:none; stroke-width:4; }
			.metric-track { stroke:var(--divider-color); }
			.metric-value { stroke-linecap:round; transition:stroke-dashoffset .6s ease,stroke .3s ease; }
			.metric-copy { min-width:0; }
			.metric-copy.single-value { grid-row:1 / 3; align-self:center; }
			.internet-metric.latency .metric-copy { align-self:center; }
			.metric-copy strong, .metric-copy small { display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
			.metric-copy strong { font-size:13px; font-weight:600; }
			.metric-copy small { margin-top:2px; color:var(--secondary-text-color); font-size:9px; }
			.internet-metric.download .metric-icon ha-icon { animation:downloadFlow 1.8s infinite cubic-bezier(.45,0,.55,1); animation-delay:var(--metric-animation-delay,0ms); }
			.internet-metric.upload .metric-icon ha-icon { animation:uploadFlow 1.8s infinite cubic-bezier(.45,0,.55,1); animation-delay:var(--metric-animation-delay,0ms); }
			.internet-metric.latency .metric-icon ha-icon { animation:latencyPulse 1.8s infinite cubic-bezier(.4,0,.2,1); animation-delay:var(--metric-animation-delay,0ms); }
			@keyframes downloadFlow { 0%,100% { transform:translateY(-1.5px); } 50% { transform:translateY(1.5px); } }
			@keyframes uploadFlow { 0%,100% { transform:translateY(1.5px); } 50% { transform:translateY(-1.5px); } }
			@keyframes latencyPulse { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(1.18); opacity:.72; } }
			@media (prefers-reduced-motion: reduce) { .internet-metric .metric-icon ha-icon { animation:none; } }

			.upload polyline { opacity:.65; }
			.hardware-group + .hardware-group { margin-top:14px; padding-top:12px; border-top:1px solid var(--divider-color); }
			.hardware-group-title { display:flex; align-items:center; gap:6px; margin-bottom:8px; color:var(--secondary-text-color); font-size:10px; font-weight:700; letter-spacing:.05em; text-transform:uppercase; }
			.hardware-group-title ha-icon { --mdc-icon-size:15px; color:var(--freebox-accent); }
			.hardware-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(105px,1fr)); gap:8px; }
			.hardware-tile { display:grid; grid-template-columns:44px minmax(0,1fr); grid-template-rows:auto auto; align-items:center; column-gap:8px; min-width:0; padding:8px; border:1px solid var(--divider-color); border-radius:12px; color:var(--primary-text-color); background:var(--card-background-color); font:inherit; text-align:left; }
			.hardware-tile.raid-status { display:grid; grid-template-columns:32px minmax(0,1fr); grid-template-rows:auto; align-items:center; gap:8px; min-height:44px; border-color:var(--divider-color); background:var(--card-background-color); }
			.raid-marker { display:flex; align-items:center; justify-content:center; width:32px; height:32px; color:var(--raid-color); }
			.raid-marker ha-icon { --mdc-icon-size:21px; }
			.raid-copy { display:grid; min-width:0; gap:1px; }
			.raid-copy small { color:var(--secondary-text-color); font-size:9px; font-weight:600; letter-spacing:.05em; text-transform:uppercase; }
			.raid-copy strong { color:var(--raid-color); font-size:13px; }
			.hardware-gauge { position:relative; grid-row:1 / 3; width:44px; height:44px; }
			.hardware-gauge svg { width:44px; height:44px; transform:rotate(-90deg); }
			.hardware-gauge ha-icon { position:absolute; left:50%; top:50%; --mdc-icon-size:18px; transform:translate(-50%,-50%); }
			.hardware-track, .hardware-value { fill:none; stroke-width:4; }
			.hardware-track { stroke:var(--divider-color); }
			.hardware-value { stroke-linecap:round; transition:stroke-dashoffset .4s ease,stroke .3s ease; }
			.hardware-tile strong { min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:13px; }
			.hardware-tile span { min-width:0; overflow:hidden; color:var(--secondary-text-color); text-overflow:ellipsis; white-space:nowrap; font-size:10px; }
			.hardware-tile.fan .hardware-gauge ha-icon { animation:hardwareFanSpin 2.4s linear infinite; animation-delay:var(--hardware-fan-delay,0ms); will-change:transform; }
			@keyframes hardwareFanSpin { from { transform:translate(-50%,-50%) rotate(0deg); } to { transform:translate(-50%,-50%) rotate(360deg); } }
			@media (prefers-reduced-motion: reduce) { .hardware-tile.fan .hardware-gauge ha-icon { animation:none; } }
			.secondary-grid { display:grid; grid-template-columns:1fr; gap:12px; }
			.mini { display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:11px; min-height:66px; padding:12px; }
			.mini-icon { display:grid; place-items:center; width:39px; height:39px; border-radius:12px; color:var(--secondary-text-color); background:var(--secondary-background-color); }
			.mini-icon.active { color:var(--freebox-accent); background:color-mix(in srgb, var(--freebox-accent) 13%, transparent); }
			.mini span { display:block; color:var(--secondary-text-color); font-size:12px; }
			.mini strong { display:block; margin-top:2px; font-size:18px; }
			.split { display:grid; gap:3px; text-align:right; color:var(--secondary-text-color); }
			.interactive, button { cursor:pointer; }
			.detail { display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:9px; padding:9px 0; }
			.detail + .detail { border-top:1px solid var(--divider-color); }
			.detail ha-icon { --mdc-icon-size:19px; color:var(--secondary-text-color); }
			.detail ha-icon.danger { color:var(--error-color); }
			.detail strong.success { color:#43a047; }
			.detail strong.danger { color:#e53935; }
			.detail span { color:var(--secondary-text-color); font-size:13px; }
			.detail strong { font-size:13px; }
			.telephony-row { display:grid; grid-template-columns:minmax(0,1fr) auto; gap:8px; align-items:stretch; }
			.telephony-row.no-reset { grid-template-columns:minmax(0,1fr); }
			.call-metric { display:grid; grid-template-columns:32px minmax(0,1fr); align-items:center; gap:7px; min-width:0; padding:9px; border:1px solid var(--divider-color); border-radius:12px; color:var(--primary-text-color); background:var(--card-background-color); font:inherit; text-align:left; }
			.call-metric ha-icon { --mdc-icon-size:19px; color:var(--secondary-text-color); }
			.call-metric > div { min-width:0; }
			.call-metric strong, .call-metric span { display:block; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
			.call-metric strong { font-size:16px; line-height:1.1; }
			.call-metric span { margin-top:3px; color:var(--secondary-text-color); font-size:9px; }
			.call-metric.has-calls ha-icon, .call-metric.has-calls strong { color:#f59e0b; }
			.reset-calls { display:flex; align-items:center; justify-content:center; gap:6px; padding:0 14px; border:1px solid var(--divider-color); border-radius:12px; color:var(--primary-text-color); background:var(--card-background-color); font:inherit; font-size:12px; font-weight:600; }
			.reset-calls ha-icon { --mdc-icon-size:17px; color:var(--freebox-accent); }
			.reset-calls:disabled { opacity:.45; cursor:default; }
			.tracker-metrics { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:8px; }
			.tracker-metric { display:grid; grid-template-columns:20px minmax(0,1fr); align-items:center; gap:5px; min-width:0; padding:9px 7px; border:1px solid var(--divider-color); border-radius:12px; background:var(--card-background-color); }
			.tracker-metric ha-icon { --mdc-icon-size:18px; color:var(--secondary-text-color); }
			.tracker-metric > div { min-width:0; text-align:center; }
			.tracker-metric strong, .tracker-metric span { display:block; min-width:0; }
			.tracker-metric strong { font-size:16px; line-height:1.1; }
			.tracker-metric span { display:block; min-width:0; margin-top:3px; overflow:hidden; color:var(--secondary-text-color); font-size:9px; line-height:1.2; text-overflow:ellipsis; white-space:nowrap; }
			.tracker-metric.home ha-icon, .tracker-metric.home strong { color:#43a047; }
			.tracker-metric.away ha-icon, .tracker-metric.away strong { color:#f59e0b; }
			.tracker-metric.disabled ha-icon, .tracker-metric.disabled strong { color:#e53935; }
			.connected-devices-list { margin-top:10px; overflow:hidden; border:1px solid var(--divider-color); border-radius:10px; background:var(--card-background-color); }
			.connected-devices-list summary { display:flex; align-items:center; justify-content:space-between; padding:10px 12px; cursor:pointer; list-style:none; color:var(--primary-text-color); }
			.connected-devices-list summary::-webkit-details-marker { display:none; }
			.connected-devices-list summary > span { display:flex; align-items:center; gap:8px; font-size:12px; font-weight:600; }
			.connected-devices-list summary ha-icon { --mdc-icon-size:17px; color:var(--secondary-text-color); }
			.connected-devices-list summary .connected-count { color:var(--secondary-text-color); font-size:12px; font-style:normal; font-weight:400; }
			.connected-devices-list summary::after { content:""; width:7px; height:7px; border-right:2px solid var(--secondary-text-color); border-bottom:2px solid var(--secondary-text-color); transform:rotate(45deg); }
			.connected-devices-list[open] summary::after { transform:rotate(225deg); }
			.connected-device-names { display:grid; gap:0; padding:4px 12px 8px; border-top:1px solid var(--divider-color); }
			.connected-device-names > div { display:flex; align-items:center; gap:6px; min-width:0; padding:6px 0; }
			.connected-device-names ha-icon { --mdc-icon-size:14px; flex:0 0 14px; color:#43a047; }
			.away-devices-list .connected-device-names ha-icon { color:#f59e0b; }
			.connected-device-names span { min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:12px; }
			@media (max-width:520px) { .tracker-metrics { grid-template-columns:repeat(2,minmax(0,1fr)); } }
			.debug-panel { padding:15px; }
			.debug-list { display:grid; gap:10px; }
			.debug-group { overflow:hidden; border:1px solid var(--divider-color); border-radius:10px; background:var(--card-background-color); }
			.debug-group summary { display:flex; align-items:center; justify-content:space-between; padding:11px 12px; cursor:pointer; color:var(--primary-text-color); list-style:none; user-select:none; }
			.debug-group summary::-webkit-details-marker { display:none; }
			.debug-group summary > span { display:flex; align-items:center; gap:8px; font-size:12px; font-weight:600; }
			.debug-group summary ha-icon { --mdc-icon-size:17px; color:var(--freebox-accent); }
			.debug-export { display:flex; align-items:center; justify-content:center; width:28px; height:28px; margin-left:auto; padding:0; border:0; border-radius:7px; color:var(--secondary-text-color); background:transparent; cursor:pointer; }
			.debug-export:hover { color:var(--freebox-accent); background:var(--secondary-background-color); }
			.debug-export ha-icon { --mdc-icon-size:17px; color:currentColor; }
			.debug-group summary small { display:inline-flex; align-items:center; justify-content:center; min-width:20px; height:20px; padding:0 5px; border-radius:10px; color:var(--secondary-text-color); background:var(--secondary-background-color); font-size:10px; }
			.tracker-count { display:inline-flex; align-items:center; justify-content:center; min-width:20px; height:20px; padding:0 6px; border-radius:10px; font-size:10px; font-weight:700; }
			.tracker-count.total { color:var(--secondary-text-color); background:var(--secondary-background-color); }
			.tracker-count.enabled { color:#1b5e20; background:rgba(76,175,80,.20); }
			.tracker-count.disabled { color:#b71c1c; background:rgba(244,67,54,.18); }
			.debug-row strong.disabled { color:var(--error-color,#f44336); }
			.debug-summary-actions { display:flex; align-items:center; gap:10px; margin-left:auto; }
			.debug-chevron { width:7px; height:7px; margin-right:2px; border-right:2px solid var(--secondary-text-color); border-bottom:2px solid var(--secondary-text-color); transform:rotate(45deg); transition:transform .2s ease; }
			.debug-group[open] .debug-chevron { transform:rotate(225deg); }
			.debug-group[open] summary { border-bottom:1px solid var(--divider-color); }
			.debug-group-content { padding:0 12px; }
			.debug-entity { padding:10px 0; border-top:1px solid var(--divider-color); }
			.debug-entity:first-child { border-top:0; }
			.debug-row { display:grid; grid-template-columns:minmax(0, 2fr) minmax(110px, 1fr); align-items:start; gap:16px; }
			.debug-row code { min-width:0; color:var(--primary-text-color); font-family:monospace; font-size:12px; font-weight:600; line-height:1.4; overflow-wrap:anywhere; }
			.debug-row strong { min-width:0; font-size:12px; line-height:1.4; overflow-wrap:break-word; text-align:right; }
			.debug-attributes { display:grid; gap:4px; margin-top:8px; padding:8px 10px; border-radius:8px; background:var(--secondary-background-color); }
			.debug-attribute { display:grid; grid-template-columns:minmax(100px, .8fr) minmax(0, 2fr); gap:12px; font-size:11px; line-height:1.4; }
			.debug-attribute code { color:var(--secondary-text-color); font-family:monospace; overflow-wrap:anywhere; }
			.debug-attribute span { min-width:0; overflow-wrap:anywhere; text-align:right; }
			@media (max-width:520px) { .internet-metrics { grid-template-columns:1fr; } }
			@media (max-width:420px) { .debug-row, .debug-attribute { grid-template-columns:1fr; gap:3px; } .debug-row strong, .debug-attribute span { text-align:left; } }

			.empty { display:flex; align-items:center; gap:10px; padding:18px; border-radius:14px; color:var(--secondary-text-color); background:var(--secondary-background-color); }
			.empty ha-icon { color:var(--freebox-accent); }
			@container (max-width:420px) { .secondary-grid { grid-template-columns:1fr; } }
			*:focus-visible { outline:2px solid var(--freebox-accent); outline-offset:2px; }
		`;
	}
}

/* ---------------------------------------------------------------------- */
/*  Visual editor                                                         */
/* ---------------------------------------------------------------------- */
class FreeboxCardEditor extends HTMLElement {
	static EDITOR_TRANSLATIONS = {
		en: {
			device_id: "Freebox device", name: "Card name", language: "Card display language",
			download_bandwidth: "Download bandwidth (Mbit/s)", upload_bandwidth: "Upload bandwidth (Mbit/s)", latency_entity: "Latency sensor",
			general: "General", card_layout: "Card layout", internet_settings: "Internet settings",
			show_header: "Show card icon and title", show_card_background: "Show card background",
			internet: "Bandwidth", system: "System", hardware: "Hardware", telephony: "Telephony", devices: "Device trackers", debug: "Debug",
			move_up: "Move up", move_down: "Move down", auto: "Auto", english: "English", french: "French",
		},
		fr: {
			device_id: "Appareil Freebox", name: "Nom de la carte", language: "Langue d’affichage de la carte",
			download_bandwidth: "Débit descendant (Mbit/s)", upload_bandwidth: "Débit montant (Mbit/s)", latency_entity: "Capteur de latence",
			general: "Général", card_layout: "Disposition de la carte", internet_settings: "Paramètres Internet",
			show_header: "Afficher l’icône et le titre de la carte", show_card_background: "Afficher le fond de la carte",
			internet: "Bande passante", system: "Système", hardware: "Matériel", telephony: "Téléphonie", devices: "Suivis d’appareils", debug: "Debug",
			move_up: "Monter", move_down: "Descendre", auto: "Auto", english: "Anglais", french: "Français",
		},
	};

	static SECTION_ICONS = {
		general: "mdi:cog-outline",
		layout: "mdi:view-dashboard-edit-outline",
		internet_settings: "mdi:tune-variant",
	};

	static VISIBILITY_FIELDS = new Set([
		"show_internet",
		"show_system",
		"show_hardware",
		"show_debug",
		"show_header",
		"show_card_background",
		"show_devices",
		"show_telephony",
	]);

	static _getDeepActiveElement() {
		let active = document.activeElement;
		while (active && active.shadowRoot && active.shadowRoot.activeElement) {
			active = active.shadowRoot.activeElement;
		}
		return active;
	}

	constructor() {
		super();
		this._rendered = false;
		this._autoDetectedDeviceId = "";
		this._detectionDevices = [];
		this._detectionLoading = false;
	}

	setConfig(config) {
		this._config = { ...config };
		if (!this._rendered) {
			this._render();
			this._rendered = true;
		}
		this._updateValues();
	}

	set hass(hass) {
		this._hass = hass;
		this._loadDetectionDevices();
		if (!this._rendered && this._config) {
			this._render();
			this._rendered = true;
		}
		this._applyAutoDetectedDevice();
		this._updateValues();
	}

	connectedCallback() {
		if (!this._rendered && this._config) {
			this._render();
			this._rendered = true;
			this._updateValues();
		}
	}

	_getEditorLanguage() {
		const selected = this._config?.language;
		const language = selected && selected !== "auto"
			? selected
			: (this._hass?.locale?.language || this._hass?.language || "en").split("-")[0];
		return FreeboxCardEditor.EDITOR_TRANSLATIONS[language] ? language : "en";
	}
	_et(key) {
		const language = this._getEditorLanguage();
		return FreeboxCardEditor.EDITOR_TRANSLATIONS[language]?.[key] || FreeboxCardEditor.EDITOR_TRANSLATIONS.en[key] || key;
	}
	_sectionSummary(icon, title) {
		return `<summary><span class="section-title"><ha-icon icon="${icon}"></ha-icon>${title}</span></summary>`;
	}

	_entitySelector(key, label, filter) {
		return `<div class="field entity-override"><span>${label}</span><ha-entity-picker data-config="${key}" data-filter="${filter}"></ha-entity-picker></div>`;
	}

	_switchRow(key, label) {
		return `
		<div class="switch-row">
		  <span class="switch-label">${label}</span>
		  <ha-switch data-config="${key}"></ha-switch>
		</div>`;
	}

	_getSectionDefinitions() {
		return [
			{ key: "internet", label: this._et("internet"), icon: "mdi:speedometer", visibility: "show_internet" },
			{ key: "system", label: this._et("system"), icon: "mdi:server", visibility: "show_system" },
			{ key: "hardware", label: this._et("hardware"), icon: "mdi:memory", visibility: "show_hardware" },
			{ key: "telephony", label: this._et("telephony"), icon: "mdi:phone", visibility: "show_telephony" },
			{ key: "devices", label: this._et("devices"), icon: "mdi:devices", visibility: "show_devices" },
			{ key: "debug", label: this._et("debug"), icon: "mdi:bug-outline", visibility: "show_debug" },
		];
	}

	_renderSectionOrder() {
		const definitions = this._getSectionDefinitions();
		const byKey = new Map(definitions.map((section) => [section.key, section]));
		const configured = Array.isArray(this._config?.section_order) ? this._config.section_order : [];
		const order = [...new Set([...configured, ...definitions.map((section) => section.key)])].filter((key) => byKey.has(key));
		return order.map((key, index) => {
			const section = byKey.get(key);
			return `<div class="section-order-row" data-section-key="${key}"><ha-icon icon="${section.icon}"></ha-icon><span>${section.label}</span><ha-switch data-config="${section.visibility}"></ha-switch><button type="button" data-section-move="up" ${index === 0 ? "disabled" : ""} title="${this._et("move_up")}" aria-label="${this._et("move_up")}: ${section.label}"><ha-icon icon="mdi:chevron-up"></ha-icon></button><button type="button" data-section-move="down" ${index === order.length - 1 ? "disabled" : ""} title="${this._et("move_down")}" aria-label="${this._et("move_down")}: ${section.label}"><ha-icon icon="mdi:chevron-down"></ha-icon></button></div>`;
		}).join("");
	}

	_render() {
		this.innerHTML = `
		<style>
		  .editor { display: grid; gap: 12px; padding: 8px 0; }
		  details.section { overflow: hidden; background: var(--ha-card-background,var(--card-background-color)); border: 1px solid var(--divider-color); border-radius: var(--ha-card-border-radius,12px); }
		  summary { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:16px; color:var(--primary-text-color); font-size:16px; font-weight:600; cursor:pointer; list-style:none; user-select:none; }
		  summary::-webkit-details-marker { display:none; }
		  summary::after { content:""; width:8px; height:8px; border-right:2px solid var(--secondary-text-color); border-bottom:2px solid var(--secondary-text-color); transform:rotate(45deg); transition:transform .2s ease; }
		  details[open] summary::after { transform:rotate(225deg); }
		  details[open] summary { border-bottom:1px solid var(--divider-color); }
		  .section-title { display:flex; align-items:center; gap:10px; }
		  .section-title ha-icon { --mdc-icon-size:20px; color:var(--secondary-text-color); }
		  .section-content { display:grid; gap:14px; padding:16px; }
		  .grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); column-gap:14px; row-gap:18px; }
		  .field, label { display:grid; min-width:0; gap:6px; color:var(--secondary-text-color); font-size:12px; }
		  .entity-override ha-entity-picker { display:block; width:100%; min-width:0; }
		  .internet-settings-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); column-gap:14px; row-gap:18px; }
		  .latency-picker-row { grid-column:1 / -1; min-width:0; }
		  .latency-picker-row .field { width:100%; }
		  .latency-picker-row ha-entity-picker { width:100%; min-width:280px; }

		  input { box-sizing:border-box; width:100%; min-height:42px; padding:8px 10px; color:var(--primary-text-color); background:var(--ha-card-background,var(--card-background-color)); border:1px solid var(--divider-color); border-radius:8px; font:inherit; }
		  ha-selector { display:block; width:100%; }
		  .switch-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); column-gap:24px; }
		  .switch-row { display:flex; align-items:center; justify-content:space-between; gap:16px; min-height:42px; }
		  .switch-label { color:var(--primary-text-color); font-size:14px; }
		  .section-order-list { display:grid; gap:8px; }
		  .layout-options { display:grid; gap:4px; padding-bottom:10px; border-bottom:1px solid var(--divider-color); }
		  .section-order-row { display:grid; grid-template-columns:24px minmax(0,1fr) auto 32px 32px; align-items:center; gap:8px; min-height:42px; padding:6px 8px; border:1px solid var(--divider-color); border-radius:9px; }
		  .section-order-row > ha-icon { --mdc-icon-size:18px; color:var(--secondary-text-color); }
		  .section-order-row > span { color:var(--primary-text-color); font-size:14px; }
		  .section-order-row button { display:flex; align-items:center; justify-content:center; width:32px; height:32px; padding:0; border:0; border-radius:7px; color:var(--secondary-text-color); background:var(--secondary-background-color); cursor:pointer; }
		  .section-order-row button:disabled { opacity:.3; cursor:default; }
		  .section-order-row button ha-icon { --mdc-icon-size:18px; }
		  ha-switch { flex-shrink:0; }
		  @media (max-width:600px) { .grid, .switch-grid, .internet-settings-grid { grid-template-columns:1fr; } .latency-picker-row { grid-column:1; } .latency-picker-row ha-entity-picker { min-width:0; } }
		</style>
		<div class="editor">
		  <details class="section"${this._config?.device_id ? "" : " open"}>
			${this._sectionSummary(FreeboxCardEditor.SECTION_ICONS.general, this._et("general"))}
			<div class="section-content">
			  <div class="field"><span>${this._et("device_id")}</span><ha-selector data-config="device_id"></ha-selector></div>
			  <label>${this._et("name")}<input data-config="name" type="text" placeholder="Freebox"></label>
			  <div class="field"><span>${this._et("language")}</span><ha-selector data-config="language"></ha-selector></div>
			</div>
		  </details>
		  <details class="section">
			${this._sectionSummary(FreeboxCardEditor.SECTION_ICONS.layout, this._et("card_layout"))}
			<div class="section-content">
			  <div class="layout-options">${this._switchRow("show_header", this._et("show_header"))}${this._switchRow("show_card_background", this._et("show_card_background"))}</div>
			  <div class="section-order-list">${this._renderSectionOrder()}</div>
			</div>
		  </details>
		  <details class="section">
			${this._sectionSummary(FreeboxCardEditor.SECTION_ICONS.internet_settings, this._et("internet_settings"))}
			<div class="section-content">
			  <div class="internet-settings-grid">
				<div class="latency-picker-row">${this._entitySelector("latency_entity", this._et("latency_entity"), "sensor")}</div>
				<label>${this._et("download_bandwidth")}<input data-config="download_bandwidth" type="number" min="0" step="1" placeholder="10000"></label>
				<label>${this._et("upload_bandwidth")}<input data-config="upload_bandwidth" type="number" min="0" step="1" placeholder="900"></label>
			  </div>
			</div>
		  </details>
		</div>`;
		this._initializeSelectors();
		this._initializeEntityPickers();
		this._initializeInputs();
		this._initializeSwitches();
		this._initializeSectionOrder();
	}

	async _loadDetectionDevices() {
		if (!this._hass?.connection || Object.keys(this._hass.devices || {}).length || this._detectionDevices.length || this._detectionLoading) return;
		this._detectionLoading = true;
		try {
			const devices = await this._hass.connection.sendMessagePromise({ type: "config/device_registry/list" });
			this._detectionDevices = Array.isArray(devices) ? devices : [];
			this._applyAutoDetectedDevice();
		} catch (error) {
			console.warn("[freebox-card] Unable to load devices for automatic detection", error);
		} finally {
			this._detectionLoading = false;
		}
	}

	_applyAutoDetectedDevice() {
		if (!this._hass || !this._config || this._config.device_id)
			return;

		const detectionHass = this._detectionDevices.length
			? { ...this._hass, devices: Object.fromEntries(this._detectionDevices.map((device) => [device.id, device])) }
			: this._hass;
		const detectedDeviceId = getFreeboxDeviceIds(detectionHass)[0];
		if (!detectedDeviceId || detectedDeviceId === this._autoDetectedDeviceId)
			return;

		this._autoDetectedDeviceId = detectedDeviceId;
		this._config = { ...this._config, device_id: detectedDeviceId };
		this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: { ...this._config } },
			bubbles: true,
			composed: true,
		}));
	}

	_initializeSelectors() {
		this.querySelectorAll("ha-selector[data-config]").forEach((selector) => {
			const key = selector.dataset.config;
			selector.hass = this._hass;
			if (key === "device_id") {
				selector.selector = { device: { filter: { integration: "freebox" } } };
			} else if (key === "language") {
				selector.selector = { select: { mode: "dropdown", options: [
					{ value: "auto", label: this._et("auto") },
					{ value: "en", label: this._et("english") },
					{ value: "fr", label: this._et("french") },
				] } };
			} else {
				selector.selector = { entity: { filter: { domain: selector.dataset.filter } } };
			}
			selector.addEventListener("value-changed", (event) => this._valueChanged(event));
		});
	}

	_initializeEntityPickers() {
		this.querySelectorAll("ha-entity-picker[data-config]").forEach((picker) => {
			picker.hass = this._hass;
			picker.includeDomains = [picker.dataset.filter];
			picker.required = false;
			picker.hideClearIcon = false;
			picker.addEventListener("value-changed", (event) => this._valueChanged(event));
		});
	}

	_initializeInputs() {
		this.querySelectorAll("input[data-config]").forEach((element) => {
			element.addEventListener("input", (event) => this._valueChanged(event));
		});
	}

	_initializeSwitches() {
		this.querySelectorAll("ha-switch[data-config]").forEach((element) => {
			element.addEventListener("change", (event) => this._valueChanged(event));
		});
	}

	_getEditorOpenSections() {
		return [...this.querySelectorAll("details.section")].map((section, index) => section.open ? index : -1).filter((index) => index >= 0);
	}

	_restoreEditorOpenSections(openSections) {
		this.querySelectorAll("details.section").forEach((section, index) => {
			section.open = openSections.includes(index);
		});
	}

	_initializeSectionOrder() {
		this.querySelectorAll("[data-section-move]").forEach((button) => {
			button.addEventListener("click", () => {
				const key = button.closest("[data-section-key]")?.dataset.sectionKey;
				const defaults = this._getSectionDefinitions().map((section) => section.key);
				const configured = Array.isArray(this._config?.section_order) ? this._config.section_order : [];
				const order = [...new Set([...configured, ...defaults])].filter((item) => defaults.includes(item));
				const index = order.indexOf(key);
				const target = button.dataset.sectionMove === "up" ? index - 1 : index + 1;
				if (index < 0 || target < 0 || target >= order.length) return;
				[order[index], order[target]] = [order[target], order[index]];
				const openSections = this._getEditorOpenSections();
				this._config = { ...this._config, section_order: order };
				this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: { ...this._config } }, bubbles: true, composed: true }));
				this._rendered = false;
				this._render();
				this._rendered = true;
				this._restoreEditorOpenSections(openSections);
				this._updateValues();
			});
		});
	}

	_updateValues() {
		if (!this._rendered || !this._config)
			return;
		this.querySelectorAll("[data-config]").forEach((element) => {
			const key = element.dataset.config;
			const value = this._config[key];
			if (element.tagName === "HA-SELECTOR") {
				element.hass = this._hass;
				element.value = value ?? FreeboxCard.FIELD_DEFAULTS[key] ?? "";
				return;
			}
			if (element.tagName === "HA-ENTITY-PICKER") {
				element.hass = this._hass;
				element.required = false;
				element.hideClearIcon = false;
				element.value = value ?? "";
				return;
			}
			if (element.tagName === "HA-SWITCH") {
				element.checked = value ?? FreeboxCard.FIELD_DEFAULTS[key] ?? false;
				return;
			}
			if (FreeboxCardEditor._getDeepActiveElement() !== element)
				element.value = value ?? "";
		});
	}

	_valueChanged(event) {
		if (!this._config)
			return;
		const target = event.currentTarget;
		const key = target?.dataset?.config;
		if (!key)
			return;
		let value;
		if (target.tagName === "HA-SELECTOR" || target.tagName === "HA-ENTITY-PICKER") {
			value = event.detail?.value ?? target.value ?? "";
		} else if (target.tagName === "HA-SWITCH") {
			value = Boolean(target.checked);
		} else {
			value = target.value;
		}
		const config = { ...this._config, [key]: value };
		const defaultValue = FreeboxCard.FIELD_DEFAULTS[key];
		if (value === "" || value === undefined || value === defaultValue) {
			delete config[key];
		}
		this._config = config;
		if (key === "language") {
			const openSections = this._getEditorOpenSections();
			this._rendered = false;
			this._render();
			this._rendered = true;
			this._restoreEditorOpenSections(openSections);
			this._updateValues();
		}
		this.dispatchEvent(new CustomEvent("config-changed", {
			detail: { config: { ...this._config } },
			bubbles: true,
			composed: true,
		}));
	}
}

/* ---------------------------------------------------------------------- */
/*  Registration                                                          */
/* ---------------------------------------------------------------------- */
if (!customElements.get("freebox-card")) {
	customElements.define("freebox-card", FreeboxCard);
}
if (!customElements.get("freebox-card-editor")) {
	customElements.define("freebox-card-editor", FreeboxCardEditor);
}

window.customCards = window.customCards || [];
window.customCards.push({
	type: "freebox-card",
	name: "Freebox Card",
	description: "Responsive card for the Home Assistant Freebox integration.",
	preview: true,
});

console.info(`%c FREEBOX-CARD %c v${CARD_VERSION} `, "color:white;background:#d71920;font-weight:700", "color:#d71920;background:#f5f5f5");
