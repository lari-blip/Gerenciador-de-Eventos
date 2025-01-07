import styled from 'styled-components';

// Paleta de Cores Sofisticada
const colors = {
  primary: '#5c3f94', // Roxo escuro elegante
  secondary: '#d3c0eb', // Roxo claro suave
  background: '#fdfdfd', // Fundo neutro e leve
  text: '#333333', // Texto principal
  lightText: '#777777', // Texto secundário mais suave
  border: '#e0e0e0', // Borda suave
  buttonHover: '#4b2a6a', // Roxo mais escuro para hover
  shadow: 'rgba(0, 0, 0, 0.1)', // Sombra suave para profundidade
};

// Container principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  min-height: 100vh;
  color: ${colors.text};
  font-family: 'Lato', sans-serif; /* Fonte moderna e limpa */
  background-color: ${colors.background};
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.05); /* Sombra suave interna */
  overflow-x: hidden;
`;

// Cabeçalho
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.border}; /* Linha fina de separação */
`;

// Título
export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${colors.primary};
  letter-spacing: 0.5px;
  text-transform: capitalize; /* Título com maiúsculas refinadas */
  margin: 0;
  word-wrap: break-word;
`;

// Lista de eventos (Grid refinada)
export const EventList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 10px;
  margin-bottom: 50px;
`;

// Botões modernos e interativos
export const Button = styled.button`
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px; /* Botão com bordas mais arredondadas */
  border: none;
  background-color: ${(props) => (props.secondary ? '#fff' : colors.primary)};
  color: ${(props) => (props.secondary ? colors.primary : '#fff')};
  cursor: pointer;
  transition: all 0.3s ease, transform 0.2s ease-in-out;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) => (props.secondary ? colors.secondary : colors.buttonHover)};
    transform: translateY(-4px); /* Efeito de elevação mais suave */
  }

  &:active {
    transform: translateY(2px); /* Efeito de clique mais forte */
  }

  margin-top: ${(props) => (props.primary ? '30px' : '0')};
`;

// Mensagem de "sem eventos"
export const EmptyMessage = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.lightText};
  text-align: center;
  margin-top: 80px;
  padding: 30px;
  background-color: ${colors.background};
  border-radius: 12px;
  border: 1px solid ${colors.border};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); /* Aumento da sombra ao passar o mouse */
  }
`;

