import React, { useState } from 'react';
import { Container, EventList, Button, Header, Title, EmptyMessage } from './Styled';
import EventCard from '../../components/Evento/EventCard';
import Modal from '../../components/Modal/Modal';

const Home = ({ onLogout }) => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    location: '',
    image: '',
  });

  const handleAddEvent = () => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setModalOpen(false);
    setNewEvent({ name: '', date: '', location: '', image: '' });
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleEditEvent = (id, field, value) => {
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        event[field] = value;
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  return (
    <Container>
      <Header>
        <Title>Gerenciar Eventos</Title>
        <Button onClick={onLogout} secondary>Sair</Button>
      </Header>

      {events.length === 0 ? (
        <EmptyMessage>Não há eventos cadastrados. Clique em "Adicionar Evento" para começar.</EmptyMessage>
      ) : (
        <EventList>
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onDelete={handleDeleteEvent}
              onEditDate={(id) => handleEditEvent(id, 'date', prompt('Nova data', event.date))}
              onEditLocation={(id) => handleEditEvent(id, 'location', prompt('Novo local', event.location))}
            />
          ))}
        </EventList>
      )}

      <Button onClick={() => setModalOpen(true)} primary style={{ marginTop: '20px' }}>Adicionar Evento</Button>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddEvent}
        eventData={newEvent}
        setEventData={setNewEvent}
      />
    </Container>
  );
};

export default Home;
