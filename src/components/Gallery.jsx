import React, { useState } from 'react';

const ITEMS = [
  { id: 1, category: 'cortes', title: 'Mid Fade & Linha Definida', subtitle: 'Corte de Cabelo', img: '/assets/service_cut.jpg' },
  { id: 2, category: 'barba', title: 'Barboterapia com Navalha Clássica', subtitle: 'Barba', img: '/assets/service_beard.jpg' },
  { id: 3, category: 'ambiente', title: 'Cadeiras Vintage & Iluminação Quente', subtitle: 'Nosso Espaço', img: '/assets/hero_bg.jpg' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' ? ITEMS : ITEMS.filter(item => item.category === filter);

  return (
    <section className="section" id="galeria">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfólio de Estilos</span>
          <h2 className="section-title">Confira Nossos Trabalhos</h2>
          <p className="section-description">Inspire-se com os cortes e barbas finalizados por nossos barbeiros especialistas.</p>
        </div>

        <div className="gallery-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos
          </button>
          <button
            className={`filter-btn ${filter === 'cortes' ? 'active' : ''}`}
            onClick={() => setFilter('cortes')}
          >
            Cortes de Cabelo
          </button>
          <button
            className={`filter-btn ${filter === 'barba' ? 'active' : ''}`}
            onClick={() => setFilter('barba')}
          >
            Barbas & Barboterapia
          </button>
          <button
            className={`filter-btn ${filter === 'ambiente' ? 'active' : ''}`}
            onClick={() => setFilter('ambiente')}
          >
            Nosso Espaço
          </button>
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item" data-category={item.category}>
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <span className="gallery-category">{item.subtitle}</span>
                <h4 className="gallery-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
