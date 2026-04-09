// components/HowItWorks.tsx
export default function HowItWorks() {
  const steps = [
    {
      title: 'Escolha seu plano',
      description:
        'Selecione o plano certo para seu ritmo, nível e objetivo de aprovação.',
    },
    {
      title: 'Estude com estratégia',
      description:
        'Siga o plano de estudos, resolva simulados e acompanhe sua evolução em tempo real.',
    },
    {
      title: 'Conquiste sua aprovação',
      description:
        'Chegue preparado para a prova e garanta sua vaga com confiança total.',
    },
  ]

  return (
    <section
      className="relative bg-black px-6 py-24 text-white sm:px-8 lg:px-12"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #070f08 100%)',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,0,0.08)_0%,_transparent_40%)] opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,_transparent,rgba(10,26,10,0.9))]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm tracking-[0.35em] text-green-300 uppercase">
            Como funciona
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white uppercase sm:text-5xl">
            Entenda nossos passos para sua aprovação
          </h2>
          <p className="mt-5 text-base leading-8 text-green-200 sm:text-lg">
            Um fluxo simples e direto: escolha o plano certo, estude com método
            e chegue preparado para conquistar sua vaga.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-[2rem] border border-green-400/20 bg-[#08120b]/95 px-8 py-10 text-center shadow-[0_0_30px_rgba(0,255,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_20px_60px_rgba(0,255,0,0.2)]"
            >
              <div className="absolute top-6 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border border-green-400/20 bg-green-400/10 text-center text-2xl font-black text-green-300 shadow-[0_0_30px_rgba(0,255,0,0.15)]">
                <span className="relative top-1 block">{index + 1}</span>
              </div>
              <div className="mt-16">
                <h3 className="text-xl font-extrabold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-green-200 sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
