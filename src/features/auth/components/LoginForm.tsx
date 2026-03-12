import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  loginSchema,
  type TLoginFormSchema,
} from '@/features/auth/schemas/login.schema';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { Loading } from '@/components/ui/Loading';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginSchema),
  });

  const { login, isLoading } = useAuth();

  function handleLogin(data: TLoginFormSchema) {
    login(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className='w-full flex flex-col gap-6'
    >
      <Input
        label='E-mail'
        inputId='email'
        type='text'
        placeholder='seu@email.com'
        icon={<Mail size={20} />}
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        label='Senha'
        inputId='password'
        type='password'
        placeholder='••••••••'
        icon={<Lock size={20} />}
        error={errors.password?.message}
        {...register('password')}
      />
      <Button text='Entrar' />
      {isLoading && <Loading />}
    </form>
  );
};

export default LoginForm;
