[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
[![GitHub Release](https://img.shields.io/github/v/release/KroFR/freebox-ha-card)](https://github.com/KroFR/freebox-ha-card/releases)
[![Home Assistant](https://img.shields.io/badge/Home_Assistant-2024.11%2B-blue)](https://www.home-assistant.io/)
[![HACS Validation](https://github.com/KroFR/freebox-ha-card/actions/workflows/hacs.yaml/badge.svg)](https://github.com/KroFR/freebox-ha-card/actions/workflows/hacs.yaml)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

# 📡 Freebox Card

[Version Française](README.md)

A responsive Lovelace card for [Home Assistant](https://www.home-assistant.io/) designed for the [official Freebox](https://www.home-assistant.io/integrations/freebox) integration. It brings bandwidth, system, hardware, telephony, and device tracker information into one configurable card.

### Bandwidth

| Light Theme | Dark Theme |
|---|---|
| <img width="500" height="343" alt="image" src="https://github.com/user-attachments/assets/1c1e5ef8-e156-4f1b-806c-fce00c163c5e" /> | <img width="506" height="347" alt="image" src="https://github.com/user-attachments/assets/01d43fbe-5693-41c1-b06c-462c3b8a2bd7" /> |

### System

| Light Theme | Dark Theme |
|---|---|
| <img width="455" height="527" alt="image" src="https://github.com/user-attachments/assets/4e7c2b22-4183-4fa2-8254-c8891227d79f" /> | <img width="460" height="532" alt="image" src="https://github.com/user-attachments/assets/1f4427f3-c258-4a65-bdc3-955133f42e4e" /> |

### Hardware

| Light Theme | Dark Theme |
|---|---|
| <img width="458" height="515" alt="image" src="https://github.com/user-attachments/assets/3ab2a9ef-c3b1-4498-a4b8-0aa74aabf6fc" /> | <img width="461" height="520" alt="image" src="https://github.com/user-attachments/assets/8d6c819d-13b7-4dd5-9cca-d5f4d2a68f42" /> |

### Telephony

| Light Theme | Dark Theme |
|---|---|
| <img width="458" height="118" alt="image" src="https://github.com/user-attachments/assets/30fdf5b1-715e-47b0-b340-36687e1e0429" /> | <img width="462" height="121" alt="image" src="https://github.com/user-attachments/assets/d42e9edf-b70a-4e4a-a1ba-adc262e5075d" /> |

### Devices

| Light Theme | Dark Theme |
|---|---|
| <img width="460" height="220" alt="image" src="https://github.com/user-attachments/assets/2456f03a-18bf-46c7-ab9c-dc545f21cb13" /> | <img width="459" height="220" alt="image" src="https://github.com/user-attachments/assets/1e0e7405-c92e-4f30-8486-14ec55bd1c15" /> |

## ✨ Features

- Automatic Freebox device detection from the Home Assistant device and entity registries
- Download, upload, and optional latency monitoring
- System details including WAN status, model, hardware version, firmware, serial number, connection type, MAC addresses, IP addresses, and uptime
- Hardware monitoring for storage, RAID, fans, and temperatures when exposed by the integration
- Wi-Fi toggle and Freebox reboot actions with confirmation
- Telephony section with missed call count and reset action
- Device tracker summary for connected, disconnected, disabled, and total devices
- Expandable lists using the icons of the corresponding device tracker entities
- Reorderable and individually hideable card sections
- Optional card header and background
- English and French support, with automatic language detection
- Optional debug section with configuration and tracker export to text files
- Responsive light and dark theme support
- Visual editor for configuration without YAML

## ℹ️ Requirements

- Home Assistant 2024.11 or newer recommended
- Official Home Assistant [Freebox integration](https://www.home-assistant.io/integrations/freebox) configured
- A Freebox device with a `device_tracker.freebox` or `device_tracker.freebox_*` entity

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
| `latency_entity` | string | no | — | Optional latency sensor |
| `download_bandwidth` | number | no | — | Maximum download bandwidth in Mbit/s, used to calculate the gauge percentage |
| `upload_bandwidth` | number | no | — | Maximum upload bandwidth in Mbit/s, used to calculate the gauge percentage |
| `section_order` | list | no | see below | Display order for card sections |
| `show_internet` | boolean | no | `true` | Show bandwidth information |
| `show_system` | boolean | no | `true` | Show system information and actions |
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

## 🛠️ Troubleshooting

- Confirm that the official Freebox integration is loaded and its entities are available.
- If automatic detection fails, select the Freebox manually in the visual editor.
- Confirm that the main tracker is named `device_tracker.freebox` or starts with `device_tracker.freebox_`.
- Enable the **Debug** section to review integration entities and device trackers.
- Use the save icon in **Debug > Configuration** or **Debug > Device trackers** to export diagnostic data as a text file.

## 🔒 Security

The card validates its configuration, entity IDs, supported actions, and Material Design icon names. Dynamic values are escaped before being inserted into rendered HTML.

## 📄 License

Released under the [MIT License](LICENSE).
