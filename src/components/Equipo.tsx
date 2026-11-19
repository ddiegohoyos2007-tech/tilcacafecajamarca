import { equipo, fotos, mensajes, negocio, waLink } from '../content';
import { Foto } from './Foto';
import { Correo, WhatsApp } from './Iconos';

export function Equipo() {
  return (
    <section id="equipo" aria-labelledby="equipo-titulo" className="sobre-bosque seccion bg-bosque text-crema">
      <div className="wrap grid gap-12 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <div>
            <p className="etiqueta text-oro-claro">Trabaja con nosotros</p>
            <h2 id="equipo-titulo" className="h2 mt-4" style={{ ['--d' as string]: '40ms' }}>
              {equipo.titulo}
            </h2>
            <p className="lead mt-5 text-crema/90" style={{ ['--d' as string]: '100ms' }}>
              {equipo.bajada}
            </p>
          </div>
          <p className="mt-6 text-[1.125rem] font-medium text-oro-claro">{equipo.convocatoria}</p>
          <h3 className="mt-8 font-sans text-[1rem] font-semibold uppercase tracking-[0.14em] text-salvia">Requisitos</h3>
          <ul className="mt-3 grid gap-2.5">
            {equipo.requisitos.map((r) => (
              <li key={r} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rotate-45 bg-oro" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:col-span-6 md:col-start-7">
          <div className="marco aspect-[4/3]">
            <Foto foto={fotos.barra} sizes="(min-width: 768px) 45vw, 100vw" />
          </div>
          <h3 className="mt-8 font-sans text-[1rem] font-semibold uppercase tracking-[0.14em] text-salvia">Ofrecemos</h3>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {equipo.ofrecemos.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 lg:flex-row">
            <a href={waLink(mensajes.postular)} target="_blank" rel="noopener" className="btn btn-primario">
              <WhatsApp /> {equipo.cta}
            </a>
            <a href={`mailto:${negocio.correo}?subject=${encodeURIComponent('Postulación barista')}`} className="btn btn-secundario">
              <Correo /> <span className="min-w-0 break-all">{negocio.correo}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
