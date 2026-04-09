'use client'

// components/Numbers.tsx
import { useEffect, useState } from 'react'
import {
  FaUsers,
  FaQuestionCircle,
  FaSmile,
  FaCalendarAlt,
} from 'react-icons/fa'

export default function Numbers() {
  const stats = [
    {
      icon: <FaUsers className="mb-4 text-4xl text-green-400" />,
      value: 13000,
      suffix: '+',
      format: (value: number) => `+${value.toLocaleString('pt-BR')}`,
      description: 'alunos aprovados',
    },
    {
      icon: <FaQuestionCircle className="mb-4 text-4xl text-green-400" />,
      value: 250,
      suffix: '+ mil',
      format: (value: number) => `+${value.toLocaleString('pt-BR')} mil`,
      description: 'questões resolvidas',
    },
    {
      icon: <FaSmile className="mb-4 text-4xl text-green-400" />,
      value: 98,
      suffix: '%',
      format: (value: number) => `${Math.round(value)}%`,
      description: 'de satisfação',
    },
    {
      icon: <FaCalendarAlt className="mb-4 text-4xl text-green-400" />,
      value: 12,
      suffix: '+',
      format: (value: number) => `+${Math.round(value)}`,
      description: 'anos de experiência',
    },
  ]

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))

  useEffect(() => {
    const duration = 1700
    const startTime = performance.now()

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCounts(stats.map((stat) => stat.value * progress))

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }, [])

  return (
    <section className="relative bg-black px-6 py-24 text-white sm:px-8 lg:px-12">
      {/* Glow verde suave no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.05)_0%,_transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-5xl font-black tracking-tighter text-white uppercase sm:text-7xl">
          Nossos Números
        </h2>
        <p className="mb-16 text-center text-lg font-bold tracking-widest text-green-200/60 uppercase sm:text-xl">
          Resultados que falam por si
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-[2.5rem] border border-green-400/10 bg-white/5 p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:border-green-400/40"
            >
              {stat.icon}
              <div className="mb-2 text-5xl font-black tracking-tighter text-white">
                {stat.format(counts[index])}
              </div>
              <p className="text-sm font-bold tracking-widest text-green-400 uppercase">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
