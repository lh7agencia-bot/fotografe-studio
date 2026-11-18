import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="scroll-mt-16 border-b border-slate-200/80 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#0D7AC4]">Depoimentos de Clientes</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-950 text-balance sm:text-4xl">
            Histórias registradas com aprovação de quem viveu a experiência
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-[#F5F5F5]/60 p-6"
            >
              <div>
                <div
                  className="flex items-center gap-1.5"
                  aria-label={`Avaliação ${item.rating} de 5 estrelas`}
                >
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-[#1D9BF0] text-[#1D9BF0]"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="ml-1.5 text-xs font-semibold text-slate-700 tabular-nums">
                    {item.rating}.0
                  </span>
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
                  “{item.text}”
                </blockquote>
              </div>

              <footer className="mt-6 border-t border-slate-200/80 pt-4">
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{item.sessionType}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
