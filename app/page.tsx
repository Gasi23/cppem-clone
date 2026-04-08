import Image from "next/image";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProvaSocial from '../components/ProvaSocial';
import Estatisticas from '../components/Estatisticas';
import Benefits from '../components/Benefits';
import Timeline from '../components/Timeline';
import Teachers from '../components/Teachers';
import Aprovados from '../components/Aprovados';
import Testimonials from '../components/Testimonials';
import Noticias from '../components/Noticias';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#050505',
      color: '#fff',
      fontFamily: 'Montserrat, sans-serif',
      minHeight: '100vh',
      animation: 'fadeIn 1s ease-in',
      paddingTop: '80px' // Para compensar o navbar fixed
    }}>
      <Navbar />
      <Hero />
      <ProvaSocial />
      <Estatisticas />
      <Benefits />
      <Timeline />
      <Teachers />
      <Aprovados />
      <Testimonials />
      <Noticias />
      <CTA />
      <Footer />
    </div>
  );
}
