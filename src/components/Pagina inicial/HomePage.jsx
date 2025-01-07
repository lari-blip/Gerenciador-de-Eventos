import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  Navigation,
  HeroSection,
  Title,
  Subtitle,
  Button,
  Description,
  Features,
  FeatureCard,
  Footer,
} from './Styled';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/cadastro');
  };

  return (
    <Container>
      <Header>
        <h1>EventHub</h1>
        <Navigation>
          <Button onClick={handleLoginClick}>Entrar</Button>
          <Button primary onClick={handleSignupClick}>Criar Conta</Button>
        </Navigation>
      </Header>

      <HeroSection>
        <Title>Gerencie seus eventos de forma simples e rápida</Title>
        <Subtitle>
          O EventHub é a plataforma ideal para você criar, gerenciar e compartilhar seus eventos com facilidade.
        </Subtitle>
        <Button primary onClick={handleSignupClick}>Comece Agora</Button>
      </HeroSection>

      <Description>
        <h3>Por que escolher o EventHub?</h3>
        <p>
          Com o EventHub, você pode organizar todos os seus eventos em um único lugar, convidar participantes e
          proporcionar uma experiência incrível para seu público.
        </p>
      </Description>

      <Features>
        <FeatureCard>
          <h4>Criação Simples</h4>
          <p>Personalize os eventos com datas, locais e imagens com facilidade.</p>
        </FeatureCard>
        <FeatureCard>
          <h4>Gerenciamento de Participantes</h4>
          <p>Controle as inscrições e envie convites diretamente pela plataforma.</p>
        </FeatureCard>
        <FeatureCard>
          <h4>Design Responsivo</h4>
          <p>Acesse e gerencie eventos de qualquer dispositivo.</p>
        </FeatureCard>
      </Features>

      {/* Rodapé */}
      <Footer>
        <p>© {new Date().getFullYear()} EventHub. Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
};

export default HomePage;
