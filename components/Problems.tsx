// components/Problems.tsx
export default function Problems() {
  return (
    <section className="bg-black px-6 py-16 text-green-400 sm:px-8 lg:px-12">
      <h2 className="mb-10 text-center text-4xl font-extrabold sm:text-5xl">Problemas Comuns</h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="group rounded-3xl border border-green-400/20 bg-gradient-to-br from-black via-[#04110a] to-black p-6 shadow-[0_0_20px_rgba(34,197,94,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-green-300/80 hover:bg-green-950/90 hover:shadow-[0_25px_70px_rgba(16,185,129,0.22)]">
          <div className="mb-4 inline-flex items-center rounded-full bg-green-400/10 px-3 py-1 text-sm text-green-300">
            Problema resolvido
          </div>
          <h3 className="mb-2 text-xl font-extrabold text-white">Dificuldade Inicial</h3>
          <p className="text-gray-300">Muitos alunos têm dificuldade em começar a programar.</p>
        </div>
        <div className="group rounded-3xl border border-green-400/20 bg-gradient-to-br from-black via-[#04110a] to-black p-6 shadow-[0_0_20px_rgba(34,197,94,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-green-300/80 hover:bg-green-950/90 hover:shadow-[0_25px_70px_rgba(16,185,129,0.22)]">
          <div className="mb-4 inline-flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
            Prática constante
          </div>
          <h3 className="mb-2 text-xl font-extrabold text-white">Falta de Prática</h3>
          <p className="text-gray-300">Sem exercícios práticos, o aprendizado não é consolidado.</p>
        </div>
        <div className="group rounded-3xl border border-green-400/20 bg-gradient-to-br from-black via-[#04110a] to-black p-6 shadow-[0_0_20px_rgba(34,197,94,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-green-300/80 hover:bg-green-950/90 hover:shadow-[0_25px_70px_rgba(16,185,129,0.22)]">
          <div className="mb-4 inline-flex items-center rounded-full bg-fuchsia-400/10 px-3 py-1 text-sm text-fuchsia-300">
            Conteúdo pesado
          </div>
          <h3 className="mb-2 text-xl font-extrabold text-white">Teoria Exagerada</h3>
          <p className="text-gray-300">Muita teoria e pouco código podem desmotivar os alunos.</p>
        </div>
      </div>
    </section>
  )
}
