// components/Careers.tsx
import {
  FaShieldAlt,
  FaSearch,
  FaRoad,
  FaFire,
  FaUserShield,
  FaStar,
} from 'react-icons/fa'

const careers = [
  { name: 'Polícia Militar', icon: FaShieldAlt },
  { name: 'Polícia Civil', icon: FaSearch },
  { name: 'PRF', icon: FaRoad },
  { name: 'Bombeiros', icon: FaFire },
  { name: 'Guarda Municipal', icon: FaUserShield },
  { name: 'Exército', icon: FaStar },
]

export default function Careers() {
  return (
    <section className="relative overflow-hidden bg-[#000000] py-24">
      {/* Background Gradient sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,255,0,0.05)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="mb-4 text-sm font-bold tracking-[0.3em] text-green-400 uppercase">
          Foco Total na Sua Farda
        </p>
        <h2 className="mb-12 text-4xl leading-[0.9] font-black tracking-tight text-white uppercase sm:text-6xl lg:text-7xl">
          Prepare-se para as <br />
          <span className="text-green-400">principais carreiras</span>
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {careers.map((career) => (
            <div
              key={career.name}
              className="group flex cursor-default flex-col items-center justify-center rounded-3xl border border-white/5 bg-zinc-900/50 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-green-400/30 hover:bg-zinc-900"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-black shadow-inner transition-all duration-500 group-hover:border-green-400/20 group-hover:bg-green-400/10">
                <career.icon className="text-4xl text-white transition-all duration-500 group-hover:scale-110 group-hover:text-green-400" />
              </div>
              <span className="text-xs font-black tracking-widest text-white uppercase transition-colors duration-500 group-hover:text-green-400 sm:text-sm">
                {career.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
