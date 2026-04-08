"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      backgroundColor: 'rgba(5,5,5,0.8)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      padding: '1rem',
      borderBottom: '2px solid #00FF00',
      boxShadow: '0 4px 8px rgba(0,255,0,0.3), 0 0 20px rgba(0,255,0,0.1)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      animation: 'slideDown 0.5s ease-in'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: '#00FF00',
          margin: 0,
          fontSize: '1.5rem',
          transition: 'color 0.3s ease',
          textShadow: '0 0 10px #00FF00'
        }}>CPPem</h1>
        <div style={{
          display: window.innerWidth > 768 ? 'flex' : 'none',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }} onMouseOver={(e) => e.target.style.color = '#00FF00'} onMouseOut={(e) => e.target.style.color = '#fff'}>Home</a>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }} onMouseOver={(e) => e.target.style.color = '#00FF00'} onMouseOut={(e) => e.target.style.color = '#fff'}>Cursos</a>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }} onMouseOver={(e) => e.target.style.color = '#00FF00'} onMouseOut={(e) => e.target.style.color = '#fff'}>Aprovações</a>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }} onMouseOver={(e) => e.target.style.color = '#00FF00'} onMouseOut={(e) => e.target.style.color = '#fff'}>Professores</a>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }} onMouseOver={(e) => e.target.style.color = '#00FF00'} onMouseOut={(e) => e.target.style.color = '#fff'}>Notícias</a>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
          }} onMouseOver={(e) => e.target.style.color = '#00FF00'} onMouseOut={(e) => e.target.style.color = '#fff'}>Contato</a>
          <button style={{
            backgroundColor: '#00FF00',
            color: '#000',
            padding: '0.5rem 1rem',
            border: 'none',
            fontWeight: 'bold',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            boxShadow: '0 0 10px #00FF00'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#00cc00'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#00FF00'}
          >Quero ser aprovado</button>
        </div>
        <button
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: '2px solid #00FF00',
            color: '#00FF00',
            fontSize: '1.2rem',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '8px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 0 15px rgba(0,255,0,0.3)'
          }}
          onClick={() => setIsOpen(!isOpen)}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'rgba(0,255,0,0.1)';
            e.target.style.boxShadow = '0 0 30px rgba(0,255,0,0.6), inset 0 0 10px rgba(0,255,0,0.2)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.boxShadow = '0 0 15px rgba(0,255,0,0.3)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(17,17,17,0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '1.5rem',
          boxShadow: '0 8px 32px rgba(0,255,0,0.4), 0 0 40px rgba(0,255,0,0.2)',
          borderRadius: '0 0 15px 15px',
          border: '1px solid rgba(0,255,0,0.3)',
          borderTop: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          animation: 'slideDownMenu 0.3s ease-out'
        }}>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            padding: '0.5rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '500'
          }}
          onMouseOver={(e) => {
            e.target.style.color = '#00FF00';
            e.target.style.backgroundColor = 'rgba(0,255,0,0.1)';
            e.target.style.textShadow = '0 0 15px rgba(0,255,0,0.8)';
            e.target.style.transform = 'translateX(10px)';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#fff';
            e.target.style.backgroundColor = 'transparent';
            e.target.style.textShadow = 'none';
            e.target.style.transform = 'translateX(0)';
          }}>🏠 Home</a>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            padding: '0.5rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '500'
          }}
          onMouseOver={(e) => {
            e.target.style.color = '#00FF00';
            e.target.style.backgroundColor = 'rgba(0,255,0,0.1)';
            e.target.style.textShadow = '0 0 15px rgba(0,255,0,0.8)';
            e.target.style.transform = 'translateX(10px)';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#fff';
            e.target.style.backgroundColor = 'transparent';
            e.target.style.textShadow = 'none';
            e.target.style.transform = 'translateX(0)';
          }}>📚 Cursos</a>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            padding: '0.5rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '500'
          }}
          onMouseOver={(e) => {
            e.target.style.color = '#00FF00';
            e.target.style.backgroundColor = 'rgba(0,255,0,0.1)';
            e.target.style.textShadow = '0 0 15px rgba(0,255,0,0.8)';
            e.target.style.transform = 'translateX(10px)';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#fff';
            e.target.style.backgroundColor = 'transparent';
            e.target.style.textShadow = 'none';
            e.target.style.transform = 'translateX(0)';
          }}>🎯 Aprovações</a>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            padding: '0.5rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '500'
          }}
          onMouseOver={(e) => {
            e.target.style.color = '#00FF00';
            e.target.style.backgroundColor = 'rgba(0,255,0,0.1)';
            e.target.style.textShadow = '0 0 15px rgba(0,255,0,0.8)';
            e.target.style.transform = 'translateX(10px)';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#fff';
            e.target.style.backgroundColor = 'transparent';
            e.target.style.textShadow = 'none';
            e.target.style.transform = 'translateX(0)';
          }}>👨‍🏫 Professores</a>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            padding: '0.5rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '500'
          }}
          onMouseOver={(e) => {
            e.target.style.color = '#00FF00';
            e.target.style.backgroundColor = 'rgba(0,255,0,0.1)';
            e.target.style.textShadow = '0 0 15px rgba(0,255,0,0.8)';
            e.target.style.transform = 'translateX(10px)';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#fff';
            e.target.style.backgroundColor = 'transparent';
            e.target.style.textShadow = 'none';
            e.target.style.transform = 'translateX(0)';
          }}>📰 Notícias</a>
          <a href="#" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            padding: '0.5rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '500'
          }}
          onMouseOver={(e) => {
            e.target.style.color = '#00FF00';
            e.target.style.backgroundColor = 'rgba(0,255,0,0.1)';
            e.target.style.textShadow = '0 0 15px rgba(0,255,0,0.8)';
            e.target.style.transform = 'translateX(10px)';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#fff';
            e.target.style.backgroundColor = 'transparent';
            e.target.style.textShadow = 'none';
            e.target.style.transform = 'translateX(0)';
          }}>📞 Contato</a>
          <button style={{
            background: 'linear-gradient(135deg, #00FF00 0%, #00cc00 100%)',
            color: '#000',
            padding: '0.8rem 1.5rem',
            border: 'none',
            fontWeight: 'bold',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 15px rgba(0,255,0,0.4), 0 0 30px rgba(0,255,0,0.3)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontSize: '1rem',
            marginTop: '0.5rem'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #00cc00 0%, #00FF00 100%)';
            e.target.style.transform = 'translateY(-3px) scale(1.02)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,255,0,0.6), 0 0 50px rgba(0,255,0,0.5), inset 0 0 20px rgba(255,255,255,0.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #00FF00 0%, #00cc00 100%)';
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 4px 15px rgba(0,255,0,0.4), 0 0 30px rgba(0,255,0,0.3)';
          }}
          >🚀 Quero ser aprovado</button>
        </div>
      )}
      <style jsx>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        @keyframes slideDownMenu {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
