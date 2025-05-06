# Real-time Library Updates in Vite Monorepo

## Package Structure

```
apps/
  └── admin/        # Vite 앱

packages/
  └── ui/           # Component library
  └── utils/        # Utility functions
  └── web/          # Common components (auth, etc.)

```

## Scripts for Each Package

**Library Packages (ui, web, utils)**

```
"scripts": {
  "dev": "tsc -w",       // watch mode build
  "build": "tsc"
}
```

**App Packages (admin, web)**

```
import { Button } from '@caterly/ui';
// Actually references node_modules/@caterly/ui/dist/index.js
```

## Real-time Reflection Flow

`[ui/src] --tsc -w--> [ui/dist] --import--> [admin Vite dev server] --HMR--> [browser]`

- Library packages use the **TypeScript compiler**(tsc -w) to watch and compile `.ts` files to `.js`, updating the `dist` folder in real-time.
- The app's **Vite dev server** watches the `dist` folder and triggers hot module replacement (HMR) when changes are detected.

## Execution Strategy

**Parallel dev execution (watch-based)**

```
"predev": "pnpm --filter=ui dev & pnpm --filter=utils dev & pnpm --filter=web dev",
"dev:admin": "pnpm run predev & pnpm --filter=admin dev"
```

- Since `tsc -w` is a persistent task, using `dependsOn: ['^dev']` in Turbo will cause errors.
- Watch (dev) tasks should be run in parallel without dependencies.

## Summary

| Item                 | Strategy/Explanation                                    |
| -------------------- | ------------------------------------------------------- |
| Library dev          | `tsc -w` (watch build)                                  |
| App dev              | Vite dev server                                         |
| Library → App Link   | Apps directly import JS from the dist folder            |
| Real-time Reflection | `tsc -w` updates dist, and Vite detects via HMR         |
| Dev Execution Mode   | Parallel execution without dependencies                 |
| Build/Test Execution | Sequential execution following Turbo's dependency graph |

## Copying CSS and Static Files to dist

- `tsc` does not copy CSS/images or static resources.
- Use tools like `cpx`, `copyfiles` to copy static files.

```
"build": "tsc && cpx 'src/styles/**/*.css' dist/styles"
```
