import { createContext, useContext, useState } from 'react';
import type { ILoginResponse } from '../types/auth.types';
/* eslint-disable react-refresh/only-export-components */

interface IAuthContext {
  user: ILoginResponse['data'] | null;
  setUser: (user: ILoginResponse['data'] | null) => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<ILoginResponse['data'] | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
