import { STUDIO_INFO } from '../data/studioData';
import { buildWhatsAppUrl } from '../utils/studio';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F5F5F5] py-10 text-sm text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-slate-900">{STUDIO_INFO.name}</p>
          <p className="mt-1 text-xs text-slate-600">{STUDIO_INFO.slogan}</p>
          <p className="mt-2 max-w-md text-xs text-slate-500">{STUDIO_INFO.address}</p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex flex-wrap gap-5 text-xs font-medium text-slate-700">
            <a href="#galeria" className="hover:text-[#0D7AC4]">
              Galeria
            </a>
            <a href="#servicos" className="hover:text-[#0D7AC4]">
              Serviços
            </a>
            <a href="#depoimentos" className="hover:text-[#0D7AC4]">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-[#0D7AC4]">
              FAQ
            </a>
            <a
              href={buildWhatsAppUrl(STUDIO_INFO.whatsappDigits)}
              target="_blank"
              rel="noopener noreferrer"
              className="tabular-nums hover:text-[#0D7AC4]"
            >
              WhatsApp {STUDIO_INFO.phoneDisplay}
            </a>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {STUDIO_INFO.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
