import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

export default function MealsLayout() {
  return (
    <>
      <div className="bg-red-500 h-10 w-10 p-10">Meals Layout</div>
      <div>
        <Suspense fallback={<div className="bg-yellow-500 h-10 w-10 p-10">Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
