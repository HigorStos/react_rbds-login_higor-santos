import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';

const LoginPage = lazy(() => import('@/pages/LoginPage.tsx'));

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <LoginPage />
      </Suspense>
    ),
  },
]);
