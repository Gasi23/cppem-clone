// components/VideoTestimonial.tsx
import { FaPlay, FaCheckCircle } from 'react-icons/fa'

export default function VideoTestimonial() {
  return (
    <section className="relative bg-black px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,0,0.08)_0%,_transparent_35%)] opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm tracking-[0.35em] text-green-300 uppercase">
            Depoimento em vídeo
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white uppercase sm:text-5xl">
            Ouça a jornada de aprovação de um aluno real
          </h2>
          <p className="mt-5 text-base leading-8 text-green-200 sm:text-lg">
            Veja como ele transformou estudo, foco e estratégia em resultado
            real na prova.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] xl:gap-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-green-400/15 bg-[#07120a]/95 shadow-[0_0_60px_rgba(0,255,0,0.14)]">
            <video
              src="/testimonial-video.mp4"
              poster="/testimonial-poster.png"
              controls
              className="h-full w-full rounded-[2rem] object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/70 px-6 py-4 text-green-200 backdrop-blur-md">
              <div>
                <p className="text-sm tracking-[0.28em] text-green-300 uppercase">
                  Depoimento
                </p>
                <p className="text-lg font-bold text-white">
                  Mário, aprovado em PM
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-200">
                <FaPlay className="text-green-400" /> Assistir agora
              </div>
            </div>
          </div>

          <div className="grid gap-6 rounded-[2rem] border border-green-400/10 bg-[#07120a]/90 p-8 shadow-[0_0_40px_rgba(0,255,0,0.12)]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-sm font-semibold text-green-300">
                <FaCheckCircle className="text-green-400" /> Aprovado na
                primeira tentativa
              </div>
              <h3 className="text-3xl font-black text-white">
                "A aprovação veio com método e suporte."
              </h3>
              <p className="leading-8 text-green-200">
                "A mentoría me mostrou exatamente onde focar. As aulas ao vivo,
                simulados e correção personalizada foram decisivos para minha
                aprovação na Polícia Militar."
              </p>
            </div>
            <div className="grid gap-4 rounded-3xl bg-black/70 p-6">
              <div className="flex items-center justify-between text-sm text-green-200">
                <span>Plataforma acessível</span>
                <span className="font-semibold text-white">24/7</span>
              </div>
              <div className="flex items-center justify-between text-sm text-green-200">
                <span>Suporte especializado</span>
                <span className="font-semibold text-white">VIP</span>
              </div>
              <div className="flex items-center justify-between text-sm text-green-200">
                <span>Simulados semanais</span>
                <span className="font-semibold text-white">Real Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
