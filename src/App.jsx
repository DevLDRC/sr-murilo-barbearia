import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import LocationHours from './components/LocationHours';
import BookingModal from './components/BookingModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

const WHATSAPP_NUMBER = '5585999999999';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Combo Sr. Murilo (Cabelo + Barba)');

  const handleOpenModal = (serviceName) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleScheduleWhatsApp = (service, barber, date, time) => {
    let msg = `Olá! Gostaria de agendar um horário na *Sr. Murilo Barbearia*:\n\n`;
    if (service) msg += `- *Serviço:* ${service}\n`;
    if (barber) msg += `- *Profissional:* ${barber}\n`;
    if (date) msg += `- *Data:* ${date}\n`;
    if (time) msg += `- *Horário:* ${time}\n`;
    msg += `\nAguardo a confirmação da disponibilidade. Obrigado!`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <Header onOpenModal={handleOpenModal} />
      <main>
        <Hero onSchedule={handleScheduleWhatsApp} />
        <Services onOpenModal={handleOpenModal} />
        <About />
        <Gallery />
        <Testimonials />
        <LocationHours />
      </main>
      <Footer />

      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedService={selectedService}
        onSchedule={handleScheduleWhatsApp}
      />

      <FloatingWhatsApp onSchedule={handleScheduleWhatsApp} />
    </div>
  );
}
