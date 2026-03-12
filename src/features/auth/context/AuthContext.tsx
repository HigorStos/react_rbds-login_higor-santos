import { createContext, useContext, useState } from 'react';
import type { ILoginResponse } from '@/features/auth/types/auth.types';
/* eslint-disable react-refresh/only-export-components */

interface IAuthContext {
  user: ILoginResponse['data'] | null;
  setUser: (user: ILoginResponse['data'] | null) => void;
  isAuthenticed: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<ILoginResponse['data'] | null>(null);
  const [isAuthenticed, setIsAuthenticated] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticed, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
