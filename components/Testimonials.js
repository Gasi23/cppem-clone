"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Isabela Rocha',
      title: 'Delegada de Polícia',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'A CPPem transformou meu estudo. Hoje sou Delegada e trouxe minha família junto.',
      stars: 5
    },
    {
      name: 'Lucas Mendes',
      title: 'Investigador Federal',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'O carrossel de simulados e o coaching fizeram toda a diferença na minha jornada.',
      stars: 5
    },
    {
      name: 'Mariana Silva',
      title: 'Perita Criminal',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'O visual futurista e a metodologia prática me deixaram confiante para a prova.',
      stars: 5
    },
    {
      name: 'Thiago Alves',
      title: 'Agente da Polícia Federal',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      text: 'A preparação foi objetiva, intensa e com muito suporte. Hoje sou aprovado.',
      stars: 5
    }
  ];

  return (
    <section style={{
      padding: '6rem 2rem',
      backgroundColor: '#040404',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 20%, rgba(0,255,0,0.08), transparent 25%), radial-gradient(circle at 80% 80%, rgba(0,255,0,0.05), transparent 30%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <p style={{
            color: '#00cc00',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>Depoimentos</p>
          <h2 style={{
            color: '#fff',
            fontSize: '2.8rem',
            margin: 0,
            textShadow: '0 0 30px rgba(0,255,0,0.4), 0 0 60px rgba(0,255,0,0.2)',
            maxWidth: '720px',
            marginInline: 'auto'
          }}>Histórias reais de aprovação com brilho neon e confiança total</h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: '3rem' }}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div style={{
                backgroundColor: '#111',
                border: '1px solid rgba(0,255,0,0.2)',
                borderRadius: '24px',
                padding: '2rem',
                minHeight: '420px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 16px 50px rgba(0,255,0,0.12), inset 0 0 0 1px rgba(0,255,0,0.05)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 24px 80px rgba(0,255,0,0.25), inset 0 0 30px rgba(0,255,0,0.08)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 16px 50px rgba(0,255,0,0.12), inset 0 0 0 1px rgba(0,255,0,0.05)';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid rgba(0,255,0,0.4)',
                    boxShadow: '0 0 20px rgba(0,255,0,0.3)'
                  }}>
                    <Image src={item.image} alt={item.name} width={80} height={80} style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3 style={{
                      color: '#00FF00',
                      margin: 0,
                      fontSize: '1.15rem',
                      textShadow: '0 0 15px rgba(0,255,0,0.7)'
                    }}>{item.name}</h3>
                    <p style={{
                      color: '#ccc',
                      margin: '0.35rem 0 0',
                      fontSize: '0.95rem'
                    }}>{item.title}</p>
                  </div>
                </div>
                <p style={{
                  color: '#e5e5e5',
                  lineHeight: '1.8',
                  margin: '2rem 0 1.5rem',
                  flexGrow: 1
                }}>&ldquo;{item.text}&rdquo;</p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  justifyContent: 'center'
                }}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex} style={{
                      color: starIndex < item.stars ? '#00FF00' : '#333',
                      fontSize: '1.2rem',
                      textShadow: starIndex < item.stars ? '0 0 12px rgba(0,255,0,0.8)' : 'none'
                    }}>★</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
