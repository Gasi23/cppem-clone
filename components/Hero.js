"use client";

import Image from 'next/image';

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #050505 0%, #111 50%, #050505 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '2rem'
    }}>
      {/* Imagem de fundo futurista */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1
      }}>
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
          alt="Polícia futurista"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      {/* Efeitos de fundo futuristas */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(0,255,0,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,255,0,0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(0,255,0,0.05) 0%, transparent 70%)',
        animation: 'pulse 4s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(1px)',
        WebkitBackdropFilter: 'blur(1px)'
      }} />
      {/* Partículas flutuantes */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none'
      }}>
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            backgroundColor: '#00FF00',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: 0.6
          }} />
        ))}
      </div>
      <div style={{
        zIndex: 1,
        maxWidth: '1200px',
        width: '100%',
        animation: 'fadeIn 1.5s ease-in'
      }}>
        <h1 style={{
          fontSize: window.innerWidth > 768 ? '4.5rem' : '2.8rem',
          color: '#00FF00',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          letterSpacing: '3px',
          marginBottom: '1.5rem',
          lineHeight: '1.1',
          textShadow: '0 0 20px #00FF00, 0 0 40px rgba(0,255,0,0.8), 0 0 80px rgba(0,255,0,0.6), 0 0 120px rgba(0,255,0,0.4)',
          animation: 'glowText 3s ease-in-out infinite',
          filter: 'drop-shadow(0 0 10px #00FF00)'
        }}>Seja Aprovado na Polícia</h1>
        <p style={{
          fontSize: window.innerWidth > 768 ? '1.6rem' : '1.3rem',
          color: '#fff',
          margin: '1.5rem 0 3rem 0',
          lineHeight: '1.4',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>Prepare-se com os melhores cursos e conquiste sua vaga nas forças policiais. Mais de 14.000 alunos já transformaram seus sonhos em realidade.</p>
        <div style={{
          fontSize: '2.2rem',
          color: '#FFD700',
          fontWeight: 'bold',
          marginBottom: '3rem',
          textShadow: '0 0 15px #FFD700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ color: '#00FF00', fontSize: '2.5rem' }}>🎯</span>
          +14.000 aprovados
        </div>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <button style={{
            backgroundColor: '#00FF00',
            color: '#000',
            padding: '1.2rem 3rem',
            border: 'none',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            borderRadius: '15px',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 8px 25px rgba(0,255,0,0.4), 0 0 30px rgba(0,255,0,0.3)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#00cc00';
            e.target.style.transform = 'translateY(-5px) scale(1.05)';
            e.target.style.boxShadow = '0 15px 40px rgba(0,255,0,0.6), 0 0 50px rgba(0,255,0,0.5), inset 0 0 20px rgba(255,255,255,0.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#00FF00';
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,255,0,0.4), 0 0 30px rgba(0,255,0,0.3)';
          }}>
            <span style={{
              position: 'relative',
              zIndex: 2
            }}>🚀 Inscreva-se Agora</span>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.5s ease',
              zIndex: 1
            }}
            onMouseOver={(e) => e.target.style.left = '100%'}
            onMouseOut={(e) => e.target.style.left = '-100%'} />
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: '#00FF00',
            padding: '1.2rem 3rem',
            border: '3px solid #00FF00',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            borderRadius: '15px',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 0 20px rgba(0,255,0,0.5), inset 0 0 20px rgba(0,255,0,0.1)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            position: 'relative'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'rgba(0,255,0,0.1)';
            e.target.style.transform = 'translateY(-5px) scale(1.05)';
            e.target.style.boxShadow = '0 0 40px rgba(0,255,0,0.8), 0 0 80px rgba(0,255,0,0.4), inset 0 0 30px rgba(0,255,0,0.2)';
            e.target.style.borderColor = '#00cc00';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 0 20px rgba(0,255,0,0.5), inset 0 0 20px rgba(0,255,0,0.1)';
            e.target.style.borderColor = '#00FF00';
          }}>
            📹 Ver Vídeo Institucional
          </button>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          opacity: 0.8
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#fff',
            fontSize: '1rem'
          }}>
            <span style={{ color: '#00FF00' }}>✓</span> Professores Especialistas
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#fff',
            fontSize: '1rem'
          }}>
            <span style={{ color: '#00FF00' }}>✓</span> Material Atualizado
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#fff',
            fontSize: '1rem'
          }}>
            <span style={{ color: '#00FF00' }}>✓</span> Suporte Completo
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes glowText {
          0%, 100% {
            textShadow: 0 0 20px #00FF00, 0 0 40px rgba(0,255,0,0.5), 0 0 80px rgba(0,255,0,0.3);
          }
          50% {
            textShadow: 0 0 30px #00FF00, 0 0 60px rgba(0,255,0,0.8), 0 0 120px rgba(0,255,0,0.4);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}

