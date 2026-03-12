import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'E-mail é obrigatório').email('E-mail inválido'),

  password: z
    .string()
    .min(1, 'Senha é obrigatória')
    .min(6, 'A senha deve conter no mínimo 6 caracteres'),
});

export type TLoginFormSchema = z.infer<typeof loginSchema>;
