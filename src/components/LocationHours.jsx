import React from 'react';

export default function LocationHours() {
  return (
    <section className="section" id="localizacao">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Venha nos Visitar</span>
          <h2 className="section-title">Localização & Horários</h2>
          <p className="section-description">Estamos localizados em ponto privilegiado de Fortaleza/CE, prontos para receber você.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div>
              <div className="info-group">
                <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="info-text">
                  <h4>Endereço</h4>
                  <p>Av. Heróis do Acre, 172 - Passaré, Fortaleza - CE</p>
                </div>
              </div>

              <div className="info-group">
                <div className="info-icon"><i className="fa-solid fa-clock"></i></div>
                <div className="info-text">
                  <h4>Horário de Funcionamento</h4>
                  <p><strong>Terça a Sexta:</strong> 08:00 às 19:00<br /><strong>Sábado:</strong> 08:00 às 18:00<br /><strong>Domingo e Segunda:</strong> Fechado</p>
                </div>
              </div>

              <div className="info-group">
                <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                <div className="info-text">
                  <h4>WhatsApp & Agendamentos</h4>
                  <p>(85) 99999-9999 / Direct no Instagram</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5585999999999?text=Ol%C3%A1!%20Como%20fa%C3%A7o%20para%20chegar%20%C3%A0%20barbearia?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ width: '100%' }}
              id="btnLocationContact"
            >
              <i className="fa-solid fa-compass"></i> Como Chegar / Tirar Dúvidas
            </a>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9537741989387!2d-38.531788100000005!3d-3.8027718000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74e540da52e75%3A0xf518068465f12159!2sAv.+Her%C3%B3is+do+Acre%2C+172+-+Passar%C3%A9%2C+Fortaleza+-+CE%2C+60743-760!5e0!3m2!1spt-BR!2sbr!4v1762368292621!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Fortaleza CE"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
