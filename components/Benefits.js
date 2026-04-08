"use client";

export default function Benefits() {
  const benefits = [
    { title: 'Aulas Objetivas', icon: '📚', description: 'Conteúdo focado no essencial para aprovação.' },
    { title: 'Cronograma Personalizado', icon: '📅', description: 'Plano de estudos adaptado ao seu ritmo.' },
    { title: 'Professores Especialistas', icon: '👨‍🏫', description: 'Equipe com experiência real nas forças policiais.' },
    { title: 'Plano de Aprovação', icon: '🎯', description: 'Estratégia comprovada para conquistar sua vaga.' }
  ];

  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundColor: '#050505',
      animation: 'slideUp 1s ease-in'
    }}>
      <h2 style={{
        color: '#00FF00',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '2px',
        textAlign: 'center',
        marginBottom: '2rem',
        textShadow: '0 0 10px #00FF00'
      }}>Por Que Escolher a CPPem?</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(4, 1fr)' : window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
        gap: window.innerWidth > 768 ? '2rem' : '1rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {benefits.map((benefit, index) => (
          <div key={index} style={{
            backgroundColor: '#1a1a1a',
            padding: window.innerWidth > 768 ? '2rem' : '1.5rem',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0,255,0,0.2), 0 0 20px rgba(0,255,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            textAlign: 'center',
            border: '1px solid #00FF00',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-15px) scale(1.02)';
            e.target.style.boxShadow = '0 15px 30px rgba(0,255,0,0.4), 0 0 40px rgba(0,255,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)';
            e.target.style.borderColor = '#00cc00';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 4px 8px rgba(0,255,0,0.2), 0 0 20px rgba(0,255,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)';
            e.target.style.borderColor = '#00FF00';
          }}>
            <div style={{
              fontSize: window.innerWidth > 768 ? '3rem' : '2.5rem',
              marginBottom: '1rem',
              color: '#00FF00',
              textShadow: '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00',
              animation: 'glow 2s ease-in-out infinite alternate'
            }}>{benefit.icon}</div>
            <h3 style={{
              color: '#00FF00',
              marginBottom: '1rem',
              fontSize: '1.2rem',
              textShadow: '0 0 10px #00FF00'
            }}>{benefit.title}</h3>
            <p style={{
              color: '#fff',
              fontSize: '0.9rem'
            }}>{benefit.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          from { textShadow: '0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 30px #00FF00'; }
          to { textShadow: '0 0 15px #00FF00, 0 0 30px #00FF00, 0 0 45px #00FF00'; }
        }
      `}</style>
    </section>
  );
}
