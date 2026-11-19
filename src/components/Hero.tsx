import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { fotos, franja, hero, horario, mensajes, negocio, waLink } from '../content';
import { Foto } from './Foto';
import { Flecha, Pin, WhatsApp } from './Iconos';

export function Franja({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-y border-cafe/20 py-3 font-display text-[1.0625rem] italic text-bosque md:text-[1.25rem] ${className}`}>
      {franja.map((t, i) => (
        <li key={t} className="flex items-center gap-4">
          {i > 0 && <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-oro" />}
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Parallax muy sutil y solo en la foto (nunca en el texto).
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);
  const semana = horario[0];
  const sabado = horario[1];

  return (
    <section
      ref={ref}
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative flex min-h-[100svh] flex-col pt-[calc(var(--nav-h)+env(safe-area-inset-top))]"
    >
      <div className="wrap grid flex-1 content-start gap-6 pb-6 pt-4 md:grid-cols-12 md:content-center md:items-start md:gap-6 md:pb-10 md:pt-10">
        <div className="md:col-span-7">
          <p className="etiqueta text-oro-texto" data-entra style={{ ['--d' as string]: '0ms' }}>
            {hero.etiqueta}
          </p>
          <h1
            id="hero-titulo"
            className="mt-3 text-bosque md:mt-4"
            style={{ fontSize: 'var(--t-h1)', lineHeight: 1.02, ['--d' as string]: '40ms', ['--sube' as string]: '18px' }}
            data-entra
          >
            {hero.titulo}
          </h1>
          <p className="lead mt-4 text-cafe md:mt-5" data-entra style={{ ['--d' as string]: '120ms' }}>
            {hero.bajada}
          </p>
          <div id="hero-acciones" className="mt-6 grid gap-3 sm:flex md:mt-7" data-entra style={{ ['--d' as string]: '180ms' }}>
            <a href={waLink(mensajes.reservar)} target="_blank" rel="noopener" className="btn btn-primario !px-5 sm:!px-7">
              <WhatsApp /> {hero.ctaPrincipal}
            </a>
            <a href="#carta" className="btn btn-secundario !px-5 sm:!px-7">
              {hero.ctaSecundario} <Flecha />
            </a>
          </div>
          <dl
            className="mt-6 grid gap-x-8 gap-y-2 text-[1.0625rem] leading-snug text-cafe sm:grid-cols-2 md:mt-8 md:grid-cols-1 lg:grid-cols-2"
            data-entra
            style={{ ['--d' as string]: '220ms' }}
          >
            <div className="flex items-start gap-2.5">
              <dt className="sr-only">Horario</dt>
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-oro-texto" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <dd data-assumed>
                <span className="font-semibold">{semana.corto}</span> {semana.abre} – {semana.cierra}
                <br />
                <span className="font-semibold">{sabado.corto}</span> {sabado.abre} – {sabado.cierra}
              </dd>
            </div>
            <div className="hidden items-start gap-2.5 sm:flex">
              <dt className="sr-only">Dirección</dt>
              <Pin className="mt-0.5 shrink-0 text-oro-texto" />
              <dd>
                <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace">
                  {negocio.direccion}
                </a>
                <br />
                {negocio.zona}
              </dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-5 md:col-start-8" data-entra="foto" style={{ ['--d' as string]: '160ms' }}>
          <motion.div style={{ y }} className="marco aspect-[2/1] w-full sm:aspect-[16/10] md:aspect-square">
            <Foto foto={fotos.latteCorazon} prioridad sizes="(min-width: 768px) 40vw, 100vw" />
          </motion.div>
        </div>
      </div>

      {/* Franja sutil: estática, sobre la grilla, sin marquesina en bucle */}
      <div className="wrap hidden pb-6 sm:block md:pb-8">
        <Franja />
      </div>
    </section>
  );
}
