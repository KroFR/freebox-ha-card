[![HACS Default](https://img.shields.io/badge/HACS-Custom-green.svg)](https://hacs.xyz/)
[![GitHub Release](https://img.shields.io/github/v/release/KroFR/freebox-ha-card)](https://github.com/KroFR/freebox-ha-card/releases)
[![Home Assistant](https://img.shields.io/badge/Home_Assistant-2024.11%2B-blue)](https://www.home-assistant.io/)
[![HACS Validation](https://github.com/KroFR/freebox-ha-card/actions/workflows/hacs.yaml/badge.svg)](https://github.com/KroFR/freebox-ha-card/actions/workflows/hacs.yaml)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

# 🛜 Freebox Card

[English version](README_EN.md)

Une carte Lovelace responsive pour [Home Assistant](https://www.home-assistant.io/), conçue pour l’intégration [Freebox officielle](https://www.home-assistant.io/integrations/freebox). Elle regroupe la bande passante, les informations système et matérielles, la téléphonie et les suivis d’appareils dans une seule carte configurable.

### Bande Passante

| Thème clair | Thème sombre |
|---|---|
| <img width="500" height="588" alt="image" src="https://github.com/user-attachments/assets/f9d12913-d2c4-425b-8f51-692410b81931" /> | <img width="505" height="589" alt="image" src="https://github.com/user-attachments/assets/7c606d1b-fd00-4db9-ba54-133bab54a9bf" /> |

### Système

| Thème clair | Thème sombre |
|---|---|
| <img width="501" height="532" alt="image" src="https://github.com/user-attachments/assets/1349d2c9-d0f8-4131-b32b-a95aed3c7606" /> | <img width="504" height="534" alt="image" src="https://github.com/user-attachments/assets/13bc1390-3119-4410-84c1-86e537c59306" /> |

### Matériel

| Thème clair | Thème sombre |
|---|---|
| <img width="500" height="449" alt="image" src="https://github.com/user-attachments/assets/3551db42-e3f7-4799-89d3-e7ee231cdeec" /> | <img width="504" height="451" alt="image" src="https://github.com/user-attachments/assets/6d8cc7e9-3629-4d22-8c9b-380bb4ca2c74" /> |

### Téléphonie

| Thème clair | Thème sombre |
|---|---|
| <img width="501" height="121" alt="image" src="https://github.com/user-attachments/assets/527acd72-c4e8-416f-b238-78e8fdb7253c" /> | <img width="505" height="125" alt="image" src="https://github.com/user-attachments/assets/24353bd5-f1e3-4383-83f5-02b9e45f80c7" /> |

### Appareils

| Thème clair | Thème sombre |
|---|---|
| <img width="502" height="221" alt="image" src="https://github.com/user-attachments/assets/e272b553-c890-4d51-a76e-df4cf89ee327" /> | <img width="504" height="221" alt="image" src="https://github.com/user-attachments/assets/747b9a3f-0bbc-4ba6-9ad7-f69662594964" /> |

## ✨ Fonctionnalités

- Détection automatique de la Freebox et du capteur de latence via l’intégration Ping
- Suivi des débits descendant et montant, de la latence et de leur historique
- Informations système : WAN, modèle, hardware, firmware, réseau et disponibilité
- Surveillance du matériel : stockage, RAID, ventilateurs et températures
- Contrôle du Wi-Fi, redémarrage avec confirmation et accès direct à Freebox OS, avec adresse IP optionnelle
- Téléphonie avec suivi et réinitialisation des appels manqués
- Suivi des appareils connectés, déconnectés et désactivés avec listes détaillées
- Interface personnalisable : sections réorganisables, visibilité, en-tête et fond configurables
- Configurateur visuel responsive, thèmes clair/sombre, français et anglais, avec outils de diagnostic

## ℹ️ Prérequis

- Home Assistant 2024.11 ou version plus récente recommandé
- Intégration [Freebox officielle](https://www.home-assistant.io/integrations/freebox) configurée dans Home Assistant
- Appareil Freebox possédant une entité `device_tracker.freebox` ou `device_tracker.freebox_*`
- Optionnel : intégration [Ping (ICMP)](https://www.home-assistant.io/integrations/ping) configurée pour la détection automatique et l’affichage de la latence

Certaines sections apparaissent uniquement lorsque les entités nécessaires sont disponibles. Le contenu matériel et téléphonique dépend des entités exposées par votre modèle de Freebox et la version de l’intégration.

## 📦 Installation

### Marketplace (HA 2026.11 et versions ultérieures)

[![Open your Home Assistant instance and open the Marketplace.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=KroFR&repository=freebox-ha-card)

ou

1. Ouvrez le Marketplace → recherchez Freebox Card
2. Cliquez sur **Freebox Card** → installez-le
3. Le Marketplace installe le plugin dans www/community/freebox-ha-card/ et l’ajoute automatiquement comme ressource du tableau de bord.

### HACS (HA avant 2026.11)

1. Installez HACS si ce n’est pas déjà fait
2. Ouvrez HACS dans Home Assistant
3. Recherchez **Freebox Card**
4. Cliquez sur le bouton Télécharger

### Installation manuelle

1. Téléchargez `freebox-card.js` depuis ce dépôt.
2. Copiez le fichier dans `<config>/www/freebox-card.js`.
3. Ouvrez **Paramètres > Tableaux de bord > Ressources**.
4. Ajoutez `/local/freebox-card.js` comme **module JavaScript**.
5. Actualisez le navigateur.

## ➕ Ajouter la carte

1. Modifiez un tableau de bord Home Assistant.
2. Sélectionnez **Ajouter une carte**.
3. Recherchez **Freebox Card**.
4. Sélectionnez la Freebox détectée et configurez la carte depuis l’éditeur visuel.

La carte essaie de sélectionner automatiquement la Freebox en recherchant une entité `device_tracker.freebox` associée à un appareil dont le nom, le modèle ou le fabricant contient `Freebox`.

## ⚙️ Configuration

| Nom | Type | Obligatoire | Valeur par défaut | Description |
|---|---|---:|---|---|
| `type` | chaîne | oui | — | `custom:freebox-card` |
| `device_id` | chaîne | non | détection automatique | Identifiant Home Assistant de l’appareil Freebox |
| `name` | chaîne | non | `Freebox` | Titre de la carte |
| `language` | chaîne | non | `auto` | `auto`, `en` ou `fr` |
| `latency_entity` | chaîne | non | détection automatique | Capteur de latence. Si absent, la carte recherche le premier capteur Ping contenant `average` ou `moyen` |
| `download_bandwidth` | nombre | non | — | Débit descendant maximal en Mbit/s, utilisé pour calculer le pourcentage de la jauge |
| `upload_bandwidth` | nombre | non | — | Débit montant maximal en Mbit/s, utilisé pour calculer le pourcentage de la jauge |
| `show_live_metrics` | booléen | non | `true` | Afficher les mesures de bande passante en temps réel |
| `show_bandwidth_history` | booléen | non | `true` | Afficher le graphique d’historique de la bande passante |
| `show_network_quality_history` | booléen | non | `true` | Afficher le graphique d’historique de la latence et de la perte de paquets |
| `show_history_maximums` | booléen | non | `true` | Afficher les valeurs maximales sur le graphique |
| `history_hours` | nombre | non | `24` | Nombre d’heures affichées dans les graphiques d’historique, de 1 à 168 |
| `section_order` | liste | non | voir ci-dessous | Ordre d’affichage des sections |
| `show_internet` | booléen | non | `true` | Afficher les informations de bande passante |
| `show_system` | booléen | non | `true` | Afficher les informations système et les actions |
| `show_admin_console_button` | booléen | non | `true` | Afficher le bouton d’accès à Freebox OS dans la section Système |
| `admin_console_ip` | chaîne | non | — | Adresse IPv4 optionnelle utilisée pour accéder à Freebox OS lorsque `mafreebox.freebox.fr` n’est pas accessible |
| `show_hardware` | booléen | non | `true` | Afficher le stockage, le RAID, les ventilateurs et les températures |
| `show_telephony` | booléen | non | `true` | Afficher les appels manqués |
| `show_devices` | booléen | non | `true` | Afficher les statistiques et listes des appareils |
| `show_debug` | booléen | non | `false` | Afficher les informations de diagnostic et les actions d’export |
| `show_header` | booléen | non | `true` | Afficher l’icône et le titre de la carte |
| `show_card_background` | booléen | non | `true` | Afficher le fond, les marges internes, la bordure et l’ombre de la carte |

Ordre des sections par défaut :

```yaml
section_order:
  - internet
  - system
  - hardware
  - telephony
  - devices
  - debug
```

## 📈 Graphiques d’historique

La section **Bande passante** inclut deux graphiques : l’historique des débits descendant et montant, ainsi que l’historique de la latence et de la perte de paquets.

Les graphiques :

- Utilisent les données historiques Home Assistant des capteurs de débit descendant, montant, latence et perte de paquets disponibles
- Affichent les 24 dernières heures par défaut
- Permettent de configurer une période de 1 à 168 heures
- Regroupent les données par périodes de 5 minutes et affichent la moyenne de chaque période
- Utilisent des axes responsives et une échelle adaptative pour rester lisible sur ordinateur et mobile
- Affichent les valeurs Download et Upload, ou Latence et Perte de paquets, au survol
- Peuvent afficher ou masquer les valeurs maximales directement sur les graphiques
- Peuvent être masqués indépendamment de la section **Bande passante**

Les paramètres de l’historique sont disponibles dans **Disposition de la carte > Bande passante** dans le configurateur visuel.

## 🌐 Accès à Freebox OS

La section **Système** propose un bouton ouvrant l’interface d’administration Freebox OS.

- Sans configuration spécifique, le bouton utilise `http://mafreebox.freebox.fr/`
- Si votre VPN ou votre DNS bloque cette adresse, renseignez `admin_console_ip` avec une adresse IPv4 locale, par exemple `192.168.1.254`
- Le bouton Freebox OS peut être masqué avec `show_admin_console_button: false`

## 🛠️ Dépannage

- Vérifiez que l’intégration Freebox officielle est chargée et que ses entités sont disponibles.
- Si la détection automatique échoue, sélectionnez la Freebox manuellement dans le configurateur.
- Vérifiez que le tracker principal est nommé `device_tracker.freebox` ou commence par `device_tracker.freebox_`.
- Activez la section **Debug** pour examiner les entités de l’intégration, les attributs `device_attr` de la Freebox sélectionnée et les suivis d’appareils.
- Utilisez l’icône de sauvegarde dans **Debug > Configuration** ou **Debug > Device trackers** pour exporter les données de diagnostic.

## 🔒 Sécurité

La carte valide sa configuration, les identifiants d’entités, les actions autorisées et les noms d’icônes Material Design. Les valeurs dynamiques sont échappées avant leur insertion dans le HTML rendu.

## 📄 Licence

Distribué sous [licence MIT](LICENSE).
