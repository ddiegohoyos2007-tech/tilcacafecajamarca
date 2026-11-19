/**
 * Todos los textos y datos de la demo de Tilca Café.
 * Cambia aquí lo que el cliente apruebe; los componentes solo leen este archivo.
 *
 * Convención: `demo: true` (o el texto "[demo]") marca lo que NO viene de Tilca
 * y debe confirmarse antes de publicar. No hay precios inventados.
 */

export const DEMO = '[demo]';

const WA_NUMBER = '51997677331';

/** Enlace de WhatsApp con mensaje prellenado. */
export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const negocio = {
  nombre: 'Tilca Café',
  perfil: 'Especialidad & Derecho',
  lema: 'Legalmente delicioso',
  bio: 'Donde el café y la justicia se encuentran',
  direccion: 'Av. La Cantuta 1156',
  zona: 'Qhapaq Ñan, Cajamarca',
  telefonoVisible: '997 677 331',
  telefonoTel: '+51997677331',
  whatsappNumero: WA_NUMBER,
  correo: 'tilcacafe@gmail.com',
  instagram: 'https://www.instagram.com/tilcacafe/',
  instagramUsuario: '@tilcacafe',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Avenida+La+Cantuta+1156,+Qhapaq+%C3%91an,+Cajamarca,+Per%C3%BA',
  seguidores: 215,
  publicaciones: 91,
};

/** Horario tomado de la pieza "Tu jornada inicia con una sentencia". Confirmar con el cliente. */
export const horario = [
  { dias: 'Lunes a viernes', corto: 'Lun–Vie', abre: '7:30 a.m.', cierra: '7:30 p.m.' },
  { dias: 'Sábado', corto: 'Sáb', abre: '9:00 a.m.', cierra: '6:00 p.m.' },
  { dias: 'Domingo', corto: 'Dom', abre: '', cierra: '', nota: `Cerrado ${DEMO}` },
];

export const mensajes = {
  reservar: 'Hola Tilca Café, quisiera reservar una mesa. ¿Tienen disponibilidad?',
  carta: 'Hola Tilca Café, ¿me pueden enviar la carta completa con precios?',
  postular: 'Hola Tilca Café, quiero postular a la convocatoria de barista. Les envío mi CV.',
};

export const nav = [
  { id: 'carta', label: 'Carta' },
  { id: 'talleres', label: 'Talleres' },
  { id: 'reservas', label: 'Reservas' },
  { id: 'visitanos', label: 'Visítanos' },
];

export const hero = {
  etiqueta: 'Especialidad & Derecho · Cajamarca',
  titulo: 'Donde el café y la justicia se encuentran',
  bajada:
    'Café de especialidad con latte art, sándwiches y postres de la casa en Av. La Cantuta, Qhapaq Ñan.',
  ctaPrincipal: 'Reservar mesa',
  ctaSecundario: 'Ver carta',
};

export const franja = ['Legalmente delicioso', 'Café de especialidad', 'Cajamarca'];

export type Plato = { nombre: string; detalle?: string; demo?: boolean };
export type Categoria = {
  id: string;
  label: string;
  foto: Foto;
  intro: string;
  platos: Plato[];
};
export type Foto = { src: string; alt: string; w: number; h: number };

const foto = (src: string, alt: string, w: number, h: number): Foto => ({ src, alt, w, h });

export const fotos = {
  latteCorazon: foto('latte-corazon', 'Latte con arte en forma de corazón visto desde arriba, en taza blanca', 450, 374),
  latteManos: foto('latte-manos', 'Manos sosteniendo una taza de latte con arte de leche sobre su plato', 480, 374),
  granos: foto('granos', 'Granos de café tostado sobre una bandeja blanca, junto a una planta pequeña', 480, 362),
  queque: foto('queque', 'Tajada de queque casero con pasas sobre un plato de cerámica', 480, 444),
  jugos: foto('jugos', 'Jugo de fresa y jugo verde en vasos con el sello de Tilca, con fresas, arándanos y manzana', 480, 448),
  sandwichCerdo: foto('sandwich-cerdo', 'Sándwich de cerdo deshilachado con cebolla morada sobre hoja de lechuga en plato verde', 480, 440),
  tartaleta: foto('tartaleta-limon', 'Tartaletas de limón con merengue y rodaja de limón en bandeja de cerámica', 472, 450),
  jugosSandwich: foto('jugos-sandwich', 'Dos manos sostienen jugos de fresa y naranja sobre dos sándwiches en pan francés', 480, 440),
  tazaVerde: foto('taza-verde', 'Taza verde con latte y un sándwich de cerdo en pan francés sobre la mesa', 480, 476),
  barra: foto('barra', 'Dos baristas de Tilca con gorra y mandil detrás de la vitrina de postres', 480, 458),
  frappes: foto('frappes', 'Tres frappés decorados por Halloween con crema, telarañas y fantasmas', 480, 546),
  tallerTotebags: foto('taller-totebags', 'Madre e hija muestran las totebags que pintaron con Garfield y Oddie', 480, 542),
  tallerMariposa: foto('taller-mariposa', 'Participante sonriente muestra su pintura de una mariposa monarca', 480, 548),
  tallerFigura: foto('taller-figura', 'Participante muestra una maceta pintada a mano con forma de muñeca', 480, 548),
  mesaGrupo: foto('mesa-grupo', 'Grupo celebrando alrededor de una mesa larga dentro de Tilca Café', 280, 316),
  canasta: foto('canasta', 'Integrante del equipo sostiene una canasta de regalo con lazo celeste', 480, 280),
};

