import { useState } from 'react';
import { useNavigate } from 'react-router';
import { authApi } from '../api/auth.api';
import type { TLoginFormSchema } from '../schemas/login.schema';
import { toast } from 'react-toastify';
import { useAuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const { setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data: TLoginFormSchema) => {
    try {
      setIsLoading(true);
      const response = await authApi.login(data);
      if (!response.data.active) {
        toast.error(
          'Sua conta está inativa. Por favor, entre em contato com o suporte.',
        );
        return;
      }
      setUser(response.data);
      localStorage.setItem('token', response.data.account.jwt);
      toast.success('Login realizado com sucesso!');
      navigate('/home');
    } catch {
      toast.error('E-mail ou senha inválidos.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    try {
      setIsLoading(true);
      localStorage.clear();
      navigate('/login');
      toast.success('Logout realizado com sucesso!');
    } catch {
      toast.error('Ocorreu um erro ao realizar logout.');
    } finally {
      setIsLoading(false);
    }
  };

  return { login, logout, isLoading };
};
