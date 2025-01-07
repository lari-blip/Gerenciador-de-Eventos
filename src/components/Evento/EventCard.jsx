import React from 'react';
import PropTypes from 'prop-types';
import { EventCardContainer, Button } from './Styled';

const EventCard = ({ event, onDelete, onEditDate, onEditLocation }) => (
  <EventCardContainer>
    <div className="image-container">
      <img src={event.image} alt={event.name} />
    </div>
    <div className="content">
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>

      <div className="buttons">
        <Button onClick={() => onEditDate(event.id)}>Editar Data</Button>
        <Button onClick={() => onEditLocation(event.id)}>Editar Localização</Button>
        <Button onClick={() => onDelete(event.id)} secondary>
          Excluir Evento
        </Button>
      </div>
    </div>
  </EventCardContainer>
);

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEditDate: PropTypes.func.isRequired,
  onEditLocation: PropTypes.func.isRequired,
};

export default EventCard;
