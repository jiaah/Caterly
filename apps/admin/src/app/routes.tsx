import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home'));

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
];
