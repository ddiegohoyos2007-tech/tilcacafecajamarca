import type { Foto as FotoT } from '../content';

type Props = {
  foto: FotoT;
  className?: string;
  sizes?: string;
  prioridad?: boolean;
  imgClassName?: string;
};

/** <picture> con AVIF y WebP, medidas fijas para evitar saltos de layout. */
export function Foto({ foto, className = '', sizes = '(min-width: 768px) 50vw, 100vw', prioridad, imgClassName = '' }: Props) {
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={`/img/${foto.src}.avif`} sizes={sizes} />
      <img
        src={`/img/${foto.src}.webp`}
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
