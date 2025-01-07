import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Signup from './pages/Cadastro/Cadastro';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
         
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
          />

         
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
          />

         
          <Route
            path="/cadastro"
            element={isAuthenticated ? <Navigate to="/home" /> : <Signup onCadastro={handleLogin} />}
          />

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
