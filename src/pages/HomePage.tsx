import RBDSLogo from '@/assets/images/rbds-logo.png';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Loading } from '@/components/ui/Loading';
import { useAuthContext } from '@/features/auth/context/AuthContext';
import { useAuth } from '@/features/auth/hooks/useAuth';

const HomePage = () => {
  const { user } = useAuthContext();
  const { logout, isLoading } = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <Container className='h-screen'>
      <Container className='w-11/12 sm:w-1/3 flex-col'>
        <img
          src={RBDSLogo}
          alt='RBDS Logo'
          className='w-56 pointer-events-none mb-8'
        />
        <h1 className='text-2xl text-center font-bold mb-4'>
          Bem-vindo(a) ao Portal do Colaborador, {user?.fullname}!
        </h1>
        <Container className='flex-col text-center mb-8'>
          <p>
            <strong>Nome do Usuário:</strong> {user?.fullname}
          </p>
          <p>
            <strong>Email do Usuário:</strong> {user?.email}
          </p>
          <p>
            <strong>Id do Usuário:</strong> {user?.id}
          </p>
          <p>
            <strong>Cargo do Usuário:</strong> {user?.role}
          </p>
          <p>
            <strong>Usuário Ativo:</strong> {user?.active ? 'Sim' : 'Não'}
          </p>
        </Container>
        <Button text='Sair' onClick={() => handleLogout()} />
      </Container>
      {isLoading && <Loading />}
    </Container>
  );
};

export default HomePage;
