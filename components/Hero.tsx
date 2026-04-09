// components/Hero.tsx
import Image from 'next/image'
import TrustLogos from './TrustLogos'

export default function Hero() {
  return (
    <>
      {/* Navbar Fixa */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-green-400/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <span className="text-xl font-black tracking-[0.2em] text-white">
                CPPem
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-8 text-sm tracking-[0.2em] text-green-400 uppercase">
                <a href="#" className="transition hover:text-white">
                  Home
                </a>
                <a href="#" className="transition hover:text-white">
                  Sobre
                </a>
                <a href="#" className="transition hover:text-white">
                  Cursos
                </a>
                <a href="#" className="transition hover:text-white">
                  Contato
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="rounded-full bg-green-400 px-6 py-2 text-sm font-black text-black transition-all hover:scale-105 hover:bg-green-300">
                Loja
              </button>
              <button className="rounded-full border border-green-400/30 px-6 py-2 text-sm font-bold text-green-400 transition-all hover:bg-green-400 hover:text-black">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-[#020202] pt-16 text-white">
        {/* Grid animado de fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,0,0.12)_0%,_transparent_40%)] opacity-20"></div>
        <div className="animate-grid absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.08)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(0,255,0,0.08)_1px,_transparent_1px)] bg-[size:70px_70px]"></div>
        <div className="animate-drift absolute top-24 left-10 h-36 w-36 rounded-full bg-green-400/10 blur-3xl"></div>
        <div className="animate-drift animation-delay-2000 absolute top-40 right-10 h-28 w-28 rounded-full bg-green-400/5 blur-2xl"></div>
        <div className="absolute top-16 left-1/2 h-2 w-60 -translate-x-1/2 rounded-full bg-green-400/30 blur-2xl"></div>
        <div className="animate-drift animation-delay-4000 absolute right-1/4 bottom-20 h-24 w-24 rounded-full bg-green-400/10 blur-2xl"></div>

        {/* Partículas flutuantes */}
        <div className="particle top-1/4 left-10 h-1 w-1 opacity-20" />
        <div className="particle animation-delay-2000 top-1/2 right-20 h-2 w-2 opacity-30" />
        <div className="particle animation-delay-4000 bottom-1/4 left-1/3 h-1.5 w-1.5 opacity-10" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24">
          <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-40" />

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Lado esquerdo: Mockup de vídeo com celular/notebook */}
            <div className="order-1">
              <div className="animate-fade-in-up animation-delay-300 relative mx-auto max-w-2xl">
                <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-green-400/20 to-emerald-500/20 blur-xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
                  <video
                    src="/video-aula-real.mp4"
                    poster="/thumb-aula-premium.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[420px] w-full object-cover sm:h-[500px]"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/80 px-6 py-5 text-sm text-green-200 backdrop-blur-md">
                    <div className="space-y-1">
                      <p className="font-semibold text-white">
                        Treino real de campo
                      </p>
                      <p className="text-xs text-green-300">
                        Aulas ao vivo, simulados e análise de desempenho
                      </p>
                    </div>
                    <span className="rounded-full border border-green-400/20 bg-black/60 px-3 py-1 text-xs tracking-[0.2em] text-green-300 uppercase">
                      4:20 / 12:45
                    </span>
                  </div>
                </div>

                <div className="animate-float absolute -right-8 -bottom-12 hidden space-x-4 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] md:flex">
                  <div className="rounded-[2.5rem] border border-white/20 bg-black p-2 shadow-2xl ring-1 ring-white/10">
                    <div className="h-72 w-40 overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900">
                      <Image
                        src="/plataforma-mobile.png"
                        alt="Plataforma no Celular"
                        width={160}
                        height={288}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="rounded-[2rem] border border-green-400/20 bg-zinc-900/90 p-6 text-sm text-green-200 shadow-[0_0_30px_rgba(0,255,0,0.1)] backdrop-blur-md">
                    <p className="font-bold tracking-[0.3em] text-green-400 uppercase">
                      Plataforma
                    </p>
                    <p className="mt-3 text-xl leading-tight font-black text-white">
                      Celular + notebook
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado direito: Texto de impacto */}
            <div className="animate-fade-in-up animation-delay-500 z-10 order-2 text-center lg:text-left">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 rounded-3xl bg-green-400/10 opacity-50 blur-3xl" />
                <h1 className="animate-fade-in-up animation-delay-700 relative text-5xl leading-[0.9] font-black tracking-tight text-white uppercase sm:text-7xl lg:text-8xl xl:text-[5.5rem]">
                  Treine com um{' '}
                  <span className="block text-green-400 lg:inline">
                    vídeo real
                  </span>{' '}
                  e conquiste sua{' '}
                  <span className="block text-green-400 lg:inline">farda</span>
                </h1>
              </div>
              <p className="animate-fade-in-up animation-delay-900 mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg lg:max-w-xl">
                Plataforma completa de estudo para concurseiros policiais, com
                aulas reais, simulados, mentorias e relatórios de desempenho.
              </p>
              <div className="animate-fade-in-up animation-delay-1100 mt-12 flex flex-col gap-5 sm:flex-row sm:justify-center lg:justify-start">
                <button className="group animate-pulse-glow relative transform overflow-hidden rounded-xl bg-green-400 px-10 py-5 text-lg font-black text-black shadow-lg transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:bg-green-300 active:scale-95">
                  <span className="relative z-10">QUERO MINHA FARDA</span>
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10">
                  Ver Demo
                </button>
              </div>
              <TrustLogos className="animate-fade-in-up animation-delay-1300" />
              <div className="animate-fade-in-up animation-delay-1500 mt-12 grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-green-400/10 bg-white/5 px-8 py-6 text-left transition-all duration-500 hover:border-green-400/30">
                  <p className="text-xs font-bold tracking-[0.3em] text-green-400 uppercase">
                    Mockup premium
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Celular e notebook
                  </p>
                </div>
                <div className="rounded-3xl border border-green-400/10 bg-white/5 px-8 py-6 text-left transition-all duration-500 hover:border-green-400/30">
                  <p className="text-xs font-bold tracking-[0.3em] text-green-400 uppercase">
                    Foco real
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Aulas práticas e análise de desempenho
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
