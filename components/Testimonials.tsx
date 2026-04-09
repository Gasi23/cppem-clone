'use client'

// components/Testimonials.tsx
import { FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'Policial Militar',
      content:
        'O método do Cppem foi fundamental para minha aprovação. As aulas são diretas e o acompanhamento personalizado fez toda a diferença.',
      rating: 5,
      avatarColor: 'from-emerald-400 to-cyan-400',
      approvedYear: '2025',
    },
    {
      name: 'Maria Santos',
      role: 'Guarda Municipal',
      content:
        'Depois de tantas tentativas frustradas, finalmente consegui minha aprovação. O Plano de Combate é simplesmente imbatível.',
      rating: 5,
      avatarColor: 'from-cyan-400 to-fuchsia-400',
      approvedYear: '2025',
    },
    {
      name: 'Pedro Oliveira',
      role: 'Policial Civil',
      content:
        'A metodologia é comprovada e os professores são especialistas. Recomendo para todos que sonham com a farda.',
      rating: 5,
      avatarColor: 'from-lime-400 to-emerald-400',
      approvedYear: '2025',
    },
  ]

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[#020202] px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,222,128,0.05)_0%,_transparent_70%)]" />
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-5xl font-black tracking-tight text-white uppercase sm:text-7xl">
          Voz da <span className="text-green-400">Aprovação</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-green-400/30 hover:bg-zinc-900"
            >
              <div className="relative">
                <div className="mb-3 flex items-center justify-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.avatarColor} text-black shadow-[0_0_15px_rgba(0,255,0,0.4)]`}
                  >
                    <FaUserCircle className="text-2xl" />
                  </div>
                </div>
                <FaQuoteLeft className="mx-auto mb-4 text-2xl text-green-400 opacity-40" />
                <div className="mb-3 flex items-center justify-center gap-1">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-semibold text-yellow-400">
                    5.0
                  </span>
                </div>
                <p className="mb-6 text-base leading-relaxed text-zinc-400 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-lg font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm font-medium text-green-400">
                    {testimonial.role}
                  </p>
                  <div className="mt-3 inline-block rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-bold tracking-widest text-green-400 uppercase">
                    Aprovado em {testimonial.approvedYear}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
