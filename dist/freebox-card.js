/*
 * Freebox Card for Home Assistant
 * ===============================
 * Responsive Lovelace card for the official Freebox integration.
 *
 * License: MIT
 */
const CARD_VERSION = "2026.11.5";

/* ---------------------------------------------------------------------- */
/*  Languages                                                             */
/* ---------------------------------------------------------------------- */
const TRANSLATIONS = {
	en: {
		meta: {
			name: "English"
		},
		card: {
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
			device_trackers: "Devices",
			total_devices: "Total",
			home_devices: "Connected",
			away_devices: "Disconnected",
			disabled_devices: "Disabled",
			connected_devices_list: "Connected devices",
			away_devices_list: "Disconnected devices",
			download: "Download",
			live_bandwidth: "Real-time bandwidth",
			bandwidth_history: "Bandwidth history",
			history_method: "5 min average",
			history_max: "Max",
			no_history: "No history available",
			latency: "Latency",
			packet_loss: "Packet loss",
			network_quality_history: "Latency & packet loss history",
			excellent: "Excellent",
			correct: "Fair",
			poor: "Poor",
			internet_status: "Internet status",
			freebox_model: "Model",
			source_type: "Mode",
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
			admin_console: "Access to Freebox OS",
			no_device: "Select a Freebox device in the card editor.",
			no_entities: "No compatible Freebox entities were found.",
			unavailable: "Unavailable",
			language: "Language",
			auto: "Auto",
			debug: "DEBUG",
			expand_section: "Expand section",
			collapse_section: "Collapse section",
		},
		editor: {
			device_id: "Freebox device",
			name: "Card name",
			language: "Card display language",
			download_bandwidth: "Download bandwidth (Mbit/s)",
			upload_bandwidth: "Upload bandwidth (Mbit/s)",
			latency_entity: "Latency sensor",
			packet_loss_entity: "Packet loss sensor",
			live_metrics: "Live metrics",
			show_live_metrics: "Show real-time bandwidth metrics",
			show_history_maximums: "Show maximum values",
			history_settings: "History",
			general: "General",
			card_layout: "Card layout",
			show_header: "Show card icon and title",
			show_card_background: "Show card background",
			show_wifi_button: "Show Wi-Fi button",
			show_reboot_button: "Show Reboot button",
			show_admin_console_button: "Show Freebox OS button",
			admin_console_ip: "Freebox OS IP address (Keep empty to use default url)",
			show_bandwidth_history: "Show bandwidth history",
			show_network_quality_history: "Show latency and packet loss history",
			history_hours: "History period (hours)",
			internet: "Bandwidth",
			system: "System",
			hardware: "Hardware",
			telephony: "Telephony",
			devices: "Device trackers",
			debug: "Debug",
			drag_section: "Drag to reorder",
			section_options: "Section options",
			show_storage_raid: "Show Storage & RAID",
			show_fans: "Show fans",
			show_temperatures: "Show temperatures",
			show_connected_tile: "Show Connected tile",
			show_disconnected_tile: "Show Disconnected tile",
			show_disabled_tile: "Show Disabled tile",
			show_total_tile: "Show Total tile",
			show_connected_devices_list: "Show connected devices list",
			show_disconnected_devices_list: "Show disconnected devices list",
			auto: "Auto",
		},
	},
	fr: {
		meta: {
			name: "Français"
		},
		card: {
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
			device_trackers: "Appareils",
			total_devices: "Total",
			home_devices: "Connectés",
			away_devices: "Déconnectés",
			disabled_devices: "Désactivés",
			connected_devices_list: "Appareils connectés",
			away_devices_list: "Appareils déconnectés",
			download: "Téléchargement",
			live_bandwidth: "Bande passante en temps réel",
			bandwidth_history: "Historique de la bande passante",
			history_method: "Moyenne sur 5 min",
			history_max: "Max",
			no_history: "Aucun historique disponible",
			latency: "Latence",
			packet_loss: "Perte de paquets",
			network_quality_history: "Historique latence et perte de paquets",
			excellent: "Excellent",
			correct: "Correcte",
			poor: "Mauvais",
			internet_status: "État Internet",
			freebox_model: "Modèle",
			source_type: "Mode",
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
			admin_console: "Accéder à Freebox OS",
			no_device: "Sélectionnez un appareil Freebox dans le configurateur.",
			no_entities: "Aucune entité Freebox compatible trouvée.",
			unavailable: "Indisponible",
			language: "Langue",
			debug: "DEBUG",
			expand_section: "Déplier la section",
			collapse_section: "Replier la section",
		},
		editor: {
			device_id: "Appareil Freebox",
			name: "Nom de la carte",
			language: "Langue d’affichage de la carte",
			download_bandwidth: "Débit descendant (Mbit/s)",
			upload_bandwidth: "Débit montant (Mbit/s)",
			latency_entity: "Capteur de latence",
			packet_loss_entity: "Capteur de perte de paquets",
			live_metrics: "Mesures en temps réel",
			show_live_metrics: "Afficher les mesures de bande passante en temps réel",
			show_history_maximums: "Afficher les valeurs maximales",
			history_settings: "Historique",
			general: "Général",
			card_layout: "Disposition de la carte",
			show_header: "Afficher l’icône et le titre de la carte",
			show_card_background: "Afficher le fond de la carte",
			show_wifi_button: "Afficher le bouton Wi-Fi",
			show_reboot_button: "Afficher le bouton Redémarrer",
			show_admin_console_button: "Afficher le bouton Freebox OS",
			admin_console_ip: "Adresse IP de Freebox OS (Garder vide pour utiliser l'url par défaut)",
			show_bandwidth_history: "Afficher l’historique de la bande passante",
			show_network_quality_history: "Afficher l’historique de la latence et de la perte de paquets",
			history_hours: "Période de l’historique (heures)",
			internet: "Bande passante",
			system: "Système",
			hardware: "Matériel",
			telephony: "Téléphonie",
			devices: "Suivis d’appareils",
			debug: "Debug",
			drag_section: "Faire glisser pour réorganiser",
			section_options: "Options de la section",
			show_storage_raid: "Afficher le stockage et le RAID",
			show_fans: "Afficher les ventilateurs",
			show_temperatures: "Afficher les températures",
			show_connected_tile: "Afficher la tuile Connectés",
			show_disconnected_tile: "Afficher la tuile Déconnectés",
			show_disabled_tile: "Afficher la tuile Désactivés",
			show_total_tile: "Afficher la tuile Total",
			show_connected_devices_list: "Afficher la liste des appareils connectés",
			show_disconnected_devices_list: "Afficher la liste des appareils déconnectés",
			auto: "Auto",
		},
	},
};

function resolveLanguage(hass, configuredLanguage = "auto") {
	if (configuredLanguage !== "auto" && TRANSLATIONS[configuredLanguage]) return configuredLanguage;
	const language = (hass?.locale?.language || hass?.language || "en").toLowerCase().split("-")[0];
	return TRANSLATIONS[language] ? language : "en";
}

function translate(language, path) {
	const readPath = (source) => path.split(".").reduce((value, key) => value?.[key], source);
	return String(readPath(TRANSLATIONS[language]) ?? readPath(TRANSLATIONS.en) ?? path);
}

