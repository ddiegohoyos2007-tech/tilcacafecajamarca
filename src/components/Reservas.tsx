import { useId, useState, type FormEvent } from 'react';
import { fotos, reservas, waLink } from '../content';
import { Foto } from './Foto';
import { WhatsApp } from './Iconos';

type Campos = { nombre: string; motivo: string; fecha: string; hora: string; personas: string; nota: string };
type Errores = Partial<Record<keyof Campos, string>>;

const vacio: Campos = { nombre: '', motivo: reservas.motivos[0], fecha: '', hora: '', personas: '', nota: '' };

function validar(c: Campos): Errores {
  const e: Errores = {};
  if (!c.nombre.trim()) e.nombre = 'Escribe tu nombre para saber a quién confirmar.';
  if (!c.fecha.trim()) e.fecha = 'Indica el día (por ejemplo, sábado 28).';
  const n = Number(c.personas);
  if (!c.personas.trim()) e.personas = 'Indica cuántas personas vienen.';
  else if (!Number.isInteger(n) || n < 1) e.personas = 'Usa un número entero desde 1.';
  else if (n > 60) e.personas = 'Para más de 60 personas escríbenos directamente.';
  return e;
}

export function mensajeReserva(c: Campos) {
  const lineas = [
    'Hola Tilca Café, quisiera reservar una mesa.',
    `• Nombre: ${c.nombre.trim()}`,
    `• Motivo: ${c.motivo}`,
    `• Día: ${c.fecha.trim()}`,
    c.hora.trim() && `• Hora: ${c.hora.trim()}`,
    `• Personas: ${c.personas.trim()}`,
    c.nota.trim() && `• Nota: ${c.nota.trim()}`,
  ].filter(Boolean);
  return lineas.join('\n');
}

const campo =
  'mt-2 block min-h-[52px] w-full rounded-md border border-cafe/25 bg-crema px-4 text-[16px] text-cafe placeholder:text-cafe-suave/80 transition-[border-color,box-shadow] duration-150 focus:border-bosque focus:outline-none focus:ring-2 focus:ring-bosque/25 aria-[invalid=true]:border-[#9B2C1F]';

export function Reservas() {
  const [c, setC] = useState<Campos>(vacio);
  const [err, setErr] = useState<Errores>({});
  const id = useId();

  const set = (k: keyof Campos) => (e: { target: { value: string } }) => {
    setC((v) => ({ ...v, [k]: e.target.value }));
    if (err[k]) setErr((x) => ({ ...x, [k]: undefined }));
  };

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const errores = validar(c);
    setErr(errores);
    const primero = Object.keys(errores)[0];
    if (primero) {
      document.getElementById(`${id}-${primero}`)?.focus();
      return;
    }
    window.open(waLink(mensajeReserva(c)), '_blank', 'noopener');
  };

  const error = (k: keyof Campos) =>
    err[k] ? (
      <p id={`${id}-${k}-error`} className="mt-1.5 text-[0.9375rem] font-medium text-[#9B2C1F]">
        {err[k]}
      </p>
    ) : null;

  const aria = (k: keyof Campos) => ({
    id: `${id}-${k}`,
    'aria-invalid': err[k] ? true : undefined,
    'aria-describedby': err[k] ? `${id}-${k}-error` : undefined,
  });

  return (
    <section id="reservas" aria-labelledby="reservas-titulo" className="sobre-bosque seccion bg-bosque text-crema">
      <div className="wrap grid gap-12 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-6">
          <div>
            <p className="etiqueta text-oro-claro">Reuniones y celebraciones</p>
            <h2 id="reservas-titulo" className="h2 mt-4" style={{ ['--d' as string]: '40ms' }}>
              {reservas.titulo}
            </h2>
            <p className="lead mt-5 text-crema/90" style={{ ['--d' as string]: '100ms' }}>
              {reservas.bajada}
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6">
            <div className="marco marco-zoom aspect-[4/5]">
              <Foto foto={fotos.mesaCompartir} grupo={[fotos.mesaCompartir, fotos.clienteSandwich]} sizes="(min-width: 768px) 22vw, 45vw" />
            </div>
            <div className="marco marco-zoom aspect-[4/5]">
              <Foto foto={fotos.clienteSandwich} grupo={[fotos.mesaCompartir, fotos.clienteSandwich]} sizes="(min-width: 768px) 22vw, 45vw" />
            </div>
          </div>
        </div>

        <form noValidate onSubmit={enviar} className="sobre-crema rounded-md bg-crema p-6 text-cafe sm:p-10 md:col-span-6" aria-labelledby="reservas-titulo">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor={`${id}-nombre`} className="font-semibold">
                Nombre
              </label>
              <input {...aria('nombre')} className={campo} type="text" autoComplete="name" enterKeyHint="next" value={c.nombre} onChange={set('nombre')} />
              {error('nombre')}
            </div>

            <fieldset className="sm:col-span-2">
              <legend className="font-semibold">Motivo</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {reservas.motivos.map((m) => (
                  <label key={m} className="relative">
                    <input type="radio" name="motivo" value={m} checked={c.motivo === m} onChange={set('motivo')} className="peer sr-only" />
                    <span className="inline-flex min-h-[44px] cursor-pointer select-none items-center rounded-full border border-cafe/25 px-4 text-[1rem] font-medium transition-[background-color,color,transform] duration-150 active:scale-[0.97] peer-checked:border-bosque peer-checked:bg-bosque peer-checked:text-crema peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-oro-texto">
                      {m}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor={`${id}-fecha`} className="font-semibold">
                Día
              </label>
              <input {...aria('fecha')} className={campo} type="text" placeholder="Ej.: sábado 28" value={c.fecha} onChange={set('fecha')} />
              {error('fecha')}
            </div>
            <div>
              <label htmlFor={`${id}-hora`} className="font-semibold">
                Hora <span className="font-normal text-cafe-suave">(opcional)</span>
              </label>
              <input {...aria('hora')} className={campo} type="text" placeholder="Ej.: 5:00 p.m." value={c.hora} onChange={set('hora')} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={`${id}-personas`} className="font-semibold">
                Personas
              </label>
              <input
                {...aria('personas')}
                className={`${campo} sm:max-w-[200px]`}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={c.personas}
                onChange={set('personas')}
              />
              {error('personas')}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={`${id}-nota`} className="font-semibold">
                ¿Algo que debamos saber? <span className="font-normal text-cafe-suave">(opcional)</span>
              </label>
              <textarea
                id={`${id}-nota`}
                className={`${campo} min-h-[104px] py-3`}
                rows={3}
                placeholder="Torta, decoración, mesa para trabajar…"
                value={c.nota}
                onChange={set('nota')}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primario mt-8 w-full sm:w-auto">
            <WhatsApp /> {reservas.boton}
          </button>
          <p className="mt-3 text-[0.9375rem] text-cafe-suave">{reservas.aviso}</p>
        </form>
      </div>
    </section>
  );
}
