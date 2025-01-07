import styled from 'styled-components';

// Container principal da página
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f8f8;
  min-height: 100vh;
  color: #333;
  font-family: 'Inter', sans-serif; // Fonte moderna
`;

// Cabeçalho
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 10px 0;
`;

// Título da página
export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #7f56d9; // Cor solicitada
  margin: 0;
`;

// Lista de eventos
export const EventList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
`;

// Estilo dos botões
export const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: ${(props) => (props.secondary ? '2px solid #7f56d9' : 'none')};
  background-color: ${(props) => (props.secondary ? '#ffffff' : '#7f56d9')};
  color: ${(props) => (props.secondary ? '#7f56d9' : '#ffffff')};
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.secondary ? '#f2e7ff' : '#6631b0')};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  // Adicionando margem superior para separação
  margin-top: ${(props) => (props.primary ? '20px' : '0')};
`;

// Mensagem quando não há eventos
export const EmptyMessage = styled.p`
  font-size: 16px;
  color: #7f56d9;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  color: #333;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
  border: 1px solid #7f56d9;

  // Adicionando um pouco mais de espaçamento abaixo
  margin-bottom: 20px;
`;

