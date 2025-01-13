import styled from 'styled-components';

export const EventCardContainer = styled.div`
  width: 320px; 
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .image-container {
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 12px 12px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover; 
    }
  }

  .content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h3 {
      font-size: 18px;
      color: #7f56d9;
      margin: 0;
    }

    p {
      font-size: 14px;
      color: #555;
      margin: 0;
    }

    .edit-buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;

      button {
        padding: 8px 12px;
        font-size: 14px;
        font-weight: bold;
        border-radius: 8px;
        border: none;
        background-color: #7f56d9;
        color: #ffffff;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;

        &:hover {
          background-color: #7f56d9;
          transform: scale(1.05);
        }

        &:nth-child(3) {
          background-color: #ff4d4f;
          &:hover {
            background-color: #e03030;
          }
        }
      }
    }

    .input-edit {
      display: flex;
      gap: 10px;
      flex-direction: column;
      margin-top: 10px;

      input {
        padding: 8px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid #ddd;
        width: 100%;
        background-color: #f7f7f7;
        color: #555;
        transition: border-color 0.3s;

        &:focus {
          border-color: #7f56d9;
          background-color: #ffffff;
        }
      }
    }
  }
`;

export const EventList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  border: ${(props) => (props.secondary ? '2px solid #7f56d9' : 'none')};
  background-color: ${(props) => (props.secondary ? '#ffffff' : '#7f56d9')};
  color: ${(props) => (props.secondary ? '#7f56d9' : '#ffffff')};
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${(props) => (props.secondary ? '#e0e7ff' : '##6f41d2')};
    transform: scale(1.05);
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #ff4d4f;
  color: #ffffff;
  &:hover {
    background-color: #e03030;
  }
`;
