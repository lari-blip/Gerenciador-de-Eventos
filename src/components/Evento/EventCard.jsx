import React from 'react';
import PropTypes from 'prop-types'; // Para validação das props
import { Button, EventCardContainer } from './Styled'; // Ajuste conforme necessário

// Componente para exibir os detalhes de cada evento
const EventCard = ({ event, onDelete, onEditDate, onEditLocation }) => (
  <EventCardContainer>
    {/* Exibindo a imagem do evento */}
    <img src={event.image} alt={event.name} />
    <div className="content">
      {/* Título do evento */}
      <h3>{event.name}</h3>
      {/* Data do evento */}
      <p>{event.date}</p>
      {/* Localização do evento */}
      <p>{event.location}</p>

      {/* Botões para editar e excluir o evento */}
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
    image: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEditDate: PropTypes.func.isRequired,
  onEditLocation: PropTypes.func.isRequired
};

export default EventCard;
