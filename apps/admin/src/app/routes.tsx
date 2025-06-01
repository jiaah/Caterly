import type { RouteObject } from 'react-router-dom';

import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home'));

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
];
