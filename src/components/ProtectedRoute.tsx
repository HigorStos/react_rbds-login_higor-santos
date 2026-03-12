import { Navigate } from 'react-router';
import { useAuthContext } from '@/features/auth/context/AuthContext';

interface IProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
  const { isAuthenticed } = useAuthContext();
  const token = localStorage.getItem('token');

  if (!token || !isAuthenticed) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};
