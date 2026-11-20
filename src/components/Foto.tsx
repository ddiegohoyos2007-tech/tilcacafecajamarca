import type { Foto as FotoT } from '../content';
import { useLightbox } from './Lightbox';

type Props = {
  foto: FotoT;
  className?: string;
  sizes?: string;
  prioridad?: boolean;
  imgClassName?: string;
  /** Fotos que se recorren con las flechas del visor. */
  grupo?: FotoT[];
};

/** <picture> con AVIF y WebP en dos anchos. Al hacer clic se abre en el visor (lightbox). */
export function Foto({ foto, className = '', sizes = '(min-width: 768px) 50vw, 100vw', prioridad, imgClassName = '', grupo }: Props) {
  const abrir = useLightbox();
  const grande = Math.min(1280, foto.w);
  const unico = foto.w <= 640; // recortes de Instagram de un solo tamaño
  const set = (ext: string) =>
    unico ? `/img/${foto.src}.${ext}` : `/img/${foto.src}-640.${ext} 640w, /img/${foto.src}-1280.${ext} ${grande}w`;
  return (
    <button type="button" className={`foto-btn ${className}`} onClick={() => abrir(foto, grupo)} aria-label={`Ampliar foto: ${foto.alt}`}>
      <picture>
        <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
        <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
        <img
          src={unico ? `/img/${foto.src}.webp` : `/img/${foto.src}-640.webp`}
          alt={foto.alt}
          width={foto.w}
          height={foto.h}
          loading={prioridad ? 'eager' : 'lazy'}
          decoding={prioridad ? 'sync' : 'async'}
          {...(prioridad ? { fetchpriority: 'high' } : {})}
          className={imgClassName}
        />
      </picture>
    </button>
  );
}
