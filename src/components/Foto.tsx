import type { Foto as FotoT } from '../content';

type Props = {
  foto: FotoT;
  className?: string;
  sizes?: string;
  prioridad?: boolean;
  imgClassName?: string;
};

/** <picture> con AVIF y WebP en dos anchos; medidas fijas para evitar saltos de layout. */
export function Foto({ foto, className = '', sizes = '(min-width: 768px) 50vw, 100vw', prioridad, imgClassName = '' }: Props) {
  const grande = Math.min(1280, foto.w);
  // Las fotos de taller son recortes de Instagram de un solo tamaño.
  const unico = foto.w <= 640;
  const set = (ext: string) =>
    unico ? `/img/${foto.src}.${ext}` : `/img/${foto.src}-640.${ext} 640w, /img/${foto.src}-1280.${ext} ${grande}w`;
  return (
    <picture className={className}>
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
  );
}
