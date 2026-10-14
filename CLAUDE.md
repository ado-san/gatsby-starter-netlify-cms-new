# CLAUDE.md

## Projet

Ce dépôt contient le site personnel ad-ventures.cc, basé sur le starter Gatsby + Netlify CMS.

- Stack principale : Gatsby v2, React 16, Netlify CMS / Decap CMS
- Déploiement : GitHub + Netlify
- Branche de production : master
- Domaine de prod : ad-ventures.cc
- Objectif de migration : évolution vers Next.js pour apprendre le framework et moderniser la stack

## Commandes utiles

### Développement local

```bash
npm install
npm run develop
```

### Build de production

```bash
npm run build
npm run serve
```

### Nettoyage Gatsby

```bash
gatsby clean
```

### Déploiement Netlify local / fonctions

```bash
npm run start
npm run build
```

## Règles de travail

- Ne jamais pousser directement sur master.
- Toujours travailler sur une branche dédiée.
- Ouvrir une Pull Request pour toute modification utile ou de validation.
- La branche master est la production ; les changements doivent être validés via PR avant merge.
- Les changements de contenu / CMS doivent être testés via la preview Netlify de la PR avant merge final.

## Notes de contexte technique

- Le projet est encore sur Gatsby 2 (ancienne génération), avec Netlify CMS en configuration statique.
- Le dépôt utilise `gatsby-source-filesystem`, `gatsby-transformer-remark`, `gatsby-plugin-sharp`, `gatsby-plugin-netlify-cms`, `gatsby-plugin-purgecss` et `gatsby-plugin-netlify`.
- Il dépend de versions très anciennes de paquets Node / Gatsby / sass / build tooling.
- Les dépendances historiques sont sujettes à des incompatibilités avec Node récent (notamment Node 20+ / 24+).

## Sécurité / maintenance

- Les dépendances sont anciennes et plusieurs paquets deviennent dépréciés ou vulnérables.
- Ne pas faire de mise à jour non planifiée sans validation de compatibilité.
- La migration vers Next.js doit être pensée comme un refactor global, pas comme une simple montée de version.

## Workflow recommandé

1. Créer une branche de travail : `feature/...` ou `chore/...`
2. Faire les modifications demandées.
3. Valider localement avec les commandes de build / dev compatibles.
4. Ouvrir une PR.
5. Vérifier les checks Netlify / preview.
6. Merger uniquement après validation.
