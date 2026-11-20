import { oficio } from '../content';
import { Foto } from './Foto';

export function Oficio() {
  return (
    <section id="nuestro-cafe" aria-labelledby="oficio-titulo" className="seccion bg-crema-2 md:flex md:min-h-[100svh] md:flex-col md:justify-center">
      <div className="wrap">
        <div className="grid gap-4 md:grid-cols-12 md:items-end md:gap-6">
          <h2 id="oficio-titulo" className="h2 text-bosque md:col-span-6">
            {oficio.titulo}
          </h2>
          <p className="lead text-cafe md:col-span-5 md:col-start-8">{oficio.bajada}</p>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {oficio.fotos.map((f) => (
            <li key={f.src} className="marco marco-zoom aspect-[3/4] lg:aspect-[2/3]">
              <Foto foto={f} grupo={oficio.fotos} sizes="(min-width: 768px) 24vw, 50vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
