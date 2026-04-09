// components/TrustLogos.tsx
const trustItems = [
  'PM',
  'PRF',
  'Polícia Civil',
  'Bombeiros',
  'Guarda Municipal',
  'Exército',
]

export default function TrustLogos({ className = '' }: { className?: string }) {
  return (
    <div
      className={`mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start ${className}`}
    >
      <p className="text-sm tracking-[0.28em] text-green-300 uppercase">
        Aprovado em
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {trustItems.map((label) => (
          <span
            key={label}
            className="rounded-full border border-green-400/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,255,0,0.08)]"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
