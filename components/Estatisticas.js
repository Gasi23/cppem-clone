"use client";

import { useState, useEffect } from 'react';

export default function Estatisticas() {
  const [counts, setCounts] = useState({
    aprovados: 0,
    cursos: 0,
    professores: 0,
    anos: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const targets = {
    aprovados: 14000,
    cursos: 25,
    professores: 15,
    anos: 12
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const increment = {
      aprovados: targets.aprovados / steps,
      cursos: targets.cursos / steps,
      professores: targets.professores / steps,
      anos: targets.anos / steps
    };

    const timer = setInterval(() => {
      setCounts(prev => ({
        aprovados: Math.min(prev.aprovados + increment.aprovados, targets.aprovados),
        cursos: Math.min(prev.cursos + increment.cursos, targets.cursos),
        professores: Math.min(prev.professores + increment.professores, targets.professores),
        anos: Math.min(prev.anos + increment.anos, targets.anos)
      }));
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const formatNumber = (num, suffix = '') => {
    const formatted = Math.floor(num).toLocaleString();
    return `${formatted}${suffix}`;
  };

  const stats = [
    { label: 'Aprovados', value: counts.aprovados, suffix: '+', icon: '🎯' },
    { label: 'Cursos Oferecidos', value: counts.cursos, suffix: '', icon: '📚' },
    { label: 'Professores', value: counts.professores, suffix: '', icon: '👨‍🏫' },
    { label: 'Anos de Experiência', value: counts.anos, suffix: '+', icon: '⏱️' }
  ];

  return (
    <section id="stats-section" style={{
      padding: '6rem 2rem',
      backgroundColor: '#050505',
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
        textAlign: 'center',
        marginBottom: '4rem',
        textShadow: '0 0 20px #00FF00, 0 0 40px rgba(0,255,0,0.5)',
        fontSize: window.innerWidth > 768 ? '2.5rem' : '2rem',
        position: 'relative',
        zIndex: 1
      }}>Nossos Números</h2>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(4, 1fr)' : window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
        gap: window.innerWidth > 768 ? '3rem' : '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            textAlign: 'center',
            backgroundColor: '#1a1a1a',
            padding: '3rem 2rem',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,255,0,0.1)',
            border: '2px solid rgba(0,255,0,0.2)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
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
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 2,
              textShadow: '0 0 15px rgba(0,255,0,0.6)',
              animation: isVisible ? 'iconGlow 3s ease-in-out infinite' : 'none'
            }}>{stat.icon}</div>
            <div style={{
              fontSize: window.innerWidth > 768 ? '3.5rem' : '2.5rem',
              color: '#00FF00',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              textShadow: '0 0 20px #00FF00, 0 0 40px rgba(0,255,0,0.5)',
              position: 'relative',
              zIndex: 2,
              animation: isVisible ? 'glowPulse 2s ease-in-out infinite' : 'none'
            }}>
              {formatNumber(stat.value, stat.suffix)}
            </div>
            <div style={{
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              position: 'relative',
              zIndex: 2
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
        @keyframes iconGlow {
          0%, 100% {
            textShadow: 0 0 15px rgba(0,255,0,0.6);
            transform: scale(1);
          }
          50% {
            textShadow: 0 0 25px rgba(0,255,0,0.9), 0 0 40px rgba(0,255,0,0.5);
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}