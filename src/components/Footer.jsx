import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-name" style={{ fontSize: '1.4rem' }}>
              SR. MURILO
              <span>BARBEARIA</span>
            </div>
            <p>Tradicional no respeito, moderna no estilo. Há mais de 20 anos oferecendo o melhor em cortes masculinos e barboterapia em Fortaleza/CE.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/sr.murilo.barbearia/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Links Rápidos</h4>
            <ul className="footer-list">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#servicos">Serviços & Preços</a></li>
              <li><a href="#sobre">Nossa Tradição</a></li>
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#avaliacoes">Avaliações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Serviços</h4>
            <ul className="footer-list">
              <li><a href="#servicos">Combo Sr. Murilo</a></li>
              <li><a href="#servicos">Corte Tradicional</a></li>
              <li><a href="#servicos">Barboterapia Premium</a></li>
              <li><a href="#servicos">Pezinho & Acabamento</a></li>
              <li><a href="#servicos">Tratamento Capilar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Atendimento</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>
              <i className="fa-solid fa-clock" style={{ color: 'var(--gold)' }}></i> Ter a Sex: 08h às 19h | Sáb: 08h às 18h
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <i className="fa-solid fa-location-dot" style={{ color: 'var(--gold)' }}></i> Fortaleza - CE
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Sr. Murilo Barbearia. Todos os direitos reservados. | Desenvolvido em React + Vite.</p>
        </div>
      </div>
    </footer>
  );
}
