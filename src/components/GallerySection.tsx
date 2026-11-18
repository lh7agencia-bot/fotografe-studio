import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_PHOTOS, type GalleryCategory, type StudioPhoto } from '../data/studioData';
import { filterGalleryPhotos, getNextLightboxIndex } from '../utils/studio';
import { StudioImage } from './StudioImage';

const CATEGORY_OPTIONS: { id: GalleryCategory; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'ensaios', label: 'Ensaios' },
  { id: 'estudio', label: 'Estúdio' },
];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('todas');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visiblePhotos = filterGalleryPhotos(GALLERY_PHOTOS, selectedCategory);
  const activePhoto: StudioPhoto | null =
    activeIndex !== null && visiblePhotos[activeIndex] ? visiblePhotos[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : getNextLightboxIndex(prev, visiblePhotos.length, 'next')
        );
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : getNextLightboxIndex(prev, visiblePhotos.length, 'prev')
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, visiblePhotos.length]);

  const handleCategoryChange = (category: GalleryCategory) => {
    setSelectedCategory(category);
    setActiveIndex(null);
  };

  return (
    <section
      id="galeria"
      className="scroll-mt-16 border-b border-slate-200/80 bg-[#F5F5F5] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-[#0D7AC4]">Portfólio &amp; Espaço</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-950 text-balance sm:text-4xl">
              Galeria do Fotografe Studio
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Clique em qualquer imagem para abrir a visualização ampliada em tela cheia mantendo as
              proporções originais.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filtrar galeria por categoria"
            className="inline-flex items-center gap-1 self-start rounded-lg border border-slate-200 bg-white p-1"
          >
            {CATEGORY_OPTIONS.map((option) => {
              const isSelected = selectedCategory === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleCategoryChange(option.id)}
                  className={`min-h-10 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0] ${
                    isSelected
                      ? 'bg-[#1D9BF0] text-[#062134]'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          data-testid="gallery-grid"
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visiblePhotos.map((photo, index) => (
            <article
              key={photo.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3 transition-shadow duration-200 hover:shadow-md"
            >
              <div>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ampliar foto: ${photo.title}`}
                  className="flex h-72 w-full items-center justify-center overflow-hidden rounded-xl bg-[#F5F5F5] p-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  <StudioImage
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    fit="contain"
                    className="h-full w-full bg-transparent"
                    imgClassName="rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </button>

                <div className="px-1 pt-4">
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span>{photo.category === 'ensaios' ? 'Ensaio Fotográfico' : 'Estúdio'}</span>
                    <span className="tabular-nums">
                      {photo.width} × {photo.height} ({photo.aspectLabel})
                    </span>
                  </div>
                  <h3 className="mt-1.5 text-base font-semibold text-slate-900">{photo.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{photo.caption}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end border-t border-slate-100 px-1 pt-3">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#0D7AC4] transition-colors hover:bg-[#1D9BF0]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Ampliar imagem</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activePhoto && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada: ${activePhoto.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/92 p-4 sm:p-6"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-800 px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{activePhoto.title}</p>
                <p className="text-xs text-slate-400 tabular-nums">
                  Imagem {activeIndex + 1} de {visiblePhotos.length} · Proporção original{' '}
                  {activePhoto.aspectLabel}
                </p>
              </div>

              <button
                type="button"
                aria-label="Fechar visualização"
                onClick={() => setActiveIndex(null)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-white transition-colors hover:border-[#1D9BF0] hover:text-[#1D9BF0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center bg-slate-950 p-4 sm:p-6">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                width={activePhoto.width}
                height={activePhoto.height}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain"
              />

              {visiblePhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Foto anterior"
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev === null ? 0 : getNextLightboxIndex(prev, visiblePhotos.length, 'prev')
                      )
                    }
                    className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-white transition-colors hover:border-[#1D9BF0] hover:text-[#1D9BF0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    aria-label="Próxima foto"
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev === null ? 0 : getNextLightboxIndex(prev, visiblePhotos.length, 'next')
                      )
                    }
                    className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-white transition-colors hover:border-[#1D9BF0] hover:text-[#1D9BF0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <div className="border-t border-slate-800 px-4 py-3 text-sm text-slate-300 sm:px-6">
              {activePhoto.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
