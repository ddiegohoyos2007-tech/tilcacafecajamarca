# Tilca Café: sitio web

Página de **Tilca Café** (Av. La Cantuta 1156, Qhapaq Ñan, Cajamarca), con la carta de noviembre de 2026, fotos del cliente y su logo.

Stack: Vite + React 18 + Tailwind 3 + Motion. Página única, prerenderizada a HTML estático (SEO, LCP y lectura sin JS).

## Correr y desplegar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ (tsc + build + prerender)
npm run preview    # sirve dist/
```

- **Netlify:** conecta el repo; `netlify.toml` ya define `npm run build` y `dist`.
- **Vercel:** importa el repo; `vercel.json` ya define build y salida.

Prueba de datos extremos (solo en desarrollo): `http://localhost:5173/?datos=peor`, con el interruptor *Demo / Peor caso* abajo al centro.

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Textos, horario, carta, talleres, requisitos, enlaces de WhatsApp | `src/content.ts` |
| Colores y tipografías | `tailwind.config.js`, `src/index.css` (`:root`) |
| Fotos (AVIF + WebP, 640 y 1280 px) | `public/img/` |
| Logo, taza y motivo floral | `public/marca/` |
| SEO, Open Graph y schema.org `CafeOrCoffeeShop` | `index.html` |

Para actualizar precios, edita `carta` en `src/content.ts`: cada plato tiene `caso` (nombre jurídico), `nombre`, `detalle` y `precio`.
