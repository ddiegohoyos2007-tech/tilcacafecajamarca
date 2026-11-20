import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { carta, mensajes, negocio, precio, waLink } from '../content';
import { Foto } from './Foto';
import { WhatsApp } from './Iconos';
import { Franja } from './Hero';

const ease = [0.23, 1, 0.32, 1] as const;

export function Carta() {
  const [activa, setActiva] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();
  const uid = useId();
  const cat = carta.categorias[activa];

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = carta.categorias.length;
    let i = activa;
    if (e.key === 'ArrowRight') i = (activa + 1) % n;
    else if (e.key === 'ArrowLeft') i = (activa - 1 + n) % n;
    else if (e.key === 'Home') i = 0;
    else if (e.key === 'End') i = n - 1;
    else return;
    e.preventDefault();
    setActiva(i);
    tabs.current[i]?.focus();
  };

  return (
    <section id="carta" aria-labelledby="carta-titulo" className="seccion">
      <div className="wrap">
        {/* En el celular la franja vive aquí para que el hero quepa en la primera pantalla */}
        <Franja className="-mt-6 mb-14 sm:hidden" />
        <div className="grid gap-4 md:grid-cols-12 md:items-end md:gap-6">
          <h2 id="carta-titulo" className="h2 text-bosque md:col-span-7">
            {carta.titulo}
          </h2>
          <div className="md:col-span-5 md:text-right">
            <p className="text-cafe-suave">{carta.bajada}</p>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Categorías de la carta"
          onKeyDown={onKey}
          className="mt-10 grid grid-cols-3 gap-1 rounded-[28px] bg-crema-2 p-1 lg:inline-grid lg:grid-cols-6 lg:rounded-full"
        >
          {carta.categorias.map((c, i) => {
            const sel = i === activa;
            return (
              <button
                key={c.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`${uid}-tab-${c.id}`}
                aria-selected={sel}
                aria-controls={`${uid}-panel`}
                tabIndex={sel ? 0 : -1}
                onClick={() => setActiva(i)}
                className={`relative min-h-[48px] rounded-full px-3 text-[1rem] font-semibold leading-tight transition-[color,transform] duration-200 active:scale-[0.97] lg:px-5 lg:text-[1.0625rem] ${
                  sel ? 'text-crema' : 'text-cafe'
                }`}
              >
                {sel && (
                  <motion.span
                    layoutId={`${uid}-pastilla`}
                    className="absolute inset-0 rounded-full bg-bosque"
                    transition={reduce ? { duration: 0 } : { type: 'spring', duration: 0.35, bounce: 0.15 }}
                  />
                )}
                <span className="relative">{c.label}</span>
              </button>
            );
          })}
        </div>

        <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${cat.id}`} tabIndex={0} className="relative mt-10 rounded-sm focus-visible:outline-offset-8">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={cat.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
              transition={{ duration: 0.22, ease }}
              className="grid gap-10 md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-7">
                {cat.grupos.map((g) => (
                  <div key={g.titulo} className="mb-10 last:mb-0">
                    <h3 className="font-sans text-[1rem] font-semibold uppercase tracking-[0.14em] text-oro-texto">{g.titulo}</h3>
                    {g.nota && <p className="mt-1 font-display text-[1.125rem] italic text-cafe-suave">{g.nota}</p>}
                    <ul className="mt-3 border-t border-cafe/15">
                      {g.platos.map((pl) => (
                        <li key={pl.caso + pl.nombre} className="flex items-baseline justify-between gap-5 border-b border-cafe/15 py-4">
                          <div className="min-w-0">
                            <p className="font-display text-[1.125rem] leading-snug text-bosque [overflow-wrap:anywhere]">“{pl.caso}”</p>
                            <p className="mt-0.5 text-[1.0625rem] font-semibold text-cafe">{pl.nombre}</p>
                            {pl.detalle && <p className="mt-0.5 text-[1rem] leading-relaxed text-cafe-suave">{pl.detalle}</p>}
                          </div>
                          <span className="shrink-0 text-[1.0625rem] font-semibold tabular-nums text-cafe">{precio(pl.precio)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {cat.extras && (
                  <ul className="mt-8 grid grid-cols-2 gap-4 md:gap-6">
                    {cat.extras.map((f) => (
                      <li key={f.src} className="marco marco-zoom aspect-[4/3]">
                        <Foto foto={f} grupo={[cat.foto, ...cat.extras!]} sizes="(min-width: 768px) 28vw, 50vw" />
                      </li>
                    ))}
                  </ul>
                )}
                {cat.nota && (
                  <p className="mt-6 font-display text-[1.25rem] italic text-bosque">
                    “{cat.nota}”
                  </p>
                )}
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <div className="marco marco-zoom aspect-[4/5] md:sticky md:top-[calc(var(--nav-h)+24px)]">
                  <Foto foto={cat.foto} grupo={cat.extras ? [cat.foto, ...cat.extras] : undefined} sizes="(min-width: 768px) 32vw, 100vw" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-[1.375rem] italic text-bosque">{negocio.cierre}</p>
          <a href={waLink(mensajes.pedido)} target="_blank" rel="noopener" className="btn btn-primario w-full sm:w-auto">
            <WhatsApp /> Pedidos al {negocio.telefonoVisible}
          </a>
        </div>
      </div>
    </section>
  );
}
