import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, STUDIO_INFO } from '../data/studioData';
import { buildWhatsAppUrl } from '../utils/studio';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-16 border-b border-slate-200/80 bg-[#F5F5F5] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-medium text-[#0D7AC4]">Perguntas Frequentes</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-950 text-balance sm:text-4xl">
              Dúvidas comuns antes do seu ensaio
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Reunimos os principais esclarecimentos sobre agendamentos, prazos de edição e preparo
              para a sessão.
            </p>
            <a
              href={buildWhatsAppUrl(STUDIO_INFO.whatsappDigits)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[#0D7AC4] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
            >
              Ainda tem dúvidas? Fale no WhatsApp
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `${item.id}-panel`;
                const buttonId = `${item.id}-button`;

                return (
                  <div key={item.id}>
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => handleToggle(item.id)}
                        className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 sm:px-6 sm:text-base focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#1D9BF0]"
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-[#1D9BF0] transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6"
                    >
                      {item.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
