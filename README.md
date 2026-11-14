[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
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
| <img width="502" height="345" alt="image" src="https://github.com/user-attachments/assets/6f3deaa2-6977-44e8-81d3-92db7fafbac8" /> | <img width="503" height="346" alt="image" src="https://github.com/user-attachments/assets/b27fff26-674e-49b2-aada-6fdf020acd8e" /> |

### Système

| Thème clair | Thème sombre |
|---|---|
| <img width="459" height="529" alt="image" src="https://github.com/user-attachments/assets/ba98aef7-99c6-44f5-9361-6ef97e35eec6" /> | <img width="462" height="532" alt="image" src="https://github.com/user-attachments/assets/4220da9f-d982-42ae-8af4-6ca403dbf878" /> |

### Matériel

| Thème clair | Thème sombre |
|---|---|
| <img width="458" height="518" alt="image" src="https://github.com/user-attachments/assets/b070bfef-47ad-4c72-8c9b-62089d848943" /> | <img width="462" height="521" alt="image" src="https://github.com/user-attachments/assets/20467e85-d3be-4dbe-8f71-8081782d1526" /> |

### Téléphonie

| Thème clair | Thème sombre |
|---|---|
| <img width="459" height="119" alt="image" src="https://github.com/user-attachments/assets/b56ab16d-a0f2-4d4a-b9b3-9a6bf344f351" /> | <img width="459" height="120" alt="image" src="https://github.com/user-attachments/assets/7772f2c4-5640-4d48-aa23-570b8c576fb3" /> |

### Appareils

| Thème clair | Thème sombre |
|---|---|
| <img width="460" height="220" alt="image" src="https://github.com/user-attachments/assets/1e97c401-ead8-44fc-83e1-6f771eeeab70" /> | <img width="461" height="222" alt="image" src="https://github.com/user-attachments/assets/e410eda8-2ea7-4e89-a744-a21d07702f90" /> |

## ✨ Fonctionnalités

- Détection automatique de la Freebox depuis les registres d’appareils et d’entités de Home Assistant
- Détection automatique du capteur de latence moyenne depuis l’intégration Ping
- Suivi du débit descendant, du débit montant et, en option, de la latence
- Graphique d’historique des débits descendant et montant avec période configurable
- Informations système : état WAN, modèle, version matérielle, firmware, numéro de série, type de connexion, adresses MAC et IP, disponibilité
- Suivi matériel du stockage, du RAID, des ventilateurs et des températures lorsque ces entités sont exposées
- Actions pour activer ou désactiver le Wi-Fi et redémarrer la Freebox, avec confirmation
- Section téléphonie avec nombre d’appels manqués et action de réinitialisation
- Résumé des appareils connectés, déconnectés, désactivés et du nombre total
- Listes repliables utilisant les icônes des entités `device_tracker`
- Sections déplaçables et masquables individuellement
- En-tête et fond de la carte facultatifs
- Français et anglais, avec détection automatique de la langue
- Section Debug facultative avec export de la configuration et des trackers dans des fichiers texte
- Interface responsive compatible avec les thèmes clair et sombre
- Configurateur visuel, sans YAML obligatoire

## ℹ️ Prérequis

- Home Assistant 2024.11 ou version plus récente recommandé
- Intégration [Freebox officielle](https://www.home-assistant.io/integrations/freebox) configurée dans Home Assistant
- Appareil Freebox possédant une entité `device_tracker.freebox` ou `device_tracker.freebox_*`
- Optionnel : intégration [Ping (ICMP)](https://www.home-assistant.io/integrations/ping) configurée pour la détection automatique et l’affichage de la latence

Certaines sections apparaissent uniquement lorsque les entités nécessaires sont disponibles. Le contenu matériel et téléphonique dépend des entités exposées par votre modèle de Freebox et la version de l’intégration.

## 📦 Installation

### HACS (Recommandé)

1. Ouvrez HACS dans Home Assistant.
2. Cliquez sur le menu à trois points en haut à droite.
3. Sélectionnez Custom repositories.
4. Saisissez l’URL du dépôt : https://github.com/KroFR/freebox-ha-card
5. Sélectionnez Dashboard comme catégorie.
6. Cliquez sur Add.
7. Recherchez Freebox Card et installez-la.

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
| `show_bandwidth_history` | booléen | non | `true` | Afficher le graphique d’historique de la bande passante |
| `history_hours` | nombre | non | `8` | Nombre d’heures affichées dans l’historique de la bande passante, de 1 à 168 |
| `section_order` | liste | non | voir ci-dessous | Ordre d’affichage des sections |
| `show_internet` | booléen | non | `true` | Afficher les informations de bande passante |
| `show_system` | booléen | non | `true` | Afficher les informations système et les actions |
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

## 📈 Historique de la bande passante

La section **Bande passante** inclut un graphique affichant l’historique des débits descendant et montant.

Le graphique :

- Utilise les données historiques Home Assistant des capteurs de débit descendant et montant détectés pour la Freebox
- Affiche les 8 dernières heures par défaut
- Permet de configurer une période de 1 à 168 heures
- Utilise une échelle adaptative et une agrégation des données pour améliorer la lisibilité
- Peut être masqué indépendamment de la section **Bande passante**

Les paramètres de l’historique sont disponibles dans **Disposition de la carte > Bande passante** dans le configurateur visuel.

## 🛠️ Dépannage

- Vérifiez que l’intégration Freebox officielle est chargée et que ses entités sont disponibles.
- Si la détection automatique échoue, sélectionnez la Freebox manuellement dans le configurateur.
- Vérifiez que le tracker principal est nommé `device_tracker.freebox` ou commence par `device_tracker.freebox_`.
- Activez la section **Debug** pour examiner les entités de l’intégration et les suivis d’appareils.
- Utilisez l’icône de sauvegarde dans **Debug > Configuration** ou **Debug > Device trackers** pour exporter les données de diagnostic dans un fichier texte.

## 🔒 Sécurité

La carte valide sa configuration, les identifiants d’entités, les actions autorisées et les noms d’icônes Material Design. Les valeurs dynamiques sont échappées avant leur insertion dans le HTML rendu.

## 📄 Licence

Distribué sous [licence MIT](LICENSE).
