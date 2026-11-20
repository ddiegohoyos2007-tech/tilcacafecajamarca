import { fotos, horario, negocio, visita, waLink, mensajes } from '../content';
import { Foto } from './Foto';
import { Flecha, Instagram, Pin, Telefono, WhatsApp } from './Iconos';

export function Visita() {
  return (
    <section id="visitanos" aria-labelledby="visita-titulo" className="seccion" data-place="visit">
      <div className="wrap">
        <div>
          <h2 id="visita-titulo" className="h2 text-bosque">
            {visita.titulo}
          </h2>
          <p className="mt-6" style={{ ['--d' as string]: '80ms' }}>
            <a
              href={negocio.mapa}
              target="_blank"
              rel="noopener"
              className="enlace font-display text-bosque [overflow-wrap:anywhere]"
              style={{ fontSize: 'clamp(2.5rem, 1.4rem + 5vw, 6rem)', lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 400 }}
            >
              {negocio.direccion}
            </a>
          </p>
          <p className="mt-3 font-display text-[1.5rem] italic text-cafe md:text-[1.875rem]" style={{ ['--d' as string]: '120ms' }}>
            {negocio.zona}
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-4">
            <h3 className="font-sans text-[1rem] font-semibold uppercase tracking-[0.14em] text-cafe-suave">Horario</h3>
            <dl className="mt-4 text-[1.1875rem]">
              {horario.map((h) => (
                <div key={h.dias} className="flex items-baseline justify-between gap-4 border-b border-cafe/15 py-3">
                  <dt className="font-medium">{h.dias}</dt>
                  <dd className="tabular-nums text-cafe">
                    {h.abre} – {h.cierra}
                  </dd>
                </div>
              ))}
            </dl>
            <a href={negocio.mapa} target="_blank" rel="noopener" className="btn btn-primario mt-8 w-full sm:w-auto">
              <Pin /> {visita.como} <Flecha />
            </a>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-sans text-[1rem] font-semibold uppercase tracking-[0.14em] text-cafe-suave">Contacto</h3>
            <ul className="mt-4 text-[1.1875rem]">
              <li className="border-b border-cafe/15">
                <a href={waLink(mensajes.reservar)} target="_blank" rel="noopener" className="flex min-h-[60px] items-center gap-3">
                  <WhatsApp className="text-bosque" /> <span className="enlace">WhatsApp {negocio.telefonoVisible}</span>
                </a>
              </li>
              <li className="border-b border-cafe/15">
                <a href={`tel:${negocio.telefonoTel}`} className="flex min-h-[60px] items-center gap-3">
                  <Telefono className="text-bosque" /> <span className="enlace">Llamar al {negocio.telefonoVisible}</span>
                </a>
              </li>
              <li className="border-b border-cafe/15">
                <a href={negocio.instagram} target="_blank" rel="noopener" className="flex min-h-[60px] items-center gap-3">
                  <Instagram className="text-bosque" /> <span className="enlace">{negocio.instagramUsuario}</span>
                </a>
              </li>
              <li className="border-b border-cafe/15">
                <a href={`mailto:${negocio.correo}`} className="flex min-h-[60px] items-center gap-3 break-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-bosque">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                  <span className="enlace">{negocio.correo}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="marco aspect-[4/5] md:col-span-4">
            <Foto foto={fotos.salon} sizes="(min-width: 768px) 32vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
