/** Interruptor de desarrollo "Demo / Peor caso" (break-ui). Nunca se renderiza en producción. */
export function Interruptor() {
  if (!import.meta.env.DEV) return null;
  const peor = new URLSearchParams(location.search).get('datos') === 'peor';
  const ir = (v: boolean) => {
    const u = new URL(location.href);
    if (v) u.searchParams.set('datos', 'peor');
    else u.searchParams.delete('datos');
    location.href = u.toString();
  };
  const b = (on: boolean) =>
    `px-3 py-1.5 rounded-full text-[13px] ${on ? 'bg-white text-black shadow' : 'text-neutral-600'}`;
  return (
    <div className="fixed bottom-24 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full bg-neutral-200 p-1 font-[system-ui] md:bottom-4">
      <button className={b(!peor)} onClick={() => ir(false)}>Demo</button>
      <button className={b(peor)} onClick={() => ir(true)}>Peor caso</button>
    </div>
  );
}
