import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 400px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px; 
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #7f56d9;  
    margin-bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #7f56d9;  
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #7f56d9;  
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #555;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  padding: 12px 20px;
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
`;
