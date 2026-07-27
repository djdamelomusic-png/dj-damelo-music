# DJ Damelo Music

Une application Pi pour écouter et acheter des musiques de DJ Damelo directement avec Pi Coin.

## Description
DJ Damelo Music permet aux Pionniers d'acheter des titres musicaux exclusifs via le SDK Pi Payments.
Tous les paiements sont traités en Testnet pour le moment.

## Fonctionnalités
- Écoute d'extraits musicaux
- Achat de titres avec Pi via Pi Wallet
- Téléchargement après paiement validé
- Pages Légales : Terms, Privacy, Contact

## Technologies
- Frontend : HTML, CSS, JavaScript
- Backend : Node.js / Vercel Serverless Functions
- SDK : Pi SDK
- Paiements : Pi Platform API

## Configuration Backend
Variables d'environnement requises sur Vercel :

PI_API_KEY=sk_pi_mon_wallet_secret
## Endpoints API
- POST /api/approve : Approuve un paiement Pi
- POST /api/complete : Finalise un paiement Pi

## Wallet de l'App
Testnet: GDG7D...TZYS

## Liens Légaux
- Terms: /terms.html
- Privacy: /privacy.html  
- Contact: /contact.html

## Développé par
DJ Damelo Music Team
