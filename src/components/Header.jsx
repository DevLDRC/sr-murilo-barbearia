import React, { useState, useEffect } from 'react';

export default function Header({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header class={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container nav-container">
        <a href="#" className="brand-logo" id="brandLogo">
          <img src="/assets/logo.jpg" alt="Logo Sr. Murilo Barbearia" />
          <div className="brand-name">
            SR. MURILO
            <span>BARBEARIA</span>
          </div>
        </a>

        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="navLinks">
            <li><a href="#inicio" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>Início</a></li>
            <li><a href="#servicos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Serviços & Preços</a></li>
            <li><a href="#sobre" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Tradição</a></li>
            <li><a href="#galeria" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Galeria</a></li>
            <li><a href="#avaliacoes" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Avaliações</a></li>
            <li><a href="#localizacao" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => onOpenModal()} className="btn btn-primary" id="btnHeaderBook">
            <i className="fa-regular fa-calendar-check"></i> Agendar Agora
          </button>
          <button
            className="mobile-menu-btn"
            id="mobileMenuBtn"
            aria-label="Abrir Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
