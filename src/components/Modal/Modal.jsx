import React, { useState } from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalOverlay,
  Button,
  Input,
  Label,
  Select
} from './Styled';  

const estados = [
  { nome: 'São Paulo', cidades: [
      'São Paulo', 'Campinas', 'Santos', 'São Bernardo do Campo', 'São José dos Campos',
      'Ribeirão Preto', 'Sorocaba', 'Bauru', 'Osasco', 'Piracicaba', 'Indaiatuba', 
      'Araraquara', 'Limeira', 'Mogi das Cruzes', 'Carapicuíba', 'Barueri', 'Jundiaí', 
      'Embu das Artes', 'Diadema', 'Guarulhos'
    ]
  },
  { nome: 'Minas Gerais', cidades: [
      'Belo Horizonte', 'Uberlândia', 'Juiz de Fora', 'Contagem', 'Betim', 'Montes Claros',
      'Ipatinga', 'Sete Lagoas', 'Divinópolis', 'Teófilo Otoni', 'Patos de Minas', 
      'Uberaba', 'Governador Valadares', 'Poços de Caldas', 'Varginha', 'Barbacena',
      'Muriaé', 'Araguari', 'Caldas', 'Ubá'
    ]
  },
  { nome: 'Rio de Janeiro', cidades: [
      'Rio de Janeiro', 'Niterói', 'Campos dos Goytacazes', 'Duque de Caxias', 'Nova Iguaçu', 
      'São Gonçalo', 'Volta Redonda', 'Macaé', 'Teresópolis', 'Angra dos Reis', 
      'Petropólis', 'Cabo Frio', 'Itaperuna', 'Resende', 'Barra Mansa', 'Araruama', 
      'Maricá', 'Rio das Ostras', 'Búzios', 'Casimiro de Abreu'
    ]
  }
];

const Modal = ({ isOpen, onClose, onSave, eventData, setEventData }) => {
  if (!isOpen) return null;

  const [selectedEstado, setSelectedEstado] = useState('');
  const [selectedCidade, setSelectedCidade] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSave = () => {
    if (!eventData.name || !eventData.date || !eventData.location || !eventData.image) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    onSave();
    onClose();
  };

  const handleEstadoChange = (e) => {
    const estadoSelecionado = e.target.value;
    setSelectedEstado(estadoSelecionado);
    setSelectedCidade('');  
    setEventData({ ...eventData, location: estadoSelecionado + ', ' + selectedCidade });
  };

  const handleCidadeChange = (e) => {
    const cidadeSelecionada = e.target.value;
    setSelectedCidade(cidadeSelecionada);
    setEventData({ ...eventData, location: selectedEstado + ', ' + cidadeSelecionada });
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
          <Select
            value={selectedEstado}
            onChange={handleEstadoChange}
            name="estado"
          >
            <option value="">Selecione o estado</option>
            {estados.map((estado, index) => (
              <option key={index} value={estado.nome}>{estado.nome}</option>
            ))}
          </Select>

          {selectedEstado && (
            <>
              <Label>Cidade</Label>
              <Select
                value={selectedCidade}
                onChange={handleCidadeChange}
                name="cidade"
              >
                <option value="">Selecione a cidade</option>
                {estados
                  .find((estado) => estado.nome === selectedEstado)
                  ?.cidades.map((cidade, index) => (
                    <option key={index} value={cidade}>{cidade}</option>
                  ))}
              </Select>
            </>
          )}

          <Label>URL da Imagem</Label>
          <Input
            type="text"
            name="image"
            value={eventData.image}
            onChange={handleInputChange}
            placeholder="Cole a URL da imagem"
          />

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
