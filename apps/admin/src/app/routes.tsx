import type { RouteObject } from 'react-router-dom';

import { lazy } from 'react';

import MealsLayout from '../pages/meal/layout';
import { ROUTES } from '../shared/config/routes';

const HomePage = lazy(() => import('../pages/home'));
const CateringContractPage = lazy(() => import('../pages/meal/catering-contract'));
const CateringEventPage = lazy(() => import('../pages/meal/catering-event'));

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: ROUTES.MEALS.ROOT,
		element: <MealsLayout />,
		children: [
			{
				path: 'catering-contract',
				element: <CateringContractPage />,
			},
			{
				path: 'catering-event',
				element: <CateringEventPage />,
			},
		],
	},
];
