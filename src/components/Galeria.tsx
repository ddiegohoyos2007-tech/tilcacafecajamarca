import { galeria, negocio } from '../content';
import { Foto } from './Foto';
import { Instagram } from './Iconos';

const n = (x: number) => new Intl.NumberFormat('es-PE').format(x);

export function Galeria() {
  return (
    <section id="galeria" aria-labelledby="galeria-titulo" className="seccion">
      <div className="wrap">
        <div className="grid gap-4 md:grid-cols-12 md:items-end md:gap-6">
          <h2 id="galeria-titulo" className="h2 text-bosque md:col-span-7">
            {galeria.titulo}
          </h2>
          <div className="md:col-span-5 md:text-right" style={{ ['--d' as string]: '80ms' }}>
            <p className="text-cafe-suave">
              <span className="tabular-nums">{n(negocio.publicaciones)}</span> {negocio.publicaciones === 1 ? 'publicación' : 'publicaciones'} ·{' '}
              <span className="tabular-nums">{n(negocio.seguidores)}</span> {negocio.seguidores === 1 ? 'seguidor' : 'seguidores'}
            </p>
            <a href={negocio.instagram} target="_blank" rel="noopener" className="btn btn-secundario mt-4">
              <Instagram /> Seguir a {negocio.instagramUsuario}
            </a>
          </div>
        </div>

        <ul className="mt-12 columns-2 gap-3 sm:gap-6 md:columns-3 lg:columns-4">
          {galeria.fotos.map((f) => (
            <li key={f.src} className="mb-3 break-inside-avoid sm:mb-6">
              <div className="marco marco-zoom">
                <Foto foto={f} grupo={galeria.fotos} sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 50vw" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
