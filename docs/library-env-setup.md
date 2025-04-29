# Library Environment Setup

## 1. Development Environment

We use the Vite development server with Hot Module Replacement (HMR) for real-time code testing and modifications.

### 1.1 Entry Point for Development

Set index.tsx as the entry point for development:

```
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './styles/index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 1.2 index.html

Define the root DOM and load index.tsx:

```
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Dev Mode</title>
	</head>
	<body>
		<div id="root"></div>
		<script type="module" src="path-to-index.tsx"></script>
	</body>
</html>
```

### 1.3 Vite Dev Configuration

Set index.tsx as the entry point in the Vite config. [Example here](https://github.com/jiaah/Caterly/blob/316f700b4f02e1bcfa8137ca316a9b280f9f1d64/apps/web/vite.config.js#L27-L58).

## 2. Build Environment

Use Vite's library mode to build the library in a modular format.

### 2.1 Entry Point for Build

Set index.ts as the entry point:

```
export * from './app';
```

### 2.2 Vite Build Configuration

Use index.tsx as the build entry. Example here.[Example here](https://github.com/jiaah/Caterly/blob/316f700b4f02e1bcfa8137ca316a9b280f9f1d64/apps/web/vite.config.js#L60-L73).

### 2.3 package.json Configuration

In yourApp/package.json, set the entry point and build mode to lib:

```
{
	"main": "./dist/index.js",
  "types": "./dist/index.d.ts",
	"scripts": {
    "dev": "vite",
    "build": "vite build --mode lib",
  },
}
```

In the root package.json, add:

```
"scripts": {
	"dev:web": "turbo dev --filter=your-app-name",
	"build:web": "turbo build --filter=your-app-name",
},
```

## 3. Notes

- We don't use libraries like Storybook due to resource limitations.
- The build mode is set to lib for library builds.
