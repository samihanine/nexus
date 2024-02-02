# nexus Monorepo

This is an official nexus monorepo.


## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `@nexus/web`: a [Next.js](https://nextjs.org/) app
- `@nexus/api`: an [Express](https://expressjs.com/) server
- `@nexus/ui`: ui: a React component library
- `@nexus/configs`: tsconfig.json's used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

### Install dependencies

```bash
yarn workspace api add openai
```