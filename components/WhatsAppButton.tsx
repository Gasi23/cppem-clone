'use client'

// components/WhatsAppButton.tsx
import { FaWhatsapp } from 'react-icons/fa'

interface WhatsAppButtonProps {
  badgeCount?: number
  phone?: string
}

export default function WhatsAppButton({
  badgeCount = 1,
  phone = '5511999999999',
}: WhatsAppButtonProps) {
  return (
    <div className="relative">
      <button
        onClick={() => {
          window.open(
            `https://wa.me/${phone}?text=Olá,%20quero%20saber%20mais%20sobre%20os%20planos`,
            '_blank'
          )
        }}
        className="fixed right-6 bottom-24 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 sm:bottom-8"
        aria-label="Fale conosco no WhatsApp"
        title="Fale conosco no WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
        {badgeCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
            {badgeCount}
          </span>
        )}
      </button>
    </div>
  )
}
