import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

const NAV_LINKS = [
  { href: '#galeria', label: 'Galeria' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#F5F5F5]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#topo"
          className="font-display text-xl font-semibold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D9BF0]"
        >
          {STUDIO_INFO.name}
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 border-b-2 border-transparent py-1 transition-colors duration-150 hover:border-[#1D9BF0] hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D9BF0]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#1D9BF0] px-4 py-2 text-sm font-semibold text-[#062134] transition-colors duration-150 hover:bg-[#1488D8] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Agendar Ensaio
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-900 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label="Navegação móvel"
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-[#F5F5F5] hover:text-[#0D7AC4]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center rounded-lg bg-[#1D9BF0] px-4 py-2.5 text-sm font-semibold text-[#062134] hover:bg-[#1488D8]"
            >
              Agendar Ensaio
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