export const carta = {
  titulo: 'Café, jugos, sándwiches y postres',
  bajada: 'Todo lo que ves aquí sale de nuestra barra y nuestra cocina.',
  nota: `Precios por confirmar ${DEMO}. Pide la carta completa por WhatsApp.`,
  cta: 'Pedir la carta',
  categorias: [
    {
      id: 'cafe',
      label: 'Café',
      foto: fotos.latteManos,
      intro: 'Grano de especialidad, leche texturizada y arte en cada taza.',
      platos: [
        { nombre: 'Latte con arte', detalle: 'Espresso y leche texturizada, con corazón o roseta.' },
        { nombre: 'Capuchino', detalle: 'Más espuma, mismo cuidado.', demo: true },
        { nombre: 'Americano', detalle: 'Para empezar la jornada sin rodeos.', demo: true },
        { nombre: 'Frappé de temporada', detalle: 'Ediciones especiales, como la de Halloween.' },
      ],
    },
    {
      id: 'jugos',
      label: 'Jugos',
      foto: fotos.jugos,
      intro: 'Fruta natural, licuada al momento.',
      platos: [
        { nombre: 'Jugo de fresa', detalle: 'Fresa natural, color intenso.' },
        { nombre: 'Jugo de naranja', detalle: 'Naranja exprimida al pedido.' },
        { nombre: 'Jugo verde', detalle: 'Manzana verde y hierbabuena.' },
      ],
    },
    {
      id: 'salados',
      label: 'Salados',
      foto: fotos.sandwichCerdo,
      intro: 'Pan francés crocante y cerdo deshilachado de la casa.',
      platos: [
        { nombre: 'Sándwich de cerdo', detalle: 'Cerdo deshilachado, lechuga y cebolla en pan francés.' },
        { nombre: 'Sándwich de cerdo con criolla', detalle: 'En pan redondo con cebolla morada y lechuga.' },
        { nombre: 'Combo sándwich + jugo', detalle: 'Tu sándwich con un jugo natural.', demo: true },
      ],
    },
    {
      id: 'postres',
      label: 'Postres',
      foto: fotos.tartaleta,
      intro: 'Horneados en casa, para acompañar el café.',
      platos: [
        { nombre: 'Tartaleta de limón', detalle: 'Masa sablé, crema de limón y merengue.' },
        { nombre: 'Queque de la casa', detalle: 'Esponjoso, con pasas.' },
        { nombre: 'Queque Carnaval Cajamarquino', detalle: 'Edición de temporada por carnavales.' },
        { nombre: 'Tortas enteras', detalle: 'Por pedido, para tus celebraciones.', demo: true },
      ],
    },
  ] satisfies Categoria[],
};

export const fidelidad = {
  etiqueta: 'Sentencia del día',
  titulo: 'Caso cerrado: el sexto café es gratis',
  bajada:
    'Cada café de especialidad que pides suma una taza a tu tarjeta. Cuando llegas a la sexta, invita la casa.',
  pasos: ['Pide tu café en barra', 'Suma una taza por pedido', 'La sexta corre por nuestra cuenta'],
  nota: `Mecánica de la tarjeta por confirmar ${DEMO}`,
  veredicto: 'Veredicto: otra taza',
};

export type Taller = {
  id: string;
  titulo: string;
  tema: string;
  fecha: string;
  fechaCorta: { dia: string; mes: string };
  hora: string;
  costo: string;
  foto?: Foto;
  pasado?: boolean;
};

