import React, { useState, useEffect } from 'react';

export default function BookingModal({ isOpen, onClose, selectedService, onSchedule }) {
  const todayStr = new Date().toISOString().split('T')[0];

  const [service, setService] = useState('Combo Sr. Murilo (Cabelo + Barba)');
  const [barber, setBarber] = useState('Sem Preferência');
  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('16:00');

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSchedule(service, barber, date, time);
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}>
      <div className="modal-card">
        <button className="modal-close" onClick={onClose} aria-label="Fechar Modal">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>Agendar Horário</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Selecione os detalhes e confirme via WhatsApp</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="modalServiceSelect">Serviço Desejado</label>
            <select
              className="form-select"
              id="modalServiceSelect"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="Combo Sr. Murilo (Cabelo + Barba)">Combo Sr. Murilo (Cabelo + Barba) - R$ 90</option>
              <option value="Corte Tradicional / Moderno">Corte Tradicional / Moderno - R$ 50</option>
              <option value="Barboterapia Premium">Barboterapia Premium - R$ 45</option>
              <option value="Pezinho & Acabamento">Pezinho & Acabamento - R$ 25</option>
              <option value="Sobrancelha Navalhada">Sobrancelha Navalhada - R$ 20</option>
              <option value="Tratamento Capilar">Tratamento Capilar - R$ 40</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="modalBarberSelect">Profissional</label>
            <select
              className="form-select"
              id="modalBarberSelect"
              value={barber}
              onChange={(e) => setBarber(e.target.value)}
            >
              <option value="Sem Preferência">Sem Preferência</option>
              <option value="Sr. Murilo (Barbeiro Master)">Sr. Murilo (Barbeiro Master)</option>
              <option value="Barbeiro Senior">Barbeiro Senior</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="modalDateSelect">Data</label>
              <input
                type="date"
                className="form-input"
                id="modalDateSelect"
                min={todayStr}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="modalTimeSelect">Horário</label>
              <select
                className="form-select"
                id="modalTimeSelect"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', marginTop: '1rem' }} id="btnSubmitModalBooking">
            <i className="fa-brands fa-whatsapp"></i> Finalizar no WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
