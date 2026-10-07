import React from 'react';

const REVIEWS = [
  {
    id: 1,
    text: '"Melhor barbearia de Fortaleza! O Sr. Murilo e a equipe atendem com um carinho e precisão incríveis. A barboterapia com toalha quente é um absurdo de boa!"',
    initials: 'RC',
    name: 'Ricardo Cavalcante',
    meta: 'Cliente há 5 anos • Google Review'
  },
  {
    id: 2,
    text: '"Pontualidade nota 10. Agendei pelo WhatsApp, cheguei e fui atendido imediatamente. O fade ficou perfeito e o ambiente é extremamente agradável."',
    initials: 'MA',
    name: 'Matheus Andrade',
    meta: 'Cliente Frequente • Google Review'
  },
  {
    id: 3,
    text: '"Respeito à tradição com um toque moderno. Sou cliente fiel há mais de 10 anos. Não troco a Sr. Murilo Barbearia por nenhuma outra!"',
    initials: 'FL',
    name: 'Fernando Lima',
    meta: 'Cliente desde 2014 • Google Review'
  }
];

export default function Testimonials() {
  return (
    <section className="section" id="avaliacoes" style={{ background: 'rgba(22, 23, 27, 0.5)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Depoimentos</span>
          <h2 className="section-title">O Que Dizem Nossos Clientes</h2>
          <p className="section-description">A satisfação dos nossos clientes é o nosso maior orgulho em Fortaleza.</p>
        </div>

        <div className="testimonials-grid">
          {REVIEWS.map(item => (
            <div key={item.id} className="testimonial-card">
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text">{item.text}</p>
              <div className="client-info">
                <div className="client-avatar">{item.initials}</div>
                <div>
                  <div className="client-name">{item.name}</div>
                  <div className="client-meta">{item.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
