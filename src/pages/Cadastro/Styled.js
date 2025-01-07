import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #7f56d9, #9e77ed);
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #7f56d9;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  transition: border-color 0.3s;

  &:focus-within {
    border-color: #7f56d9;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  color: #7f56d9;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
  color: #333;
`;

export const Message = styled.div`
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

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
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

export const ImageWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const Illustration = styled.img`
  width: 300px;
  object-fit: contain;
  border-radius: 12px;
`;

export const InfoText = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;
