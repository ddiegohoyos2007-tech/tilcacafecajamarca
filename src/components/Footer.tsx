import { footer, nav, negocio } from '../content';

export function Footer() {
  return (
    <footer className="sobre-bosque bg-bosque pb-[calc(96px+env(safe-area-inset-bottom))] pt-16 text-crema md:pb-12">
      <div className="wrap">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <img src="/marca/logo-crema.png" alt="Tilca Café" width={259} height={279} className="h-28 w-auto" />
            <p className="mt-4 font-display text-[1.375rem] italic text-oro-claro">{negocio.lema}</p>
          </div>
          <nav aria-label="Pie de página">
            <ul className="grid grid-cols-2 gap-x-10 sm:flex sm:gap-8">
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="enlace inline-flex min-h-[44px] items-center">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <address className="not-italic text-crema/90">
            <a href={negocio.mapa} target="_blank" rel="noopener" className="enlace">
              {negocio.direccion}
            </a>
            <br />
            {negocio.zona}
          </address>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-crema/15 pt-6 text-[0.9375rem] text-salvia md:flex-row md:justify-between">
          <p>{footer.derechos}</p>
          <a href={negocio.instagram} target="_blank" rel="noopener" className="enlace self-start">{negocio.instagramUsuario}</a>
        </div>
      </div>
    </footer>
  );
}
