// src/pages/Login/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  FormWrapper,
  Input,
  Button,
  Title,
  Message,
  Checkbox,
  Label,
  ImageWrapper,
  Illustration,
  InfoText,
} from './Styled';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [gravarSenha, setGravarSenha] = useState(false);
  const navigate = useNavigate();  // Para redirecionar após o login

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('senha');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setSenha(savedPassword);
    }
  }, []);

  const handleLogin = () => {
    if (!email || !senha) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }
    setErrorMessage('');
    setLoading(true);
    setTimeout(() => {
      const isValidUser = email === 'admin@admin.com' && senha === '123';
      setLoading(false);
      if (isValidUser) {
        if (gravarSenha) {
          localStorage.setItem('email', email);
          localStorage.setItem('senha', senha);
        }
        onLogin();  // Chama a função onLogin passada via props para atualizar o estado em App.js
        navigate('/home');  // Redireciona para a Home após o login
      } else {
        setErrorMessage('Credenciais inválidas. Tente novamente.');
      }
    }, 1500);
  };

  const handleRegister = () => {
    navigate('/cadastro');  // Redireciona para a página de cadastro
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Faça seu login</Title>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {errorMessage && <Message error>{errorMessage}</Message>}
        <div>
          <Checkbox
            type="checkbox"
            checked={gravarSenha}
            onChange={() => setGravarSenha(!gravarSenha)}
          />
          <Label>Lembrar de mim</Label>
        </div>
        <Button onClick={handleLogin} disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>
        <Button secondary onClick={handleRegister}>
          Não tem conta ainda? Crie agora
        </Button>
      </FormWrapper>
      <ImageWrapper>
        <Illustration src="https://i.imgur.com/Sa0WeIb.png" alt="Login Illustration" />
        <InfoText>A melhor experiência de login que você já teve na sua vida.</InfoText>
      </ImageWrapper>
    </Container>
  );
};

export default Login;
