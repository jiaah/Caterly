import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import { routes } from './routes';

function AppRoutes() {
  const element = useRoutes(routes);
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
