import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from 'motion/react';
import { fidelidad } from '../content';

/*
 * Elemento firma: la balanza de Tilca pesa tus cafés.
 * Al recorrer la sección se llenan las seis tazas; la balanza se inclina hacia el platillo de la taza
 * y, con la sexta, cae el veredicto. Solo transform y opacity; con reduced-motion queda en su estado final.
 */

const PIVOTE = { x: 200, y: 52 };
const BRAZO = 138;
const MAX_GRADOS = 9;

function Platillo({ p, lado, children }: { p: MotionValue<number>; lado: -1 | 1; children: React.ReactNode }) {
  const x = useTransform(p, (v) => lado * BRAZO * Math.cos((v * MAX_GRADOS * Math.PI) / 180));
  const y = useTransform(p, (v) => lado * BRAZO * Math.sin((v * MAX_GRADOS * Math.PI) / 180));
  return (
    <motion.g style={{ x, y }}>
      {/* cuerdas y plato, colgando siempre en vertical */}
      <path d={`M${PIVOTE.x} ${PIVOTE.y} L${PIVOTE.x - 34} ${PIVOTE.y + 74} M${PIVOTE.x} ${PIVOTE.y} L${PIVOTE.x + 34} ${PIVOTE.y + 74}`} stroke="currentColor" strokeWidth="1.5" />
      <path d={`M${PIVOTE.x - 46} ${PIVOTE.y + 74} Q${PIVOTE.x} ${PIVOTE.y + 104} ${PIVOTE.x + 46} ${PIVOTE.y + 74} Z`} fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="2" />
      {children}
    </motion.g>
  );
}

function Balanza({ p }: { p: MotionValue<number> }) {
  const rotate = useTransform(p, (v) => v * MAX_GRADOS);
  const tazaLlena = useTransform(p, [0.8, 1], [0, 1]);
  return (
    <svg viewBox="0 0 400 300" className="w-full text-oro-claro" aria-hidden="true">
      {/* poste y base */}
      <path d={`M200 ${PIVOTE.y} V262`} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M140 270 Q200 250 260 270 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      {/* brazo */}
      <motion.g style={{ rotate, originX: '50%', originY: '50%' }}>
        <path d={`M${PIVOTE.x - BRAZO - 6} ${PIVOTE.y} H${PIVOTE.x + BRAZO + 6}`} stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx={PIVOTE.x - BRAZO} cy={PIVOTE.y} r="4" fill="currentColor" />
        <circle cx={PIVOTE.x + BRAZO} cy={PIVOTE.y} r="4" fill="currentColor" />
      </motion.g>
      <circle cx={PIVOTE.x} cy={PIVOTE.y} r="8" fill="#363A1B" stroke="currentColor" strokeWidth="3" />
      <circle cx={PIVOTE.x} cy={PIVOTE.y - 22} r="5" fill="currentColor" />

      {/* izquierda: un grano */}
      <Platillo p={p} lado={-1}>
        <g transform={`translate(${PIVOTE.x} ${PIVOTE.y + 70}) rotate(-25)`}>
          <ellipse rx="11" ry="15" fill="currentColor" />
          <path d="M0 -13 C-5 -4 5 4 0 13" stroke="#363A1B" strokeWidth="2" fill="none" />
        </g>
      </Platillo>
      {/* derecha: la taza gratis */}
      <Platillo p={p} lado={1}>
        <g transform={`translate(${PIVOTE.x - 18} ${PIVOTE.y + 46})`}>
          <path d="M0 6 H30 V20 a12 12 0 0 1 -12 12 H12 A12 12 0 0 1 0 20 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <motion.path d="M2 8 H28 V20 a10 10 0 0 1 -10 10 H12 A10 10 0 0 1 2 20 Z" fill="currentColor" style={{ opacity: tazaLlena }} />
          <path d="M30 11 h3 a5 5 0 0 1 0 10 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </g>
      </Platillo>
    </svg>
  );
}

function Taza({ p, i }: { p: MotionValue<number>; i: number }) {
  const nivel = useTransform(p, (v) => Math.min(1, Math.max(0, v * 6 - i)));
  const gratis = i === 5;
  const clip = `taza-${i}`;
  return (
    <li className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 56 52" className={`h-auto w-full max-w-[64px] ${gratis ? 'text-oro-claro' : 'text-crema'}`} aria-hidden="true">
        <defs>
          <clipPath id={clip}>
            <path d="M8 10 H42 V30 a14 14 0 0 1 -14 14 H22 A14 14 0 0 1 8 30 Z" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clip})`}>
          <motion.rect
            x="6"
            y="8"
            width="40"
            height="38"
            fill={gratis ? '#D4B483' : '#B8935A'}
            style={{ scaleY: nivel, originY: 1, originX: 0.5 }}
          />
        </g>
        <path d="M8 10 H42 V30 a14 14 0 0 1 -14 14 H22 A14 14 0 0 1 8 30 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M42 16 h3 a7 7 0 0 1 0 14 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M4 49 H48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className={`text-[1rem] tabular-nums ${gratis ? 'font-semibold text-oro-claro' : 'text-salvia'}`}>{gratis ? 'Gratis' : i + 1}</span>
    </li>
  );
}

export function Fidelidad() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'center 0.45'] });
  const suave = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });
  const fijo = useTransform(scrollYProgress, () => 1);
  const p = reduce ? fijo : suave;
  const veredicto = useTransform(p, [0.9, 1], [0, 1]);

  return (
    <section ref={ref} id="sexto-cafe" aria-labelledby="fidelidad-titulo" className="sobre-bosque seccion bg-bosque text-crema">
      <div className="wrap grid items-start gap-12 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-6">
          <p className="etiqueta text-oro-claro">{fidelidad.etiqueta}</p>
          <h2 id="fidelidad-titulo" className="h2 mt-4" style={{ ['--d' as string]: '40ms' }}>
            {fidelidad.titulo}
          </h2>
          <p className="lead mt-5 text-crema/90" style={{ ['--d' as string]: '100ms' }}>
            {fidelidad.bajada}
          </p>
          <ol className="mt-8 grid gap-3" style={{ ['--d' as string]: '150ms' }}>
            {fidelidad.pasos.map((paso, i) => (
              <li key={paso} className="flex items-center gap-4 text-[1.125rem]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-oro-claro/60 font-display text-oro-claro tabular-nums">
                  {i + 1}
                </span>
                {paso}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[1rem] text-salvia" style={{ ['--d' as string]: '190ms' }}>
            {fidelidad.nota}
          </p>
        </div>

        <div className="flex flex-col md:col-span-6 md:col-start-7">
          <Balanza p={p} />
          <p className="sr-only">Tarjeta de ejemplo: seis tazas; al llenar la sexta, el café es gratis.</p>
          <ul className="mt-6 grid w-full grid-cols-6 gap-2 sm:gap-6" aria-hidden="true">
            {Array.from({ length: 6 }, (_, i) => (
              <Taza key={i} p={p} i={i} />
            ))}
          </ul>
          <motion.p style={{ opacity: veredicto }} className="mt-6 font-display text-[1.625rem] italic text-oro-claro" aria-hidden="true">
            {fidelidad.veredicto}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
