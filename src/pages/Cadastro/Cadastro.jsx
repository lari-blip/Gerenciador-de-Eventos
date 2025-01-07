import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import {
  Container,
  FormWrapper,
  Input,
  Button,
  Title,
  Message,
  ImageWrapper,
  Illustration,
  InfoText
} from './Styled';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !senha || !confirmSenha) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }
    if (senha !== confirmSenha) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }
    setErrorMessage('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/login');  
    }, 1500);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Crie sua conta</Title>
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
        <Input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmSenha}
          onChange={(e) => setConfirmSenha(e.target.value)}
        />
        {errorMessage && <Message>{errorMessage}</Message>}
        <Button onClick={handleSignup} disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
        <Button secondary onClick={() => navigate('/login')}>
          Já tem uma conta? Faça login
        </Button>
      </FormWrapper>
      <ImageWrapper>
        <InfoText>Crie sua conta e tenha a melhor experiência!</InfoText>
        <Illustration src="https://i.imgur.com/E9E2Pue.png" alt="Signup Illustration" />
      </ImageWrapper>
    </Container>
  );
};

export default Cadastro;
