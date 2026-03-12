import { Navigate } from 'react-router';
import { Container } from '@/components/ui/Container';
import { useAuthContext } from '@/features/auth/context/AuthContext';
import LoginForm from '@/features/auth/components/LoginForm';
import RBDSLogo from '@/assets/images/rbds-logo.png';

const LoginPage = () => {
  const { isAuthenticed } = useAuthContext();
  const token = localStorage.getItem('token');

  if (token && isAuthenticed) {
    return <Navigate to='/home' replace />;
  }

  return (
    <Container className='h-screen'>
      <div
        className='w-full h-full hidden sm:flex items-center justify-center flex-col bg-orange-400'
        style={{
          backgroundColor: '#F97316',
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      >
        <Container className='w-11/12 sm:w-2/3 h-full flex-col items-center'>
          <p className='text-4xl text-center text-wrap text-white font-bold mb-6'>
            Portal do Colaborador RBDS
          </p>
          <p className='text-1xl text-center text-white '>
            Gerencie seus projetos, acompanhe métricas e colabore com sua equipe
            para impulsionar o desenvolvimento social.
          </p>
        </Container>
      </div>
      <Container className='h-full flex-col bg-white'>
        <Container className='w-2/3 h-full flex-col items-start'>
          <img
            src={RBDSLogo}
            alt='RBDS Logo'
            className='w-42 mb-8 pointer-events-none'
          />
          <p className='text-2xl text-black font-bold mb-1'>
            Bem-vindo(a) de volta!
          </p>
          <p className='mb-8'>
            Entre com suas credenciais para acessar a plataforma
          </p>
          <LoginForm />
        </Container>
      </Container>
    </Container>
  );
};

export default LoginPage;
