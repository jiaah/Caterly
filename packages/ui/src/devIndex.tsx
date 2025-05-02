// Development mode only (with Vite dev server)
import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';

import { Button } from './components/Button';

function App() {
	return (
		<Button appName="ui" className="text-blue-500">
			ui 버튼
		</Button>
	);
}

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
