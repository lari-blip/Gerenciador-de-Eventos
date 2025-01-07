import styled from 'styled-components';

// Container principal da página de Cadastro
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7fa; /* Cor de fundo mais suave */
`;

// Wrapper para o formulário de cadastro
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px; /* Aumenta a largura máxima */
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Sombra mais forte */
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15); /* Sombras mais intensas ao passar o mouse */
  }
`;

// Título do formulário
export const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #7f56d9;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif; /* Fonte mais moderna */
`;

// Estilo para os campos de entrada
export const Input = styled.input`
  width: 100%;
  padding: 14px 20px;
  margin-bottom: 18px; /* Menos espaçamento entre os campos */
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  transition: border-color 0.3s, background-color 0.3s;

  &:focus {
    border-color: #7f56d9;
    background-color: #f1eaff; /* Fundo de input com foco mais claro */
    outline: none;
  }
`;

// Estilo para a mensagem de erro
export const Message = styled.div`
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif; /* Fonte mais moderna */
`;

// Botões de ação
export const Button = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => (props.secondary ? '#7f56d9' : '#ffffff')};
  color: ${(props) => (props.secondary ? '#ffffff' : '#7f56d9')};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${(props) => (props.secondary ? '#6c4bb2' : '#f1eaff')};
    color: ${(props) => (props.secondary ? '#ffffff' : '#7f56d9')};
    transform: translateY(-2px); /* Suaviza o movimento do botão */
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

// Estilo para a parte da imagem
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px; /* Mais espaçamento entre o formulário e a imagem */
`;

export const Illustration = styled.img`
  width: 350px; /* Aumenta a largura da imagem */
  height: auto;
  object-fit: contain;
  border-radius: 12px; /* Bordas arredondadas para a imagem */
`;

export const InfoText = styled.p`
  font-size: 20px;
  color: #7f56d9;
  text-align: center;
  margin-top: 15px;
  font-family: 'Poppins', sans-serif; /* Fonte moderna */
`;
