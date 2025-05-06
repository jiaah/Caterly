# Real-time Library Updates in Vite Monorepo

## Package Structure

```
apps/
  └── admin/        # Vite 앱

packages/
  └── ui/           # Component library
  └── utils/        # Utility functions

```

## Scripts for Each Package

**Library Packages (utils, ui, web)**
<br/> `packages.json`

```
"scripts": {
  "tsc:build": "tsc",    // Generate the dist folder initially
  "dev": "tsc -w",       // Watch and compile TypeScript
}
```

**App Packages (admin, web)**
<br /> `packages.json`

```
"dependencies": {
  "@caterly/utils": "workspace:*",  // Link internal package using workspace
  "@caterly/ui": "workspace:*",
},
```

`component.tsx`

```
import { Button } from '@caterly/ui';  // References node_modules/@caterly/ui/dist/index.js
```

## Real-time Reflection Flow

`[ui/src] --tsc -w--> [ui/dist] --import--> [admin Vite dev server] --HMR--> [browser]`

- Library packages use `tsc -w` to watch and compile `.ts` files to `.js` and `.d.ts`, updating the `dist` folder in real-time.
- The app's **Vite dev server** watches the `dist` folder and triggers hot module replacement (HMR) when changes are detected.

## Execution Strategy

**Dev vs Build**

| Task    | Method          | Purpose                                  |
| ------- | --------------- | ---------------------------------------- |
| `dev`   | Parallel `&`    | Real-time updates (HMR) without blocking |
| `build` | Sequential `&&` | Static output for deployment             |

**Scripts**

```
"scripts": {
	// Build: Run in sequence respecting the dependency chain
  "tsc:build": "pnpm --filter=@caterly/utils run build && pnpm --filter=@caterly/ui run tsc:build",

	// Dev: Run in parallel for watch mode (tsc -w)
  "predev": "pnpm --filter=@caterly/utils run dev & pnpm --filter=@caterly/ui run dev",

	// App dev: Start app after setting up libraries
  "dev:admin": "pnpm run predev & pnpm --filter=admin run dev",
}
```

## Important Notes

**1. Turbo dependsOn Limitation**

- Avoid using `dependsOn: ['^dev']` for watch tasks, as `tsc -w` doesn’t respect the dependency order.

**2. Copying Static Files**

- Use tools like `cpx` or `copyfiles` to copy CSS, images, and static resources, as `tsc` doesn’t handle this.

Example:

```
"tsc:build": "tsc && cpx 'src/styles/**/*.css' dist/styles"
```

## Summary

| Item                 | Strategy/Explanation                                    |
| -------------------- | ------------------------------------------------------- |
| Library dev          | `tsc -w` (watch build)                                  |
| App dev              | Vite dev server (HMR)                                   |
| Library → App Link   | Link internal packages using `workspace:*` dependencies |
| Real-time Reflection | `tsc -w` updates `dis`t` → Vite detects via HMR         |
| Dev Execution Mode   | Parallel execution(`&`) without dependencies            |
| Build/Test Execution | Sequential execution(`&&`) following dependency graph   |
