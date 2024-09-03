import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Se o usuário não está autenticado, redireciona para a página de login
    return <Navigate to="/" />;
  }

  // Se o usuário está autenticado, renderiza a página solicitada
  return children;
}

export default PrivateRoute;
