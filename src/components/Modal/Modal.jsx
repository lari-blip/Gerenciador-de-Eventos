import React, { useState } from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalOverlay,
  Button,
  Input,
  Label,
  Select,
} from './Styled';
import { FiUpload } from 'react-icons/fi';

const estados = [
  { nome: 'São Paulo', cidades: ['São Paulo', 'Campinas', 'Santos'] },
  { nome: 'Minas Gerais', cidades: ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora'] },
  { nome: 'Rio de Janeiro', cidades: ['Rio de Janeiro', 'Niterói', 'Campos dos Goytacazes'] },
];

const Modal = ({ isOpen, onClose, onSave, eventData, setEventData }) => {
  if (!isOpen) return null;

  const [selectedEstado, setSelectedEstado] = useState('');
  const [selectedCidade, setSelectedCidade] = useState('');
  const [imageError, setImageError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEventData({ ...eventData, image: URL.createObjectURL(file) });
      setImageError('');
    }
  };

  const handleSave = () => {
    if (!eventData.name || !eventData.date || !eventData.location || !eventData.image) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setImageError('');
    onSave();
    onClose();
  };

  const handleEstadoChange = (e) => {
    const estadoSelecionado = e.target.value;
    setSelectedEstado(estadoSelecionado);
    setSelectedCidade('');
    setEventData({ ...eventData, location: estadoSelecionado });
  };

  const handleCidadeChange = (e) => {
    const cidadeSelecionada = e.target.value;
    setSelectedCidade(cidadeSelecionada);
    setEventData({ ...eventData, location: `${selectedEstado}, ${cidadeSelecionada}` });
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <h2>Adicionar Novo Evento</h2>

          <Label>Nome do Evento</Label>
          <Input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleInputChange}
            placeholder="Digite o nome do evento"
          />

          <Label>Data</Label>
          <Input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleInputChange}
          />

          <Label>Estado</Label>
          <Select value={selectedEstado} onChange={handleEstadoChange} name="estado">
            <option value="">Selecione o estado</option>
            {estados.map((estado, index) => (
              <option key={index} value={estado.nome}>
                {estado.nome}
              </option>
            ))}
          </Select>

          {selectedEstado && (
            <>
              <Label>Cidade</Label>
              <Select value={selectedCidade} onChange={handleCidadeChange} name="cidade">
                <option value="">Selecione a cidade</option>
                {estados
                  .find((estado) => estado.nome === selectedEstado)
                  ?.cidades.map((cidade, index) => (
                    <option key={index} value={cidade}>
                      {cidade}
                    </option>
                  ))}
              </Select>
            </>
          )}

          <Label>Imagem do Evento</Label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <label htmlFor="image-upload" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #ccc', borderRadius: '8px', padding: '10px', width: '50px', height: '50px' }}>
              <FiUpload size={24} color="#888" />
            </label>
            <Input
              type="file"
              id="image-upload"
              style={{ display: 'none' }}
              onChange={handleImageChange}

              
            />
          </div>
          {eventData.image && <img src={eventData.image} alt="Preview" style={{ width: '100%', maxHeight: '150px', borderRadius: '8px', objectFit: 'cover' }} />}
          
          <Input
            type="text"
            name="image"
            value={eventData.image}
            onChange={handleInputChange}
            placeholder="Cole a URL da imagem"
          />
          {imageError && <p style={{ color: 'red', fontSize: '0.9rem' }}>{imageError}</p>}

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '20px' }}>
            <Button onClick={handleSave}>Salvar</Button>
            <Button secondary onClick={onClose}>Cancelar</Button>
          </div>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