/* ---------------------------------------------------------------------- */
/* Return the Freebox devices exposed by Home Assistant's entity registry */
/* ---------------------------------------------------------------------- */
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
	static FIELD_DEFAULTS = {
		name: "",
		language: "auto",
		section_order: ["internet", "system", "hardware", "telephony", "devices", "debug"],
		show_internet: true,
		show_system: true,
		show_hardware: true,
		show_storage_raid: true,
		show_fans: true,
		show_temperatures: true,
		show_telephony: true,
		show_devices: true,
		show_connected_tile: true,
		show_disconnected_tile: true,
		show_disabled_tile: true,
		show_total_tile: true,
		show_connected_devices_list: true,
		show_disconnected_devices_list: true,
		show_debug: false,
		show_header: true,
		show_card_background: true,
		show_wifi_button: true,
		show_reboot_button: true,
		show_admin_console_button: true,
		admin_console_ip: "",
		show_bandwidth_history: true,
		show_network_quality_history: true,
		show_live_metrics: true,
		show_history_maximums: true,
		history_hours: "24",
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
		this._bandwidthHistory = { key: "", loadedAt: 0, loading: false, series: {} };
		this._networkQualityHistory = { key: "", loadedAt: 0, loading: false, series: {} };
		this._lastRenderSignature = "";
		this._collapsedSections = {};
		this._collapsedSectionsStorageKey = "";
		this._collapsedSectionsLoaded = false;
		this._collapsedSectionsLoading = false;
		this._unsubscribeCollapsedSections = null;
		this._lastLocalePreferences = "";
		this._sharedHistoryTicks = null;
		this._sharedHistoryWindow = null;
	}

	setConfig(config) {
		const source = config && typeof config === "object" ? config : {};
		const safeConfig = {};
		const stringFields = ["name", "device_id", "latency_entity", "packet_loss_entity", "download_bandwidth", "upload_bandwidth", "history_hours", "admin_console_ip"];
		const booleanFields = ["show_internet", "show_system", "show_hardware", "show_storage_raid", "show_fans", "show_temperatures", "show_telephony", "show_devices", "show_connected_tile", "show_disconnected_tile", "show_disabled_tile", "show_total_tile", "show_connected_devices_list", "show_disconnected_devices_list", "show_debug", "show_header", "show_card_background", "show_wifi_button", "show_reboot_button", "show_admin_console_button", "show_bandwidth_history", "show_network_quality_history", "show_live_metrics", "show_history_maximums"];
		for (const key of stringFields)
			if (typeof source[key] === "string") safeConfig[key] = source[key].slice(0, 512);
		for (const key of booleanFields)
			if (typeof source[key] === "boolean") safeConfig[key] = source[key];
		if (source.language === "auto" || TRANSLATIONS[source.language]) safeConfig.language = source.language;
		const allowedSections = new Set(FreeboxCard.FIELD_DEFAULTS.section_order);
		if (Array.isArray(source.section_order))
			safeConfig.section_order = [...new Set(source.section_order.filter((key) => allowedSections.has(key)))];
		this._config = { ...FreeboxCard.FIELD_DEFAULTS, ...safeConfig };
		this._lastRenderSignature = "";
		this._render();
	}

	set hass(hass) {
		this._hass = hass;
		this._loadRegistries();
		this._ensureCollapsedSectionsStorage();
		const localePreferences = JSON.stringify({
			language: hass.locale?.language || hass.language || "",
			timeFormat: hass.locale?.time_format || "",
			dateFormat: hass.locale?.date_format || "",
		});
		const localeChanged = localePreferences !== this._lastLocalePreferences;
		this._lastLocalePreferences = localePreferences;
		const signature = this._getRenderSignature(hass);
		if (!localeChanged && signature === this._lastRenderSignature) return;
		this._lastRenderSignature = signature;
		this._render();
	}

	_getRenderSignature(hass = this._hass) {
		if (!hass || !this._config) return "";
		const entityIds = new Set();
		for (const id of this._getDeviceEntities()) entityIds.add(id);
		for (const entity of this._getIntegrationEntities()) if (entity?.entity_id) entityIds.add(entity.entity_id);
		if (this._config.latency_entity) entityIds.add(this._config.latency_entity);
		if (this._config.packet_loss_entity) entityIds.add(this._config.packet_loss_entity);
		const states = [...entityIds].sort().map((entityId) => {
			const state = hass.states?.[entityId];
			if (!state) return [entityId, null];
			return [entityId, state.state, state.last_changed, state.last_updated];
		});
		return JSON.stringify({
			deviceId: this._getSelectedDeviceId(),
			language: resolveLanguage(hass, this._config.language || "auto"),
			timeFormat: hass.locale?.time_format || "",
			dateFormat: hass.locale?.date_format || "",
			darkMode: Boolean(hass.themes?.darkMode),
			states,
		});
	}

	disconnectedCallback() {
		if (typeof this._unsubscribeCollapsedSections === "function") this._unsubscribeCollapsedSections();
		this._unsubscribeCollapsedSections = null;
		this._historyAxisObserver?.disconnect();
		this._networkAxisObserver?.disconnect();
	}

	_getCardPositionIdentity() {
		let viewPath = "unknown-view";
		try {
			const pathname = window.location?.pathname || "";
			const parts = pathname.split("/").filter(Boolean);
			viewPath = parts.slice(0, 2).join("/") || pathname || "unknown-view";
		} catch (_error) {}

		let indexPath = [];
		let node = this;
		while (node) {
			const root = node.getRootNode?.();
			const parent = node.parentElement || (root instanceof ShadowRoot ? root.host?.parentElement : null);
			if (!parent) break;
			const siblings = [...parent.children].filter((child) => {
				const tag = String(child.tagName || "").toLowerCase();
				return tag.includes("card") || tag.includes("hui-") || child === node;
			});
			const index = siblings.indexOf(node);
			if (index >= 0) indexPath.unshift(index);
			node = parent;
			const tag = String(node.tagName || "").toLowerCase();
			if (tag === "hui-view" || tag === "hui-panel-view" || tag === "hui-masonry-view" || tag === "hui-sections-view") break;
		}
		return `${viewPath}:${indexPath.length ? indexPath.join(".") : "0"}`;
	}

	_getCollapsedSectionsStorageKey() {
		const deviceId = this._getSelectedDeviceId() || "auto";
		if (!this._stableCollapsedSectionsIdentity)
			this._stableCollapsedSectionsIdentity = this._getCardPositionIdentity();
		return `freebox-card:collapsed-sections:${deviceId}:${this._stableCollapsedSectionsIdentity}`;
	}

	_normalizeCollapsedSections(value) {
		const source = value && typeof value === "object" ? value : {};
		const allowed = new Set(["internet", "system", "hardware", "telephony", "devices", "debug"]);
		return Object.fromEntries(Object.entries(source).filter(([key, collapsed]) => allowed.has(key) && typeof collapsed === "boolean"));
	}

	async _ensureCollapsedSectionsStorage() {
		if (!this._hass?.connection || !this._config || this._collapsedSectionsLoading) return;
		const key = this._getCollapsedSectionsStorageKey();
		if (key === this._collapsedSectionsStorageKey && this._collapsedSectionsLoaded) return;
		this._collapsedSectionsLoading = true;
		if (typeof this._unsubscribeCollapsedSections === "function") this._unsubscribeCollapsedSections();
		this._unsubscribeCollapsedSections = null;
		this._collapsedSectionsStorageKey = key;
		try {
			const response = await this._hass.connection.sendMessagePromise({ type: "frontend/get_user_data", key });
			this._collapsedSections = this._normalizeCollapsedSections(response?.value ?? response);
			this._collapsedSectionsLoaded = true;
			this._render();
			this._unsubscribeCollapsedSections = await this._hass.connection.subscribeMessage((message) => {
				const next = this._normalizeCollapsedSections(message?.value ?? message);
				if (JSON.stringify(next) === JSON.stringify(this._collapsedSections)) return;
				this._collapsedSections = next;
				this._render();
			}, { type: "frontend/subscribe_user_data", key });
		} catch (error) {
			console.warn("[freebox-card] Unable to load collapsible section preferences", error);
			this._collapsedSectionsLoaded = true;
		} finally {
			this._collapsedSectionsLoading = false;
		}
	}
	async _saveCollapsedSections() {
		if (!this._hass?.connection || !this._collapsedSectionsStorageKey) return;
		try {
			await this._hass.connection.sendMessagePromise({ type: "frontend/set_user_data", key: this._collapsedSectionsStorageKey, value: this._collapsedSections });
		} catch (error) {
			console.warn("[freebox-card] Unable to save collapsible section preferences", error);
		}
	}

	_initializeCollapsibleSections() {
		this.shadowRoot.querySelectorAll("section.panel[data-section-key]").forEach((section) => {
			const key = section.dataset.sectionKey;
			const title = section.querySelector(":scope > .section-title");
			if (!title || !key) return;
			const body = document.createElement("div");
			body.className = "section-collapse-body";
			while (title.nextSibling) body.appendChild(title.nextSibling);
			section.appendChild(body);
			const chevron = document.createElement("ha-icon");
			chevron.className = "section-collapse-chevron";
			chevron.setAttribute("icon", "mdi:chevron-down");
			title.appendChild(chevron);
			const applyState = () => {
				const collapsed = this._collapsedSections[key] === true;
				section.classList.toggle("section-collapsed", collapsed);
				title.setAttribute("aria-expanded", String(!collapsed));
				title.setAttribute("aria-label", this._t(collapsed ? "expand_section" : "collapse_section"));
			};
			applyState();
			title.setAttribute("role", "button");
			title.setAttribute("tabindex", "0");
			const toggle = () => {
				this._collapsedSections = { ...this._collapsedSections, [key]: !(this._collapsedSections[key] === true) };
				applyState();
				this._saveCollapsedSections();
			};
			title.addEventListener("click", (event) => {
				if (event.target.closest("button, a, [data-action], [data-more-info]")) return;
				toggle();
			});
			title.addEventListener("keydown", (event) => {
				if (event.key !== "Enter" && event.key !== " ") return;
				if (event.target.closest("button, a, [data-action], [data-more-info]")) return;
				event.preventDefault();
				toggle();
			});
		});
	}

	getCardSize() {
		return 5;
	}

	_getLanguage() {
		return resolveLanguage(this._hass, this._config?.language || "auto");
	}

	_t(key) {
		return translate(this._getLanguage(), `card.${key}`);
	}

	_getLocaleTag() {
		return this._hass?.locale?.language || this._hass?.language || this._getLanguage();
	}

	_getHour12Preference() {
		const value = String(this._hass?.locale?.time_format || "").trim().toLowerCase().replace(/[\s-]+/g, "_");
		if (["12", "12_hour", "12_hours", "am_pm"].includes(value)) return true;
		if (["24", "24_hour", "24_hours"].includes(value)) return false;
		return undefined;
	}

	_getHaDateOrder() {
		const raw = String(this._hass?.locale?.date_format || "").trim();
		const compact = raw.toUpperCase().replace(/[^A-Z]/g, "");
		// Home Assistant DateFormat values are DMY, MDY, YMD, language, or system.
		if (["DMY", "DDMMYYYY", "DAYMONTHYEAR", "DAYMONTHYEARLONG"].includes(compact)) return "DMY";
		if (["MDY", "MMDDYYYY", "MONTHDAYYEAR", "MONTHDAYYEARLONG"].includes(compact)) return "MDY";
		if (["YMD", "YYYYMMDD", "YEARMONTHDAY", "YEARMONTHDAYLONG"].includes(compact)) return "YMD";
		return "LOCALE";
	}

	_getDateSeparator(value = new Date()) {
		const literal = new Intl.DateTimeFormat(this._getLocaleTag(), {
			year: "numeric", month: "2-digit", day: "2-digit",
		}).formatToParts(value).find((part) => part.type === "literal")?.value;
		return literal || "/";
	}

	_getDateParts(value) {
		const parts = new Intl.DateTimeFormat(this._getLocaleTag(), {
			year: "numeric", month: "2-digit", day: "2-digit",
		}).formatToParts(value);
		return Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
	}

	_formatGraphTime(value, context = "axis") {
		const hour12 = this._getHour12Preference();
		const options = { hour: "2-digit", minute: "2-digit", ...(hour12 === undefined ? {} : { hour12 }) };
		let formatted = new Intl.DateTimeFormat(this._getLocaleTag(), options).format(value);

		formatted = context === "axis"
			? formatted.replace(/(AM|PM)/gi, (period) => period.toLowerCase())
			: formatted.replace(/(am|pm)/gi, (period) => period.toUpperCase());
		return formatted;
	}

	_formatGraphDate(value) {
		const order = this._getHaDateOrder();
		if (order === "LOCALE") {
			return new Intl.DateTimeFormat(this._getLocaleTag(), {
				year: "numeric", month: "2-digit", day: "2-digit",
			}).format(value);
		}
		const { day, month, year } = this._getDateParts(value);
		const separator = this._getDateSeparator(value);
		if (order === "DMY") return [day, month, year].join(separator);
		if (order === "MDY") return [month, day, year].join(separator);
		return [year, month, day].join(separator);
	}

	_formatGraphAxisTick(value) {
		if (value.getHours() === 0 && value.getMinutes() === 0) {
			return new Intl.DateTimeFormat(this._getLocaleTag(), { day: "2-digit", month: "short" }).format(value);
		}
		return this._formatGraphTime(value, "axis");
	}

	_formatGraphDateTime(value) {
		return `${this._formatGraphDate(value)} · ${this._formatGraphTime(value, "popup")}`;
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
			this._lastRenderSignature = this._getRenderSignature();
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
		const integrationEntities = this._getIntegrationEntities();
		const registryById = new Map(integrationEntities.map((entity) => [entity.entity_id, entity]));
		const candidates = integrationEntities
			.map((entity) => entity.entity_id)
			.filter((entityId) => this._hass.states[entityId] && (entityId.startsWith("sensor.") || entityId.startsWith("binary_sensor.")))
			.map((entityId) => {
				const state = this._hass.states[entityId];
				const registry = registryById.get(entityId) || {};
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

	_findPingLatency() {
		const registry = this._entityRegistry.length ? this._entityRegistry : Object.values(this._hass?.entities || {});
		return registry
			.filter((entity) => entity?.platform === "ping" && !entity.disabled_by && entity.entity_id?.startsWith("sensor."))
			.filter((entity) => {
				const state = this._hass.states[entity.entity_id];
				if (!state) return false;
				const name = [entity.entity_id, entity.name, entity.original_name, state.attributes?.friendly_name]
					.filter(Boolean).join(" ").toLowerCase();
				return /average|moyen/.test(name);
			})
			.map((entity) => entity.entity_id)
			.sort((a, b) => a.localeCompare(b))[0];
	}

	_findPacketLoss() {
		const configured = this._config?.packet_loss_entity;
		if (configured && this._hass.states[configured]) return configured;
		const candidates = Object.keys(this._hass.states || {})
			.filter((entityId) => entityId.startsWith("sensor."))
			.filter((entityId) => {
				const state = this._hass.states[entityId];
				const text = `${entityId} ${state?.attributes?.friendly_name || ""}`.toLowerCase();
				return /packet[_\s-]?loss|perte[_\s-]?de[_\s-]?paquets?/.test(text);
			})
			.sort((a, b) => a.localeCompare(b));
		return candidates[0] || "";
	}

	_resolveEntities() {
		return {
			download: this._find("sensor", ["download", "telechargement", "vitesse_de_telechargement"]),
			upload: this._find("sensor", ["upload", "envoi", "vitesse_d_envoi"]),
			latency: this._config?.latency_entity && this._hass.states[this._config.latency_entity] ? this._config.latency_entity : this._findPingLatency(),
			packetLoss: this._findPacketLoss(),
			uptime: this._getIntegrationEntityIds().find((id) => {
				if (!id.startsWith("sensor.")) return false;
				const attributes = this._hass.states[id]?.attributes || {};
				return attributes.device_class === "duration"
					&& String(attributes.unit_of_measurement || "").trim().toLowerCase() === "s";
			}) || this._getIntegrationEntityIds().find((id) => id === "sensor.freebox_uptime" || /uptime|temps_de_fonctionnement/i.test(id)),
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
			? new Intl.NumberFormat(this._getLanguage(), { maximumFractionDigits: 0 }).format(value)
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

		this.shadowRoot.querySelectorAll("details[data-tracker-list]").forEach((element) => {
			this._trackerListsOpen[element.dataset.trackerList] = element.open;
		});

		this._sharedHistoryWindow = null;
		this._sharedHistoryTicks = null;
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
			<ha-card class="${[this._config.show_card_background ? "" : "no-card-background", this._hass?.themes?.darkMode ? "dark-theme" : "light-theme"].filter(Boolean).join(" ")}" style="--freebox-accent:var(--primary-color)">
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
		this._initializeCollapsibleSections();
		this._initializeBandwidthHistoryTooltip();
		this._initializeBandwidthHistoryAxis();
		this._initializeNetworkQualityChart();
	}

	_renderAdaptiveTimeAxis(axis, start, end, hours, sharedTicks = null) {
		const width = axis?.getBoundingClientRect().width || 0;
		if (!width || !Number.isFinite(start) || !Number.isFinite(end)) return [];
		const range = Math.max(end - start, 1);
		let ticks = Array.isArray(sharedTicks)
			? sharedTicks.filter((timestamp) => timestamp >= start && timestamp <= end)
			: [];
		if (!ticks.length) {
			const targetIntervals = Math.max(2, Math.min(8, Math.floor(width / 52)));
			const rawStepHours = (range / 3600000) / targetIntervals;
			const allowedSteps = [1, 2, 3, 4, 6, 8, 12, 24, 48, 72, 96, 168];
			const stepHours = allowedSteps.find((step) => step >= rawStepHours) || allowedSteps.at(-1);
			const step = stepHours * 3600000;
			const oneHour = 3600000;
			const firstTick = Math.ceil(start / oneHour) * oneHour;
			for (let tick = firstTick; tick <= end; tick += step) ticks.push(tick);
		}
		axis.innerHTML = ticks.map((timestamp) => {
			const ratio = (timestamp - start) / range;
			const label = this._formatGraphAxisTick(new Date(timestamp));
			return `<span data-ratio="${ratio}"><i aria-hidden="true"></i>${this._escape(label)}</span>`;
		}).join("");
		for (const label of axis.querySelectorAll("span[data-ratio]")) {
			const ratio = Math.min(1, Math.max(0, Number(label.dataset.ratio)));
			label.style.left = `${ratio * width}px`;
			label.style.setProperty("--tick-offset", "0px");
		}
		return ticks;
	}

	_initializeBandwidthHistoryAxis() {
		const chart = this.shadowRoot?.querySelector(".history-chart[data-history-start]");
		const axis = chart?.querySelector(".history-x");
		const svg = chart?.querySelector("svg");
		if (!chart || !axis || !svg) return;
		const start = Number(chart.dataset.historyStart);
		const end = Number(chart.dataset.historyEnd);
		const hours = Number(axis.dataset.historyHours) || 24;
		const renderAxis = () => {
			this._sharedHistoryTicks = this._renderAdaptiveTimeAxis(axis, start, end, hours);
			const qualityAxis = this.shadowRoot?.querySelector(".quality-chart .history-x");
			if (qualityAxis) this._renderAdaptiveTimeAxis(qualityAxis, start, end, hours, this._sharedHistoryTicks);
			svg.querySelectorAll(".history-hour-grid").forEach((line) => line.remove());
		};
		renderAxis();
		if (typeof ResizeObserver !== "undefined") {
			this._historyAxisObserver?.disconnect();
			this._historyAxisObserver = new ResizeObserver(renderAxis);
			this._historyAxisObserver.observe(axis);
		}
	}

	_initializeBandwidthHistoryTooltip() {
		const chart = this.shadowRoot?.querySelector(".history-chart[data-history-start]");
		const overlay = chart?.querySelector(".history-hover-overlay");
		const tooltip = chart?.querySelector(".history-tooltip");
		const cursor = chart?.querySelector(".history-cursor");
		const downloadDot = chart?.querySelector(".history-hover-download");
		const uploadDot = chart?.querySelector(".history-hover-upload");
		if (!chart || !overlay || !tooltip || !cursor) return;
		const start = Number(chart.dataset.historyStart);
		const end = Number(chart.dataset.historyEnd);
		const maximum = Number(chart.dataset.historyMaximum);
		const download = this._historyHoverData?.download || [];
		const upload = this._historyHoverData?.upload || [];
		const nearest = (series, timestamp) => series.length ? series.reduce((best, point) =>
			Math.abs(point.timestamp - timestamp) < Math.abs(best.timestamp - timestamp) ? point : best, series[0]) : null;
		const number = new Intl.NumberFormat(this._getLanguage(), { minimumFractionDigits: 1, maximumFractionDigits: 1 });
		const formatPopupDateTime = (timestamp) => this._formatGraphDateTime(new Date(timestamp));
		const hide = () => { tooltip.hidden = true; cursor.hidden = true; if (downloadDot) downloadDot.hidden = true; if (uploadDot) uploadDot.hidden = true; };
		overlay.addEventListener("pointermove", (event) => {
			const rect = overlay.getBoundingClientRect();
			if (!rect.width || !Number.isFinite(start) || !Number.isFinite(end) || !Number.isFinite(maximum)) return;
			const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
			const timestamp = start + ratio * (end - start);
			const d = nearest(download, timestamp);
			const u = nearest(upload, timestamp);
			const reference = [d, u].filter(Boolean).sort((a, b) => Math.abs(a.timestamp - timestamp) - Math.abs(b.timestamp - timestamp))[0];
			if (!reference) return hide();
			const xRatio = (reference.timestamp - start) / Math.max(end - start, 1);
			const x = rect.left - chart.getBoundingClientRect().left + xRatio * rect.width;
			cursor.style.left = `${x}px`; cursor.hidden = false;
			const placeDot = (dot, point) => { if (!dot || !point) return; dot.hidden = false; dot.style.left = `${x}px`; dot.style.top = `${Math.min(1, Math.max(0, 1 - point.value / maximum)) * 135}px`; };
			placeDot(downloadDot, d); placeDot(uploadDot, u);
			tooltip.innerHTML = `<strong>${this._escape(formatPopupDateTime(reference.timestamp))}</strong>${d ? `<span><i class="download"></i>${this._t("download")}: <b>${number.format(d.value)} Mbit/s</b></span>` : ""}${u ? `<span><i class="upload"></i>${this._t("upload")}: <b>${number.format(u.value)} Mbit/s</b></span>` : ""}`;
			tooltip.hidden = false;
			const chartRect = chart.getBoundingClientRect();
			const gap = 14;
			const plotLeft = 0;
			const maxLeft = Math.max(plotLeft, chartRect.width - tooltip.offsetWidth - 4);
			const roomRight = chartRect.width - x;
			const tooltipLeft = roomRight >= tooltip.offsetWidth + gap
				? Math.min(x + gap, maxLeft)
				: Math.max(plotLeft, x - tooltip.offsetWidth - gap);
			tooltip.style.left = `${tooltipLeft}px`; tooltip.style.top = "6px";
		});
		overlay.addEventListener("pointerleave", hide);
	}

	_initializeNetworkQualityChart() {
		const chart = this.shadowRoot?.querySelector(".quality-chart[data-history-start]");
		if (!chart) return;
		const axis = chart.querySelector(".history-x");
		const overlay = chart.querySelector(".quality-hover-overlay");
		const tooltip = chart.querySelector(".quality-tooltip");
		const cursor = chart.querySelector(".quality-cursor");
		const latencyDot = chart.querySelector(".quality-hover-latency");
		const lossDot = chart.querySelector(".quality-hover-loss");
		const start = Number(chart.dataset.historyStart), end = Number(chart.dataset.historyEnd);
		const latencyMaximum = Number(chart.dataset.latencyMax), lossMaximum = Number(chart.dataset.lossMax);
		const hours = Number(axis?.dataset.historyHours) || 24;
		const renderAxis = () => this._renderAdaptiveTimeAxis(axis, start, end, hours, this._sharedHistoryTicks);
		renderAxis();
		if (typeof ResizeObserver !== "undefined") { this._networkAxisObserver?.disconnect(); this._networkAxisObserver = new ResizeObserver(renderAxis); this._networkAxisObserver.observe(axis); }
		if (!overlay || !tooltip || !cursor) return;
		const latencySeries=this._networkQualityHoverData?.latency||[], lossSeries=this._networkQualityHoverData?.packetLoss||[];
		const nearest=(series,timestamp)=>series.length?series.reduce((best,p)=>Math.abs(p.timestamp-timestamp)<Math.abs(best.timestamp-timestamp)?p:best,series[0]):null;
		const number=new Intl.NumberFormat(this._getLanguage(),{minimumFractionDigits:1,maximumFractionDigits:1});
		const formatPopupDateTime=(timestamp)=>this._formatGraphDateTime(new Date(timestamp));
		const hide=()=>{ tooltip.hidden=true; cursor.hidden=true; if(latencyDot)latencyDot.hidden=true; if(lossDot)lossDot.hidden=true; };
		overlay.addEventListener("pointermove",(event)=>{
			const rect=overlay.getBoundingClientRect();
			if(!rect.width)return;
			const ratio=Math.min(1,Math.max(0,(event.clientX-rect.left)/rect.width));
			const timestamp=start+ratio*(end-start);
			const latency=nearest(latencySeries,timestamp), loss=nearest(lossSeries,timestamp);
			const reference=[latency,loss].filter(Boolean).sort((a,b)=>Math.abs(a.timestamp-timestamp)-Math.abs(b.timestamp-timestamp))[0];
			if(!reference)return hide();
			const xRatio=(reference.timestamp-start)/Math.max(end-start,1);
			const x=rect.left-chart.getBoundingClientRect().left+xRatio*rect.width;
			cursor.style.left=`${x}px`; cursor.hidden=false;
			const placeDot=(dot,point,maximum)=>{ if(!dot||!point||!maximum)return; dot.hidden=false; dot.style.left=`${x}px`; dot.style.top=`${Math.min(1,Math.max(0,1-point.value/maximum))*135}px`; };
			placeDot(latencyDot,latency,latencyMaximum); placeDot(lossDot,loss,lossMaximum);
			tooltip.innerHTML=`<strong>${this._escape(formatPopupDateTime(reference.timestamp))}</strong>${latency?`<span><i class="latency"></i>${this._t("latency")}: <b>${number.format(latency.value)} ms</b></span>`:""}${loss?`<span><i class="loss"></i>${this._t("packet_loss")}: <b>${number.format(loss.value)} %</b></span>`:""}`;
			tooltip.hidden=false;
			const chartRect=chart.getBoundingClientRect(), gap=14, plotLeft=0, plotRight=35;
			const maxLeft=Math.max(plotLeft,chartRect.width-tooltip.offsetWidth-plotRight);
			const roomRight=chartRect.width-plotRight-x;
			const tooltipLeft=roomRight>=tooltip.offsetWidth+gap?Math.min(x+gap,maxLeft):Math.max(plotLeft,x-tooltip.offsetWidth-gap);
			tooltip.style.left=`${tooltipLeft}px`; tooltip.style.top="6px";
		});
		overlay.addEventListener("pointerleave",hide);
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

	_getHistorySeries(history, entityId) {
		if (Array.isArray(history?.[entityId])) return history[entityId];
		if (Array.isArray(history)) {
			// Some HA frontend responses are grouped arrays rather than an entity-id map.
			const groups = history.filter(Array.isArray);
			const byEntity = groups.find((group) => group.some((item) => item?.entity_id === entityId));
			if (byEntity) return byEntity.filter((item) => !item?.entity_id || item.entity_id === entityId);
			return history.filter((item) => item && !Array.isArray(item) && item.entity_id === entityId);
		}
		return [];
	}


	_normalizeBandwidthHistory(history, entityId) {
		const rawSeries = this._getHistorySeries(history, entityId);
		const parsed = [];
		let rejected = 0;
		for (const item of rawSeries) {
			const rawValue = Number.parseFloat(item?.state ?? item?.s);
			const rawTimestamp = item?.last_updated ?? item?.last_changed ?? item?.lu ?? item?.lc;
			let timestamp;
			if (typeof rawTimestamp === "number") timestamp = rawTimestamp < 100000000000 ? rawTimestamp * 1000 : rawTimestamp;
			else timestamp = Date.parse(rawTimestamp);
			if (!Number.isFinite(rawValue) || !Number.isFinite(timestamp)) {
				rejected += 1;
				continue;
			}
			parsed.push({ timestamp, value: Math.max(0, rawValue) });
		}
		return parsed.sort((x, y) => x.timestamp - y.timestamp);
	}

	async _loadBandwidthHistory(downloadEntity, uploadEntity) {
		if (!this._hass?.callApi || !this._config.show_bandwidth_history) return;
		const entityIds = [downloadEntity, uploadEntity].filter((id) => this._isValidEntityId(id));
		if (!entityIds.length) {
			console.warn("[freebox-card][history] No valid bandwidth entities", { downloadEntity, uploadEntity });
			return;
		}
		const hours = Math.min(Math.max(Number.parseInt(this._config.history_hours, 10) || 24, 1), 168);
		const key = `${entityIds.join("|")}|${hours}`;
		const fresh = this._bandwidthHistory.key === key && Date.now() - this._bandwidthHistory.loadedAt < 300000;
		if (fresh || this._bandwidthHistory.loading) return;
		this._bandwidthHistory = { ...this._bandwidthHistory, key, loading: true };
		try {
			const end = new Date();
			const start = new Date(end.getTime() - hours * 3600000);
			const query = new URLSearchParams({
				filter_entity_id: entityIds.join(","),
				end_time: end.toISOString(),
				significant_changes_only: "0",
			});
			const request = `history/period/${start.toISOString()}?${query.toString()}`;
			const history = await this._hass.callApi("GET", request);
			const series = Object.fromEntries(entityIds.map((id) => [id, this._normalizeBandwidthHistory(history, id)]));
			this._bandwidthHistory = { key, loadedAt: Date.now(), loading: false, series };
		} catch (error) {
			console.error("[freebox-card][history] Unable to load bandwidth history", { error, entityIds, hours });
			this._bandwidthHistory = { key, loadedAt: Date.now(), loading: false, series: {} };
		}
		this._render();
	}

	async _loadNetworkQualityHistory(latencyEntity, packetLossEntity) {
		if (!this._hass?.callApi || !this._config.show_network_quality_history) return;
		const entityIds = [latencyEntity, packetLossEntity].filter((id) => this._isValidEntityId(id));
		if (!entityIds.length) return;
		const hours = Math.min(Math.max(Number.parseInt(this._config.history_hours, 10) || 24, 1), 168);
		const key = `${entityIds.join("|")}|${hours}`;
		const fresh = this._networkQualityHistory.key === key && Date.now() - this._networkQualityHistory.loadedAt < 300000;
		if (fresh || this._networkQualityHistory.loading) return;
		this._networkQualityHistory = { ...this._networkQualityHistory, key, loading: true };
		try {
			const end = new Date();
			const start = new Date(end.getTime() - hours * 3600000);
			const query = new URLSearchParams({ filter_entity_id: entityIds.join(","), end_time: end.toISOString(), significant_changes_only: "0" });
			const history = await this._hass.callApi("GET", `history/period/${start.toISOString()}?${query.toString()}`);
			const series = Object.fromEntries(entityIds.map((id) => [id, this._normalizeBandwidthHistory(history, id)]));
			this._networkQualityHistory = { key, loadedAt: Date.now(), loading: false, series };
		} catch (error) {
			console.error("[freebox-card][network-history] Unable to load history", error);
			this._networkQualityHistory = { key, loadedAt: Date.now(), loading: false, series: {} };
		}
		this._render();
	}

	_groupBandwidthHistory(points, start, end, duration = 300000) {
		const visible = points.filter((point) =>
			point.timestamp >= start && point.timestamp <= end && Number.isFinite(point.value));
		if (!visible.length) return [];

		const buckets = new Map();
		for (const point of visible) {
			const bucketStart = Math.floor(point.timestamp / duration) * duration;
			const bucket = buckets.get(bucketStart) || { sum: 0, count: 0 };
			bucket.sum += point.value;
			bucket.count += 1;
			buckets.set(bucketStart, bucket);
		}
		return [...buckets.entries()]
			.sort(([a], [b]) => a - b)
			.map(([bucketStart, bucket]) => ({
				timestamp: Math.min(bucketStart + duration / 2, end),
				value: bucket.sum / bucket.count,
			}));
	}

	_formatHistoryMaximum(value) {
		const numeric = Number(value);
		if (!Number.isFinite(numeric)) return "";
		return new Intl.NumberFormat(this._getLanguage(), {
			minimumFractionDigits: 0,
			maximumFractionDigits: Number.isInteger(numeric) ? 0 : 1,
		}).format(numeric);
	}

	_historyScale(points) {
		const peak = points.reduce((maximum, point) =>
			Number.isFinite(point.value) ? Math.max(maximum, point.value) : maximum, 0);
		if (peak <= 0) return { maximum: 10, step: 10 };

		const maximum = Math.max(10, Math.ceil((peak / 0.82) / 10) * 10);
		const targetTicks = maximum <= 40 ? maximum / 10 : 4;
		const rawStep = maximum / Math.max(1, targetTicks);
		const step = Math.max(10, Math.ceil(rawStep / 10) * 10);
		return { maximum: Math.ceil(maximum / step) * step, step };
	}

	_historyPath(points, start, end, maximum, width, height) {
		if (!points.length || maximum <= 0) return "";
		return points.map((point, index) => {
			const x = ((point.timestamp - start) / Math.max(end - start, 1)) * width;
			const y = height - Math.min(Math.max(point.value / maximum, 0), 1) * height;
			return `${index ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
		}).join(" ");
	}

	_historyAreaPath(path, points, start, end, width, height) {
		if (!path || !points.length) return "";
		const firstX = ((points[0].timestamp - start) / Math.max(end - start, 1)) * width;
		const lastX = ((points.at(-1).timestamp - start) / Math.max(end - start, 1)) * width;
		return `${path} L${lastX.toFixed(1)},${height} L${firstX.toFixed(1)},${height} Z`;
	}

	_getSharedHistoryWindow() {
		const hours = Math.min(Math.max(Number.parseInt(this._config.history_hours, 10) || 24, 1), 168);
		if (!this._sharedHistoryWindow || this._sharedHistoryWindow.hours !== hours) {
			const end = Date.now();
			this._sharedHistoryWindow = { hours, end, start: end - hours * 3600000 };
		}
		return this._sharedHistoryWindow;
	}
	_bandwidthHistoryChart(downloadEntity, uploadEntity) {
		if (!this._config.show_bandwidth_history) return "";
		const { hours, start, end } = this._getSharedHistoryWindow();
		const download = this._bandwidthHistory.series[downloadEntity] || [];
		const upload = this._bandwidthHistory.series[uploadEntity] || [];
		const points = [...download, ...upload].filter((point) => point.timestamp >= start && point.timestamp <= end);
		if (!points.length) {
			return `<div class="bandwidth-history${this._config.show_live_metrics === false ? " no-live-metrics" : ""}"><div class="history-title"><span>${this._t("bandwidth_history")}</span><small>${hours} h</small></div><div class="history-empty">${this._t("no_history")}</div></div>`;
		}
		const width = 600, height = 150;
		const groupedDownload = this._groupBandwidthHistory(download, start, end, 5 * 60 * 1000);
		const groupedUpload = this._groupBandwidthHistory(upload, start, end, 5 * 60 * 1000);
		const visiblePoints = [...groupedDownload, ...groupedUpload];
		this._historyHoverData = { download: groupedDownload, upload: groupedUpload };
		const downloadMax = groupedDownload.reduce((maximum, point) => Math.max(maximum, point.value), 0);
		const uploadMax = groupedUpload.reduce((maximum, point) => Math.max(maximum, point.value), 0);
		const scale = this._historyScale(visiblePoints);
		const roundedMaximum = scale.maximum;
		const downloadPath = this._historyPath(groupedDownload, start, end, roundedMaximum, width, height);
		const uploadPath = this._historyPath(groupedUpload, start, end, roundedMaximum, width, height);
		const downloadArea = this._historyAreaPath(downloadPath, groupedDownload, start, end, width, height);
		const uploadArea = this._historyAreaPath(uploadPath, groupedUpload, start, end, width, height);
		const maxMarker = (series, maximumValue, cssClass) => {
			if (!series.length || maximumValue <= 0) return "";
			const point = series.reduce((best, item) => item.value > best.value ? item : best, series[0]);
			const x = ((point.timestamp - start) / Math.max(end - start, 1)) * width;
			const y = height - Math.min(Math.max(point.value / roundedMaximum, 0), 1) * height;
			const label = this._formatHistoryMaximum(maximumValue);
			const labelWidth = Math.max(40, label.length * 7.2 + 16);
			const labelX = Math.min(Math.max(x, labelWidth / 2 + 2), width - labelWidth / 2 - 2);
			const labelBottom = y - 10;
			const labelHeight = 19;
			const labelTop = labelBottom - labelHeight;
			return `<g class="history-max-marker ${cssClass}"><line class="history-max-stem" x1="${x.toFixed(1)}" y1="${labelBottom.toFixed(1)}" x2="${x.toFixed(1)}" y2="${(y - 4).toFixed(1)}"></line><rect class="history-max-label-bg" x="${(labelX - labelWidth / 2).toFixed(1)}" y="${labelTop.toFixed(1)}" width="${labelWidth.toFixed(1)}" height="${labelHeight}" rx="4"></rect><text class="history-max-label" x="${labelX.toFixed(1)}" y="${(labelTop + 14).toFixed(1)}" text-anchor="middle">${this._escape(label)}</text><circle class="history-max-point" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.5"></circle></g>`;
		};
		const showMaximums = this._config.show_history_maximums !== false;
		const downloadMaxMarker = showMaximums ? maxMarker(groupedDownload, downloadMax, "download") : "";
		const uploadMaxMarker = showMaximums ? maxMarker(groupedUpload, uploadMax, "upload") : "";

		const labels = "";
		const yTickCount = Math.max(1, Math.round(roundedMaximum / scale.step));
		const yRatios = Array.from({ length: yTickCount + 1 }, (_, index) => index / yTickCount);
		const horizontalGrid = yRatios.map((ratio) => `<line class="history-horizontal-grid" x1="0" y1="${(height * ratio).toFixed(1)}" x2="${width}" y2="${(height * ratio).toFixed(1)}"></line>`).join("");
		const yLabels = [...yRatios].reverse().map((ratio) => {
			const top = (1 - ratio) * 100;
			return `<span style="top:${top}%">${this._escape(new Intl.NumberFormat(this._getLanguage(), { maximumFractionDigits: 0 }).format(roundedMaximum * ratio))}</span>`;
		}).join("");
		return `<div class="bandwidth-history${this._config.show_live_metrics === false ? " no-live-metrics" : ""}"><div class="history-title"><span>${this._t("bandwidth_history")}</span><small>${this._t("history_method")} · ${hours} h</small></div><div class="history-chart" data-history-start="${start}" data-history-end="${end}" data-history-maximum="${roundedMaximum}"><div class="history-unit">Mbit/s</div><div class="history-y">${yLabels}</div><svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-label="${this._escape(this._t("bandwidth_history"))}"><defs><linearGradient id="freebox-download-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2196f3" stop-opacity=".55"></stop><stop offset="100%" stop-color="#2196f3" stop-opacity=".10"></stop></linearGradient><linearGradient id="freebox-upload-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4caf50" stop-opacity=".50"></stop><stop offset="100%" stop-color="#4caf50" stop-opacity=".09"></stop></linearGradient></defs>${horizontalGrid}${downloadArea ? `<path class="history-area history-download-area" d="${downloadArea}"></path>` : ""}${uploadArea ? `<path class="history-area history-upload-area" d="${uploadArea}"></path>` : ""}${downloadPath ? `<path class="history-line history-download" d="${downloadPath}"></path>` : ""}${uploadPath ? `<path class="history-line history-upload" d="${uploadPath}"></path>` : ""}${downloadMaxMarker}${uploadMaxMarker}</svg><div class="history-hover-overlay" aria-label="Bandwidth history values"></div><div class="history-cursor" hidden></div><span class="history-hover-dot history-hover-download" hidden></span><span class="history-hover-dot history-hover-upload" hidden></span><div class="history-tooltip" hidden></div><div class="history-x" data-history-hours="${hours}">${labels}</div></div></div>`;
	}

	_networkQualityHistoryChart(latencyEntity, packetLossEntity) {
		if (!this._config.show_network_quality_history || (!latencyEntity && !packetLossEntity)) return "";
		const { hours, start, end } = this._getSharedHistoryWindow();
		const latency = this._groupBandwidthHistory(this._networkQualityHistory.series[latencyEntity] || [], start, end, 5 * 60 * 1000);
		const packetLoss = this._groupBandwidthHistory(this._networkQualityHistory.series[packetLossEntity] || [], start, end, 5 * 60 * 1000);
		if (!latency.length && !packetLoss.length) return "";
		const width = 600, height = 135;
		const latencyPeak = Math.max(0, ...latency.map((point) => point.value));
		const latencyTarget = Math.max(5, latencyPeak / .82);
		const latencyStep = latencyTarget <= 20 ? 5 : latencyTarget <= 50 ? 10 : Math.ceil(latencyTarget / 40) * 10;
		const latencyMax = Math.max(latencyStep, Math.ceil(latencyTarget / latencyStep) * latencyStep);
		const lossMax = 100;
		const x = (timestamp) => ((timestamp - start) / Math.max(end - start, 1)) * width;
		const latencyY = (value) => height - Math.min(Math.max(value / latencyMax, 0), 1) * height;
		const lossY = (value) => height - Math.min(Math.max(value / lossMax, 0), 1) * height;
		const latencyPath = this._historyPath(latency, start, end, latencyMax, width, height);
		const latencyArea = this._historyAreaPath(latencyPath, latency, start, end, width, height);
		const segments = [];
		for (let index = 1; index < latency.length; index += 1) {
			const previous = latency[index - 1], current = latency[index];
			const average = (previous.value + current.value) / 2;
			const tone = average > 30 ? "high" : average > 10 ? "medium" : "low";
			segments.push(`<line class="quality-latency-line ${tone}" x1="${x(previous.timestamp).toFixed(1)}" y1="${latencyY(previous.value).toFixed(1)}" x2="${x(current.timestamp).toFixed(1)}" y2="${latencyY(current.value).toFixed(1)}"></line>`);
		}
		const barWidth = Math.max(2, Math.min(8, width / Math.max(packetLoss.length, 1) * .65));
		const bars = packetLoss.map((point) => { const px = x(point.timestamp); const py = lossY(point.value); return `<rect class="quality-loss-bar" x="${(px - barWidth / 2).toFixed(1)}" y="${py.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${Math.max(0, height - py).toFixed(1)}" rx="1"></rect>`; }).join("");
		const tickCount = 4;
		const ticks = Array.from({ length: tickCount + 1 }, (_, index) => index / tickCount);
		const grid = ticks.map((ratio) => `<line class="history-horizontal-grid" x1="0" y1="${(height * ratio).toFixed(1)}" x2="${width}" y2="${(height * ratio).toFixed(1)}"></line>`).join("");
		const leftLabels = [...ticks].reverse().map((ratio) => `<span style="top:${(1-ratio)*100}%">${Math.round(latencyMax*ratio)}</span>`).join("");
		const rightLabels = [...ticks].reverse().map((ratio) => `<span style="top:${(1-ratio)*100}%">${Math.round(lossMax*ratio)}</span>`).join("");
		const marker = (series, maximum, cssClass, scaleMaximum, unit) => {
			if (!series.length || maximum <= 0 || this._config.show_history_maximums === false) return "";
			const point = series.reduce((best, item) => item.value > best.value ? item : best, series[0]);
			const px = x(point.timestamp), py = height - Math.min(Math.max(point.value / scaleMaximum, 0), 1) * height;
			const label = `${this._formatHistoryMaximum(maximum)}${unit}`;
			const labelWidth = Math.max(44, label.length * 7 + 14), labelX = Math.min(Math.max(px, labelWidth/2+2), width-labelWidth/2-2);
			const labelBottom = py - 9, labelHeight = 19, labelTop = labelBottom - labelHeight;
			return `<g class="quality-max-marker ${cssClass}"><line x1="${px.toFixed(1)}" y1="${labelBottom.toFixed(1)}" x2="${px.toFixed(1)}" y2="${(py-3).toFixed(1)}"></line><rect x="${(labelX-labelWidth/2).toFixed(1)}" y="${labelTop.toFixed(1)}" width="${labelWidth.toFixed(1)}" height="${labelHeight}" rx="4"></rect><text x="${labelX.toFixed(1)}" y="${(labelTop+14).toFixed(1)}" text-anchor="middle">${this._escape(label)}</text><circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="2.5"></circle></g>`;
		};
		const latencyMaxMarker = marker(latency, latencyPeak, "latency", latencyMax, "");
		const lossPeak = Math.max(0, ...packetLoss.map((point) => point.value));
		const lossMaxMarker = marker(packetLoss, lossPeak, "loss", lossMax, "%");
		this._networkQualityHoverData = { latency, packetLoss };
		return `<div class="network-quality-history"><div class="history-title"><span>${this._t("network_quality_history")}</span><small>${this._t("history_method")} · ${hours} h</small></div><div class="quality-chart" data-history-start="${start}" data-history-end="${end}" data-latency-max="${latencyMax}" data-loss-max="${lossMax}"><div class="quality-unit left">${this._t("latency")} (ms)</div><div class="quality-y left">${leftLabels}</div><svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none"><defs><linearGradient id="freebox-latency-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#43a047" stop-opacity=".42"></stop><stop offset="100%" stop-color="#43a047" stop-opacity=".06"></stop></linearGradient></defs>${grid}${latencyArea ? `<path class="quality-latency-area" d="${latencyArea}"></path>` : ""}${bars}${segments.join("")}${latencyMaxMarker}${lossMaxMarker}</svg><div class="quality-y right">${rightLabels}</div><div class="quality-unit right">${this._t("packet_loss")} (%)</div><div class="quality-hover-overlay"></div><div class="quality-cursor" hidden></div><span class="quality-hover-dot quality-hover-latency" hidden></span><span class="quality-hover-dot quality-hover-loss" hidden></span><div class="quality-tooltip" hidden></div><div class="history-x" data-history-hours="${hours}"></div></div></div>`;
	}

	_internetSection(e, info) {
		const latencyMetric = this._latencyMetric(e.latency);
		const metrics = [
			this._speedMetric(e.download, "download"),
			this._speedMetric(e.upload, "upload"),
			latencyMetric,
		].filter(Boolean).join("");
		const metricsClass = latencyMetric ? "internet-metrics" : "internet-metrics no-latency";
		const showLiveMetrics = this._config.show_live_metrics !== false;
		const liveMetrics = showLiveMetrics && metrics
			? `<div class="live-metrics-block"><div class="subsection-title">${this._t("live_bandwidth")}</div><div class="${metricsClass}">${metrics}</div></div>`
			: "";
		const historyChart = this._bandwidthHistoryChart(e.download, e.upload);
		const qualityHistoryChart = this._networkQualityHistoryChart(e.latency, e.packetLoss);
		setTimeout(() => this._loadBandwidthHistory(e.download, e.upload), 0);
		setTimeout(() => this._loadNetworkQualityHistory(e.latency, e.packetLoss), 0);
		return `<section class="panel internet-panel" data-section-key="internet">
			<div class="section-title"><ha-icon icon="mdi:speedometer"></ha-icon>${this._t("internet")}</div>
			${liveMetrics}
			${historyChart}
			${qualityHistoryChart}
		</section>`;
	}

	_getAdminConsoleUrl() {
		const configured = String(this._config?.admin_console_ip || "").trim();
		if (!configured) return "http://mafreebox.freebox.fr/";
		const candidate = configured.replace(/^https?:\/\//i, "").split(/[/?#]/, 1)[0].trim();
		const parts = candidate.split(".");
		const validIpv4 = parts.length === 4 && parts.every((part) => /^\d{1,3}$/.test(part) && Number(part) >= 0 && Number(part) <= 255);
		return validIpv4 ? `http://${candidate}/` : "http://mafreebox.freebox.fr/";
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
			${this._config.show_admin_console_button !== false ? `<a class="system-action admin-console-action" href="${this._escape(this._getAdminConsoleUrl())}" target="_blank" rel="noopener noreferrer" title="${this._t("admin_console")}" aria-label="${this._t("admin_console")}"><ha-icon icon="mdi:monitor-dashboard"></ha-icon></a>` : ""}
			${this._config.show_wifi_button !== false && e.wifi ? `<button type="button" class="system-action wifi ${this._hass.states[e.wifi]?.state === "on" ? "active" : ""}" data-action="wifi" data-entity="${this._escape(e.wifi)}" title="${this._t("wifi")}" aria-label="${this._t("wifi")}"><ha-icon icon="${this._hass.states[e.wifi]?.state === "on" ? "mdi:wifi" : "mdi:wifi-off"}"></ha-icon></button>` : ""}
			${this._config.show_reboot_button !== false && e.reboot ? `<button type="button" class="system-action reboot-action" data-action="reboot" data-entity="${this._escape(e.reboot)}" title="${this._t("reboot")}" aria-label="${this._t("reboot")}"><ha-icon icon="mdi:restart"></ha-icon></button>` : ""}
		</span>`;
		return `<section class="panel detail-panel system-info-panel" data-section-key="system">
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

		return `<section class="panel detail-panel hardware-panel" data-section-key="hardware">
			<div class="section-title"><ha-icon icon="mdi:memory"></ha-icon>${this._t("hardware")}</div>
			${this._config.show_storage_raid !== false && (storage.length || raid.length) ? this._hardwareGroup(this._t("disks"), "mdi:harddisk", [...storage.map((id) => this._hardwareTile(id, "storage")), ...raid.map((id) => this._hardwareTile(id, "raid"))].join("")) : ""}
			${this._config.show_fans !== false && fans.length ? this._hardwareGroup(this._t("fans"), "mdi:fan", fans.map((id) => this._hardwareTile(id, "fan")).join("")) : ""}
			${this._config.show_temperatures !== false && temperatures.length ? this._hardwareGroup(this._t("temperatures"), "mdi:thermometer", temperatures.map((id) => this._hardwareTile(id, "temperature")).join(""), "temperature-grid") : ""}
		</section>`;
	}

		_hardwareGroup(title, icon, tiles, gridClass = "") {
			return `<div class="hardware-group"><div class="hardware-group-title"><ha-icon icon="${icon}"></ha-icon>${title}</div><div class="hardware-grid ${gridClass}">${tiles}</div></div>`;
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
		return `<section class="panel detail-panel telephony-panel" data-section-key="telephony">
			<div class="section-title"><ha-icon icon="mdi:phone"></ha-icon>${this._t("telephony")}</div>
			<div class="telephony-row${resetButton ? "" : " no-reset"}">
				<button type="button" class="call-metric${hasCalls ? " has-calls" : ""}" data-more-info="${this._escape(e.missedCalls)}"><ha-icon icon="mdi:phone-missed"></ha-icon><div><strong>${this._escape(value)}</strong><span>${this._t("missed_calls")}</span></div></button>
				${resetButton}
			</div>
		</section>`;
	}

	_deviceTrackersSection(stats, connectedNames, awayNames = []) {
		const metrics = [
			this._config.show_connected_tile !== false ? ["mdi:home", "home_devices", stats.home, "home"] : null,
			this._config.show_disconnected_tile !== false ? ["mdi:map-marker-radius", "away_devices", stats.away, "away"] : null,
			this._config.show_disabled_tile !== false ? ["mdi:cancel", "disabled_devices", stats.disabled, "disabled"] : null,
			this._config.show_total_tile !== false ? ["mdi:devices", "total_devices", stats.total, "total"] : null,
		].filter(Boolean);
		const renderList = (key, titleKey, names, count, itemClass = "") => names.length
			? `<details class="connected-devices-list ${itemClass}" data-tracker-list="${key}"${this._trackerListsOpen[key] ? " open" : ""}><summary><span><ha-icon icon="mdi:format-list-bulleted"></ha-icon>${this._t(titleKey)}<em class="connected-count">${count}</em></span></summary><div class="connected-device-names">${names.map((item) => `<div><ha-icon icon="${this._escape(this._safeIcon(item.icon))}"></ha-icon><span>${this._escape(item.name)}</span></div>`).join("")}</div></details>`
			: "";
		const connectedList = this._config.show_connected_devices_list !== false
			? renderList("connected", "connected_devices_list", connectedNames, `${stats.home} / ${stats.home + stats.away}`)
			: "";
		const awayList = this._config.show_disconnected_devices_list !== false
			? renderList("away", "away_devices_list", awayNames, `${awayNames.length} / ${stats.home + stats.away}`, "away-devices-list")
			: "";
		return `<section class="panel detail-panel trackers-panel" data-section-key="devices">
			<div class="section-title"><ha-icon icon="mdi:devices"></ha-icon>${this._t("device_trackers")}</div>
			${metrics.length ? `<div class="tracker-metrics">
				${metrics.map(([icon, key, value, tone]) => `<div class="tracker-metric ${tone}"><ha-icon icon="${icon}"></ha-icon><div><strong>${value}</strong><span>${this._t(key)}</span></div></div>`).join("")}
			</div>` : ""}
			${connectedList}
			${awayList}
		</section>`;
	}

	_detail(icon, label, value, tone = "") {
		const toneClass = tone === true ? "danger" : tone;
		const iconClass = toneClass === "danger" ? "danger" : "";
		return `<div class="detail ${toneClass}"><ha-icon icon="${icon}" class="${iconClass}"></ha-icon><span>${label}</span><strong class="${toneClass}">${this._escape(value)}</strong></div>`;
	}

	_getDebugDeviceAttributes() {
		const devices = this._deviceRegistry.length
			? this._deviceRegistry
			: Object.values(this._hass?.devices || {});
		const selectedDeviceId = this._getSelectedDeviceId();
		const device = devices.find((item) => item.id === selectedDeviceId);
		if (!device) return [];
		const deviceName = device.name_by_user || device.name || device.id;
		return Object.entries(device)
			.filter(([key, value]) => value !== undefined && value !== null && value !== "" && !["id", "name", "name_by_user"].includes(key))
			.sort(([a], [b]) => a.localeCompare(b))
			.map(([key, value]) => ({ deviceName, key, value }));
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
		if (group === "configuration") {
			const deviceAttributes = this._getDebugDeviceAttributes();
			let currentDevice = "";
			for (const attribute of deviceAttributes) {
				if (attribute.deviceName !== currentDevice) {
					if (currentDevice) lines.push("");
					currentDevice = attribute.deviceName;
					lines.push(`[device_attr: ${currentDevice}]`);
				}
				lines.push(`${attribute.key}: ${typeof attribute.value === "object" ? JSON.stringify(attribute.value) : String(attribute.value)}`);
			}
			if (deviceAttributes.length) lines.push("");
		}
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
		const deviceAttributes = this._getDebugDeviceAttributes();
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
		const renderGroup = (key, title, icon, groupEntities, counters = "", showDefaultCount = true, prefix = "") => {
			if (!groupEntities.length && !prefix)
				return "";
			const open = Boolean(this._debugGroupsOpen[key]);
			const extraCount = key === "configuration" && deviceAttributes.length ? 1 : 0;
			const defaultCount = showDefaultCount ? `<small>${groupEntities.length + extraCount}</small>` : "";
			return `<details class="debug-group" data-debug-group="${key}" ${open ? "open" : ""}>
				<summary><span><ha-icon icon="${icon}"></ha-icon>${title}${defaultCount}${counters}</span><span class="debug-summary-actions"><button type="button" class="debug-export" data-debug-export="${key}" title="Save as text file" aria-label="Save ${title} as text file"><ha-icon icon="mdi:content-save-outline"></ha-icon></button><span class="debug-chevron" aria-hidden="true"></span></span></summary>
				<div class="debug-group-content">${prefix}${groupEntities.map(renderEntity).join("")}</div>
			</details>`;
		};

		const deviceAttributeHtml = deviceAttributes.length ? (() => {
			const groups = new Map();
			for (const attribute of deviceAttributes) {
				if (!groups.has(attribute.deviceName)) groups.set(attribute.deviceName, []);
				groups.get(attribute.deviceName).push(attribute);
			}
			return [...groups.entries()].map(([deviceName, attributes]) => `<div class="debug-device-attrs"><div class="debug-device-attrs-title"><code>device_attr</code><span>${this._escape(deviceName)}</span></div><div class="debug-attributes">${attributes.map(({ key, value }) => { const formatted = typeof value === "object" ? JSON.stringify(value) : String(value); return `<div class="debug-attribute"><code>${this._escape(key)}</code><span>${this._escape(formatted)}</span></div>`; }).join("")}</div></div>`).join("");
		})() : "";
		const trackerCounters = `<span class="tracker-count total" title="Total devices">${totalDevices}</span><span class="tracker-count enabled" title="Connected or disconnected devices">${enabledDevices}</span><span class="tracker-count disabled" title="Disabled devices">${disabledDevices}</span>`;
		return `<section class="panel debug-panel" data-section-key="debug">
			<div class="section-title"><ha-icon icon="mdi:bug-outline"></ha-icon>${this._t("debug")}</div>
			<div class="debug-list">
				${renderGroup("configuration", "Configuration", "mdi:cog-outline", configurationEntities, "", true, deviceAttributeHtml)}
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
			ha-card.light-theme { background:var(--ha-card-background, var(--card-background-color)); }
			/* Light theme uses the same visual hierarchy as dark theme. */
			ha-card.light-theme .panel { background:rgba(128,128,128,.08); }
			ha-card.light-theme .internet-metric,
			ha-card.light-theme .hardware-tile,
			ha-card.light-theme .hardware-tile.raid-status,
			ha-card.light-theme .call-metric,
			ha-card.light-theme .reset-calls,
			ha-card.light-theme .tracker-metric,
			ha-card.light-theme .connected-devices-list,
			ha-card.light-theme .debug-group { background:var(--ha-card-background, var(--card-background-color)); }
			ha-card.no-card-background { padding:0; background:transparent; border:0; box-shadow:none; }
			ha-card.light-theme.no-card-background .panel { background:var(--ha-card-background,var(--card-background-color)); }
			ha-card.light-theme.no-card-background .internet-metric,
			ha-card.light-theme.no-card-background .hardware-tile,
			ha-card.light-theme.no-card-background .hardware-tile.raid-status,
			ha-card.light-theme.no-card-background .call-metric,
			ha-card.light-theme.no-card-background .reset-calls,
			ha-card.light-theme.no-card-background .tracker-metric,
			ha-card.light-theme.no-card-background .connected-devices-list,
			ha-card.light-theme.no-card-background .debug-group { background:rgba(128,128,128,.08); }
			ha-card.dark-theme.no-card-background .panel { background:var(--ha-card-background,var(--card-background-color)); }
			ha-card.dark-theme.no-card-background .internet-metric,
			ha-card.dark-theme.no-card-background .hardware-tile,
			ha-card.dark-theme.no-card-background .hardware-tile.raid-status,
			ha-card.dark-theme.no-card-background .call-metric,
			ha-card.dark-theme.no-card-background .reset-calls,
			ha-card.dark-theme.no-card-background .tracker-metric,
			ha-card.dark-theme.no-card-background .connected-devices-list,
			ha-card.dark-theme.no-card-background .debug-group { background:color-mix(in srgb, var(--secondary-background-color) 72%, transparent); }
			header { display:flex; align-items:center; gap:10px; margin-bottom:20px; }
			.brand-icon { display:flex; align-items:center; justify-content:center; width:44px; height:44px; flex:0 0 44px; border:1px solid var(--divider-color); border-radius:14px; color:var(--freebox-accent); background:rgba(128,128,128,.08); }
			.brand-icon ha-icon { --mdc-icon-size:24px; }
			h2 { flex:1; min-width:0; margin:0; overflow:hidden; text-overflow:ellipsis; font-size:1.2em; font-weight:600; line-height:1.2; white-space:nowrap; }
			.system-title { justify-content:space-between; }
			.system-title > span { display:flex; align-items:center; gap:8px; }
			.system-actions { display:flex; align-items:center; gap:6px; margin-left:auto; }
			.system-action.admin-console-action { margin-right:6px; color:var(--freebox-accent); text-decoration:none; }
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
			.panel > .section-title { cursor:pointer; user-select:none; }
			.section-collapse-chevron { flex:0 0 auto; margin-left:auto; --mdc-icon-size:20px !important; color:var(--secondary-text-color) !important; transition:transform .18s ease; }
			.system-title .section-collapse-chevron { margin-left:6px; }
			.section-collapse-body { display:block; }
			.section-collapsed > .section-title { margin-bottom:0; }
			.section-collapsed > .section-collapse-body { display:none; }
			.section-collapsed > .section-title .section-collapse-chevron { transform:rotate(-90deg); }
			.system-actions { position:relative; z-index:2; }
			.subsection-title { margin-bottom:8px; color:var(--secondary-text-color); font-size:10px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; }
			.internet-metrics { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px; }
			.internet-metrics.no-latency { grid-template-columns:repeat(2,minmax(0,1fr)); }
			.bandwidth-history { box-sizing:border-box; min-height:213px; margin-top:12px; padding-top:12px; border-top:1px solid var(--divider-color); }
			.bandwidth-history.no-live-metrics { min-height:189px; margin-top:0; padding-top:0; border-top:0; }
			.history-title { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; color:var(--secondary-text-color); font-size:10px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; }
			.history-title small { font-size:9px; font-weight:600; }
			.history-chart { position:relative; display:grid; grid-template-columns:30px minmax(0,1fr); grid-template-rows:135px 24px; min-width:0; min-height:159px; margin-top:14px; }
			.history-chart svg { grid-column:2; width:100%; height:135px; overflow:hidden; }
			.history-hover-overlay { position:absolute; z-index:4; left:30px; right:0; top:0; height:135px; cursor:crosshair; }
			.history-cursor { position:absolute; z-index:3; top:0; height:135px; border-left:1px dashed var(--secondary-text-color); pointer-events:none; opacity:.75; }
			.history-hover-dot { position:absolute; z-index:5; width:7px; height:7px; border:2px solid var(--card-background-color); border-radius:50%; transform:translate(-50%,-50%); pointer-events:none; }
			.history-hover-download { background:#2196f3; }
			.history-hover-upload { background:#4caf50; }
			.history-tooltip { position:absolute; z-index:6; min-width:145px; padding:8px 10px; border:1px solid var(--divider-color); border-radius:7px; color:var(--primary-text-color); background:var(--ha-card-background,var(--card-background-color)); box-shadow:0 3px 12px rgba(0,0,0,.28); font-size:12px; line-height:1.35; pointer-events:none; }
			.history-tooltip strong, .history-tooltip span { display:block; }
			.history-tooltip strong { margin-bottom:5px; }
			.history-tooltip span { margin-top:3px; white-space:nowrap; }
			.history-tooltip i { display:inline-block; width:7px; height:7px; margin-right:5px; border-radius:50%; }
			.history-tooltip i.download { background:#2196f3; }
			.history-tooltip i.upload { background:#4caf50; }
			.history-horizontal-grid { stroke:var(--divider-color); stroke-width:1; stroke-dasharray:3 5; opacity:.8; vector-effect:non-scaling-stroke; }
			ha-card.light-theme .history-x,
			ha-card.light-theme .history-y,
			ha-card.light-theme .history-unit { color:#202124; }
			ha-card.light-theme .history-horizontal-grid { stroke:rgba(32,33,36,.30); opacity:1; }
			ha-card.dark-theme .history-x,
			ha-card.dark-theme .history-y,
			ha-card.dark-theme .history-unit { color:#fff; }
			ha-card.dark-theme .history-horizontal-grid { stroke:rgba(255,255,255,.36); opacity:1; }
			.history-chart .history-line { fill:none; stroke-width:1.15; stroke-linejoin:round; stroke-linecap:round; vector-effect:non-scaling-stroke; }
			.history-chart .history-area { stroke:none; }
			.history-download-area { fill:url(#freebox-download-fill); }
			.history-upload-area { fill:url(#freebox-upload-fill); }
			.history-download { stroke:#2196f3; }
			.history-upload { stroke:#4caf50; }
			.history-max-marker { pointer-events:none; }
			.history-max-marker .history-max-point { stroke:none; }
			.history-max-marker.download .history-max-point { fill:#2196f3; }
			.history-max-marker.upload .history-max-point { fill:#4caf50; }
			.history-max-marker .history-max-stem { stroke-width:1; stroke-dasharray:none; opacity:.9; vector-effect:non-scaling-stroke; }
			.history-max-marker.download .history-max-stem { stroke:#2196f3; }
			.history-max-marker.upload .history-max-stem { stroke:#4caf50; }
			.history-max-marker .history-max-label-bg { stroke:none; opacity:.96; }
			.history-max-marker.download .history-max-label-bg { fill:#2196f3; }
			.history-max-marker.upload .history-max-label-bg { fill:#4caf50; }
			.history-max-marker .history-max-label { fill:#fff; font-size:12px; font-weight:400; dominant-baseline:auto; }
			.history-max-marker.upload .history-max-label { fill:#000; }
			.history-unit { position:absolute; left:-8px; top:0; z-index:1; display:flex; align-items:center; justify-content:center; width:11px; height:135px; color:var(--primary-text-color); font-size:11px; font-weight:400; line-height:1; letter-spacing:1px; writing-mode:vertical-rl; transform:rotate(180deg); white-space:nowrap; }
			.history-y { position:relative; height:135px; overflow:visible; color:var(--primary-text-color); font-size:10px; font-weight:400; text-align:right; font-family: Helvetica, Arial, sans-serif; }
			.history-y span { position:absolute; right:7px; line-height:1; transform:translateY(-50%); white-space:nowrap; }
			.history-x { position:relative; grid-column:2; height:22px; overflow:visible; color:var(--primary-text-color); font-size:12px; font-weight:400; font-family: Helvetica, Arial, sans-serif; }
			.history-x span { position:absolute; top:7px; transform:translateX(-50%); white-space:nowrap; }
			.history-x span i { position:absolute; left:calc(50% + var(--tick-offset, 0px)); top:-7px; width:1px; height:4px; background:currentColor; opacity:.85; transform:translateX(-50%); }
			.history-x span[hidden] { display:none; }
			.history-x-measure { visibility:hidden; left:0 !important; transform:none !important; }
			@media (max-width:520px) { .history-x { font-size:11px; } .history-chart { grid-template-columns:29px minmax(0,1fr); } .history-hover-overlay { left:29px; } .history-unit { left:-8px; font-size:10px; } .history-y span { right:7px; } }
			.history-empty { display:grid; place-items:center; box-sizing:border-box; min-height:173px; margin-top:14px; color:var(--secondary-text-color); font-size:11px; }
			.network-quality-history { margin-top:14px; padding-top:12px; border-top:1px solid var(--divider-color); }
			.quality-chart { position:relative; display:grid; grid-template-columns:0 30px minmax(0,1fr) 24px 11px; grid-template-rows:135px 24px; min-width:0; min-height:159px; margin-top:14px; }
			.quality-chart svg { grid-column:3; width:100%; height:135px; overflow:hidden; }
			.quality-unit { display:flex; align-items:center; justify-content:center; height:135px; color:var(--primary-text-color); font-family:Helvetica,Arial,sans-serif; font-size:11px; font-weight:400; line-height:1; letter-spacing:1px; writing-mode:vertical-rl; transform:rotate(180deg); white-space:nowrap; }
			.quality-unit.left { position:absolute; left:-8px; top:0; z-index:1; width:11px; grid-column:auto; } .quality-unit.right { position:relative; right:-8px; grid-column:5; transform:none; }
			.quality-y { position:relative; height:135px; overflow:visible; color:var(--primary-text-color); font-family:Helvetica,Arial,sans-serif; font-size:10px; font-weight:400; }
			.quality-y.left { grid-column:2; text-align:right; } .quality-y.right { grid-column:4; text-align:left; }
			.quality-y span { position:absolute; line-height:1; transform:translateY(-50%); white-space:nowrap; } .quality-y.left span { right:7px; } .quality-y.right span { left:5px; }
			.quality-latency-area { fill:url(#freebox-latency-fill); stroke:none; }
			.quality-latency-line { stroke-width:1.15; stroke-linecap:round; vector-effect:non-scaling-stroke; } .quality-latency-line.low { stroke:#43a047; } .quality-latency-line.medium { stroke:#f59e0b; } .quality-latency-line.high { stroke:#e53935; }
			.quality-loss-bar { fill:#c62828; opacity:.88; }
			.quality-chart .history-x { grid-column:3; }
			.quality-hover-overlay { position:absolute; z-index:4; left:30px; right:35px; top:0; height:135px; cursor:crosshair; }
			.quality-cursor { position:absolute; z-index:3; top:0; height:135px; border-left:1px dashed var(--secondary-text-color); pointer-events:none; opacity:.75; }
			.quality-hover-dot { position:absolute; z-index:5; width:7px; height:7px; border:2px solid var(--card-background-color); border-radius:50%; transform:translate(-50%,-50%); pointer-events:none; }
			.quality-hover-latency { background:#43a047; } .quality-hover-loss { background:#c62828; }
			.quality-tooltip { position:absolute; z-index:6; top:6px; min-width:150px; padding:8px 10px; border:1px solid var(--divider-color); border-radius:7px; color:var(--primary-text-color); background:var(--ha-card-background,var(--card-background-color)); box-shadow:0 3px 12px rgba(0,0,0,.28); font-size:12px; line-height:1.35; pointer-events:none; }
			.quality-tooltip strong,.quality-tooltip span { display:block; } .quality-tooltip strong { margin-bottom:5px; } .quality-tooltip span { margin-top:3px; white-space:nowrap; }
			.quality-tooltip i { display:inline-block; width:7px; height:7px; margin-right:5px; border-radius:50%; } .quality-tooltip i.latency { background:#43a047; } .quality-tooltip i.loss { background:#c62828; }
			.quality-max-marker { pointer-events:none; } .quality-max-marker line { stroke-width:1; vector-effect:non-scaling-stroke; } .quality-max-marker rect { opacity:.96; } .quality-max-marker text { fill:#fff; font-size:12px; font-weight:400; } .quality-max-marker.latency text { fill:#000; } .quality-max-marker.latency line,.quality-max-marker.latency circle { stroke:#43a047; fill:#43a047; } .quality-max-marker.latency rect { fill:#43a047; } .quality-max-marker.loss line,.quality-max-marker.loss circle { stroke:#c62828; fill:#c62828; } .quality-max-marker.loss rect { fill:#c62828; }
			ha-card.light-theme .quality-y, ha-card.light-theme .quality-unit { color:#202124; } ha-card.dark-theme .quality-y, ha-card.dark-theme .quality-unit { color:#fff; }
			@media (max-width:520px) { .quality-chart { grid-template-columns:0 29px minmax(0,1fr) 23px 10px; } .quality-unit { font-size:10px; } .quality-unit.left { left:-8px; width:11px; } .quality-unit.right { right:-8px; } .quality-y { font-size:10px; } .quality-hover-overlay { left:29px; right:33px; } }
			.internet-metric { position:relative; display:grid; grid-template-columns:40px minmax(0,1fr); grid-template-rows:min-content min-content; column-gap:8px; align-items:center; min-width:0; padding:7px 8px; border:1px solid var(--divider-color); border-radius:12px; color:var(--primary-text-color); background:var(--card-background-color); font:inherit; text-align:left; }
			.internet-metric svg { grid-row:1 / 3; width:40px; height:40px; transform:rotate(-90deg); }
			.metric-icon { position:absolute; left:8px; top:calc(50% - 3px); display:flex; align-items:center; justify-content:center; width:40px; height:40px; transform:translateY(-50%); pointer-events:none; }
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
			.hardware-grid:not(.temperature-grid):has(.hardware-tile:only-child) { grid-template-columns:max-content; }
			.hardware-grid:not(.temperature-grid):has(.hardware-tile:only-child) .hardware-tile { width:max-content; min-width:105px; }
			.hardware-grid.temperature-grid { grid-template-columns:repeat(3,minmax(0,1fr)); }
			.hardware-grid.temperature-grid:has(.hardware-tile:only-child) { grid-template-columns:max-content; }
			.hardware-grid.temperature-grid:has(.hardware-tile:only-child) .hardware-tile { width:max-content; min-width:105px; }
			.hardware-grid.temperature-grid:has(.hardware-tile:nth-child(2):last-child) { grid-template-columns:repeat(2,minmax(0,1fr)); }
			@media (max-width:520px) { .hardware-grid.temperature-grid:not(:has(.hardware-tile:only-child)) { grid-template-columns:repeat(2,minmax(0,1fr)); } }
			@media (max-width:360px) { .hardware-grid.temperature-grid:not(:has(.hardware-tile:only-child)) { grid-template-columns:1fr; } }
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
			.debug-device-attrs { padding:10px 0; border-top:1px solid var(--divider-color); }
			.debug-device-attrs:first-child { border-top:0; }
			.debug-device-attrs-title { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:7px; }
			.debug-device-attrs-title code { color:var(--freebox-accent); font-family:monospace; font-size:12px; font-weight:700; }
			.debug-device-attrs-title span { min-width:0; overflow:hidden; color:var(--secondary-text-color); font-size:11px; text-overflow:ellipsis; white-space:nowrap; }
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
	static SECTION_ICONS = {
		general: "mdi:cog-outline",
		layout: "mdi:view-dashboard-edit-outline",
	};

	static VISIBILITY_FIELDS = new Set([
		"show_internet",
		"show_system",
		"show_hardware",
		"show_storage_raid",
		"show_fans",
		"show_temperatures",
		"show_debug",
		"show_header",
		"show_card_background",
		"show_wifi_button",
		"show_reboot_button",
		"show_admin_console_button",
		"show_bandwidth_history",
		"show_network_quality_history",
		"show_live_metrics",
		"show_history_maximums",
		"show_devices",
		"show_connected_tile",
		"show_disconnected_tile",
		"show_disabled_tile",
		"show_total_tile",
		"show_connected_devices_list",
		"show_disconnected_devices_list",
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
		this._layoutSectionsOpen = new Set();
		this._draggedSectionKey = "";
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
		return resolveLanguage(this._hass, this._config?.language || "auto");
	}

	_et(key) {
		return translate(this._getEditorLanguage(), `editor.${key}`);
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
		return order.map((key) => {
			const section = byKey.get(key);
			const hasOptions = key === "internet" || key === "system" || key === "hardware" || key === "devices";
			const options = key === "internet"
				? `<div class="section-suboptions">
					<div class="option-group">
						<div class="option-group-title"><ha-icon icon="mdi:gauge"></ha-icon><span>${this._et("live_metrics")}</span></div>
						<div class="option-group-content live-options">
							${this._switchRow("show_live_metrics", this._et("show_live_metrics"))}
							<div class="bandwidth-limits"><label>${this._et("download_bandwidth")}<input data-config="download_bandwidth" type="number" min="0" step="1" placeholder="10000"></label><label>${this._et("upload_bandwidth")}<input data-config="upload_bandwidth" type="number" min="0" step="1" placeholder="900"></label></div>
							<div class="bandwidth-latency">${this._entitySelector("latency_entity", this._et("latency_entity"), "sensor")}${this._entitySelector("packet_loss_entity", this._et("packet_loss_entity"), "sensor")}</div>
						</div>
					</div>
					<div class="option-group">
						<div class="option-group-title"><ha-icon icon="mdi:chart-line"></ha-icon><span>${this._et("history_settings")}</span></div>
						<div class="option-group-content history-options">
							<div class="history-primary">${this._switchRow("show_bandwidth_history", this._et("show_bandwidth_history"))}${this._switchRow("show_network_quality_history", this._et("show_network_quality_history"))}<label>${this._et("history_hours")}<input data-config="history_hours" type="number" min="1" max="168" step="1" placeholder="24"></label></div>
							<div class="history-secondary">${this._switchRow("show_history_maximums", this._et("show_history_maximums"))}</div>
						</div>
					</div>
				</div>`
				: key === "system"
					? `<div class="section-suboptions">${this._switchRow("show_admin_console_button", this._et("show_admin_console_button"))}<label>${this._et("admin_console_ip")}<input data-config="admin_console_ip" type="text" inputmode="decimal" autocomplete="off" placeholder="mafreebox.freebox.fr"></label>${this._switchRow("show_wifi_button", this._et("show_wifi_button"))}${this._switchRow("show_reboot_button", this._et("show_reboot_button"))}</div>`
				: key === "hardware"
					? `<div class="section-suboptions"><div class="option-group-content">${this._switchRow("show_storage_raid", this._et("show_storage_raid"))}${this._switchRow("show_fans", this._et("show_fans"))}${this._switchRow("show_temperatures", this._et("show_temperatures"))}</div></div>`
					: key === "devices"
						? `<div class="section-suboptions"><div class="option-group-content">${this._switchRow("show_connected_tile", this._et("show_connected_tile"))}${this._switchRow("show_disconnected_tile", this._et("show_disconnected_tile"))}${this._switchRow("show_disabled_tile", this._et("show_disabled_tile"))}${this._switchRow("show_total_tile", this._et("show_total_tile"))}${this._switchRow("show_connected_devices_list", this._et("show_connected_devices_list"))}${this._switchRow("show_disconnected_devices_list", this._et("show_disconnected_devices_list"))}</div></div>`
						: "";
			return `<div class="section-order-item" data-section-key="${key}"><div class="section-order-row${hasOptions ? " expandable" : ""}" ${hasOptions ? `data-section-expand="${key}" role="button" tabindex="0" aria-expanded="${this._layoutSectionsOpen.has(key)}"` : ""}><span class="drag-handle" draggable="true" title="${this._et("drag_section")}" aria-label="${this._et("drag_section")}" tabindex="0"><ha-icon icon="mdi:drag"></ha-icon></span><ha-icon class="section-icon" icon="${section.icon}"></ha-icon><span class="section-label">${section.label}</span><ha-switch data-config="${section.visibility}"></ha-switch>${hasOptions ? `<span class="section-expand" aria-hidden="true"><ha-icon icon="mdi:chevron-down"></ha-icon></span>` : `<span class="section-expand-spacer"></span>`}</div>${hasOptions ? `<div class="section-options${this._layoutSectionsOpen.has(key) ? " open" : ""}">${options}</div>` : ""}</div>`;
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
			input { box-sizing:border-box; width:100%; min-height:42px; padding:8px 10px; color:var(--primary-text-color); background:var(--ha-card-background,var(--card-background-color)); border:1px solid var(--divider-color); border-radius:8px; font:inherit; }
			ha-selector { display:block; width:100%; }
			.switch-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); column-gap:24px; }
			.switch-row { display:flex; align-items:center; justify-content:space-between; gap:16px; min-height:42px; }
			.switch-label { color:var(--primary-text-color); font-size:14px; }
			.section-order-list { display:grid; gap:8px; }
			.section-order-item { display:grid; overflow:hidden; border:1px solid var(--divider-color); border-radius:10px; background:var(--ha-card-background,var(--card-background-color)); transition:border-color .16s ease, opacity .16s ease, transform .16s ease; }
			.section-order-item.dragging { opacity:.45; }
			.section-order-item.drag-over { border-color:var(--primary-color); transform:translateY(1px); }
			.section-order-row { display:grid; grid-template-columns:28px 24px minmax(0,1fr) auto 32px; align-items:center; gap:8px; min-height:48px; padding:5px 8px; }
			.drag-handle { display:flex; align-items:center; justify-content:center; width:28px; height:34px; color:var(--secondary-text-color); cursor:grab; touch-action:none; }
			.drag-handle:active { cursor:grabbing; }
			.drag-handle ha-icon, .section-icon { --mdc-icon-size:18px; }
			.section-icon { color:var(--secondary-text-color); }
			.section-label { min-width:0; overflow:hidden; color:var(--primary-text-color); font-size:14px; text-overflow:ellipsis; white-space:nowrap; }
			.section-order-row.expandable { cursor:pointer; }
			.section-order-row.expandable:hover { background:color-mix(in srgb, var(--secondary-background-color) 55%, transparent); }
			.section-expand { display:flex; align-items:center; justify-content:center; width:32px; height:32px; color:var(--secondary-text-color); pointer-events:none; }
			.section-expand ha-icon { --mdc-icon-size:19px; transition:transform .18s ease; }
			.section-order-row[aria-expanded="true"] .section-expand ha-icon { transform:rotate(180deg); }
			.section-expand-spacer { width:32px; }
			.section-options { display:none; border-top:1px solid var(--divider-color); background:var(--secondary-background-color); }
			.section-options.open { display:block; }
			.section-suboptions { display:grid; gap:10px; padding:12px; }
			.option-group { overflow:hidden; border:1px solid var(--divider-color); border-radius:9px; background:var(--ha-card-background,var(--card-background-color)); }
			.option-group-title { display:flex; align-items:center; gap:7px; padding:8px 10px; border-bottom:1px solid var(--divider-color); color:var(--secondary-text-color); font-size:11px; font-weight:700; letter-spacing:.03em; text-transform:uppercase; }
			.option-group-title ha-icon { --mdc-icon-size:16px; color:var(--primary-color); }
			.option-group-content { display:grid; gap:12px; padding:10px; }
			.live-options { gap:10px; }
			.bandwidth-latency { padding-top:10px; border-top:1px solid var(--divider-color); }
			.history-options { display:grid; grid-template-columns:1fr; gap:0; padding:0; }
			.history-primary { display:grid; grid-template-columns:1fr; gap:8px; padding:10px 10px 4px; }
			.history-primary .switch-row { align-self:auto; }
			.history-primary label { width:100%; }
			.history-secondary { padding:4px 10px 6px; }
			.bandwidth-latency, .bandwidth-latency .field { min-width:0; width:100%; }
			.bandwidth-latency ha-entity-picker { display:block; width:100%; min-width:0; }
			.bandwidth-limits { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
			.section-suboptions .switch-row { min-height:36px; }
			.section-suboptions label { gap:4px; }
			.section-suboptions input { min-height:36px; }
			.layout-options { display:grid; gap:4px; padding-bottom:10px; border-bottom:1px solid var(--divider-color); }
			ha-switch { flex-shrink:0; }
			@media (max-width:600px) { .grid, .switch-grid, .bandwidth-limits { grid-template-columns:1fr; } }
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
					...Object.entries(TRANSLATIONS).map(([code, language]) => ({ value: code, label: language.meta?.name || code })),
				] } };
			} else {
				selector.selector = { entity: { filter: { domain: selector.dataset.filter } } };
			}
			selector.addEventListener("value-changed", (event) => this._valueChanged(event));
		});
	}

	_findDefaultLatencyEntity() {
		if (!this._hass) return "";
		return Object.values(this._hass.entities || {})
			.filter((entity) => entity?.platform === "ping" && !entity.disabled_by && entity.entity_id?.startsWith("sensor."))
			.filter((entity) => {
				const state = this._hass.states[entity.entity_id];
				if (!state) return false;
				const name = [entity.entity_id, entity.name, entity.original_name, state.attributes?.friendly_name]
					.filter(Boolean).join(" ").toLowerCase();
				return /average|moyen/.test(name);
			})
			.map((entity) => entity.entity_id)
			.sort((a, b) => a.localeCompare(b))[0] || "";
	}

	_findDefaultPacketLossEntity() {
		if (!this._hass) return "";
		return Object.keys(this._hass.states || {}).filter((entityId) => entityId.startsWith("sensor.")).filter((entityId) => { const state=this._hass.states[entityId]; const text=`${entityId} ${state?.attributes?.friendly_name||""}`.toLowerCase(); return /packet[_\s-]?loss|perte[_\s-]?de[_\s-]?paquets?/.test(text); }).sort((a,b)=>a.localeCompare(b))[0] || "";
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
		const list = this.querySelector(".section-order-list");
		if (!list) return;

		const toggleSection = (row) => {
			const key = row.dataset.sectionExpand;
			if (!key) return;
			const options = row.closest(".section-order-item")?.querySelector(".section-options");
			const open = !this._layoutSectionsOpen.has(key);
			if (open) this._layoutSectionsOpen.add(key); else this._layoutSectionsOpen.delete(key);
			row.setAttribute("aria-expanded", String(open));
			options?.classList.toggle("open", open);
		};

		this.querySelectorAll("[data-section-expand]").forEach((row) => {
			row.addEventListener("click", (event) => {
				if (event.target.closest("ha-switch, .drag-handle, input, ha-entity-picker")) return;
				toggleSection(row);
			});
			row.addEventListener("keydown", (event) => {
				if ((event.key === "Enter" || event.key === " ") && !event.target.closest("ha-switch, .drag-handle")) {
					event.preventDefault();
					toggleSection(row);
				}
			});
		});

		const items = [...list.querySelectorAll(".section-order-item")];
		items.forEach((item) => {
			const handle = item.querySelector(".drag-handle");
			handle?.addEventListener("dragstart", (event) => {
				this._draggedSectionKey = item.dataset.sectionKey;
				item.classList.add("dragging");
				event.dataTransfer.effectAllowed = "move";
				event.dataTransfer.setData("text/plain", this._draggedSectionKey);
			});
			handle?.addEventListener("dragend", () => {
				this._draggedSectionKey = "";
				items.forEach((candidate) => candidate.classList.remove("dragging", "drag-over"));
			});
			item.addEventListener("dragover", (event) => {
				if (!this._draggedSectionKey) return;
				event.preventDefault();
				if (item.dataset.sectionKey !== this._draggedSectionKey) item.classList.add("drag-over");
				event.dataTransfer.dropEffect = "move";
			});
			item.addEventListener("dragleave", () => item.classList.remove("drag-over"));
			item.addEventListener("drop", (event) => {
				if (!this._draggedSectionKey) return;
				event.preventDefault();
				const sourceKey = this._draggedSectionKey;
				const targetKey = item.dataset.sectionKey;
				if (!sourceKey || sourceKey === targetKey) return;
				const defaults = this._getSectionDefinitions().map((section) => section.key);
				const configured = Array.isArray(this._config?.section_order) ? this._config.section_order : [];
				const order = [...new Set([...configured, ...defaults])].filter((key) => defaults.includes(key));
				const sourceIndex = order.indexOf(sourceKey);
				if (sourceIndex < 0 || !order.includes(targetKey)) return;
				order.splice(sourceIndex, 1);
				const targetIndex = order.indexOf(targetKey);
				const rect = item.getBoundingClientRect();
				const after = event.clientY > rect.top + rect.height / 2;
				order.splice(targetIndex + (after ? 1 : 0), 0, sourceKey);
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
				element.value = value ?? (key === "latency_entity" ? this._findDefaultLatencyEntity() : key === "packet_loss_entity" ? this._findDefaultPacketLossEntity() : "");
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
	documentationURL: "https://github.com/KroFR/freebox-ha-card",
});

console.info(`%c FREEBOX-CARD %c v${CARD_VERSION} `, "color:white;background:#d71920;font-weight:700", "color:#d71920;background:#f5f5f5");
