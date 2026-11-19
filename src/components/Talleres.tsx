import { talleres, waLink, type Taller } from '../content';
import { Foto } from './Foto';
import { WhatsApp } from './Iconos';

function TallerFoto({ t }: { t: Taller }) {
  if (!t.foto) return null;
  return (
    <a href={waLink(`Hola Tilca Café, ¿habrá otra edición del taller “${t.titulo}”?`)} target="_blank" rel="noopener" className="group block">
      <div className="marco marco-zoom aspect-[4/5]">
        <Foto foto={t.foto} sizes="(min-width: 768px) 28vw, 50vw" />
      </div>
      <p className="mt-3 text-[1rem] text-cafe-suave">
        {t.fechaCorta.dia} {t.fechaCorta.mes}
      </p>
      <h4 className="font-display text-[1.25rem] leading-tight text-bosque">
        <span className="enlace">{t.titulo}</span>
      </h4>
    </a>
  );
}

export function Talleres() {
  const p = talleres.proximo;
  const conFoto = talleres.anteriores.filter((t) => t.foto);
  const sinFoto = talleres.anteriores.filter((t) => !t.foto);

  return (
    <section id="talleres" aria-labelledby="talleres-titulo" className="seccion">
      <div className="wrap">
        <div className="grid gap-4 md:grid-cols-12 md:items-end md:gap-6">
          <h2 id="talleres-titulo" className="h2 text-bosque md:col-span-6">
            {talleres.titulo}
          </h2>
          <p className="max-w-texto text-cafe md:col-span-6" style={{ ['--d' as string]: '80ms' }}>
            {talleres.bajada}
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-6">
          {/* Próximo taller */}
          <article aria-labelledby="taller-proximo" className="flex flex-col self-start border-t-[3px] border-oro bg-crema-2 p-6 sm:p-10 md:col-span-5">
            <p className="etiqueta text-oro-texto">Próximo taller</p>
            <div className="mt-6 flex items-end gap-4">
              <span className="font-display text-[2.5rem] leading-[0.85] md:text-[3.25rem] text-bosque tabular-nums">{p.fechaCorta.dia}</span>
              <span className="pb-1 font-display text-[1.75rem] italic leading-none text-bosque">{p.fechaCorta.mes}</span>
            </div>
            <h3 id="taller-proximo" className="mt-6 text-[var(--t-h3)] leading-tight text-bosque [overflow-wrap:anywhere]">
              “{p.titulo}”
            </h3>
            <p className="mt-1 text-cafe">{p.tema}</p>
            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-[1.0625rem]">
              <dt className="text-cafe-suave">Fecha</dt>
              <dd className="font-medium">{p.fecha}</dd>
              <dt className="text-cafe-suave">Hora</dt>
              <dd className="font-medium tabular-nums">{p.hora}</dd>
              <dt className="text-cafe-suave">Costo</dt>
              <dd className="font-medium">{p.costo} por participante</dd>
              <dt className="text-cafe-suave">Cupos</dt>
              <dd className="font-medium">Limitados</dd>
            </dl>
            <a href={waLink(talleres.mensajeCupo(p))} target="_blank" rel="noopener" className="btn btn-primario mt-8 w-full sm:w-auto sm:self-start">
              <WhatsApp /> Separar mi cupo
            </a>
          </article>

          {/* Talleres anteriores */}
          <div className="md:col-span-6 md:col-start-7">
            {talleres.anteriores.length > 0 && (
              <h3 className="font-sans text-[1rem] font-semibold uppercase tracking-[0.14em] text-cafe-suave">Talleres anteriores</h3>
            )}
            <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-6">
              {conFoto.map((t) => (
                <TallerFoto key={t.id} t={t} />
              ))}
            </div>
            <ul className={`mt-8 border-t border-cafe/15 ${sinFoto.length ? '' : 'hidden'}`}>
              {sinFoto.map((t) => (
                <li key={t.id} className="flex items-baseline justify-between gap-4 border-b border-cafe/15 py-4">
                  <div className="min-w-0">
                    <h4 className="font-display text-[1.25rem] leading-tight text-bosque">{t.titulo}</h4>
                    <p className="mt-0.5 text-cafe-suave">{t.tema}</p>
                  </div>
                  <span className="shrink-0 text-[1rem] tabular-nums text-cafe-suave">
                    {t.fechaCorta.dia} {t.fechaCorta.mes}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-[1rem] text-cafe-suave">
              {talleres.detalles.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-oro" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
