"use client";

export default function CTA() {
  return (
    <section style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #050505 0%, #111 50%, #050505 100%)',
      textAlign: 'center',
      animation: 'bounceIn 1s ease-in',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Efeitos de fundo */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(0,255,0,0.05) 0%, transparent 70%)',
        animation: 'pulse 3s ease-in-out infinite'
      }} />
      <div style={{
        position: 'relative',
        zIndex: 1
      }}>
      <h2 style={{
        color: '#00FF00',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '2px',
        marginBottom: '2rem',
        fontSize: window.innerWidth > 768 ? '2.5rem' : '2rem',
        textShadow: '0 0 20px #00FF00'
      }}>Não Perca Essa Oportunidade!</h2>
      <p style={{
        color: '#fff',
        fontSize: '1.2rem',
        marginBottom: '2rem'
      }}>Junte-se aos milhares que já conquistaram suas vagas nas forças policiais.</p>
      <button style={{
        background: 'linear-gradient(135deg, #00FF00 0%, #00cc00 100%)',
        color: '#000',
        padding: window.innerWidth > 768 ? '1.5rem 3rem' : '1rem 2rem',
        border: 'none',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 8px rgba(0,0,0,0.5), 0 0 20px #00FF00, inset 0 1px 0 rgba(255,255,255,0.2)',
        position: 'relative',
        overflow: 'hidden',
        animation: 'pulseGlow 2s ease-in-out infinite'
      }}
      onMouseOver={(e) => {
        e.target.style.background = 'linear-gradient(135deg, #00cc00 0%, #00FF00 100%)';
        e.target.style.transform = 'scale(1.05) translateY(-2px)';
        e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.7), 0 0 30px #00FF00, inset 0 1px 0 rgba(255,255,255,0.3)';
      }}
      onMouseOut={(e) => {
        e.target.style.background = 'linear-gradient(135deg, #00FF00 0%, #00cc00 100%)';
        e.target.style.transform = 'scale(1) translateY(0)';
        e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.5), 0 0 20px #00FF00, inset 0 1px 0 rgba(255,255,255,0.2)';
      }}>Quero Ser Aprovado Agora!</button>
      <style jsx>{`
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 4px 8px rgba(0,0,0,0.5), 0 0 20px #00FF00, inset 0 1px 0 rgba(255,255,255,0.2);
          }
          50% {
            box-shadow: 0 4px 8px rgba(0,0,0,0.5), 0 0 30px #00FF00, 0 0 40px #00FF00, inset 0 1px 0 rgba(255,255,255,0.2);
          }
        }
      `}</style>
      </div>
    </section>
  );
}

