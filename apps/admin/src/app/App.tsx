import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import { routes } from './routes';

const AppRoutes = () => {
	const element = useRoutes(routes);
	return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

export const App = () => {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
};
