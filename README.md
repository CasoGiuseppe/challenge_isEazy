# Challenge isEazy

## IMPORTANT

Para utilizar las variables de entorno es importante renombrar el archivo `.env.to.rename` a `.env`

## Required System

| Packages       | Vesions |
| -------------- | ------- |
| Node           | 20.8.0  |
| npm            | 10.1.0  |
| vue            | ^3.3.4  |
| pinia          | ^2.1.6  |
| miragejs       | ^0.1.47 |
| storybook/vue3 | ^7.4.6  |
| tailwindcss    | ^3.3.3  |

## Login Users

Para acceder a la sección de los comentarios es posible hacer login con los siguientes usuarios

| Email               | Password | Role    |
| ------------------- | -------- | ------- |
| giuseppe@isEazy.com | isEazy   | Student |
| marco@isEazy.com    | isEazy   | Teacher |

## Component documentation

Para documentar los componente se ha utilizado [`Storybook`](https://storybook.js.org/).
La librería para funcionar correctamente necesita de la versión de Node > 16.

Para lanzar en local storybook hay que utilizar el siguiente comando:

```sh
npm run storybook
```

## Server mock

Para simular el funcionamento de servicios API se ha utilizado [`miragejs`](https://miragejs.com/)

| path             | type |                                 |
| ---------------- | ---- | ------------------------------- |
| /user            | GET  | return a logged user            |
| /messages        | GET  | return a list of messages       |
| /messages/create | POST | Write a new provided message    |
| /attaches        | GET  | return a list of attachments    |
| /attaches/create | POST | Write a new provided attachment |

# VUE Default documentation

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
