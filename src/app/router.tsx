import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Loading } from '@/components/ui/Loading';

const LoginPage = lazy(() => import('@/pages/LoginPage.tsx'));
const HomePage = lazy(() => import('@/pages/HomePage.tsx'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/home',
    element: (
      <Suspense fallback={<Loading />}>
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <div>Página não encontrada</div>,
  },
]);
