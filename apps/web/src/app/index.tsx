// Development mode only (with Vite dev server)
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
	</React.StrictMode>,
);
