// components/WhatsAppButton.tsx
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-24 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 sm:bottom-8"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
        1
      </span>
    </a>
  )
}
