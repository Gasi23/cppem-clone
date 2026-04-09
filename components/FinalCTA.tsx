'use client'

// components/FinalCTA.tsx
import { FaShieldAlt, FaHeadset, FaBolt } from 'react-icons/fa'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 text-center">
      <div className="bg-grid-pattern absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-4xl font-black tracking-tighter text-white uppercase sm:text-6xl">
          Sua farda está <br />
          <span className="text-green-400">mais perto do que você imagina</span>
        </h2>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400/10 text-green-400">
              <FaShieldAlt />
            </div>
            <span className="text-sm font-bold text-white uppercase">
              Garantia de 7 dias
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400/10 text-green-400">
              <FaHeadset />
            </div>
            <span className="text-sm font-bold text-white uppercase">
              Suporte Especializado
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400/10 text-green-400">
              <FaBolt />
            </div>
            <span className="text-sm font-bold text-white uppercase">
              Acesso Imediato
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            document.getElementById('pricing')?.scrollIntoView({
              behavior: 'smooth',
            })
          }}
          className="group relative transform cursor-pointer rounded-full bg-green-400 px-16 py-8 text-2xl font-black text-black shadow-[0_0_50px_rgba(0,255,0,0.2)] transition-all duration-500 hover:scale-110 hover:bg-green-300"
        >
          QUERO SER APROVADO AGORA
        </button>

        <p className="mt-8 text-xs font-bold tracking-widest text-zinc-500 uppercase">
          Pagamento 100% seguro via Hotmart
        </p>
      </div>
    </section>
  )
}
