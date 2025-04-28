//  개발 모드용 (Vite dev 서버에서 사용)
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
