import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Importando o axios
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
      if (gravarSenha) {
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);
      }
      localStorage.setItem('token', token); 

      onLogin(); 
      navigate('/home'); 
    } catch (error) {
      setLoading(false);
      console.error("Erro no login", error);
      setErrorMessage('Credenciais inválidas. Tente novamente.');
    }
  };

  const handleRegister = () => {
    navigate('/cadastro');
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Bem-vindo de volta!</Title>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isError={!!errorMessage}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          isError={!!errorMessage}
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
        <InfoWrapper>
          <InfoText>Acesse sua conta e aproveite o melhor conteúdo.</InfoText>
        </InfoWrapper>
        <Illustration src="https://i.imgur.com/Sa0WeIb.png" alt="Login Illustration" />
      </ImageWrapper>
    </Container>
  );
};

export default Login;
