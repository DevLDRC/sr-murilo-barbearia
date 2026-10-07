import React from 'react';

const SERVICES = [
  {
    id: 1,
    name: 'Corte Masculino',
    price: 'R$ 50',
    serviceKey: 'Corte Tradicional / Moderno',
    desc: 'Corte sob medida (Clássico, Mid Fade, High Fade, Buzz Cut) com lavatório relaxante e finalização com pomada premium.',
    duration: '40 min',
    icon: 'fa-scissors',
    featured: true,
  },
  {
    id: 2,
    name: 'Barboterapia Premium',
    price: 'R$ 45',
    serviceKey: 'Barboterapia Premium',
    desc: 'Modelagem e alinhamento de barba com vapor de ozônio, toalha quente umedecida em óleos essenciais e balm hidratante.',
    duration: '35 min',
    icon: 'fa-user-ninja',
    featured: false,
  },
  {
    id: 3,
    name: 'Pezinho & Acabamento',
    price: 'R$ 25',
    serviceKey: 'Pezinho & Acabamento',
    desc: 'Alinhamento preciso das linhas do pescoço, nuca e têmporas na navalha para manter o visual sempre em dia.',
    duration: '20 min',
    extra: 'Precisão Navalha',
    icon: 'fa-border-all',
    featured: false,
  },
];

export default function Services({ onOpenModal }) {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Nossos Serviços</span>
          <h2 className="section-title">Estilo & Precisão Personalizados</h2>
          <p className="section-description">Atendimento com pontualidade, produtos de altíssima qualidade e o padrão exclusivo de quem entende de tradição.</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((item) => (
            <div key={item.id} className={`service-card ${item.featured ? 'featured' : ''}`}>
              {item.featured && <span className="service-badge">Mais Pedido</span>}
              <div className="service-icon"><i className={`fa-solid ${item.icon}`}></i></div>
              <div className="service-header">
                <h3 className="service-name">{item.name}</h3>
                <span className="service-price">{item.price}</span>
              </div>
              <p className="service-desc">{item.desc}</p>
              <div className="service-meta">
                <span><i className="fa-regular fa-clock"></i> {item.duration}</span>
                <span><i className="fa-solid fa-sparkles"></i> {item.extra}</span>
              </div>
              <button
                className={`btn ${item.featured ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => onOpenModal(item.serviceKey)}
              >
                Agendar Este Serviço
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
