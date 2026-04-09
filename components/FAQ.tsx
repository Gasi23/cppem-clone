'use client'

// components/FAQ.tsx
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Como funciona o acesso ao curso?',
      answer:
        'Após a matrícula, você recebe acesso imediato à plataforma online. Todas as aulas ficam disponíveis 24/7, permitindo que você estude no seu ritmo.',
    },
    {
      question: 'Por quanto tempo terei acesso?',
      answer:
        'O acesso é vitalício! Você pode assistir às aulas quantas vezes quiser, sem limite de tempo, mesmo após concluir o curso.',
    },
    {
      question: 'O curso serve para qualquer concurso policial?',
      answer:
        'Sim! Nosso conteúdo é abrangente e cobre as principais disciplinas dos concursos policiais em todo o Brasil, com foco especial nos concursos de Pernambuco.',
    },
    {
      question: 'Existem simulados e questões?',
      answer:
        'Sim! Oferecemos um vasto banco de questões atualizado e simulados mensais que simulam exatamente as provas reais dos concursos.',
    },
    {
      question: 'Tenho suporte para tirar dúvidas?',
      answer:
        'Absolutamente! Todos os planos incluem suporte via WhatsApp e, nos planos superiores, mentoria individual com correção personalizada.',
    },
    {
      question: 'Posso assistir pelo celular?',
      answer:
        'Sim! Nossa plataforma é totalmente responsiva e otimizada para dispositivos móveis. Você pode assistir aulas em qualquer lugar.',
    },
    {
      question: 'Há certificado ao final?',
      answer:
        'Sim! Ao concluir o curso, você recebe um certificado reconhecido, válido para comprovação de horas de estudo em concursos.',
    },
    {
      question: 'Existe garantia?',
      answer:
        'Oferecemos garantia de satisfação de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento, sem burocracia.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="relative bg-black px-6 py-20 text-white sm:px-8 lg:px-12"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0A1A0A 100%)',
      }}
    >
      {/* Glow verde suave no fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-900/10 to-transparent"></div>
      <div className="relative mx-auto max-w-4xl">
        <h2
          className="mb-4 text-center text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
          style={{ textShadow: '0 0 20px #00FF00' }}
        >
          Perguntas Frequentes
        </h2>
        <p className="mb-14 text-center text-lg text-gray-300 sm:text-xl">
          Tire suas dúvidas antes de começar sua preparação
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-green-400/30 bg-gray-900 p-6 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-green-400/20 sm:p-8"
              style={{
                boxShadow:
                  openIndex === index
                    ? '0 0 20px rgba(0, 255, 0, 0.1)'
                    : 'none',
              }}
            >
              <button
                className="flex w-full items-center justify-between text-left transition-colors duration-300 hover:text-green-400"
                onClick={() => toggleFAQ(index)}
              >
                <span className="pr-4 text-lg font-semibold sm:text-xl">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 text-2xl font-bold text-green-400 transition-transform duration-500 ease-in-out ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                >
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div
                  className={`mt-6 border-t border-green-400/30 pt-6 transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-4 opacity-0'
                  }`}
                >
                  <p className="leading-relaxed text-gray-300 sm:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
