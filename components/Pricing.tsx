// components/Pricing.tsx
import { FaCheck, FaCrown } from 'react-icons/fa'

export default function Pricing() {
  const plans = [
    {
      name: 'Plano Essencial',
      price: 'R$ 97',
      period: '/mês',
      features: ['Acesso às aulas', 'Banco de questões', 'Simulados mensais'],
      popular: false,
    },
    {
      name: 'Plano de Combate',
      price: 'R$ 197',
      period: '/mês',
      features: [
        'Tudo do Essencial',
        'Plano de estudos',
        'Mentoria em grupo',
        'Correção de desempenho',
      ],
      popular: true,
    },
    {
      name: 'Mentoria Premium',
      price: 'R$ 297',
      period: '/mês',
      features: [
        'Tudo do Plano de Combate',
        'Mentoria individual',
        'Acompanhamento semanal',
        'Estratégia personalizada',
        'Suporte prioritário',
      ],
      popular: false,
    },
  ]

  return (
    <section
      id="pricing"
      className="relative bg-black px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Glow verde suave no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,255,0,0.08)_0%,_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-5xl font-black tracking-tighter text-white uppercase sm:text-7xl">
          Escolha o plano ideal para sua aprovação
        </h2>
        <p className="mb-16 text-center text-lg text-green-200/60 sm:text-xl">
          Do básico ao acompanhamento completo, temos a preparação certa para
          você.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[2.5rem] border p-8 text-center transition-all duration-500 hover:-translate-y-2 sm:p-10 ${
                plan.popular
                  ? 'scale-105 border-green-400 bg-zinc-900 shadow-[0_0_50px_rgba(0,255,0,0.15)]'
                  : 'border-green-400/10 bg-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center rounded-full bg-green-400 px-6 py-2 text-xs font-black tracking-widest text-black uppercase">
                  <FaCrown className="mr-2" />
                  Mais Popular
                </div>
              )}
              <h3 className="mb-4 text-2xl font-black tracking-tight text-white uppercase">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-green-400">
                  {plan.price}
                </span>
                <span className="text-lg text-green-200/40">{plan.period}</span>
              </div>
              <ul className="mb-10 space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="mr-3 text-green-400" />
                    <span className="text-sm font-medium text-white/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full cursor-pointer rounded-full py-5 text-lg font-black transition-all duration-500 ${
                  plan.popular
                    ? 'animate-pulse-glow bg-green-400 text-black hover:bg-green-300'
                    : 'border border-green-400/30 text-green-400 hover:bg-green-400 hover:text-black'
                }`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
