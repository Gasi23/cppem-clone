"use client";

import { useEffect, useState } from 'react';

export default function Noticias() {
  const [visibleCards, setVisibleCards] = useState([]);

  const noticias = [
    {
      title: 'Novo Concurso para Polícia Federal',
      summary: 'Saiba tudo sobre o próximo concurso e como se preparar com antecedência para garantir sua vaga.',
      img: 'https://via.placeholder.com/400x250?text=Noticia+1',
      date: '15 Dez 2024',
      category: 'Concursos'
    },
    {
      title: 'Dicas para Aprovação em Concursos Policiais',
      summary: 'Estratégias comprovadas para aumentar suas chances de aprovação nos concursos mais concorridos.',
      img: 'https://via.placeholder.com/400x250?text=Noticia+2',
      date: '12 Dez 2024',
      category: 'Dicas'
    },
    {
      title: 'Atualizações na Legislação Policial',
      summary: 'Mudanças importantes que afetam os concursos e a carreira policial. Fique por dentro.',
      img: 'https://via.placeholder.com/400x250?text=Noticia+3',
      date: '10 Dez 2024',
      category: 'Legislação'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(noticias.map((_, i) => i));
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      padding: '6rem 2rem',
      backgroundColor: '#111',
      animation: 'slideUp 1s ease-in',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(0,255,0,0.02) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <h2 style={{
        color: '#00FF00',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '3px',
        textAlign: 'center',
        marginBottom: '4rem',
        textShadow: '0 0 20px #00FF00, 0 0 40px rgba(0,255,0,0.5)',
        fontSize: window.innerWidth > 768 ? '2.5rem' : '2rem',
        position: 'relative',
        zIndex: 1
      }}>Notícias & Atualizações</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(3, 1fr)' : window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
        gap: window.innerWidth > 768 ? '3rem' : '2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {noticias.map((noticia, index) => (
          <div key={index} style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,255,0,0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            border: '2px solid rgba(0,255,0,0.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            position: 'relative',
            opacity: visibleCards.includes(index) ? 1 : 0,
            transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(30px)',
            animationDelay: `${index * 0.2}s`
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-15px) scale(1.02)';
            e.target.style.boxShadow = '0 20px 60px rgba(0,255,0,0.3), 0 0 40px rgba(0,255,0,0.5), inset 0 0 30px rgba(0,255,0,0.1)';
            e.target.style.borderColor = '#00FF00';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,255,0,0.1)';
            e.target.style.borderColor = 'rgba(0,255,0,0.2)';
          }}>
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              height: '250px'
            }}>
              <img src={noticia.img} alt={noticia.title} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,255,0,0.1) 100%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none'
              }}
              onMouseOver={(e) => e.target.style.opacity = 1}
              onMouseOut={(e) => e.target.style.opacity = 0} />
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(0,255,0,0.9)',
                color: '#000',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {noticia.category}
              </div>
            </div>
            <div style={{
              padding: '2rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{
                  color: '#00FF00',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>{noticia.date}</span>
              </div>
              <h3 style={{
                color: '#00FF00',
                marginBottom: '1rem',
                fontSize: '1.3rem',
                textShadow: '0 0 15px rgba(0,255,0,0.8)',
                lineHeight: '1.3'
              }}>{noticia.title}</h3>
              <p style={{
                color: '#fff',
                marginBottom: '2rem',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>{noticia.summary}</p>
              <button style={{
                backgroundColor: 'transparent',
                color: '#00FF00',
                padding: '0.8rem 1.5rem',
                border: '2px solid #00FF00',
                fontWeight: 'bold',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 0 15px rgba(0,255,0,0.3)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '0.9rem'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(0,255,0,0.1)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 0 25px rgba(0,255,0,0.6), inset 0 0 15px rgba(0,255,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 0 15px rgba(0,255,0,0.3)';
              }}>
                📖 Leia Mais
              </button>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}