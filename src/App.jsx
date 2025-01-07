import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Signup from './pages/Cadastro/Cadastro';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Função chamada ao fazer login com sucesso
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Função chamada ao fazer logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Se o usuário estiver autenticado, redireciona para Home, senão para Login */}
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
          />

          {/* Rota de Login - Redireciona se estiver autenticado */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
          />

          {/* Rota de Cadastro - Redireciona se estiver autenticado */}
          <Route
            path="/cadastro"
            element={isAuthenticated ? <Navigate to="/home" /> : <Signup onCadastro={handleLogin} />}
          />

          {/* Rota da Home - Acessível apenas se estiver autenticado */}
          <Route
            path="/home"
            element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
