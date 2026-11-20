import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import type { Foto } from '../content';

type Abrir = (foto: Foto, grupo?: Foto[]) => void;
const Ctx = createContext<Abrir>(() => {});
export const useLightbox = () => useContext(Ctx);

/**
 * Visor de fotos con <dialog> nativo: atrapa el foco, cierra con Esc y devuelve el foco al cerrar.
 * Entra con opacidad + scale(0.96) en 220 ms y sale más rápido; con reduced-motion, solo opacidad.
 */
export function LightboxProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [grupo, setGrupo] = useState<Foto[]>([]);
  const [i, setI] = useState(0);
  const inicioX = useRef<number | null>(null);

  const abrir = useCallback<Abrir>((foto, g) => {
    const lista = g && g.length ? g : [foto];
    setGrupo(lista);
    setI(Math.max(0, lista.findIndex((f) => f.src === foto.src)));
    ref.current?.showModal();
  }, []);

  const cerrar = () => ref.current?.close();
  const mover = (d: number) => setI((x) => (x + d + grupo.length) % grupo.length);
  const varias = grupo.length > 1;
  const foto = grupo[i];

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    const onKey = (e: KeyboardEvent) => {
      if (!dlg.open || grupo.length < 2) return;
      if (e.key === 'ArrowRight') setI((x) => (x + 1) % grupo.length);
      if (e.key === 'ArrowLeft') setI((x) => (x - 1 + grupo.length) % grupo.length);
    };
    dlg.addEventListener('keydown', onKey);
    return () => dlg.removeEventListener('keydown', onKey);
  }, [grupo.length]);

  const flecha = (d: 1 | -1) => (
    <button
      type="button"
      onClick={() => mover(d)}
      className="lb-btn absolute top-[calc(50%-24px)] max-sm:bottom-4 max-sm:top-auto"
      style={d === -1 ? { left: 'max(12px, env(safe-area-inset-left))' } : { right: 'max(12px, env(safe-area-inset-right))' }}
      aria-label={d === -1 ? 'Foto anterior' : 'Foto siguiente'}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={d === -1 ? { transform: 'scaleX(-1)' } : undefined}>
        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );

  return (
    <Ctx.Provider value={abrir}>
      {children}
      <dialog
        ref={ref}
        className="lightbox"
        aria-label={foto ? `Foto ampliada: ${foto.alt}` : 'Foto ampliada'}
        onClick={(e) => e.target === e.currentTarget && cerrar()}
        onPointerDown={(e) => (inicioX.current = e.clientX)}
        onPointerUp={(e) => {
          if (inicioX.current === null || !varias) return;
          const dx = e.clientX - inicioX.current;
          inicioX.current = null;
          if (Math.abs(dx) > 50) mover(dx < 0 ? 1 : -1);
        }}
      >
        {foto && (
          <>
            <picture key={foto.src} className="lb-foto">
              {foto.w > 640 ? (
                <>
                  <source type="image/avif" srcSet={`/img/${foto.src}-1280.avif`} />
                  <img src={`/img/${foto.src}-1280.webp`} alt={foto.alt} width={foto.w} height={foto.h} />
                </>
              ) : (
                <>
                  <source type="image/avif" srcSet={`/img/${foto.src}.avif`} />
                  <img src={`/img/${foto.src}.webp`} alt={foto.alt} width={foto.w} height={foto.h} />
                </>
              )}
            </picture>
            <button type="button" onClick={cerrar} className="lb-btn absolute" style={{ top: 'max(12px, env(safe-area-inset-top))', right: 'max(12px, env(safe-area-inset-right))' }} aria-label="Cerrar foto" autoFocus>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>
            {varias && (
              <>
                {flecha(-1)}
                {flecha(1)}
                <p className="absolute left-1/2 -translate-x-1/2 text-[0.9375rem] tabular-nums text-crema/80" style={{ bottom: 'max(20px, env(safe-area-inset-bottom))' }} aria-live="polite">
                  {i + 1} / {grupo.length}
                </p>
              </>
            )}
          </>
        )}
      </dialog>
    </Ctx.Provider>
  );
}
