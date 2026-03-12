import { useState } from 'react';
import { useNavigate } from 'react-router';
import { authApi } from '../api/auth.api';
import type { TLoginFormSchema } from '../schemas/login.schema';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (data: TLoginFormSchema) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await authApi.login(data);
      localStorage.setItem('token', response.data.account.jwt);
      navigate('/home');
    } catch {
      setError('E-mail ou senha inválidos');
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
