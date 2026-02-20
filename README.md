# Documentation Technique - TimeTravel Agency

## Table des matières
1. [Vue d'ensemble](#vue-densemble)
2. [Architecture](#architecture)
3. [Stack technique](#stack-technique)
4. [Structure du projet](#structure-du-projet)
5. [Composants](#composants)
6. [Configuration](#configuration)
7. [Installation et démarrage](#installation-et-démarrage)
8. [Scripts et build](#scripts-et-build)
9. [Dépendances principales](#dépendances-principales)
10. [Conventions et bonnes pratiques](#conventions-et-bonnes-pratiques)

---

## Vue d'ensemble

**TimeTravel Agency** est un site one-page (single page application) conçu pour une agence de voyage dans le temps. Le projet a été généré à partir d'une conception Figma professionnelle et utilise les technologies web modernes pour offrir une expérience utilisateur immersive.

### Objectifs du projet
- Présenter les destinations de voyage temporel
- Permettre la réservation de voyages via un formulaire
- Offrir un chatbot conversationnel pour l'assistance client
- Fournir une interface moderne et responsive

---

## Architecture

### Architecture générale

```
┌─────────────────────────────────────────────┐
│         React Application (SPA)             │
├─────────────────────────────────────────────┤
│  App.tsx (Composant principal)              │
├─────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────────┐  ┌────────┐ │
│  │HeroSec   │  │Destinations  │  │Chatbot │ │
│  └──────────┘  └──────────────┘  └────────┘ │
│  ┌──────────┐  ┌──────────────┐  ┌────────┐ │
│  │BookForm  │  │Footer        │  │ChatWid │ │
│  └──────────┘  └──────────────┘  └────────┘ │
├─────────────────────────────────────────────┤
│  UI Components (Radix UI + Tailwind)        │
├─────────────────────────────────────────────┤
│  Framer Motion (Animations)                 │
│  React Hook Form (Gestion des formulaires)  │
│  Sonner (Notifications toast)               │
└─────────────────────────────────────────────┘
```

### Pattern architectural

Le projet utilise une architecture **composant-driven** basée sur React, où :
- **App.tsx** est le composant racine orchestrant les sections principales
- Chaque section est un composant indépendant et réutilisable
- Les composants UI sont des wrappers personnalisés autour des composants Radix
- Les styles sont gérés globalement avec Tailwind CSS

---

## Stack technique

### Frontend
- **React** 18.3.1 - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** 6.3.5 - Bundler et dev server
- **Tailwind CSS** 4.1.12 - Framework CSS utilitaire
- **Framer Motion** 12.23.24 - Animations

### Composants UI et formulaires
- **Radix UI** - Composants headless accessibles
- **React Hook Form** 7.55.0 - Gestion des formulaires
- **React Hook Form** avec validation personnalisée
- **Lucide React** - Bibliothèque d'icônes
- **Material-UI Icons** - Icônes additionnelles

### Utilities et outils
- **Sonner** 2.0.3 - Système de notifications toast
- **Date-fns** 3.6.0 - Manipulation des dates
- **Clsx** 2.1.1 - Utilitaire de classe CSS conditionnelle
- **Motion** 12.23.24 - Animations avancées

### Développement
- **@vitejs/plugin-react** - Plugin React pour Vite
- **@tailwindcss/vite** - Plugin Tailwind pour Vite

---

## Structure du projet

```
Onepagesitefortimetravelagency/
├── src/
│   ├── main.tsx                    # Point d'entrée de l'application
│   ├── app/
│   │   ├── App.tsx                 # Composant racine
│   │   └── components/
│   │       ├── HeroSection.tsx      # Section hero initiaux avec animations
│   │       ├── DestinationsGallery.tsx  # Galerie des destinations
│   │       ├── DestinationCard.tsx  # Carte de destination réutilisable
│   │       ├── ChatbotSection.tsx   # Section chatbot conversationnel
│   │       ├── BookingForm.tsx      # Formulaire de réservation
│   │       ├── Footer.tsx           # Pied de page
│   │       ├── ChatWidget.tsx       # Widget chat flottant
│   │       ├── figma/
│   │       │   └── ImageWithFallback.tsx  # Composant image avec fallback
│   │       └── ui/                  # Composants UI personnalisés
│   │           ├── button.tsx
│   │           ├── card.tsx
│   │           ├── form.tsx
│   │           ├── input.tsx
│   │           ├── select.tsx
│   │           ├── dialog.tsx
│   │           ├── tabs.tsx
│   │           ├── accordion.tsx
│   │           ├── sheet.tsx
│   │           └── [autres composants UI...]
│   └── styles/
│       ├── index.css               # Point d'entrée des styles
│       ├── fonts.css               # Imports de polices
│       ├── tailwind.css            # Configuration Tailwind
│       └── theme.css               # Thème personnalisé
├── public/                         # Ressources statiques
├── vite.config.ts                  # Configuration Vite
├── tsconfig.json                   # Configuration TypeScript
├── tailwind.config.ts              # Configuration Tailwind
├── postcss.config.mjs              # Configuration PostCSS
├── package.json                    # Dépendances et scripts
├── index.html                      # Fichier HTML principal
├── README.md                       # Documentation projet
├── ATTRIBUTIONS.md                 # Crédits et attributions
└── guidelines/
    └── Guidelines.md               # Directives de développement
```

---

## Composants

### Composants principaux

#### 1. **HeroSection.tsx**
Section héroïque avec animations Framer Motion.

**Fonctionnalités :**
- Fond animé dégradé et image spatiale
- Animations de texte avec délais
- Boutons d'appel à l'action (CTA)
- Scroll smooth vers la section destinations

**Props :** Aucune

#### 2. **DestinationsGallery.tsx**
Galerie responsive affichant les destinations disponibles.

**Fonctionnalités :**
- Affichage en grille (réactif)
- Pagination ou scroll infinit
- Filtrage par catégorie (optionnel)
- Animation lors du survol

**Dépendances :** `DestinationCard.tsx`, composants UI

#### 3. **DestinationCard.tsx**
Carte individuelle représentant une destination.

**Props :**
```typescript
interface DestinationCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  period: string;
  price: number;
  rating: number;
  availability: boolean;
}
```

#### 4. **BookingForm.tsx**
Formulaire de réservation de voyage.

**Fonctionnalités :**
- Validation intégrée avec React Hook Form
- Sélection de destination
- Vérification de disponibilité
- Notifications toast avec Sonner

**Champs typiques :**
- Destination (select)
- Date de voyage (date picker)
- Nombre de voyageurs (number)
- Email de contact
- Préférences additionnelles

#### 5. **ChatbotSection.tsx**
Section présentant ou intégrant un chatbot conversationnel.

**Fonctionnalités :**
- Interface de chat
- Messages et réponses animées
- Suggestions rapides
- Intégration potentielle avec une API

#### 6. **ChatWidget.tsx**
Widget chat flottant pour l'assistance client.

**Fonctionnalités :**
- Position fixe en bas de la page
- Toggle ouverture/fermeture
- Historique des messages
- État persistant optionnel

#### 7. **Footer.tsx**
Pied de page avec liens et informations.

**Sections typiques :**
- Liens rapides
- Mentions légales
- Réseaux sociaux
- Formulaire newsletter

### Composants UI (Radix + Tailwind)

Tous les composants UI sont dans `src/app/components/ui/` et sont des abstractions personnalisées autour de **Radix UI** :

| Composant | Utilisation |
|-----------|------------|
| `button.tsx` | Boutons stylisés |
| `card.tsx` | Conteneurs de contenu |
| `form.tsx` | Intégration React Hook Form |
| `input.tsx` | Champs de texte |
| `select.tsx` | Sélecteurs déroulants |
| `dialog.tsx` | Modales |
| `tabs.tsx` | Onglets navigables |
| `accordion.tsx` | Contenus repliables |
| `checkbox.tsx` | Cases à cocher |
| `radio-group.tsx` | Boutons radio |
| `textarea.tsx` | Zones de texte multiligne |
| `avatar.tsx` | Images de profil circulaires |
| `badge.tsx` | Étiquettes de statut |
| `progress.tsx` | Barres de progression |
| `slider.tsx` | Curseurs de sélection |
| `calendar.tsx` | Sélecteur de date |
| `popover.tsx` | Popups positionnées |
| `tooltip.tsx` | Infobulle au survol |

---

## Configuration

### vite.config.ts
Configuration du bundler Vite avec support React et Tailwind.

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
```

**Points clés :**
- Alias `@` pour imports relatifs faciles
- Support des imports SVG bruts
- Plugins obligatoires pour Make (Figma)

### tailwind.config.ts
Configuration du thème Tailwind.

**Aspects personnalisés :**
- Palette de couleurs (purples, blues, blacks)
- Animations personnalisées
- Espacement adapté
- Typo customisée

### tsconfig.json
Configuration TypeScript pour une vérification stricte des types.

### postcss.config.mjs
Configuration PostCSS incluant Tailwind.

---

## Installation et démarrage

### Prérequis
- Node.js 18+ (recommandé 20+)
- npm ou pnpm ou yarn

### Installation

```bash
# Cloner le repository
git clone <url-repository>
cd Onepagesitefortimetravelagency

# Installer les dépendances
npm install
```

### Développement

```bash
# Démarrer le serveur de développement
npm run dev

# Serveur accessible à : http://localhost:5173
```

Le serveur recharge le code à chaud lors de modifications.

### Construction pour production

```bash
# Build en production
npm run build

# Les fichiers optimisés seront dans ./dist/
```

---

## Scripts et build

### Scripts disponibles

| Script | Commande | Description |
|--------|----------|-------------|
| Développement | `npm run dev` | Démarre Vite dev server |
| Build | `npm run build` | Bundle pour production |

### Process de build Vite

1. Parse du code TypeScript/React
2. Bundle avec Tree-shaking
3. Minification du code
4. Optimisation Tailwind
5. Génération des source maps (dev)

### Fichiers de sortie

```
dist/
├── index.html           # HTML optimisé
├── assets/
│   ├── index-XXXXX.js   # Bundle JS
│   └── index-XXXXX.css  # Bundle CSS
└── images/              # Ressources statiques
```

---

## Dépendances principales

### Dépendances de production

#### UI et Composants (Radix UI)
```markdown
@radix-ui/react-*: Suite complète de 30+ composants headless
- dialog, form, tabs, accordion, dropdown, menu, etc.
```

#### Gestion d'état et formulaires
```markdown
react-hook-form: Gestion légère et performante des formulaires
@emotion/react et @emotion/styled: CSS-in-JS pour styling avancé
```

#### Animations
```markdown
motion (Framer Motion): Animations déclaratives et fluides
embla-carousel-react: Carroustels performants
```

#### UI Utilities
```markdown
lucide-react: +487 icônes SVG customisables
@mui/material et @mui/icons-material: Composants Material Design
sonner: Toast notifications élégantes
```

#### Outils
```markdown
date-fns: Manipulation des dates (léger)
clsx et tailwind-merge: Gestion intelligente des classes CSS
react-day-picker: Sélecteur de dates
```

#### Autres
```markdown
react-router: Routage côté client
react-dnd: Drag and drop
recharts: Graphiques et charts
react-responsive-masonry: Layouts en masonry
next-themes: Gestion des thèmes clair/sombre
cmdk: Palette de commandes
vaul: Drawer composable
```

### Dépendances de développement

```json
{
  "@tailwindcss/vite": "4.1.12",      // Plugin Tailwind pour Vite
  "@vitejs/plugin-react": "4.7.0",    // Plugin React pour Vite
  "tailwindcss": "4.1.12",            // Framework CSS
  "vite": "6.3.5"                      // Bundler
}
```

### React et React-DOM (Peer Dependencies)

```json
{
  "react": "18.3.1",      // Marqué comme optional
  "react-dom": "18.3.1"   // Nécessaire pour la cible web
}
```

---

## Conventions et bonnes pratiques

### Conventions de nommage

**Composants React :**
```typescript
// PascalCase pour les composants
export function HeroSection() { }
export function BookingForm() { }

// camelCase pour les fonction utilitaires
function calculateTravelDuration() { }
function formatPrice(amount: number) { }
```

**Fichiers et dossiers :**
```
src/
├── components/            # Composants React
├── app/                    # Composant App principal
├── styles/                 # Fichiers CSS
├── utils/                  # Fonctions utilitaires (si exists)
└── types/                  # Définitions TypeScript
```

### Code styling

**Classes Tailwind :**
```tsx
// ✅ Bon : Classes bien organisées
className="flex items-center justify-between gap-4 p-4 bg-slate-900 rounded-lg"

// ❌ Mauvais : Trop long, difficile à lire
className="flex items-center justify-between gap-4 p-4 bg-slate-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
// → Utiliser plutôt clsx + Tailwind merge
```

**Animations Framer Motion :**
```tsx
// Initialisation et animation cohérentes
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  Contenu
</motion.div>
```

### React Hook Form

```tsx
// Validation intégrée
const form = useForm({
  resolver: zodResolver(schema), // Optionnel
  defaultValues: { email: '', }
});

<input {...form.register('email')} />
```

### Responsive design

Utiliser les breakpoints Tailwind :
```tsx
className="text-sm md:text-base lg:text-lg" // Responsive text
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Grille responsive
```

### Accessibilité

- Utiliser les composants Radix UI (WCAG 2.1 AA)
- Ajouter `alt` sur les images
- Sémantique HTML correcte
- Tests du clavier et lecteur d'écran

### Performance

1. **Code splitting** - Vite gère automatiquement
2. **Image optimization** - `ImageWithFallback.tsx` avec fallback
3. **Lazy loading** - React.lazy() pour routes
4. **Memoization** - `useMemo`, `useCallback` si nécessaire

---

## Environnement d'exécution

### Variables d'environnement

Créer un fichier `.env` à la racine pour les variables sensibles :

```bash
# .env
VITE_API_URL=https://api.example.com
VITE_CHATBOT_ID=xxxxx
# Note: Les variables VITE_ sont injectées au build
```

Accès dans le code :
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Ports

- **Développement** : http://localhost:5173
- **Vérifier vite.config.ts** pour la configuration complète

---

## Déploiement

### Options de déploiement

#### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

#### Vercel
```bash
# Détection automatique avec package.json et vite.config.ts
```

#### Server standard (Apache, nginx)
```bash
# Copier le contenu de /dist vers le serveur web
# Configurer les redirections SPA (tout vers index.html)
```

---

## Ressources externes

- **Figma Design** : https://www.figma.com/design/yJSJMDbJijlOAOBQwmhB7r/One-page-site-for-TimeTravel-Agency
- **React** : https://react.dev
- **Vite** : https://vitejs.dev
- **Tailwind CSS** : https://tailwindcss.com
- **Radix UI** : https://www.radix-ui.com
- **Framer Motion** : https://www.framer.com/motion

---

## Troubleshooting

### Le serveur dev ne démarre pas
```bash
# Vérifier les ports
lsof -i :5173  # macOS/Linux
netstat -ano | findstr :5173  # Windows

# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreurs TypeScript
```bash
# Vérifier la configuration
npx tsc --noEmit

# Recréer le cache
rm -rf .vite
npm run dev
```

### Styles Tailwind ne s'appliquent pas
- Vérifier que `@import './tailwind.css'` est dans `index.css`
- Vérifier les chemins du `tailwind.config.ts`
- Vérifier la syntaxe des classes : `className={...}`

### Build échoue
```bash
# Vérifier les erreurs
npm run build

# Mode verbose
npm run build -- --loglevel debug
```

---

## Support et contributions

Pour toute question ou contribution :
1. Consulter le repository original
2. Lire la documentation Figma
3. Vérifier les guidelines du projet (`guidelines/Guidelines.md`)

---

*Documentation générée pour le projet TimeTravel Agency | v1.0 | 2026*
