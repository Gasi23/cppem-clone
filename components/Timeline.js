"use client";

import { useState, useEffect } from 'react';

export default function Timeline() {
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setTimeout(() => {
            setVisibleSteps(prev => [...prev, index]);
          }, index * 200);
        }
      });
    });

    const stepElements = document.querySelectorAll('[data-index]');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      phase: 'Fase 1',
      title: 'Avaliação Inicial',
      description: 'Análise completa do seu perfil e objetivos. Testes diagnósticos para identificar pontos fortes e áreas de melhoria.',
      duration: '1 semana',
      icon: '📊'
    },
    {
      phase: 'Fase 2',
      title: 'Plano Personalizado',
      description: 'Criação de cronograma de estudos individualizado baseado na sua disponibilidade e necessidades específicas.',
      duration: '2 semanas',
      icon: '📅'
    },
    {
      phase: 'Fase 3',
      title: 'Aulas Intensas',
      description: 'Imersão completa nos conteúdos do concurso com professores especializados e materiais atualizados.',
      duration: '12 semanas',
      icon: '📚'
    },
    {
      phase: 'Fase 4',
      title: 'Simulados e Revisão',
      description: 'Aplicação de simulados regulares e revisão sistemática de todos os temas estudados.',
      duration: '4 semanas',
      icon: '✍️'
    },
    {
      phase: 'Fase 5',
      title: 'Aprovação Garantida',
      description: 'Preparação final para a prova, estratégias de aprovação e suporte até o resultado final.',
      duration: 'Até aprovação',
      icon: '🎯'
    }
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundColor: '#050505',
      animation: 'fadeIn 1s ease-in'
    }}>
      <h2 style={{
        color: '#00FF00',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '2px',
        textAlign: 'center',
        marginBottom: '3rem',
        textShadow: '0 0 20px #00FF00'
      }}>Plano de Aprovação - Timeline</h2>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Linha vertical da timeline */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '4px',
          background: 'linear-gradient(to bottom, #00FF00, #00cc00, #00FF00)',
          transform: 'translateX(-50%)',
          boxShadow: '0 0 30px #00FF00, 0 0 60px rgba(0,255,0,0.5)',
          animation: 'pulseLine 3s ease-in-out infinite'
        }} />

        {steps.map((step, index) => (
          <div key={index} data-index={index} style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '3rem',
            position: 'relative',
            opacity: visibleSteps.includes(index) ? 1 : 0,
            transform: visibleSteps.includes(index) ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
          }}>
            {/* Ícone central */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              backgroundColor: '#00FF00',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              boxShadow: '0 0 30px #00FF00, 0 0 60px rgba(0,255,0,0.5)',
              zIndex: 2,
              animation: visibleSteps.includes(index) ? 'bounceIn 0.8s ease' : 'none'
            }}>{step.icon}</div>
            {/* Conteúdo à esquerda ou direita alternadamente */}
            <div style={{
              width: '45%',
              padding: '2rem',
              backgroundColor: '#1a1a1a',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0,255,0,0.2), 0 0 40px rgba(0,255,0,0.1)',
              border: '2px solid rgba(0,255,0,0.3)',
              marginRight: index % 2 === 0 ? '5%' : 0,
              marginLeft: index % 2 !== 0 ? '5%' : 0,
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-10px) scale(1.02)';
              e.target.style.boxShadow = '0 20px 60px rgba(0,255,0,0.4), 0 0 80px rgba(0,255,0,0.3), inset 0 0 30px rgba(0,255,0,0.1)';
              e.target.style.borderColor = '#00FF00';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 32px rgba(0,255,0,0.2), 0 0 40px rgba(0,255,0,0.1)';
              e.target.style.borderColor = 'rgba(0,255,0,0.3)';
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0,255,0,0.05) 0%, transparent 50%, rgba(0,255,0,0.05) 100%)',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.opacity = 1}
              onMouseOut={(e) => e.target.style.opacity = 0} />
              <h3 style={{
                color: '#00FF00',
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
                textShadow: '0 0 15px rgba(0,255,0,0.8)',
                fontWeight: 'bold'
              }}>{step.phase}</h3>
              <h4 style={{
                color: '#fff',
                fontSize: '1.4rem',
                marginBottom: '1rem',
                fontWeight: 'bold'
              }}>{step.title}</h4>
              <p style={{
                color: '#ccc',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                marginBottom: '1rem'
              }}>{step.description}</p>
              <div style={{
                color: '#FFD700',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                textShadow: '0 0 10px #FFD700'
              }}>⏱️ {step.duration}</div>
            </div>

            {/* Círculo da timeline */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              backgroundColor: '#00FF00',
              borderRadius: '50%',
              boxShadow: '0 0 20px #00FF00',
              zIndex: 2
            }} />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulseLine {
          0%, 100% {
            boxShadow: 0 0 30px #00FF00, 0 0 60px rgba(0,255,0,0.5);
          }
          50% {
            boxShadow: 0 0 50px #00FF00, 0 0 100px rgba(0,255,0,0.8);
          }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
          70% { transform: translate(-50%, -50%) scale(0.9); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </section>
  );
}