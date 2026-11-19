import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { aplicarPeor } from './lib/datosPeor';

if (import.meta.env.DEV && new URLSearchParams(location.search).get('datos') === 'peor') aplicarPeor();

// Scroll suave solo al pulsar un ancla (no al mover el foco con Tab), y nunca con reduced-motion.
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null;
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
  const id = a.getAttribute('href')!.slice(1);
  const el = id ? document.getElementById(id) : null;
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  history.pushState(null, '', `#${id}`);
  if (id === 'contenido') (el as HTMLElement).focus({ preventScroll: true });
});

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// En producción el HTML viene prerenderizado (scripts/prerender.mjs); en desarrollo se monta normal.
if (root.hasChildNodes() && root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