export const talleres = {
  titulo: 'Talleres de arte y bienestar',
  bajada:
    'Talleres para jóvenes y adultos los sábados por la tarde, con materiales incluidos y cupos limitados. Los dirige Karla Oblitas, arte y bienestar.',
  detalles: ['Jóvenes y adultos', '4:00 – 7:30 p.m.', 'S/ 40 por participante', 'Materiales incluidos'],
  proximo: {
    id: 'mafalda',
    titulo: 'Hazlo todo con amor',
    tema: 'Pinta tu gorra de Mafalda',
    fecha: 'Sábado 21 de noviembre',
    fechaCorta: { dia: '21', mes: 'nov' },
    hora: '4:00 – 7:30 p.m.',
    costo: 'S/ 40',
  } as Taller,
  anteriores: [
    {
      id: 'girasol',
      titulo: 'Flores con propósito',
      tema: 'Prensado de flores: “Quisiera vivir en un girasol”',
      fecha: 'Sábado 7 de noviembre',
      fechaCorta: { dia: '07', mes: 'nov' },
      hora: '4:00 – 7:30 p.m.',
      costo: 'S/ 40',
      pasado: true,
    },
    {
      id: 'catrinas',
      titulo: 'Fiesta de Catrinas',
      tema: 'Decora tu maceta Catrina, con brindis',
      fecha: 'Sábado 24 de octubre',
      fechaCorta: { dia: '24', mes: 'oct' },
      hora: '4:00 – 7:30 p.m.',
      costo: 'S/ 40',
      pasado: true,
    },
    {
      id: 'garfield',
      titulo: 'Amigos por siempre',
      tema: 'Pinta tu totebag de Garfield y Oddie',
      fecha: 'Sábado 10 de octubre',
      fechaCorta: { dia: '10', mes: 'oct' },
      hora: '4:00 – 7:30 p.m.',
      costo: 'S/ 40',
      foto: fotos.tallerTotebags,
      pasado: true,
    },
    {
      id: 'monarca',
      titulo: 'El despertar de la monarca',
      tema: 'Pintura de mariposa monarca',
      fecha: 'Sábado 25 de julio',
      fechaCorta: { dia: '25', mes: 'jul' },
      hora: '4:00 – 7:30 p.m.',
      costo: 'S/ 40',
      foto: fotos.tallerMariposa,
      pasado: true,
    },
  ] as Taller[],
  mensajeCupo: (t: Taller) =>
    `Hola Tilca Café, quiero separar un cupo para el taller “${t.titulo}” (${t.fecha}, ${t.hora}).`,
};

export const reservas = {
  titulo: 'Separa tu mesa para lo que importa',
  bajada:
    'Reuniones de trabajo, cumpleaños y fechas importantes. Cuéntanos qué celebras y te confirmamos por WhatsApp.',
  motivos: ['Reunión', 'Cumpleaños', 'Fecha importante', 'Otro'],
  boton: 'Enviar por WhatsApp',
  aviso: 'Se abrirá WhatsApp con tu mensaje listo. Nada se envía hasta que tú lo mandes.',
};

export const galeria = {
  titulo: 'Así se ve un día en Tilca',
  fotos: [fotos.tazaVerde, fotos.granos, fotos.frappes, fotos.queque, fotos.jugosSandwich, fotos.tallerFigura],
};

export const equipo = {
  titulo: 'Únete al equipo: buscamos barista',
  bajada: 'Si te apasiona el café y te gusta trabajar en equipo, queremos conocerte.',
  convocatoria: 'Convocatoria actual: postula hasta el 20 de noviembre.',
  requisitos: [
    'Conocimientos básicos de barismo y preparación de bebidas',
    'Pasión por el café y la atención al cliente',
    'Trabajo en equipo, responsabilidad y puntualidad',
    'Disponibilidad para turnos rotativos',
    'Ganas de aprender y seguir perfeccionándote',
  ],
  ofrecemos: ['Buen ambiente de trabajo', 'Capacitación constante', 'Oportunidad de crecimiento'],
  cta: 'Enviar mi CV por WhatsApp',
};

export const visita = {
  titulo: 'Visítanos',
  como: 'Cómo llegar',
};

export const footer = {
  aviso: 'Demo conceptual de propuesta web, no es el sitio oficial de Tilca Café.',
  creditos: 'Fotos: @tilcacafe en Instagram (recortes provisionales).',
};
