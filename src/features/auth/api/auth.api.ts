import { api } from '@/lib/axios';
import type { TLoginFormSchema } from '../schemas/login.schema';
import type { ILoginResponse } from '../types/auth.types';

export const authApi = {
  login: async (data: TLoginFormSchema): Promise<ILoginResponse> => {
    const response = await api.post<ILoginResponse>('/dev/auth/login', data);
    return response.data;
  },
};
