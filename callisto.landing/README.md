# Callisto Pilot Landing

Landing page commerciale premium de Callisto Pilot, basée sur Next.js officiel et déployable sur Vercel.

## Développement

Prérequis : Node.js 22.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run build
npm run lint
```

La page est responsive, accessible au clavier et respecte le design system Callisto Pilot. Les fichiers graphiques officiels se trouvent dans `public/`.

## Liste d’attente

La route `POST /api/waitlist` valide les données puis les transmet à l’API Callisto `POST /api/public/waitlist`. Les inscriptions sont ainsi conservées dans la base principale de Callisto, et non dans une base propre à la landing.

Configurer les variables suivantes dans `.env.local` et dans Vercel :

```env
CALLISTO_API_URL=https://api.callistopilot.com
# Facultatif si l’API publique exige une authentification serveur à serveur
CALLISTO_WAITLIST_API_KEY=
```
