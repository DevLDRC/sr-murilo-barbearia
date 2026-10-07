import React from 'react';

export default function FloatingWhatsApp({ onSchedule }) {
  return (
    <a 
      href="https://wa.me/5585999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Sr.%20Murilo%20Barbearia." 
      target="_blank" 
      rel="noopener noreferrer"
      className="floating-whatsapp" 
      id="btnFloatingWhatsapp" 
      aria-label="Agendar via WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
      <span>Agendar Horário</span>
    </a>
  );
}
