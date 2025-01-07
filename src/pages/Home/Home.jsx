import React, { useState } from 'react';
import {
  Container,
  EventList,
  Button,
  Header,
  Title,
  EmptyMessage,
  EventStats,
  SearchInput,
} from './Styled';
import EventCard from '../../components/Evento/EventCard';
import Modal from '../../components/Modal/Modal';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Home = ({ onLogout }) => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    location: '',
    image: '',
  });
  const [search, setSearch] = useState('');

  const handleAddEvent = () => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setModalOpen(false);
    setNewEvent({ name: '', date: '', location: '', image: '' });
    toast.success('Evento adicionado com sucesso!');
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    toast.info('Evento removido com sucesso!');
  };

  const handleEditEvent = (id, field, value) => {
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        event[field] = value;
      }
      return event;
    });
    setEvents(updatedEvents);
    toast.success('Evento atualizado!');
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Title>Gerenciar Eventos</Title>
        <Button onClick={onLogout} secondary>Sair</Button>
      </Header>

    

      <EventStats>
        <div>
          <h3>{events.length}</h3>
          <p>Eventos</p>
        </div>
        <div>
          <h3>{events.length > 0 ? events[0].name : 'Nenhum'}</h3>
          <p>Próximo Evento</p>
        </div>
      </EventStats>

      <SearchInput
        type="text"
        placeholder="Pesquisar eventos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredEvents.length === 0 ? (
        <EmptyMessage>Não há eventos cadastrados. Clique em "Adicionar Evento" para começar.</EmptyMessage>
      ) : (
        <EventList>
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <EventCard
                event={event}
                onDelete={handleDeleteEvent}
                onEditDate={(id) =>
                  handleEditEvent(id, 'date', prompt('Nova data', event.date))
                }
                onEditLocation={(id) =>
                  handleEditEvent(id, 'location', prompt('Novo local', event.location))
                }
              />
            </motion.div>
          ))}
        </EventList>
      )}

      <Button onClick={() => setModalOpen(true)} primary>
        <i className="fas fa-plus" style={{ marginRight: '10px' }}></i> Adicionar Evento
      </Button>

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