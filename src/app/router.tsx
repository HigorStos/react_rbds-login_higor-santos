import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';

const LoginPage = lazy(() => import('@/pages/LoginPage.tsx'));
const HomePage = lazy(() => import('@/pages/HomePage.tsx'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/home',
    element: (
      <Suspense fallback={<div>Carregando...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <div>Página não encontrada</div>,
  },
]);
