import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding: 50px 20px;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;

  h1 {
    font-size: 36px;
    color: #7f56d9;
    font-weight: bold;
  }
`;

export const HeroSection = styled.section`
  text-align: center;
  background-color: #7f56d9;
  color: white;
  padding: 60px 20px;
  width: 100%;
  max-width: 1200px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${(props) => (props.primary ? '#7f56d9' : '#f4f4f4')};
  color: ${(props) => (props.primary ? '#fff' : '#7f56d9')};
  border: ${(props) => (props.primary ? 'none' : '2px solid #7f56d9')};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? '#6a4bb9' : '#e0e0e0')};
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const Description = styled.section`
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;

  h3 {
    font-size: 28px;
    color: #7f56d9;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #333;
  }
`;

export const Features = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  gap: 20px;

  div {
    flex: 1;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    h4 {
      font-size: 24px;
      color: #7f56d9;
      margin-bottom: 15px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      color: #555;
    }
  }
`;

