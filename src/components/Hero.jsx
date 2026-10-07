import React, { useState } from 'react';

export default function Hero({ onSchedule }) {
  const todayStr = new Date().toISOString().split('T')[0];

  const [service, setService] = useState('Combo Sr. Murilo (Cabelo + Barba)');
  const [barber, setBarber] = useState('Sem Preferência');
  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState('16:00');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSchedule(service, barber, date, time);
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>
      <div className="container hero-content">

        <div className="hero-text-area">
          <div className="badge-tag">
            <i className="fa-solid fa-award"></i> Há mais de 20 anos no mercado | Fortaleza - CE
          </div>

          <h1 className="hero-title">
            Tradicional no respeito,<br />
            <span>moderna no estilo.</span>
          </h1>

          <p className="hero-subtitle">
            Viva a experiência completa da barbearia clássica combinada com as técnicas mais avançadas em cortes masculinos e barboterapia.
          </p>

          <div className="hero-actions">
            <button onClick={() => onSchedule(service, barber, date, time)} className="btn btn-whatsapp" id="btnHeroWhatsapp">
              <i className="fa-brands fa-whatsapp"></i> Agendar pelo WhatsApp
            </button>
            <a href="#servicos" className="btn btn-outline" id="btnHeroServices">
              <i className="fa-solid fa-scissors"></i> Ver Serviços & Preços
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>+20</h3>
              <p>Anos de Tradição</p>
            </div>
            <div className="stat-item">
              <h3>+50k</h3>
              <p>Clientes Atendidos</p>
            </div>
            <div className="stat-item">
              <h3>5.0 ★</h3>
              <p>Avaliação no Google</p>
            </div>
          </div>
        </div>

        {/* Quick Schedule Form Card */}
        <div className="hero-card" id="agendar">
          <div className="card-header">
            <h3>Agendamento Rápido</h3>
            <p>Garanta seu horário com praticidade via WhatsApp</p>
          </div>

          <form id="heroBookingForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="heroServiceSelect">
                <i className="fa-solid fa-scissors"></i> Escolha o Serviço
              </label>
              <select
                className="form-select"
                id="heroServiceSelect"
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
              <label className="form-label" htmlFor="heroBarberSelect">
                <i className="fa-solid fa-user-tie"></i> Profissional
              </label>
              <select
                className="form-select"
                id="heroBarberSelect"
                value={barber}
                onChange={(e) => setBarber(e.target.value)}
              >
                <option value="Sem Preferência">Sem Preferência (Próximo disponível)</option>
                <option value="Sr. Murilo (Barbeiro Master)">Sr. Murilo (Master)</option>
                <option value="Barbeiro Senior">Barbeiro Senior</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="heroDateSelect">
                  <i className="fa-regular fa-calendar"></i> Data
                </label>
                <input
                  type="date"
                  className="form-input"
                  id="heroDateSelect"
                  min={todayStr}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="heroTimeSelect">
                  <i className="fa-regular fa-clock"></i> Horário
                </label>
                <select
                  className="form-select"
                  id="heroTimeSelect"
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

            <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '0.5rem' }} id="btnSubmitHeroBooking">
              <i className="fa-brands fa-whatsapp"></i> Confirmar Agendamento
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
