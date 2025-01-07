import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f8f8f8;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #7f56d9;
  color: #fff;

  h1 {
    font-size: 28px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 20px;
    h1 {
      font-size: 22px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(to bottom, #7f56d9, #6c46b1);
  color: #fff;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.primary ? '#fff' : '#7f56d9')};
  background-color: ${(props) => (props.primary ? '#7f56d9' : '#fff')};
  border: ${(props) => (props.primary ? 'none' : '2px solid #7f56d9')};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? '#6c46b1' : '#f3f0ff')};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export const Description = styled.section`
  padding: 40px 50px;
  text-align: center;

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 20px;
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const Features = styled.section`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 40px 50px;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

export const FeatureCard = styled.div`
  max-width: 300px;
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h4 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #7f56d9;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #7f56d9;
  color: #fff;
  font-size: 14px;
`;
