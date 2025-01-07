import styled from 'styled-components';

const colors = {
  primary: '#5c3f94',
  secondary: '#d3c0eb',
  background: '#fdfdfd',
  text: '#333333',
  lightText: '#777777',
  border: '#e0e0e0',
  buttonHover: '#4b2a6a',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  min-height: 100vh;
  color: ${colors.text};
  font-family: 'Lato', sans-serif;
  background-color: ${colors.background};
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.05);
  overflow-x: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.border};
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${colors.primary};
  letter-spacing: 0.5px;
  text-transform: capitalize;
  margin: 0;
  word-wrap: break-word;
`;

export const EventStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;

  div {
    text-align: center;
    background: ${colors.secondary};
    padding: 15px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 24px;
    margin: 5px 0;
    color: ${colors.primary};
  }

  p {
    font-size: 16px;
    color: ${colors.text};
  }
`;

export const EventList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 10px;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  border: none;
  background-color: ${(props) => (props.secondary ? '#fff' : colors.primary)};
  color: ${(props) => (props.secondary ? colors.primary : '#fff')};
  cursor: pointer;
  transition: all 0.3s ease, transform 0.2s ease-in-out;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) =>
      props.secondary ? colors.secondary : colors.buttonHover};
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(2px);
  }

  margin-top: ${(props) => (props.primary ? '30px' : '0')};
`;

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
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const SearchInput = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  border: 1px solid ${colors.border};
  border-radius: 20px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 400px;
  align-self: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;
