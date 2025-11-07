# SHANIKA SHOP - Site E-commerce de Vêtements Féminins

Site e-commerce complet et moderne pour la vente de vêtements féminins, développé avec React, Tailwind CSS et Framer Motion.

## 🌟 Fonctionnalités

### 🧭 Header
- Logo cliquable "SHANIKA SHOP"
- Navigation complète (Accueil, Nouveautés, Robes, Hauts & Blouses, Pantalons & Jupes, Accessoires, Promotions, Contact)
- Barre de recherche fonctionnelle
- Icônes d'action : Mon compte, Favoris, Panier (avec compteur)
- Menu drawer mobile
- Bannière promotionnelle

### 🛍️ Sections principales
- **Hero** : Section d'accueil avec image et call-to-action
- **Catégories** : 6 catégories principales avec images
- **Nouveautés** : Grille de produits récents
- **Meilleures ventes** : Produits populaires avec badge
- **Promotions** : Produits en réduction avec prix barrés
- **Témoignages** : Avis clients avec photos et notes
- **À propos** : Présentation de la marque
- **Newsletter** : Formulaire d'abonnement
- **Contact** : Formulaire de contact et coordonnées

### 💬 Modal produit
- Grande image du produit
- Informations détaillées (nom, prix en FCFA)
- Sélecteur de taille (S, M, L, XL)
- Sélecteur de couleur (pastilles)
- Description complète
- Indicateur de stock
- Bouton "Ajouter au panier"

### 📱 Drawer mobile
- Menu latéral pour mobile
- Navigation complète
- Barre de recherche
- Accès rapide aux fonctionnalités

### 🧾 Footer
- Informations (À propos, Livraison, CGV, Confidentialité)
- Aide & Contact (FAQ, Email, WhatsApp, Téléphone)
- Paiement sécurisé (Visa, Mastercard, MoMo, Orange Money, Wave)
- Réseaux sociaux (Facebook, Instagram, TikTok, WhatsApp, YouTube)
- Newsletter
- Copyright

## 🛠️ Technologies utilisées

- **React 19** : Framework JavaScript
- **Vite** : Build tool et dev server
- **Tailwind CSS** : Framework CSS utility-first
- **Framer Motion** : Bibliothèque d'animations
- **React Router DOM** : Routage
- **React Icons** : Icônes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm build

# Prévisualiser le build
npm preview
```

## 🎨 Design

- Design moderne et élégant
- Responsive (mobile, tablette, desktop)
- Animations fluides avec Framer Motion
- Palette de couleurs rose/rose (pink/rose)
- Typographie claire et lisible

## 💰 Devise

Tous les prix sont affichés en **FCFA** (Franc CFA).

## 🧩 Fonctionnalités techniques

- **Panier dynamique** : Gestion du panier avec React Context
- **Favoris** : Système de wishlist (mock)
- **Recherche** : Barre de recherche (interface prête)
- **Modals** : Modals animés pour les détails produits
- **Responsive** : Design adaptatif pour tous les écrans

## 📝 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Header.jsx
│   ├── Drawer.jsx
│   ├── Hero.jsx
│   ├── Categories.jsx
│   ├── ProductCard.jsx
│   ├── ProductSection.jsx
│   ├── ProductModal.jsx
│   ├── Testimonials.jsx
│   ├── About.jsx
│   ├── Newsletter.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── context/            # Contextes React
│   └── CartContext.jsx
├── data/              # Données
│   └── products.js
├── App.jsx            # Composant principal
├── main.jsx           # Point d'entrée
└── index.css          # Styles globaux (Tailwind)
```

## 🚀 Prochaines étapes

Le site est prêt à être connecté à un back-end pour :
- Authentification utilisateur
- Gestion des commandes
- Intégration de paiements (Orange Money, Wave, Stripe)
- Suivi de commandes
- Espace client
- Gestion de stock en temps réel

## 📄 Licence

© 2025 SHANIKA SHOP – Tous droits réservés.
