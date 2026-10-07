import React from 'react';

export default function About() {
  return (
    <section className="section" id="sobre" style={{ background: 'rgba(22, 23, 27, 0.5)' }}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src="/assets/service_beard.jpg" alt="Barboterapia na Sr. Murilo Barbearia" />
            <div className="experience-badge">
              <span className="number">20+</span>
              <span className="text">Anos de Tradição e Excelência em Fortaleza</span>
            </div>
          </div>

          <div>
            <span className="section-subtitle">Nossa História</span>
            <h2 className="section-title">Tradicional no Respeito, Moderna no Estilo</h2>
            <p className="section-description">
              Desde a nossa fundação, a <strong>Sr. Murilo Barbearia</strong> é sinônimo de elegância e fraternidade. Combinamos o charme e o rigor artesanal das antigas barbearias com as tendências contemporâneas da moda masculina.
            </p>

            <ul className="about-feature-list">
              <li className="about-feature-item">
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <h4>Barbeiros Mestres Experimentados</h4>
                  <p>Equipe altamente capacitada nos cortes mais exigentes e técnicas clássicas de navalha.</p>
                </div>
              </li>
              <li className="about-feature-item">
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <h4>Ambiente Climatizado & Exclusivo</h4>
                  <p>Cadeiras vintage em couro, café especial, chopp trincando e música de qualidade.</p>
                </div>
              </li>
              <li className="about-feature-item">
                <i className="fa-solid fa-circle-check"></i>
                <div>
                  <h4>Pontualidade no Atendimento</h4>
                  <p>Valorizamos o seu tempo. Agendamento simplificado e cumprimento rigoroso de horários.</p>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/5585999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20barbearia."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="btnAboutContact"
            >
              <i className="fa-brands fa-whatsapp"></i> Falar com a Nossa Equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
