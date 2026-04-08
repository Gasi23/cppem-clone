"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Aprovados() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const aprovados = [
    { name: 'Ana Costa', position: 'Delegada de Polícia', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80', testimonial: 'A CPPem me preparou perfeitamente para o concurso.' },
    { name: 'Bruno Lima', position: 'Investigador', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80', testimonial: 'Método eficiente e professores excepcionais.' },
    { name: 'Carla Souza', position: 'Perita Criminal', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80', testimonial: 'Consegui minha aprovação graças ao plano personalizado.' },
    { name: 'Diego Ferreira', position: 'Agente Federal', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80', testimonial: 'Aulas objetivas e foco total na aprovação.' },
    { name: 'Elena Santos', position: 'Delegada', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80', testimonial: 'A melhor preparação que já fiz.' },
    { name: 'Fabio Oliveira', position: 'Perito', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80', testimonial: 'Resultado garantido com dedicação.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(aprovados.length / 3));
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [aprovados.length, isAnimating]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(aprovados.length / 3));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + Math.ceil(aprovados.length / 3)) % Math.ceil(aprovados.length / 3));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const visibleAprovados = window.innerWidth > 768 ? 3 : 1;
  const startIndex = currentIndex * visibleAprovados;
  const displayedAprovados = aprovados.slice(startIndex, startIndex + visibleAprovados);

  return (
    <section style={{
      padding: '6rem 2rem',
      backgroundColor: '#111',
      animation: 'fadeIn 1s ease-in',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 70%, rgba(0,255,0,0.03) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(0,255,0,0.03) 0%, transparent 50%)',
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
      }}>Depoimentos de Aprovados</h2>
      <div style={{
        position: 'relative',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'flex',
          gap: window.innerWidth > 768 ? '3rem' : '1rem',
          justifyContent: 'center',
          overflow: 'hidden',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          {displayedAprovados.map((aprovado, index) => (
            <div key={startIndex + index} style={{
              textAlign: 'center',
              backgroundColor: '#1a1a1a',
              padding: '3rem 2rem',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,255,0,0.1)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              border: '2px solid rgba(0,255,0,0.2)',
              minWidth: window.innerWidth > 768 ? '350px' : '280px',
              width: '100%',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
              animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
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
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0,255,0,0.05) 0%, transparent 50%, rgba(0,255,0,0.05) 100%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none'
              }}
              onMouseOver={(e) => e.target.style.opacity = 1}
              onMouseOut={(e) => e.target.style.opacity = 0} />
              <Image src={aprovado.img} alt={aprovado.name} width={120} height={120} style={{
                borderRadius: '50%',
                marginBottom: '2rem',
                transition: 'all 0.4s ease',
                border: '4px solid rgba(0,255,0,0.3)',
                boxShadow: '0 0 20px rgba(0,255,0,0.4)',
                position: 'relative',
                zIndex: 2
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 0 40px rgba(0,255,0,0.8), 0 0 80px rgba(0,255,0,0.4)';
                e.target.style.borderColor = '#00FF00';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 20px rgba(0,255,0,0.4)';
                e.target.style.borderColor = 'rgba(0,255,0,0.3)';
              }} />
              <p style={{
                fontWeight: 'bold',
                fontSize: '1.3rem',
                color: '#00FF00',
                marginBottom: '1rem',
                textShadow: '0 0 15px rgba(0,255,0,0.8)',
                position: 'relative',
                zIndex: 2
              }}>{aprovado.name}</p>
              <p style={{
                color: '#fff',
                marginBottom: '1.5rem',
                fontSize: '1rem',
                position: 'relative',
                zIndex: 2
              }}>{aprovado.position}</p>
              <p style={{
                color: '#ccc',
                fontSize: '0.9rem',
                fontStyle: 'italic',
                lineHeight: '1.4',
                position: 'relative',
                zIndex: 2
              }}>"{aprovado.testimonial}"</p>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          style={{
            position: 'absolute',
            left: window.innerWidth > 768 ? '-70px' : '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,255,0,0.1)',
            color: '#00FF00',
            border: '2px solid #00FF00',
            borderRadius: '50%',
            width: window.innerWidth > 768 ? '60px' : '50px',
            height: window.innerWidth > 768 ? '60px' : '50px',
            cursor: isAnimating ? 'not-allowed' : 'pointer',
            fontSize: '1.5rem',
            boxShadow: '0 0 20px rgba(0,255,0,0.3)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isAnimating ? 0.5 : 1
          }}
          onMouseOver={(e) => {
            if (!isAnimating) {
              e.target.style.backgroundColor = 'rgba(0,255,0,0.2)';
              e.target.style.boxShadow = '0 0 40px rgba(0,255,0,0.6), inset 0 0 20px rgba(0,255,0,0.2)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(0,255,0,0.1)';
            e.target.style.boxShadow = '0 0 20px rgba(0,255,0,0.3)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          style={{
            position: 'absolute',
            right: window.innerWidth > 768 ? '-70px' : '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,255,0,0.1)',
            color: '#00FF00',
            border: '2px solid #00FF00',
            borderRadius: '50%',
            width: window.innerWidth > 768 ? '60px' : '50px',
            height: window.innerWidth > 768 ? '60px' : '50px',
            cursor: isAnimating ? 'not-allowed' : 'pointer',
            fontSize: '1.5rem',
            boxShadow: '0 0 20px rgba(0,255,0,0.3)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isAnimating ? 0.5 : 1
          }}
          onMouseOver={(e) => {
            if (!isAnimating) {
              e.target.style.backgroundColor = 'rgba(0,255,0,0.2)';
              e.target.style.boxShadow = '0 0 40px rgba(0,255,0,0.6), inset 0 0 20px rgba(0,255,0,0.2)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(0,255,0,0.1)';
            e.target.style.boxShadow = '0 0 20px rgba(0,255,0,0.3)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          ›
        </button>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
