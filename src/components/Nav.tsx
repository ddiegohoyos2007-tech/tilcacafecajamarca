import { useEffect, useState } from 'react';
import { mensajes, nav, negocio, waLink } from '../content';
import { WhatsApp } from './Iconos';

export function Marca({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <img src="/logo-tilca.png" alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded-full" />
      <span className={`flex items-baseline gap-2 whitespace-nowrap leading-none ${claro ? 'text-crema' : 'text-bosque'}`}>
        <span className="font-display text-[1.375rem] font-medium tracking-[0.22em]">TILCA</span>
        <span className="font-display text-[1rem] italic tracking-wide">Café</span>
      </span>
    </span>
  );
}

export function Nav() {
  const [abierto, setAbierto] = useState(false);
  const [conBorde, setConBorde] = useState(false);

  useEffect(() => {
    const onScroll = () => setConBorde(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : '';
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setAbierto(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [abierto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-crema transition-shadow duration-200 ${conBorde ? 'shadow-[0_1px_0_rgba(59,42,32,0.12)]' : ''}`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <a
        href="#contenido"
        className="btn btn-primario sr-only z-50 focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-3"
      >
        Saltar al contenido
      </a>
      <div className="wrap flex h-[var(--nav-h)] items-center justify-between gap-6">
        <a href="#inicio" className="-ml-1 rounded-sm p-1" aria-label="Tilca Café, ir al inicio">
          <Marca />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="enlace inline-flex min-h-[44px] items-center text-[1.0625rem] text-cafe">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={waLink(mensajes.reservar)} target="_blank" rel="noopener" className="btn btn-primario hidden whitespace-nowrap !min-h-[46px] !px-5 md:inline-flex">
            <WhatsApp /> Reservar mesa
          </a>
          <button
            type="button"
            className="relative -mr-2 inline-flex h-12 w-12 items-center justify-center rounded-full text-bosque lg:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            onClick={() => setAbierto((v) => !v)}
          >
            <span className="sr-only">{abierto ? 'Cerrar menú' : 'Abrir menú'}</span>
            <span aria-hidden="true" className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 top-0 h-[2px] w-6 rounded bg-current transition-transform duration-200 ease-out ${abierto ? 'translate-y-[6px] rotate-45' : ''}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-6 rounded bg-current transition-transform duration-200 ease-out ${abierto ? '-translate-y-[6px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil a pantalla completa */}
      <div
        id="menu-movil"
        className={`fixed inset-x-0 bottom-0 top-[calc(var(--nav-h)+env(safe-area-inset-top))] bg-crema transition-[opacity,transform] duration-200 ease-out lg:hidden ${
          abierto ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
        style={{ overscrollBehavior: 'contain' }}
      >
        <nav aria-label="Menú móvil" className="wrap flex h-full flex-col pb-[calc(24px+env(safe-area-inset-bottom))] pt-6">
          <ul className="flex flex-col border-t border-cafe/15">
            {nav.map((n) => (
              <li key={n.id} className="border-b border-cafe/15">
                <a
                  href={`#${n.id}`}
                  onClick={() => setAbierto(false)}
                  className="flex min-h-[64px] items-center font-display text-[2rem] text-bosque"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3">
            <a href={waLink(mensajes.reservar)} target="_blank" rel="noopener" className="btn btn-primario w-full">
              <WhatsApp /> Reservar mesa
            </a>
            <a href={`tel:${negocio.telefonoTel}`} className="btn btn-secundario w-full">
              Llamar al {negocio.telefonoVisible}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

/** Barra fija del celular: aparece cuando el botón del hero ya salió de pantalla. */
export function BarraMovil() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById('hero-acciones');
    const visita = document.getElementById('visitanos');
    if (!hero || !('IntersectionObserver' in window)) return;
    let heroVisible = true;
    let visitaVisible = false;
    const update = () => setVisible(!heroVisible && !visitaVisible);
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) heroVisible = e.isIntersecting || e.boundingClientRect.top > 0;
        if (e.target === visita) visitaVisible = e.isIntersecting;
      }
      update();
    });
    io.observe(hero);
    if (visita) io.observe(visita);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-cafe/10 bg-crema/[0.98] transition-[transform,opacity] duration-300 ease-out md:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
      style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
      aria-hidden={!visible}
    >
      <div className="wrap flex gap-3 pt-3">
        <a href={waLink(mensajes.reservar)} target="_blank" rel="noopener" tabIndex={visible ? 0 : -1} className="btn btn-primario flex-1 !px-4">
          <WhatsApp /> Reservar mesa
        </a>
        <a href={negocio.mapa} target="_blank" rel="noopener" tabIndex={visible ? 0 : -1} className="btn btn-secundario !px-4">
          Cómo llegar
        </a>
      </div>
    </div>
  );
}
