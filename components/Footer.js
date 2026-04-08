"use client";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#050505',
      padding: '6rem 2rem 2rem',
      textAlign: 'center',
      boxShadow: '0 -4px 8px rgba(0,255,0,0.3)',
      animation: 'fadeInUp 1s ease-in',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Efeito de brilho pulsante */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, transparent 30%, rgba(0,255,0,0.03) 50%, transparent 70%)',
        animation: 'shine 3s ease-in-out infinite'
      }} />
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(5, 1fr)' : window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
        gap: window.innerWidth > 768 ? '3rem' : '2rem',
        marginBottom: '4rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div>
          <h3 style={{
            color: '#00FF00',
            marginBottom: '1.5rem',
            fontSize: '1.8rem',
            textShadow: '0 0 15px #00FF00',
            fontWeight: 'bold'
          }}>CPPem</h3>
          <p style={{
            color: '#fff',
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>Especialistas em preparação para concursos policiais há mais de 10 anos. Seu sucesso é nossa missão.</p>
          <div style={{
            marginTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            justifyContent: 'center'
          }}>
            <span style={{
              color: '#FFD700',
              fontSize: '1.2rem',
              textShadow: '0 0 10px #FFD700'
            }}>⭐⭐⭐⭐⭐</span>
            <span style={{
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>4.9/5</span>
          </div>
        </div>
        <div>
          <h4 style={{
            color: '#00FF00',
            marginBottom: '1.5rem',
            textShadow: '0 0 10px #00FF00',
            fontSize: '1.3rem',
            fontWeight: 'bold'
          }}>Cursos</h4>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            {['Delegado de Polícia', 'Investigador', 'Perito Criminal', 'Agente Federal'].map((item, index) => (
              <li key={index} style={{ marginBottom: '0.8rem' }}>
                <a href="#" style={{
                  color: '#ccc',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem',
                  position: 'relative',
                  display: 'inline-block'
                }}
                onMouseOver={(e) => {
                  e.target.style.color = '#00FF00';
                  e.target.style.textShadow = '0 0 10px rgba(0,255,0,0.8)';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.color = '#ccc';
                  e.target.style.textShadow = 'none';
                  e.target.style.transform = 'translateX(0)';
                }}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{
            color: '#00FF00',
            marginBottom: '1.5rem',
            textShadow: '0 0 10px #00FF00',
            fontSize: '1.3rem',
            fontWeight: 'bold'
          }}>Links Rápidos</h4>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            {['Home', 'Sobre Nós', 'Professores', 'Contato'].map((item, index) => (
              <li key={index} style={{ marginBottom: '0.8rem' }}>
                <a href="#" style={{
                  color: '#ccc',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem',
                  position: 'relative',
                  display: 'inline-block'
                }}
                onMouseOver={(e) => {
                  e.target.style.color = '#00FF00';
                  e.target.style.textShadow = '0 0 10px rgba(0,255,0,0.8)';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.color = '#ccc';
                  e.target.style.textShadow = 'none';
                  e.target.style.transform = 'translateX(0)';
                }}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{
            color: '#00FF00',
            marginBottom: '1.5rem',
            textShadow: '0 0 10px #00FF00',
            fontSize: '1.3rem',
            fontWeight: 'bold'
          }}>Redes Sociais</h4>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {[
              { icon: '📘', label: 'Facebook' },
              { icon: '📷', label: 'Instagram' },
              { icon: '💼', label: 'LinkedIn' },
              { icon: '🎥', label: 'YouTube' }
            ].map((social, index) => (
              <li key={index}>
                <a href="#" style={{
                  color: '#00FF00',
                  textDecoration: 'none',
                  fontSize: '1.8rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textShadow: '0 0 10px rgba(0,255,0,0.5)',
                  display: 'inline-block'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.2) translateY(-5px)';
                  e.target.style.textShadow = '0 0 20px rgba(0,255,0,0.8), 0 0 40px rgba(0,255,0,0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1) translateY(0)';
                  e.target.style.textShadow = '0 0 10px rgba(0,255,0,0.5)';
                }}
                title={social.label}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{
            color: '#00FF00',
            marginBottom: '1.5rem',
            textShadow: '0 0 10px #00FF00',
            fontSize: '1.3rem',
            fontWeight: 'bold'
          }}>Contato</h4>
          <div style={{ textAlign: 'left' }}>
            <p style={{
              color: '#fff',
              fontSize: '0.95rem',
              margin: '0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#00FF00' }}>📞</span> (11) 9999-9999
            </p>
            <p style={{
              color: '#fff',
              fontSize: '0.95rem',
              margin: '0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#00FF00' }}>📧</span> contato@cppem.com.br
            </p>
            <p style={{
              color: '#fff',
              fontSize: '0.95rem',
              margin: '0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#00FF00' }}>📍</span> São Paulo, SP
            </p>
            <p style={{
              color: '#fff',
              fontSize: '0.95rem',
              margin: '0.8rem 0',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{ color: '#00FF00' }}>🕒</span> Seg-Sex: 8h às 18h
            </p>
          </div>
          <button style={{
            backgroundColor: '#00FF00',
            color: '#000',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            marginTop: '1.5rem',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 15px rgba(0,255,0,0.3)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            width: '100%',
            justifyContent: 'center'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#00cc00';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,255,0,0.5), 0 0 30px rgba(0,255,0,0.3)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#00FF00';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,255,0,0.3)';
          }}>
            <span>💬</span> Fale Conosco no WhatsApp
          </button>
        </div>
      </div>
      <div style={{
        borderTop: '1px solid rgba(0,255,0,0.2)',
        paddingTop: '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <p style={{
          color: '#ccc',
          fontSize: '0.9rem',
          margin: 0
        }}>
          © 2024 CPPem. Todos os direitos reservados. |
          <a href="#" style={{
            color: '#00FF00',
            textDecoration: 'none',
            marginLeft: '0.5rem',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = '#00cc00'}
          onMouseOut={(e) => e.target.style.color = '#00FF00'}>Política de Privacidade</a> |
          <a href="#" style={{
            color: '#00FF00',
            textDecoration: 'none',
            marginLeft: '0.5rem',
            transition: 'color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.color = '#00cc00'}
          onMouseOut={(e) => e.target.style.color = '#00FF00'}>Termos de Uso</a>
        </p>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </footer>
  );
}
