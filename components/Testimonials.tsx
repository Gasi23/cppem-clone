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
    <section className="bg-gradient-to-br from-black to-[#0A1A0A] px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-white sm:text-5xl">
          O Que Nossos Alunos Dizem
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#00FF00]/20 bg-black/70 p-4 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#00FF00]/40 hover:shadow-[0_10px_40px_rgba(0,255,0,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF00]/5 to-transparent opacity-50" />
              <div className="relative">
                <div className="mb-3 flex items-center justify-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.avatarColor} text-black shadow-[0_0_15px_rgba(0,255,0,0.4)]`}
                  >
                    <FaUserCircle className="text-2xl" />
                  </div>
                </div>
                <FaQuoteLeft className="mx-auto mb-3 text-2xl text-[#00FF00] opacity-60" />
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
                <p className="mb-4 text-base leading-relaxed text-gray-200 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-[#00FF00]/30 pt-3">
                  <p className="text-lg font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm font-medium text-[#00FF00]">
                    {testimonial.role}
                  </p>
                  <div className="mt-2 inline-block rounded-full border border-[#00FF00]/20 bg-[#00FF00]/10 px-2 py-1 text-xs text-[#00FF00]">
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
