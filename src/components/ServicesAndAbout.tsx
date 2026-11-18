import { GALLERY_PHOTOS, STUDIO_SERVICES } from '../data/studioData';
import { StudioImage } from './StudioImage';

export function ServicesAndAbout() {
  const photographerPhoto = GALLERY_PHOTOS[1];

  return (
    <section
      id="servicos"
      className="scroll-mt-16 border-b border-slate-200/80 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <figure className="mx-auto max-w-md rounded-2xl border border-slate-200/90 bg-[#F5F5F5] p-3">
              <StudioImage
                src={photographerPhoto.src}
                alt={photographerPhoto.alt}
                width={photographerPhoto.width}
                height={photographerPhoto.height}
                className="rounded-xl"
              />
              <figcaption className="mt-3 flex items-center justify-between px-1 text-xs text-slate-600">
                <span className="font-semibold text-slate-900">{photographerPhoto.title}</span>
                <span>Fotografia &amp; Edição</span>
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#0D7AC4]">Serviços do Estúdio</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-950 text-balance sm:text-4xl">
              Cuidado técnico e sensibilidade em cada clique
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Estrutura preparada para receber famílias, recém-nascidos e retratos individuais com
              conforto, iluminação controlada e entrega fiel às cores reais.
            </p>

            <div className="mt-8 divide-y divide-slate-200 border-t border-b border-slate-200">
              {STUDIO_SERVICES.map((service) => (
                <div
                  key={service.number}
                  className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4"
                >
                  <span className="font-mono text-sm font-semibold text-[#1D9BF0] tabular-nums sm:col-span-1">
                    {service.number}.
                  </span>
                  <div className="sm:col-span-11">
                    <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
