[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
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
| <img width="501" height="449" alt="image" src="https://github.com/user-attachments/assets/59d78f25-9feb-4089-a7cf-4cb7002a0499" /> | <img width="503" height="450" alt="image" src="https://github.com/user-attachments/assets/1bfb5f3c-b471-4e69-9459-e1d5c88674be" /> |

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
- Hardware monitoring: storage, RAID, fans, and temperatures
- Wi-Fi control, confirmed Freebox reboot, and direct Freebox OS access with an optional IP address
- Telephony with missed call monitoring and reset
- Connected, disconnected, and disabled device tracking with detailed lists
- Customizable interface with reorderable sections, visibility controls, and optional header and background
- Responsive visual editor with light/dark themes, English and French support, and diagnostic tools

## ℹ️ Requirements

- Home Assistant 2024.11 or newer recommended
- Official Home Assistant [Freebox integration](https://www.home-assistant.io/integrations/freebox) configured
- A Freebox device with a `device_tracker.freebox` or `device_tracker.freebox_*` entity
- Optional: [Ping (ICMP)](https://www.home-assistant.io/integrations/ping) integration configured for automatic latency detection and display

Some sections appear only when the required entities are available. Hardware and telephony content depends on the entities exposed by your Freebox model and integration version.

## 📦 Installation

### HACS (Recommended)

1. Open HACS in Home Assistant.
2. Click on the three dots in the top right corner.
3. Select Custom repositories.
4. Add this repository URL: https://github.com/KroFR/freebox-ha-card
5. Select Dashboard as the category.
6. Click Add.
7. Search for Freebox Card and install it.

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

## ⚙️ Configuration

| Name | Type | Required | Default | Description |
|---|---|---:|---|---|
| `type` | string | yes | — | `custom:freebox-card` |
| `device_id` | string | no | auto-detected | Home Assistant device ID of the Freebox |
| `name` | string | no | `Freebox` | Card title |
| `language` | string | no | `auto` | `auto`, `en`, or `fr` |
| `latency_entity` | string | no | auto-detected | Latency sensor. If not configured, the card automatically selects the first Ping integration sensor containing `average` or `moyen` in its name |
| `download_bandwidth` | number | no | — | Maximum download bandwidth in Mbit/s, used to calculate the gauge percentage |
| `upload_bandwidth` | number | no | — | Maximum upload bandwidth in Mbit/s, used to calculate the gauge percentage |
| `show_live_metrics` | boolean | no | `true` | Show real-time bandwidth metrics |
| `show_bandwidth_history` | boolean | no | `true` | Show the bandwidth history chart |
| `show_network_quality_history` | boolean | no | `true` | Show the latency and packet loss history chart |
| `show_history_maximums` | boolean | no | `true` | Show maximum values on the chart |
| `history_hours` | number | no | `24` | Number of hours displayed in the history charts, from 1 to 168 |
| `section_order` | list | no | see below | Display order for card sections |
| `show_internet` | boolean | no | `true` | Show bandwidth information |
| `show_system` | boolean | no | `true` | Show system information and actions |
| `show_admin_console_button` | boolean | no | `true` | Show the Freebox OS access button in the System section |
| `admin_console_ip` | string | no | — | Optional IPv4 address used to access Freebox OS when `mafreebox.freebox.fr` is unavailable |
| `show_hardware` | boolean | no | `true` | Show storage, RAID, fans, and temperatures |
| `show_telephony` | boolean | no | `true` | Show missed call information |
| `show_devices` | boolean | no | `true` | Show device tracker statistics and lists |
| `show_debug` | boolean | no | `false` | Show diagnostic information and export actions |
| `show_header` | boolean | no | `true` | Show the card icon and title |
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

## 📈 History charts

The **Bandwidth** section includes two charts: download and upload history, plus latency and packet loss history.

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
