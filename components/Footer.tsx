// components/Footer.tsx
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative border-t border-green-400/10 bg-black text-white">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-green-400/20 to-transparent blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-12">
        <div className="max-w-xl space-y-4">
          <p className="text-sm tracking-[0.32em] text-green-300 uppercase">
            Credibilidade
          </p>
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Estamos ao lado dos aprovados
          </h2>
          <p className="text-green-200">
            Confiança construída com resultados reais em concursos policiais,
            militares e de segurança pública.
          </p>
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-2xl text-green-400" />
            <a
              href="https://wa.me/5511999999999"
              className="text-sm font-semibold text-white transition hover:text-green-300"
            >
              WhatsApp: (11) 99999-9999
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-2xl text-green-400" />
            <a
              href="mailto:contato@cppem.com.br"
              className="text-sm font-semibold text-white transition hover:text-green-300"
            >
              contato@cppem.com.br
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-2xl text-green-400" />
            <span className="text-sm font-semibold text-white">
              Av. da Aprovação, 1234 - Recife, PE
            </span>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              'Garantia de 7 dias',
              'Pagamento seguro',
              'Acesso imediato',
              'Suporte especializado',
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-green-400/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,255,0,0.08)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-5 text-sm tracking-[0.28em] text-green-300 uppercase">
              Links
            </h3>
            <ul className="space-y-3 text-sm text-green-200">
              <li>
                <a href="#" className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Planos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm tracking-[0.28em] text-green-300 uppercase">
              Suporte
            </h3>
            <ul className="space-y-3 text-sm text-green-200">
              <li>
                <a href="#" className="transition hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm tracking-[0.28em] text-green-300 uppercase">
              Redes sociais
            </h3>
            <div className="flex items-center gap-4 text-green-400">
              <a
                href="#"
                className="transition hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="transition hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="transition hover:text-white"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-green-400/10 bg-black/90 px-6 py-6 text-sm text-green-200 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 CPPem. Todos os direitos reservados.</span>
          <a
            href="#"
            className="rounded-full border border-green-400/30 bg-green-400/10 px-5 py-2 text-sm font-semibold text-green-200 transition hover:bg-green-400/20 hover:text-white"
          >
            Quero minha aprovação
          </a>
        </div>
      </div>
    </footer>
  )
}
