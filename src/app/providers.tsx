import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient';
import { AuthProvider } from '@/features/auth/context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ToastContainer position='top-right' autoClose={3000} />
      </QueryClientProvider>
    </AuthProvider>
  );
};
