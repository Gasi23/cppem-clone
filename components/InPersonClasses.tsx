// components/InPersonClasses.tsx
import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'

export default function InPersonClasses() {
  const benefits = [
    'Simulados presenciais',
    'Treinamento físico para TAF',
    'Técnicas de redação',
    'Acompanhamento individual',
    'Ambiente de alta performance',
    'Networking com outros alunos',
  ]

  return (
    <section
      id="presencial"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Faixa Superior */}
      <div className="absolute top-0 w-full border-y border-green-400/20 bg-green-400/5 py-4 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3 text-center text-xs font-bold tracking-[0.4em] text-green-300 uppercase sm:text-sm">
          <FaMapMarkerAlt className="animate-pulse text-green-400" />
          Presente em várias cidades do Brasil
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,255,0,0.05)_0%,_transparent_50%)]" />

      <div className="relative mx-auto mt-12 max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Lado Esquerdo - Imagem */}
          <div className="group relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-green-400/20 opacity-50 blur-2xl transition duration-1000 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-green-400/30 bg-black shadow-2xl">
              {/* Overlay Escuro na Imagem */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <Image
                src="/treinamento-taf-real.jpg"
                alt="Treinamento Presencial CPPem"
                width={800}
                height={600}
                className="h-[400px] w-full scale-105 object-cover transition duration-700 group-hover:scale-100 lg:h-[550px]"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <span className="rounded-full bg-green-400 px-4 py-1 text-xs font-black tracking-widest text-black uppercase">
                  Treinamento Elite
                </span>
              </div>
            </div>
          </div>

          {/* Lado Direito - Conteúdo */}
          <div className="order-1 text-left lg:order-2">
            <p className="text-sm font-bold tracking-[0.3em] text-green-400 uppercase">
              Experiência Premium
            </p>
            <h2 className="mt-4 text-4xl leading-[0.9] font-black tracking-tighter text-white uppercase sm:text-5xl lg:text-7xl">
              Aulas Presenciais para <br />
              <span className="text-green-400">Quem Quer Ir Além</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-green-200/80 lg:text-xl">
              Treine ao vivo com especialistas, participe de simulados e viva a
              rotina de preparação intensiva que só o CPPem oferece.
            </p>

            {/* Grid de Benefícios */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-green-400/10 bg-white/5 p-4 transition-colors hover:border-green-400/40 hover:bg-white/10"
                >
                  <FaCheckCircle className="shrink-0 text-green-400 shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
                  <span className="text-sm font-semibold text-white">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-12 w-full transform cursor-pointer rounded-xl bg-green-400 px-10 py-5 text-lg font-black text-black shadow-lg transition-all hover:scale-105 hover:bg-green-300 sm:w-auto">
              Quero conhecer as turmas presenciais
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
