import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EventCardContainer, Button, DeleteButton } from './Styled';
import axios from 'axios';

const EventCard = ({ event, onDelete, onEditDate, onEditLocation }) => {
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [newDate, setNewDate] = useState(event.date);
  const [newLocation, setNewLocation] = useState(event.location);

  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleLocationChange = (e) => {
    setNewLocation(e.target.value);
  };

  const handleEditDate = async () => {
    if (!newDate) {
      alert('Por favor, forneça uma nova data!');
      return;
    }

    try {
      await axios.put(`http://localhost:3000/eventos/${event.id}`, {
        data_evento: newDate,
      });
      onEditDate(event.id, newDate);
      setIsEditingDate(false); 
    } catch (error) {
      console.error('Erro ao atualizar data do evento:', error);
    }
  };

  const handleEditLocation = async () => {
    if (!newLocation) {
      alert('Por favor, forneça uma nova localização!');
      return;
    }

    try {
      await axios.put(`http://localhost:3000/eventos/${event.id}`, {
        localizacao: newLocation,
      });
      onEditLocation(event.id, newLocation);
      setIsEditingLocation(false); 
    } catch (error) {
      console.error('Erro ao atualizar localização do evento:', error);
    }
  };

  return (
    <EventCardContainer>
      <div className="image-container">
        <img src={event.image} alt={event.name} />
      </div>
      <div className="content">
        <h3>{event.name}</h3>

    
        {isEditingDate ? (
          <div className="input-edit">
            <input
              type="date"
              value={newDate}
              onChange={handleDateChange}
            />
            <Button onClick={handleEditDate}>Salvar Data</Button>
          </div>
        ) : (
          <p>{newDate}</p>
        )}

        {isEditingLocation ? (
          <div className="input-edit">
            <input
              type="text"
              value={newLocation}
              onChange={handleLocationChange}
            />
            <Button onClick={handleEditLocation}>Salvar Localização</Button>
          </div>
        ) : (
          <p>{newLocation}</p>
        )}

        <div className="edit-buttons">
          {!isEditingDate && (
            <Button onClick={() => setIsEditingDate(true)}>Editar Data</Button>
          )}

          {!isEditingLocation && (
            <Button onClick={() => setIsEditingLocation(true)}>Editar Localização</Button>
          )}

          <DeleteButton onClick={() => onDelete(event.id)}>
            Excluir Evento
          </DeleteButton>
        </div>
      </div>
    </EventCardContainer>
  );
};

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
