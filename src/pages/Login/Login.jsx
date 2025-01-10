import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  InfoWrapper,
  InfoText,
} from './Styled';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [gravarSenha, setGravarSenha] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('senha');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setSenha(savedPassword);
    }
  }, []);

  const handleLogin = async () => {
    if (!email || !senha) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password: senha,
      });

      setLoading(false);

      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token); 

        if (gravarSenha) {
          localStorage.setItem('email', email);
          localStorage.setItem('senha', senha);
        }

        onLogin();
        navigate('/home'); 
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage('Credenciais inválidas. Tente novamente.');
    }
  };

  const handleRegister = () => {
    navigate('/cadastro');
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Bem-vindo ao Gerenciador De eventos!</Title>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isError={!!errorMessage}
        />
        <div style={{ position: 'relative' }}>
          <Input
            type={mostrarSenha ? 'text' : 'password'}  
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            isError={!!errorMessage}
          />
          <span
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
            onClick={() => setMostrarSenha(!mostrarSenha)}  
          >
            
          </span>
        </div>
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
        <InfoWrapper>
          <InfoText>Gerencie seus eventos de maneira fácil e rápida, com total controle e praticidade.</InfoText>
        </InfoWrapper>
        <Illustration src="https://i.imgur.com/Sa0WeIb.png" alt="Login Illustration" />
        
      </ImageWrapper>
    </Container>
  );
};

export default Login;
