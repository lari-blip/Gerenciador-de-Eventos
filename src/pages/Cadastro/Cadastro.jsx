import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import axios from 'axios';
import {
  Container,
  FormWrapper,
  InputWrapper,
  Input,
  Button,
  Title,
  Message,
  ImageWrapper,
  Illustration,
  InfoText,
  Icon,
} from './Styled';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
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

    try {
      const response = await axios.post('http://localhost:3000/cadastro', {
        nome: 'Administrador',  
        email: email,
        senha: senha,
      });

      if (response.status === 201) {
        setLoading(false);
        navigate('/login');  
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setErrorMessage(error.response.data); 
      } else {
        setErrorMessage('Erro ao cadastrar. Tente novamente.');
      }
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Crie sua conta</Title>
        <InputWrapper>
          <Icon>
            <FaEnvelope />
          </Icon>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Icon>
            <FaLock />
          </Icon>
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Icon>
            <FaLock />
          </Icon>
          <Input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
          />
        </InputWrapper>
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
