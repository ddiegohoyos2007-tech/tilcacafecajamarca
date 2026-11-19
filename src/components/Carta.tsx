import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { carta, DEMO, mensajes, waLink } from '../content';
import { Foto } from './Foto';
import { Flecha } from './Iconos';
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
          <div className="md:col-span-5 md:text-right" style={{ ['--d' as string]: '80ms' }}>
            <p className="text-cafe-suave">{carta.bajada}</p>
            <a href={waLink(mensajes.carta)} target="_blank" rel="noopener" className="enlace mt-2 inline-flex min-h-[44px] items-center gap-1.5 text-bosque">
              {carta.cta} <Flecha />
            </a>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Categorías de la carta"
          onKeyDown={onKey}
          className="mt-10 grid grid-cols-4 gap-1 rounded-full bg-crema-2 p-1 sm:inline-grid sm:min-w-[480px]"
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
                className={`relative min-h-[48px] rounded-full px-3 text-[1.0625rem] font-semibold transition-colors duration-200 active:scale-[0.97] ${
                  sel ? 'text-crema' : 'text-cafe'
                }`}
                style={{ transitionProperty: 'color, transform' }}
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

        <div
          id={`${uid}-panel`}
          role="tabpanel"
          aria-labelledby={`${uid}-tab-${cat.id}`}
          tabIndex={0}
          className="relative mt-8 rounded-sm focus-visible:outline-offset-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={cat.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
              transition={{ duration: 0.22, ease }}
              className="grid gap-8 md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-7">
                <p className="font-display text-[1.375rem] italic leading-snug text-bosque md:text-[1.625rem]">{cat.intro}</p>
                {cat.platos.length === 0 && <p className="mt-6 border-t border-cafe/15 pt-4 text-cafe-suave">Estamos preparando esta sección. Pregunta por WhatsApp qué hay hoy.</p>}
                <ul className={`mt-6 border-t border-cafe/15 ${cat.platos.length ? '' : 'hidden'}`}>
                  {cat.platos.map((p) => (
                    <li key={p.nombre} className="flex items-baseline justify-between gap-4 border-b border-cafe/15 py-4">
                      <div className="min-w-0">
                        <p className="text-[1.1875rem] font-semibold text-cafe [overflow-wrap:anywhere]">
                          {p.nombre} {p.demo && <span className="demo-tag align-middle">{DEMO}</span>}
                        </p>
                        {p.detalle && <p className="mt-0.5 text-cafe-suave">{p.detalle}</p>}
                      </div>
                      <span className="shrink-0 tabular-nums text-cafe-suave" aria-label="Precio por confirmar">
                        S/ —
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[1rem] text-cafe-suave">
                  Precios por confirmar <span className="demo-tag">{DEMO}</span>
                </p>
              </div>
              <div className="marco marco-zoom aspect-[4/3] md:col-span-4 md:col-start-9 md:aspect-square md:self-start">
                <Foto foto={cat.foto} sizes="(min-width: 768px) 32vw, 100vw" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
