"use client";

import { useEffect, useState } from 'react';

export default function ProvaSocial() {
  const [visibleCards, setVisibleCards] = useState([]);

  const socialProofs = [
    {
      title: '+14.000 Aprovados',
      description: 'Alunos que conquistaram suas vagas nas forças policiais através dos nossos cursos.',
      icon: '🎯',
      color: '#00FF00'
    },
    {
      title: '98% Taxa de Aprovação',
      description: 'Nossos métodos comprovados e professores especializados garantem o seu sucesso.',
      icon: '📈',
      color: '#FFD700'
    },
    {
      title: '10+ Anos de Experiência',
      description: 'Especialistas em preparação policial há mais de uma década no mercado.',
      icon: '🏆',
      color: '#00FF00'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(socialProofs.map((_, i) => i));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      padding: '6rem 2rem',
      backgroundColor: '#111',
      textAlign: 'center',
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
        background: 'radial-gradient(circle at 50% 50%, rgba(0,255,0,0.02) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <h2 style={{
        color: '#00FF00',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '3px',
        marginBottom: '4rem',
        textShadow: '0 0 20px #00FF00, 0 0 40px rgba(0,255,0,0.5)',
        fontSize: window.innerWidth > 768 ? '2.5rem' : '2rem',
        position: 'relative',
        zIndex: 1
      }}>Por Que Escolher a CPPem?</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(3, 1fr)' : window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
        gap: window.innerWidth > 768 ? '3rem' : '2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {socialProofs.map((proof, index) => (
          <div key={index} style={{
            backgroundColor: '#1a1a1a',
            padding: '3rem 2rem',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,255,0,0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            border: '2px solid rgba(0,255,0,0.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            position: 'relative',
            overflow: 'hidden',
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
            <div style={{
              fontSize: '3rem',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 2
            }}>{proof.icon}</div>
            <h3 style={{
              color: proof.color,
              marginBottom: '1.5rem',
              textShadow: '0 0 15px rgba(0,255,0,0.8)',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              position: 'relative',
              zIndex: 2
            }}>{proof.title}</h3>
            <p style={{
              color: '#fff',
              fontSize: '1rem',
              lineHeight: '1.6',
              position: 'relative',
              zIndex: 2
            }}>{proof.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}