import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { buildWhatsAppUrl } from '../utils/studio';

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(STUDIO_INFO.whatsappDigits)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar pelo WhatsApp com ${STUDIO_INFO.name} no número ${STUDIO_INFO.phoneDisplay}`}
      className="fixed right-4 bottom-4 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-[#1D9BF0] px-4 text-sm font-semibold text-[#062134] shadow-lg transition-transform duration-150 hover:scale-[1.03] hover:bg-[#1488D8] sm:right-6 sm:bottom-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
