import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const FormWrapper = styled.div`
  width: 50%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #2e2e2e;
  margin-bottom: 30px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: ${(props) => (props.isError ? '1px solid red' : '1px solid #ccc')};
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${(props) => (props.isError ? 'red' : '#7f56d9')};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: ${(props) => (props.secondary ? '#ffffff' : '#7f56d9')};
  color: ${(props) => (props.secondary ? '#7f56d9' : '#ffffff')};
  border: ${(props) => (props.secondary ? '2px solid #7f56d9' : 'none')};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: ${(props) => (props.secondary ? '0' : '20px')};
  transition: transform 0.2s ease, background-color 0.3s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props) => (props.secondary ? '#f3f0ff' : '#6c46b1')};
    transform: scale(1.05);
  }
`;

export const Message = styled.p`
  color: ${(props) => (props.error ? 'red' : 'green')};
  margin-bottom: 20px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #2e2e2e;
`;

export const ImageWrapper = styled.div`
  width: 50%;
  background: linear-gradient(120deg, #7f56d9, #6c46b1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: #ffffff;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Illustration = styled.img`
  width: 80%;
  margin-bottom: 20px;
  animation: float 3s infinite ease-in-out;

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export const InfoText = styled.p`
  font-size: 18px;
  text-align: center;
`;
