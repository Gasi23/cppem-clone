// components/Features.tsx
import { FaPlayCircle, FaCode, FaCheckCircle } from 'react-icons/fa'

export default function Features() {
  const features = [
    {
      title: 'Aulas Interativas',
      description: 'Aprenda com exercícios e exemplos práticos.',
      icon: FaPlayCircle,
      color: 'text-emerald-400',
    },
    {
      title: 'Projetos Reais',
      description: 'Coloque a mão na massa e construa projetos de verdade.',
      icon: FaCode,
      color: 'text-cyan-400',
    },
    {
      title: 'Feedback Instantâneo',
      description: 'Veja imediatamente se seu código funciona.',
      icon: FaCheckCircle,
      color: 'text-fuchsia-400',
    },
  ]

  return (
    <section className="bg-[#020202] px-6 py-24 text-green-400 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-5xl font-black tracking-tighter text-white uppercase sm:text-7xl">
          Nossas Features
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center rounded-[2.5rem] border border-green-400/10 bg-white/5 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/10 hover:shadow-[0_0_50px_rgba(0,255,0,0.1)] sm:p-10"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 shadow-inner shadow-green-400/10 transition duration-300 group-hover:bg-gradient-to-br group-hover:from-emerald-400/15 group-hover:via-cyan-400/15 group-hover:to-fuchsia-400/15">
                <feature.icon className={`text-5xl ${feature.color}`} />
              </div>
              <h3 className="mb-4 text-2xl font-extrabold text-white">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
