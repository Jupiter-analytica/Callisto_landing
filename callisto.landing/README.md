# Callisto Pilot Landing

Landing page commerciale premium de Callisto Pilot, basée sur Next.js officiel et déployable sur Vercel.

## Développement

Prérequis : Node.js 22.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm run lint
```

La page est responsive, accessible au clavier et respecte le design system Callisto Pilot. Les fichiers graphiques officiels se trouvent dans `public/`.

## Liste d’attente

La route `POST /api/waitlist` valide les données du formulaire. La persistance D1 a été retirée afin que la landing Vercel ne possède pas une base commerciale séparée.

La transmission vers l’API Callisto sera activée lorsque l’endpoint public de liste d’attente et son contrat auront été confirmés. Tant qu’elle n’est pas configurée, la route retourne `503` et ne transmet ni ne conserve aucune donnée personnelle.
