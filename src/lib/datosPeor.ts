/**
 * SOLO DESARROLLO (break-ui). Abre http://localhost:5173/?datos=peor para cargar el peor caso realista.
 * Se cambia el contenido en su frontera (content.ts) y no se toca el componente.
 */
import * as c from '../content';

export function aplicarPeor() {
  c.negocio.correo = 'reservas.eventos.corporativos@tilcacafe-cajamarca.com.pe';
  c.negocio.direccion = 'Av. La Cantuta 1156, Mz. B Lt. 12, 2.º piso';
  c.negocio.seguidores = 1;
  c.negocio.publicaciones = 12840;
  c.carta.categorias[0].platos[0].nombre =
    'Latte de especialidad con leche de almendras, doble shot y arte en roseta de temporada';
  c.carta.categorias[2].platos = [];
  c.talleres.proximo.titulo = 'Acuarela botánica: flores nativas de Cajamarca y del Qhapaq Ñan para principiantes';
  c.talleres.anteriores = c.talleres.anteriores.filter((t) => t.foto).slice(0, 1);
  c.equipo.requisitos[0] =
    'Conocimientos básicos de barismo, calibración de molino, extracción de espresso y texturizado de leche';
}
