// components/FixedCTA.tsx
export default function FixedCTA() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 mx-auto flex w-full items-center justify-center bg-black/95 px-4 py-3 text-center shadow-[0_-10px_40px_rgba(0,0,0,0.45)] sm:hidden">
      {/* Botão único com glow neon e texto "Quero minha aprovação" */}
      <a
        href="#pricing" // Mantém o link para a seção de preços
        className="animate-pulse-glow transform rounded-full bg-green-400 px-8 py-4 text-lg font-black text-black shadow-[0_0_40px_rgba(0,255,0,0.32)] transition hover:-translate-y-1 hover:scale-105 hover:bg-green-300"
      >
        Quero minha aprovação
      </a>
    </div>
  )
}
