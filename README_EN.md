[![HACS Default](https://img.shields.io/badge/HACS-Default-green.svg)](https://hacs.xyz/)
[![GitHub Release](https://img.shields.io/github/v/release/KroFR/freebox-ha-card)](https://github.com/KroFR/freebox-ha-card/releases)
[![Home Assistant](https://img.shields.io/badge/Home_Assistant-2024.11%2B-blue)](https://www.home-assistant.io/)
[![HACS Validation](https://github.com/KroFR/freebox-ha-card/actions/workflows/hacs.yaml/badge.svg)](https://github.com/KroFR/freebox-ha-card/actions/workflows/hacs.yaml)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

# 🛜 Freebox Card

[Version Française](README.md)

A responsive Lovelace card for [Home Assistant](https://www.home-assistant.io/) designed for the [official Freebox](https://www.home-assistant.io/integrations/freebox) integration. It brings bandwidth, system, hardware, telephony, and device tracker information into one configurable card.

### Bandwidth

| Light Theme | Dark Theme |
|---|---|
| <img width="500" height="588" alt="image" src="https://github.com/user-attachments/assets/ee2056cf-e0e0-4fc9-9249-7b0012b5911d" /> | <img width="504" height="589" alt="image" src="https://github.com/user-attachments/assets/5e56d01c-eaf4-4629-a7e6-476943f252e8" /> |

### System

| Light Theme | Dark Theme |
|---|---|
| <img width="501" height="531" alt="image" src="https://github.com/user-attachments/assets/ec7cc11a-c97d-4623-96c2-1f3d83b648f1" /> | <img width="504" height="534" alt="image" src="https://github.com/user-attachments/assets/b9037c6e-a59b-4b27-9570-53254df2d001" /> |

### Hardware

| Light Theme | Dark Theme |
|---|---|
| <img width="503" height="443" alt="image" src="https://github.com/user-attachments/assets/25b31074-7110-4204-90a7-734b68da3e79" /> | <img width="506" height="445" alt="image" src="https://github.com/user-attachments/assets/d783b4a2-cb6c-429d-892f-b5f258c226c9" /> |

### Telephony

| Light Theme | Dark Theme |
|---|---|
| <img width="501" height="122" alt="image" src="https://github.com/user-attachments/assets/41117449-5390-412f-9d4d-a661a343762a" /> | <img width="503" height="123" alt="image" src="https://github.com/user-attachments/assets/53c8b875-2704-439f-a561-9e4ab53ebccc" /> |

### Devices

| Light Theme | Dark Theme |
|---|---|
| <img width="501" height="221" alt="image" src="https://github.com/user-attachments/assets/1e5142ff-b99f-4f70-996d-937514d88f7d" /> | <img width="504" height="223" alt="image" src="https://github.com/user-attachments/assets/6648c416-73ff-4a6e-998c-247a3607853d" /> |

## ✨ Features

- Automatic Freebox and latency sensor detection via the Ping integration
- Download, upload, latency, and bandwidth history monitoring
- System information: WAN, model, hardware, firmware, network, and uptime
- Hardware monitoring: storage, RAID, fans, and temperatures, with history mini-graphs for fans and temperatures
- Wi-Fi control, confirmed Freebox reboot, and direct Freebox OS access with an optional IP address
- Telephony with missed call monitoring and reset
- Connected, disconnected, and disabled device tracking with detailed lists
- Customizable interface with reorderable sections, visibility controls, and optional header and background
- Three display modes: Standard, Single section, and Compact
- Responsive visual editor with light/dark themes, English and French support, and diagnostic tools

## ℹ️ Requirements

- Home Assistant 2024.11 or newer recommended
- Official Home Assistant [Freebox integration](https://www.home-assistant.io/integrations/freebox) configured
- A Freebox device with a `device_tracker.freebox` or `device_tracker.freebox_*` entity
- Optional: [Ping (ICMP)](https://www.home-assistant.io/integrations/ping) integration configured for automatic latency detection and display

Some features depend on the entities exposed by your Freebox model and integration version. Unavailable options are automatically disabled in the visual editor, and their corresponding actions are not displayed on the card.

## 📦 Installation

### Marketplace (HA 2026.11 and newer)

[![Open your Home Assistant instance and open the Marketplace.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=KroFR&repository=freebox-ha-card)

or

1. Open the Marketplace → search for **Freebox Card**
2. Click it → install
3. The Marketplace installs the plugin into www/community/freebox-ha-card/ and adds it as a dashboard resource

### HACS (HA before 2026.11)

1. Install HACS if you don't have it already
2. Open HACS in Home Assistant
3. Search for **Freebox Card**
4. Click the download button

### Manual

1. Download `freebox-card.js` from this repository.
2. Copy the file to `/config/www/freebox-card.js`.
3. Open **Settings > Dashboards > Resources**.
4. Add `/local/freebox-card.js` as a **JavaScript module**.
5. Refresh the browser.

## ➕ Adding the card

1. Edit a Home Assistant dashboard.
2. Select **Add card**.
3. Search for **Freebox Card**.
4. Select the detected Freebox device and configure the card through the visual editor.

The card attempts to select the Freebox automatically by locating a `device_tracker.freebox` entity associated with a device whose name, model, or manufacturer contains `Freebox`.

## 🧩 Display modes

The card provides three modes, selectable with `layout` or from the visual editor:

- **Standard** (`standard`): displays all sections vertically. Sections remain reorderable and collapsible.
- **Single section** (`single`): displays one section at a time with a navigation menu. The last selected section is remembered for each Home Assistant user.

| Light Theme | Dark Theme |
|---|---|
| <img width="503" height="748" alt="image" src="https://github.com/user-attachments/assets/8112567c-fe00-4d02-9afb-db562add76b7" /> | <img width="504" height="750" alt="image" src="https://github.com/user-attachments/assets/eee07e22-f241-4ff2-ac53-d11252e29e69" /> |

- **Compact** (`compact`): displays essential information in a reduced format, with real-time download, upload, and latency values and their sparklines, followed by a summary of Internet status, uptime, connected devices, used storage, missed calls, and CPU temperature when those values are available.

| Light Theme | Dark Theme |
|---|---|
| <img width="502" height="269" alt="image" src="https://github.com/user-attachments/assets/f38f2d76-16af-4920-9068-40d387d43389" /> | <img width="504" height="273" alt="image" src="https://github.com/user-attachments/assets/4194c7ac-0411-426d-9c40-f3ee97fee8f3" /> |

In Compact mode, sparklines use the period defined by `history_hours`. Aggregation adapts to the selected duration to preserve readability. The status summary automatically changes from three to two, then one column based on the card’s actual width.

The visual editor hides settings that have no effect in the selected mode. In Compact mode, the **Header buttons**, **Live metrics**, and **Status information** groups are collapsible. Options unsupported by the selected Freebox remain disabled with an explanatory message.

## 📶 Wi-Fi and reboot controls

The **Wi-Fi** and **Reboot** buttons let you control your Freebox directly from the card.

To prevent accidental actions, confirmation is required before changing the Wi-Fi state or rebooting the Freebox.

For these controls to work, the Freebox integration must have the **“Modification des réglages de la Freebox”** permission enabled.

Enable this permission in Freebox OS:

**Paramètres de la Freebox → Gestion des accès → Applications → Home Assistant → Modification des réglages de la Freebox**

See the [official Freebox integration documentation](https://www.home-assistant.io/integrations/freebox) for more information.

## 📈 History charts

The **Bandwidth** section includes two charts: download and upload history, plus latency and packet loss history.

Bandwidth values are automatically normalized regardless of the unit configured in Home Assistant. Real-time metrics are displayed in Mbit/s or Gbit/s, while history charts use Mbit/s.

The charts:

- Use Home Assistant history data from the available download, upload, latency, and packet loss sensors
- Display the last 24 hours by default
- Support a configurable period from 1 to 168 hours
- Group data into 5-minute periods and display the average for each period
- Use responsive axes and adaptive scaling for desktop and mobile readability
- Show Download and Upload, or Latency and Packet Loss values on hover
- Support optional maximum value indicators directly on the charts
- Can be disabled independently from the **Bandwidth** section

The history settings are available under **Card layout > Bandwidth** in the visual editor.

## 🌐 Freebox OS access

The **System** section provides a button that opens the Freebox OS administration interface.

- Without a custom setting, the button uses `http://mafreebox.freebox.fr/`
- If a VPN or DNS configuration blocks that address, set `admin_console_ip` to a local IPv4 address, for example `192.168.1.254`
- The Freebox OS button can be hidden with `show_admin_console_button: false`

## ⚙️ Configuration

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `type` | string | yes | — | `custom:freebox-card` |
| `device_id` | string | no | auto-detected | Home Assistant device ID of the Freebox |
| `name` | string | no | `Freebox` | Card title |
| `language` | string | no | `auto` | `auto`, `en`, or `fr` |
| `layout` | string | no | `standard` | Display mode: `standard`, `single`, or `compact` |
| `latency_entity` | string | no | auto-detected | Latency sensor. If not configured, the card automatically selects the first Ping integration sensor containing `average` or `moyen` in its name |
| `download_bandwidth` | number | no | — | Maximum download bandwidth in Mbit/s, used to calculate the gauge percentage |
| `upload_bandwidth` | number | no | — | Maximum upload bandwidth in Mbit/s, used to calculate the gauge percentage |
| `show_live_metrics` | boolean | no | `true` | Show real-time bandwidth metrics; controls Download and Upload in Compact mode |
| `show_bandwidth_history` | boolean | no | `true` | Show the bandwidth history chart |
| `show_network_quality_history` | boolean | no | `true` | Show latency and packet loss history; controls the Latency tile in Compact mode |
| `show_history_maximums` | boolean | no | `true` | Show maximum values on the chart |
| `history_hours` | number | no | `24` | Number of hours displayed in network history charts and sparklines, from 1 to 168 |
| `hardware_history_hours` | number | no | `24` | Number of hours displayed in temperature and fan mini-graphs, from 1 to 168 |
| `section_order` | list | no | see below | Display order for card sections |
| `show_internet` | boolean | no | `true` | Show bandwidth information |
| `show_system` | boolean | no | `true` | Show system information; controls Internet status and uptime in Compact mode |
| `show_admin_console_button` | boolean | no | `true` | Show the Freebox OS button in the System section or the Compact action area |
| `admin_console_ip` | string | no | — | Optional IPv4 address used to access Freebox OS when `mafreebox.freebox.fr` is unavailable |
| `show_hardware` | boolean | no | `true` | Show storage, RAID, fans, and temperatures |
| `show_telephony` | boolean | no | `true` | Show Telephony information; controls missed calls in Compact mode |
| `show_devices` | boolean | no | `true` | Show device tracker statistics and lists; controls the device count in Compact mode |
| `show_debug` | boolean | no | `false` | Show diagnostic information and export actions |
| `show_header` | boolean | no | `true` | Show the card icon and title; Compact action buttons remain independent |
| `show_card_background` | boolean | no | `true` | Show the outer card background, padding, border, and shadow |

Default section order:

```yaml
section_order:
  - internet
  - system
  - hardware
  - telephony
  - devices
  - debug
```

## 🛠️ Troubleshooting

- Confirm that the official Freebox integration is loaded and its entities are available.
- If automatic detection fails, select the Freebox manually in the visual editor.
- Confirm that the main tracker is named `device_tracker.freebox` or starts with `device_tracker.freebox_`.
- Enable the **Debug** section to review integration entities, the selected Freebox `device_attr` values, and device trackers.
- Use the save icon in **Debug > Configuration** or **Debug > Device trackers** to export diagnostic data.

## 🔒 Security

The card validates its configuration, entity IDs, supported actions, and Material Design icon names. Dynamic values are escaped before being inserted into rendered HTML.

## 📄 License

Released under the [MIT License](LICENSE).
