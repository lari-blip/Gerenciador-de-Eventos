import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;


export const FormWrapper = styled.div`
  width: 50%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #2e2e2e;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #7f56d9;
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props) => (props.secondary ? '#f3f0ff' : '#6c46b1')};
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
  background-color: #7f56d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: #ffffff;
`;

export const Illustration = styled.img`
  width: 80%;
  margin-bottom: 20px;
`;

export const InfoText = styled.p`
  font-size: 18px;
  text-align: center;
`;
