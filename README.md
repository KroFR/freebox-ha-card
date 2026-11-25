[![HACS Default](https://img.shields.io/badge/HACS-Default-green.svg)](https://hacs.xyz/)
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
| <img width="502" height="443" alt="image" src="https://github.com/user-attachments/assets/b7304ad0-afe9-45ea-b9f1-2d7a811cf7ce" /> | <img width="505" height="446" alt="image" src="https://github.com/user-attachments/assets/5ad2bc35-ea67-4a90-8485-4cce2413dd1c" /> |

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
- Suivi des débits descendant et montant, de la latence, de la perte de paquets et de leurs historiques synchronisés, avec zoom et navigation optionnels
- Informations système : WAN, modèle, hardware, firmware, réseau et disponibilité
- Surveillance du matériel : stockage, RAID, ventilateurs et températures, avec mini-graphes d’historique pour les ventilateurs et les températures
- Contrôle du Wi-Fi, redémarrage avec confirmation et accès direct à Freebox OS, avec adresse IP optionnelle
- Téléphonie avec suivi et réinitialisation des appels manqués
- Suivi des appareils connectés, déconnectés et désactivés avec listes détaillées
- Interface personnalisable : sections réorganisables, visibilité, en-tête et fond configurables
- Trois modes d’affichage : Standard, Section unique et Compact
- Configurateur visuel responsive, thèmes clair/sombre, français et anglais, avec outils de diagnostic

## ℹ️ Prérequis

- Home Assistant 2024.11 ou version plus récente recommandé
- Intégration [Freebox officielle](https://www.home-assistant.io/integrations/freebox) configurée dans Home Assistant
- Appareil Freebox possédant une entité `device_tracker.freebox` ou `device_tracker.freebox_*`
- Optionnel : intégration [Ping (ICMP)](https://www.home-assistant.io/integrations/ping) configurée pour la détection automatique et l’affichage de la latence

Certaines fonctionnalités dépendent des entités exposées par votre modèle de Freebox et la version de l’intégration. Les options non disponibles sont automatiquement désactivées dans le configurateur et les actions correspondantes ne sont pas affichées sur la carte.

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

## 🧩 Modes d’affichage

La carte propose trois modes, sélectionnables avec `layout` ou depuis le configurateur visuel :

- **Standard** (`standard`) : affiche toutes les sections les unes sous les autres. Les sections restent réorganisables et repliables.
- **Section unique** (`single`) : affiche une seule section à la fois avec un menu de navigation. La dernière section sélectionnée est mémorisée par utilisateur Home Assistant.

| Thème clair | Thème sombre |
|---|---|
| <img width="502" height="748" alt="image" src="https://github.com/user-attachments/assets/84140069-4400-410e-bdd7-91acd4055aa7" /> | <img width="504" height="752" alt="image" src="https://github.com/user-attachments/assets/9e1fb2a0-d5fb-4b1d-aaef-83cbf76bb811" /> |

- **Compact** (`compact`) : affiche les informations essentielles dans un format réduit, avec les débits descendant et montant, la latence et leurs mini-graphiques, puis un résumé de l’état Internet, de la disponibilité, des appareils connectés, de l’espace utilisé, des appels manqués et de la température CPU lorsque ces données sont disponibles.

| Thème clair | Thème sombre |
|---|---|
| <img width="501" height="269" alt="image" src="https://github.com/user-attachments/assets/2e8a8b09-e5f7-4026-bb7d-2a76e39f2b48" /> | <img width="505" height="272" alt="image" src="https://github.com/user-attachments/assets/1d5f17bb-2899-4cb8-82a7-7ee87c3d3801" /> |

En mode Compact, les mini-graphiques utilisent la période définie par `history_hours`. L’agrégation s’adapte à la durée sélectionnée pour préserver la lisibilité. Le résumé passe automatiquement de trois à deux, puis une colonne selon la largeur réelle de la carte.

Le configurateur masque les options sans effet dans le mode sélectionné. En mode Compact, les groupes **Boutons du bandeau**, **Mesures en temps réel** et **Informations d’état** sont repliables. Les options non prises en charge par la Freebox restent désactivées avec un message explicatif.

## 📶 Contrôles Wi-Fi et redémarrage

Les boutons **Wi-Fi** et **Redémarrer** permettent de contrôler directement votre Freebox depuis la carte.

Pour éviter toute action accidentelle, une confirmation est demandée avant de modifier l’état du Wi-Fi ou de redémarrer la Freebox.

Pour que ces contrôles fonctionnent, l’intégration Freebox doit disposer de la permission **« Modification des réglages de la Freebox »**.

Activez cette permission dans Freebox OS :

**Paramètres de la Freebox → Gestion des accès → Applications → Home Assistant → Modification des réglages de la Freebox**

Consultez la [documentation officielle de l’intégration Freebox](https://www.home-assistant.io/integrations/freebox) pour plus d’informations.

## 📈 Graphiques d’historique

La section **Bande passante** inclut deux graphiques : l’historique des débits descendant et montant, ainsi que l’historique de la latence et de la perte de paquets.

Les valeurs de bande passante sont automatiquement normalisées quelle que soit l’unité configurée dans Home Assistant. Les mesures en temps réel sont affichées en Mbit/s ou Gbit/s, tandis que les graphiques d’historique utilisent Mbit/s.

Les graphiques :

- Utilisent l’historique Home Assistant des capteurs Download, Upload, Latence et Perte de paquets disponibles
- Affichent 24 heures par défaut, avec une période configurable de 1 à 168 heures
- Adaptent l’agrégation à la période visible : 1 minute jusqu’à 1 heure, 2 minutes jusqu’à 6 heures, 5 minutes jusqu’à 24 heures, 10 minutes jusqu’à 48 heures, 30 minutes jusqu’à 96 heures, puis 1 heure
- Affichent les valeurs Download et Upload, ou Latence et Perte de paquets, au survol
- Utilisent des axes responsives et des échelles adaptatives sur ordinateur et mobile
- Affichent facultativement les valeurs maximales
- Peuvent être masqués indépendamment de la section **Bande passante**

### Zoom et navigation

Configurez `enable_history_zoom: true` pour activer le zoom et la navigation synchronisés sur les deux graphiques. La fonction est désactivée par défaut afin de conserver le comportement classique.

Lorsque la fonction est activée :

| Fonction | Ordinateur | Mobile |
|---|---|---|
| Zoom avant / arrière | Boutons `+` / `−` | Boutons `+` / `−` |
| Choisir la zone du zoom | Clic directement sur le graphique | — |
| Zoom autour du pointeur | `Ctrl` / `Cmd` + molette | — |
| Naviguer dans l’historique | Clic maintenu + déplacement, ou boutons `←` / `→` | Boutons `←` / `→` |
| Pas de navigation | 25% de la période visible | 25% de la période visible |
| Consulter les valeurs | Survol avec la souris | Déplacement à un doigt |
| Réinitialiser le zoom | Double-clic ou bouton Reset | Bouton Reset |
| Fenêtre minimale | 30 minutes | 30 minutes |

Les graphiques Bande passante et Latence & perte de paquets restent synchronisés : le zoom ou le déplacement de la période met à jour les deux graphiques.

Le zoom et la navigation réutilisent l’historique déjà chargé par Home Assistant et ne déclenchent aucun appel supplémentaire à l’API History.

Les options sont disponibles dans **Disposition de la carte > Bande passante > Historique** dans le configurateur visuel.

## 🌐 Accès à Freebox OS

La section **Système** propose un bouton ouvrant l’interface d’administration Freebox OS.

- Sans configuration spécifique, le bouton utilise `http://mafreebox.freebox.fr/`
- Si votre VPN ou votre DNS bloque cette adresse, renseignez `admin_console_ip` avec une adresse IPv4 locale, par exemple `192.168.1.254`
- Le bouton Freebox OS peut être masqué avec `show_admin_console_button: false`

## ⚙️ Configuration

| Nom | Type | Obligatoire | Valeur par défaut | Description |
|---|---|---:|---|---|
| `type` | chaîne | oui | — | `custom:freebox-card` |
| `device_id` | chaîne | non | détection automatique | Identifiant Home Assistant de l’appareil Freebox |
| `name` | chaîne | non | `Freebox` | Titre de la carte |
| `language` | chaîne | non | `auto` | `auto`, `en` ou `fr` |
| `layout` | chaîne | non | `standard` | Mode d’affichage : `standard`, `single` ou `compact` |
| `latency_entity` | chaîne | non | détection automatique | Capteur de latence. Si absent, la carte recherche le premier capteur Ping contenant `average` ou `moyen` |
| `packet_loss_entity` | chaîne | non | détection automatique | Capteur de perte de paquets utilisé par le graphique Qualité réseau |
| `download_bandwidth` | nombre | non | — | Débit descendant maximal en Mbit/s, utilisé pour calculer le pourcentage de la jauge |
| `upload_bandwidth` | nombre | non | — | Débit montant maximal en Mbit/s, utilisé pour calculer le pourcentage de la jauge |
| `show_live_metrics` | booléen | non | `true` | Afficher les mesures de bande passante en temps réel ; contrôle Download et Upload en mode Compact |
| `show_bandwidth_history` | booléen | non | `true` | Afficher le graphique d’historique de la bande passante |
| `show_network_quality_history` | booléen | non | `true` | Afficher l’historique de la latence et de la perte de paquets ; contrôle la tuile Latence en mode Compact |
| `show_history_maximums` | booléen | non | `true` | Afficher les valeurs maximales sur le graphique |
| `enable_history_zoom` | booléen | non | `false` | Activer le zoom et la navigation synchronisés pour les historiques Bande passante et Qualité réseau |
| `history_hours` | nombre | non | `24` | Nombre d’heures affichées dans les graphiques et mini-graphiques réseau, de 1 à 168 |
| `hardware_history_hours` | nombre | non | `24` | Nombre d’heures affichées dans les mini-graphes des températures et ventilateurs, de 1 à 168 |
| `section_order` | liste | non | voir ci-dessous | Ordre d’affichage des sections |
| `show_internet` | booléen | non | `true` | Afficher les informations de bande passante |
| `show_system` | booléen | non | `true` | Afficher les informations système ; contrôle l’état Internet et la disponibilité en mode Compact |
| `show_admin_console_button` | booléen | non | `true` | Afficher le bouton Freebox OS dans la section Système ou dans la zone d’actions du mode Compact |
| `admin_console_ip` | chaîne | non | — | Adresse IPv4 optionnelle utilisée pour accéder à Freebox OS lorsque `mafreebox.freebox.fr` n’est pas accessible |
| `show_hardware` | booléen | non | `true` | Afficher le stockage, le RAID, les ventilateurs et les températures |
| `show_telephony` | booléen | non | `true` | Afficher la section Téléphonie ; contrôle les appels manqués en mode Compact |
| `show_devices` | booléen | non | `true` | Afficher les statistiques et listes des appareils ; contrôle le compteur d’appareils en mode Compact |
| `show_debug` | booléen | non | `false` | Afficher les informations de diagnostic et les actions d’export |
| `show_header` | booléen | non | `true` | Afficher l’icône et le titre de la carte ; les boutons du mode Compact restent indépendants |
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
