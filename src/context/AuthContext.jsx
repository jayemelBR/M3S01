import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Crie o contexto de autenticação
export const AuthContext = createContext();

// Provider que fornecerá o contexto de autenticação
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const navigate = useNavigate();

  // Função de login
  const login = (email, password) => {
    // Aqui você pode adicionar a lógica de autenticação, como chamada a uma API
    const fakeToken = '1234567890abcdef'; // Isso seria substituído por um token real da API
    const fakeUser = { email: email, name: 'Usuário Teste' }; // Substitua pelos dados reais do usuário

    setAuthToken(fakeToken);
    setUser(fakeUser);

    // Armazene o token no localStorage para persistência de sessão
    localStorage.setItem('authToken', fakeToken);
    localStorage.setItem('user', JSON.stringify(fakeUser));

    navigate('/home');
  };

  // Função de logout
  const logout = () => {
    setAuthToken(null);
    setUser(null);

    // Remova o token do localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');

    navigate('/');
  };

  // Verificação da autenticação quando o componente é montado
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setAuthToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}