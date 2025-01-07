import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Container, Header, Button, HeroSection, Description, Features } from './Styled';

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup'); 
  };

  return (
    <Container>
      <Header>
        <h1>Bem-vindo ao EventHub</h1>
        <Button primary onClick={handleLoginClick}>Entrar</Button> 
      </Header>

      <HeroSection>
        <h2>Gerencie seus eventos de forma simples e rápida</h2>
        <p>EventHub é a plataforma ideal para você criar, gerenciar e compartilhar seus eventos com facilidade.</p>
        <Button primary onClick={handleSignupClick}>Comece Agora</Button> 
      </HeroSection>

      <Description>
        <h3>Por que escolher EventHub?</h3>
        <p>Com o EventHub, você pode organizar todos os seus eventos em um único lugar, convidar participantes, e muito mais!</p>
      </Description>

      <Features>
        <div>
          <h4>Crie Eventos</h4>
          <p>Fácil criação de eventos e personalização de informações como data, local e imagem.</p>
        </div>
        <div>
          <h4>Gerencie Participantes</h4>
          <p>Controle as inscrições e envie convites diretamente pela plataforma.</p>
        </div>
        <div>
          <h4>Design Responsivo</h4>
          <p>Acesse seu evento de qualquer dispositivo com uma experiência de usuário otimizada.</p>
        </div>
      </Features>

      <Button primary onClick={() => navigate('/events')}>Veja os Eventos</Button> 
    </Container>
  );
};

export default HomePage;
