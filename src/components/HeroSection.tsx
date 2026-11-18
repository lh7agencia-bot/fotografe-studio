import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { GALLERY_PHOTOS, STUDIO_INFO } from '../data/studioData';
import { buildWhatsAppUrl } from '../utils/studio';
import { StudioImage } from './StudioImage';

export function HeroSection() {
  const heroPhoto = GALLERY_PHOTOS[0];
  const whatsappHref = buildWhatsAppUrl(STUDIO_INFO.whatsappDigits);

  return (
    <section
      id="topo"
      className="scroll-mt-16 border-b border-slate-200/80 bg-[#F5F5F5] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="text-sm font-medium text-[#0D7AC4]">
              {STUDIO_INFO.niche} em Valparaíso de Goiás · Jardim Céu Azul
            </p>

            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-950 text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {STUDIO_INFO.slogan}.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              No <strong className="font-semibold text-slate-900">{STUDIO_INFO.name}</strong>,
              cada sessão é conduzida com direção cuidadosa, luz equilibrada e olhar autoral para
              transformar histórias reais em fotografias atemporais.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#1D9BF0] px-6 py-3 text-sm font-semibold text-[#062134] transition-colors duration-150 hover:bg-[#1488D8] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                <span>Agendar pelo WhatsApp</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#galeria"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:border-[#1D9BF0] hover:text-[#0D7AC4] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                Explorar Galeria
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#1D9BF0]" aria-hidden="true" />
                <span>{STUDIO_INFO.shortAddress}</span>
              </span>
              <span className="inline-flex items-center gap-2 tabular-nums">
                <Phone className="h-4 w-4 shrink-0 text-[#1D9BF0]" aria-hidden="true" />
                <span>{STUDIO_INFO.phoneDisplay}</span>
              </span>
            </div>
          </div>

          <div className="flex items-center lg:col-span-6">
            <figure className="w-full rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-sm">
              <StudioImage
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                width={heroPhoto.width}
                height={heroPhoto.height}
                loading="eager"
                className="rounded-xl"
              />
              <figcaption className="flex items-center justify-between gap-4 px-2 pt-3 pb-1 text-xs text-slate-600">
                <span className="font-medium text-slate-900">{heroPhoto.title}</span>
                <span className="tabular-nums text-slate-500">
                  {STUDIO_INFO.name} · {STUDIO_INFO.landmark}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white px-5 py-4">
            <p className="text-xs font-medium text-slate-500">Especialidade</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">Newborn, Retratos e Família</p>
          </div>
          <div className="bg-white px-5 py-4">
            <p className="text-xs font-medium text-slate-500">Atendimento</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">Com horário agendado</p>
          </div>
          <div className="bg-white px-5 py-4">
            <p className="text-xs font-medium text-slate-500">Localização</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">Jardim Céu Azul, Loja 01</p>
          </div>
          <div className="bg-white px-5 py-4">
            <p className="text-xs font-medium text-slate-500">Contato Direto</p>
            <p className="mt-1 text-sm font-semibold text-slate-900 tabular-nums">
              {STUDIO_INFO.phoneDisplay}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
