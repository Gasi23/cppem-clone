"use client";

import { useEffect, useState } from 'react';

export default function Teachers() {
  const [visibleCards, setVisibleCards] = useState([]);

  const teachers = [
    { name: 'Prof. João Silva', img: 'https://via.placeholder.com/300x300?text=Professor+1', specialty: 'Direito Penal', approvals: 1200 },
    { name: 'Prof. Maria Santos', img: 'https://via.placeholder.com/300x300?text=Professor+2', specialty: 'Psicologia Aplicada', approvals: 950 },
    { name: 'Prof. Carlos Oliveira', img: 'https://via.placeholder.com/300x300?text=Professor+3', specialty: 'Técnicas de Investigação', approvals: 1100 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(teachers.map((_, i) => i));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      padding: '6rem 2rem',
      backgroundColor: '#111',
      animation: 'fadeIn 1s ease-in',
      position: 'relative'
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
      }}>Nossos Professores</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(3, 1fr)' : window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
        gap: window.innerWidth > 768 ? '3rem' : '2rem',
        justifyItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {teachers.map((teacher, index) => (
          <div key={index} style={{
            textAlign: 'center',
            backgroundColor: '#1a1a1a',
            padding: '3rem 2rem',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,255,0,0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            maxWidth: '350px',
            width: '100%',
            border: '2px solid rgba(0,255,0,0.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            opacity: visibleCards.includes(index) ? 1 : 0,
            transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(30px)',
            animationDelay: `${index * 0.2}s`,
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-10px) scale(1.02)';
            e.target.style.boxShadow = '0 20px 60px rgba(0,255,0,0.3), 0 0 30px rgba(0,255,0,0.5), inset 0 0 30px rgba(0,255,0,0.1)';
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
            <img src={teacher.img} alt={teacher.name} style={{
              width: '140px',
              height: '140px',
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
            }}>{teacher.name}</p>
            <p style={{
              color: '#fff',
              marginBottom: '1.5rem',
              fontSize: '1rem',
              position: 'relative',
              zIndex: 2
            }}>{teacher.specialty}</p>
            <p style={{
              color: '#00FF00',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              textShadow: '0 0 15px rgba(0,255,0,0.8)',
              position: 'relative',
              zIndex: 2
            }}>{teacher.approvals} aprovados</p>
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
