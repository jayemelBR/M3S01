import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

function Home() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
  }

  return (
    <div>
      <h1>Bem-vindo, {user ? user.name : 'Usuário'}!</h1>
      <p>Este é o conteúdo principal da aplicação.</p>
      <button onClick={logout}>Sair</button>
      
      {/* Adicione o temporizador com um valor inicial de 5 minutos */}
      <Timer initialMinutes={5} />
    </div>
  );
}

export default Home;
