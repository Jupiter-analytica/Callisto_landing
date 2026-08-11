# Callisto Pilot Landing

Landing page commerciale premium de Callisto Pilot.

## Développement

Prérequis : Node.js 22.13 ou supérieur.

```bash
npm run install:ci
npm run dev
```

## Validation

```bash
npm run build
npm test
```

La page est responsive, accessible au clavier et respecte le design system Callisto Pilot. Les fichiers graphiques officiels se trouvent dans `public/`.

## Liste d’attente

Les inscriptions sont enregistrées dans Cloudflare D1 via la liaison `DB`. Le
formulaire normalise les adresses email, bloque les doublons et exige un
consentement explicite.

Après toute modification de `db/schema.ts`, générer et inspecter la migration :

```bash
npm run db:generate
```

Les migrations générées dans `drizzle/` font partie de l’artefact de
déploiement et sont appliquées automatiquement par la plateforme.
