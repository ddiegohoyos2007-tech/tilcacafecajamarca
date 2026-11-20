/**
 * Textos y datos de la página de Tilca Café.
 * Fuente: carta oficial de noviembre de 2026 (CARTA_TILCA_NOV_2026), fotos del cliente y su Instagram.
 * Cambia aquí lo que el cliente actualice; los componentes solo leen este archivo.
 */

const WA_NUMBER = '51997677331';

/** Enlace de WhatsApp con mensaje prellenado. */
export const waLink = (message: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const negocio = {
  nombre: 'Tilca Café',
  lema: 'Legalmente delicioso',
  bio: 'Donde el café y la justicia se encuentran',
  cierre: 'Todo pedido tiene efecto de cosa juzgada…',
  direccion: 'Av. La Cantuta 1156',
  zona: 'Qhapaq Ñan, Cajamarca',
  telefonoVisible: '997 677 331',
  telefonoTel: '+51997677331',
  correo: 'tilcacafe@gmail.com',
  instagram: 'https://www.instagram.com/tilcacafe/',
  instagramUsuario: '@tilcacafe',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Avenida+La+Cantuta+1156,+Qhapaq+%C3%91an,+Cajamarca,+Per%C3%BA',
  seguidores: 215,
  publicaciones: 91,
};

/** Horario de la pieza "Tu jornada inicia con una sentencia". Confirmar si cambia. */
export const horario = [
  { dias: 'Lunes a viernes', corto: 'Lun–Vie', abre: '7:30 a.m.', cierra: '7:30 p.m.' },
  { dias: 'Sábado', corto: 'Sáb', abre: '9:00 a.m.', cierra: '6:00 p.m.' },
];

export const mensajes = {
  reservar: 'Hola Tilca Café, quisiera reservar una mesa. ¿Tienen disponibilidad?',
  pedido: 'Hola Tilca Café, quisiera hacer un pedido:',
  postres: 'Hola Tilca Café, ¿qué postres tienen disponibles hoy?',
  postular: 'Hola Tilca Café, quiero postular a la convocatoria de barista. Les envío mi CV.',
};

export const nav = [
  { id: 'carta', label: 'Carta' },
  { id: 'talleres', label: 'Talleres' },
  { id: 'reservas', label: 'Reservas' },
  { id: 'visitanos', label: 'Visítanos' },
];

export type Foto = { src: string; alt: string; w: number; h: number };
const foto = (src: string, alt: string, w = 1066, h = 1600): Foto => ({ src, alt, w, h });

export const fotos = {
  hero: foto('hero-latte-queque', 'Latte con arte en taza verde junto a una tajada de queque, con plantas al fondo'),
  latteCorazon: foto('latte-corazon', 'Latte con corazón de leche en taza de cerámica moteada', 1200, 1600),
  espresso: foto('espresso-extraccion', 'Espresso cayendo desde la máquina a una taza pequeña de cerámica'),
  jugos: foto('jugos-tres', 'Jugos de fresa, verde y naranja con el sello de Tilca, junto a fruta fresca'),
  bebidaServida: foto('bebida-servida', 'Bebida caliente servida desde una jarrita en taza blanca sobre la mesa'),
  sandwich: foto('sandwich-chicharron', 'Pan con chicharrón, camote y salsa de cebolla sobre plato verde, con un jugo al fondo'),
  waffles: foto('waffles-frutas', 'Waffles con mango, arándanos, fresas y crema batida'),
  molino: foto('molino', 'Café recién molido cayendo al portafiltro desde el molino'),
  portafiltro: foto('portafiltro', 'Barista coloca el portafiltro en la máquina de espresso'),
  arteLatte: foto('arte-latte', 'Barista vierte leche texturizada y dibuja arte en la taza'),
  latteListo: foto('latte-listo', 'Latte terminado con roseta en taza de cerámica, en manos del barista'),
  vaporizador: foto('vaporizador', 'Vapor saliendo de la máquina de espresso en la barra de Tilca'),
  mesaCompartir: foto('mesa-compartir', 'Mesa vista desde arriba con waffles, queque, cheesecake, tamal y pan con pollo para compartir', 1600, 1475),
  clienteSandwich: foto('cliente-sandwich', 'Clienta sonriente con un sándwich y una bebida caliente en la mesa'),
  pieLimon: foto('pie-limon', 'Pie de limón con merengue y rodaja de limón en bandeja de cerámica'),
  queque: foto('queque-frutos', 'Queque de frutos secos cortado sobre tabla de madera'),
  panPolloCafe: foto('pan-pollo-cafe', 'Pan con pollo en pan francés junto a un latte en taza verde'),
  jugosSandwiches: foto('jugos-sandwiches', 'Manos sostienen jugos de fresa y naranja sobre dos sándwiches de la casa'),
  cheesecake: foto('cheesecake', 'Tajada de cheesecake de maracuyá con crema y cereza'),
  ensalada: foto('ensalada-frutas', 'Ensalada de frutas en bowl junto a una servilleta con el logo de Tilca', 1600, 1200),
  carrotCake: foto('carrot-cake', 'Tajada de carrot cake con cobertura de queso crema'),
  clienteTerraza: foto('cliente-terraza', 'Clienta disfruta un café junto a las plantas del salón'),
  salon: foto('salon', 'Salón de Tilca Café con lámparas de mimbre y el letrero luminoso al fondo', 1200, 1600),
  tallerTotebags: foto('taller-garfield-familia', 'Madre e hija muestran las totebags que pintaron con Garfield y Oddie', 1179, 1400),
  tallerGarfieldNina: foto('taller-garfield-nina', 'Niña sonriente muestra su totebag pintada con Garfield y Oddie', 1160, 1295),
  tallerMariposa: foto('taller-mariposa', 'Participante sonriente muestra su pintura de una mariposa monarca', 480, 548),
};

export const hero = {
  etiqueta: 'Especialidad & Derecho · Cajamarca',
  titulo: 'Donde el café y la justicia se encuentran',
  bajada: 'Café cajamarquino de especialidad, sándwiches de la casa y postres en Av. La Cantuta, Qhapaq Ñan. Espresso desde S/ 6.',
  ctaPrincipal: 'Reservar mesa',
  ctaSecundario: 'Ver la carta',
};

export const franja = ['Legalmente delicioso', 'Café cajamarquino de especialidad', 'Qhapaq Ñan, Cajamarca'];

/* ---------- Carta (noviembre 2026) ---------- */

export type Plato = { caso: string; nombre: string; detalle?: string; precio: number };
export type Grupo = { titulo: string; nota?: string; platos: Plato[] };
export type Categoria = { id: string; label: string; foto: Foto; grupos: Grupo[]; nota?: string };

const p = (caso: string, nombre: string, precio: number, detalle?: string): Plato => ({ caso, nombre, precio, detalle });

export const carta = {
  titulo: 'La carta: cafés, sándwiches y postres',
  bajada: 'Cada plato tiene su caso. Precios en soles, vigentes desde noviembre de 2026.',
  cta: 'Pedir por WhatsApp',
  categorias: [
    {
      id: 'cafes',
      label: 'Cafés',
      foto: fotos.latteCorazon,
      grupos: [
        {
          titulo: 'Cafés',
          platos: [
            p('Efecto cosa juzgada', 'Café pasado', 6, 'Café pasado preparado de forma tradicional.'),
            p('En estricto derecho', 'Espresso', 6, 'Café cajamarquino de especialidad.'),
            p('Amparo dulce', 'Chocolate caliente', 6, 'Preparado con cacao en polvo y leche vaporizada.'),
            p('Sentencia firme', 'Americano', 7, 'Un espresso doble que se diluye con agua caliente.'),
            p('Justo equilibrio', 'Capuccino', 11, 'Espresso doble con leche vaporizada y espuma marcada, en proporción equilibrada.'),
            p('Armonía legal', 'Latte', 11, 'Espresso doble con más leche vaporizada y mínima espuma, de perfil más lácteo.'),
            p('Cláusula suave', 'Vainilla latte', 12, 'Espresso doble con leche vaporizada y jarabe de vainilla.'),
            p('Dulce veredicto', 'Mocaccino', 12, 'Espresso doble con leche vaporizada y fudge de chocolate.'),
          ],
        },
      ],
    },
    {
      id: 'frappes',
      label: 'Frappés',
      foto: fotos.espresso,
      grupos: [
        {
          titulo: 'Frappés con café',
          platos: [
            p('Caso cerrado', 'Frappé de café', 10, 'Leche, espresso, azúcar y hielo, coronado con crema batida.'),
            p('Dulce fundamento', 'Frappé de manjar blanco', 12, 'Leche, espresso, manjar blanco, azúcar y hielo, con crema batida.'),
            p('Prueba irrefutable', 'Frappé de mocca', 12, 'Leche, espresso, fudge de chocolate, azúcar y hielo, con crema batida.'),
            p('Prueba admitida', 'Frappé de Oreo', 12, 'Leche, espresso, galletas Oreo, azúcar y hielo, con crema batida.'),
            p('Argumento nutritivo', 'Frappé de frutos secos', 13, 'Leche, espresso, almendras, maní, azúcar y hielo, con crema batida.'),
            p('Amparo refrescante', 'Frappé de chocomenta', 13, 'Leche, espresso, fudge de chocolate, menta, azúcar y hielo, con crema batida.'),
          ],
        },
      ],
    },
    {
      id: 'jugos',
      label: 'Jugos y batidos',
      foto: fotos.jugos,
      grupos: [
        {
          titulo: 'Jugos',
          platos: [
            p('Digestivo de buena fe', 'Jugo de papaya', 7),
            p('Refresco con criterio', 'Jugo de piña', 7),
            p('Rojo consenso', 'Jugo de fresa', 8),
            p('Acuerdo de frutas', 'Jugo surtido', 9, 'Fresa, piña y papaya.'),
            p('Fallo tropical', 'Fruit punch', 10, 'Plátano, fresa y papaya.'),
            p('Depuración natural', 'Jugo detox', 10, 'Manzana verde, piña, kiwi, espinaca, kion y limón.'),
          ],
        },
        {
          titulo: 'Batidos',
          platos: [
            p('Base sólida', 'Batido de plátano', 10),
            p('Presunción de dulzura', 'Batido de fresa', 11),
            p('Principio de placer', 'Batido de mango', 11),
            p('Doctrina andina', 'Batido de lúcuma', 11),
          ],
        },
      ],
    },
    {
      id: 'infusiones',
      label: 'Infusiones',
      foto: fotos.bebidaServida,
      grupos: [
        {
          titulo: 'Infusiones naturales',
          platos: [
            p('Resolución digestiva', 'Infusión digestiva', 6, 'Hierba luisa, cedrón, muña y naranja.'),
            p('Efecto refrescante', 'Infusión refrescante', 6, 'Jamaica, fresa, manzana, higo, canela y airampo.'),
            p('Estado de calma', 'Infusión relajante', 6, 'Piña, cedrón y hierba luisa.'),
          ],
        },
      ],
    },
    {
      id: 'sandwiches',
      label: 'Sándwiches',
      foto: fotos.sandwich,
      grupos: [
        {
          titulo: 'Sándwiches',
          platos: [
            p('Campesino de oficio', 'Pan campesino', 5, 'Pan torta con huevo revuelto y tocino.'),
            p('Caso pollo simple', 'Pan con pollo', 6, 'Pan francés con pollo deshilachado y el punto justo de mayonesa.'),
            p('Queso en estado de fusión', 'Pan con queso', 6, 'Pan torta cajamarquino con queso fundido a la plancha y orégano.'),
            p('Caprese con jurisprudencia italiana', 'Sándwich caprese', 6, 'Pan torta cajamarquino con queso suizo, albahaca, tomate y aceite de oliva.'),
            p('Salchicha huachana al estilo Tilca', 'Salchicha huachana', 6, 'Pan ciabatta con salchicha huachana y huevo revuelto.'),
            p('Pollo con medida cautelar', 'Pan con pollo y palta', 8, 'Pan francés con pollo deshilachado y palta fresca. Mayonesa opcional.'),
            p('Chorizo en ejecución inmediata', 'Pan con chorizo', 9, 'Pan ciabatta con chorizo dorado a la plancha.'),
            p('Pavo en pleno juicio', 'Sándwich de pavo', 10, 'Pan francés con pavo al horno, lechuga y salsa criolla.'),
            p('Sentencia crujiente', 'Pan con chicharrón', 10, 'Chicharrón de cerdo cajamarquino con camote y salsa de cebolla.'),
          ],
        },
        {
          titulo: 'Triples de la casa',
          nota: 'Casos deliciosos que merecen ser resueltos.',
          platos: [
            p('Triple de ley', 'Jamón, pollo y queso', 8),
            p('Triple veredicto', 'Pollo, tomate y palta', 8),
            p('Triple caso especial', 'Pollo con pecanas, durazno y jamón', 9),
          ],
        },
        {
          titulo: 'Típicos',
          platos: [
            p('Al punto de ley', 'Tamal cajamarquino', 5, 'Con salsa criolla y ají.'),
            p('La de costumbre', 'Humita cajamarquina', 5, 'Con salsa criolla y ají.'),
          ],
        },
      ],
    },
    {
      id: 'postres',
      label: 'Postres y waffles',
      foto: fotos.waffles,
      nota: 'Consulta a nuestro equipo por los postres disponibles para hoy.',
      grupos: [
        {
          titulo: 'Postres',
          platos: [
            p('Prueba contundente', 'Queque de frutos secos', 5),
            p('Alegato limón', 'Pie de limón', 8.5),
            p('Dulce argumento', 'Torta de chocolate', 10),
            p('Acuerdo de temporada', 'Cheesecake de frutos de estación', 10),
            p('Veredicto de zanahoria', 'Carrot cake', 10),
          ],
        },
        {
          titulo: 'Waffles clásicos Tilca',
          platos: [
            p('Doble instancia', '2 waffles', 9, 'Con frutas de estación, crema y miel.'),
            p('Última instancia', '4 waffles', 15, 'Con frutas de estación, crema y miel.'),
          ],
        },
        {
          titulo: 'Ensalada de frutas',
          platos: [p('Fallo tropical', 'Mixtura de frutas', 9)],
        },
      ],
    },
  ] as Categoria[],
};

export const precio = (n: number) => `S/ ${n.toFixed(2)}`;

export const oficio = {
  titulo: 'Café cajamarquino, preparado frente a ti',
  bajada:
    'Molemos el grano al pedido, extraemos cada espresso doble y texturizamos la leche a mano. El arte en la taza es la firma del barista.',
  fotos: [fotos.molino, fotos.portafiltro, fotos.arteLatte, fotos.latteListo],
};

export const fidelidad = {
  etiqueta: 'Sentencia del día',
  titulo: 'Caso cerrado: el sexto café es gratis',
  bajada: 'Cada café que pides suma una taza. Cuando llegas a la sexta, invita la casa.',
  pasos: ['Pide tu café en barra', 'Suma una taza por pedido', 'La sexta corre por nuestra cuenta'],
  nota: 'Pregunta en barra cómo empezar a sumar.',
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
    { id: 'girasol', titulo: 'Flores con propósito', tema: 'Prensado de flores: “Quisiera vivir en un girasol”', fecha: 'Sábado 7 de noviembre', fechaCorta: { dia: '07', mes: 'nov' }, hora: '4:00 – 7:30 p.m.', costo: 'S/ 40' },
    { id: 'catrinas', titulo: 'Fiesta de Catrinas', tema: 'Decora tu maceta Catrina, con brindis', fecha: 'Sábado 24 de octubre', fechaCorta: { dia: '24', mes: 'oct' }, hora: '4:00 – 7:30 p.m.', costo: 'S/ 40' },
    { id: 'garfield', titulo: 'Amigos por siempre', tema: 'Pinta tu totebag de Garfield y Oddie', fecha: 'Sábado 10 de octubre', fechaCorta: { dia: '10', mes: 'oct' }, hora: '4:00 – 7:30 p.m.', costo: 'S/ 40', foto: fotos.tallerTotebags },
    { id: 'monarca', titulo: 'El despertar de la monarca', tema: 'Pintura de mariposa monarca', fecha: 'Sábado 25 de julio', fechaCorta: { dia: '25', mes: 'jul' }, hora: '4:00 – 7:30 p.m.', costo: 'S/ 40', foto: fotos.tallerMariposa },
  ] as Taller[],
  mensajeCupo: (t: Taller) => `Hola Tilca Café, quiero separar un cupo para el taller “${t.titulo}” (${t.fecha}, ${t.hora}).`,
};

export const reservas = {
  titulo: 'Separa tu mesa para lo que importa',
  bajada: 'Reuniones de trabajo, cumpleaños y fechas importantes. Cuéntanos qué celebras y te confirmamos por WhatsApp.',
  motivos: ['Reunión', 'Cumpleaños', 'Fecha importante', 'Otro'],
  boton: 'Enviar por WhatsApp',
  aviso: 'Se abrirá WhatsApp con tu mensaje listo. Nada se envía hasta que tú lo mandes.',
};

export const galeria = {
  titulo: 'Así se ve un día en Tilca',
  fotos: [
    fotos.pieLimon,
    fotos.panPolloCafe,
    fotos.cheesecake,
    fotos.queque,
    fotos.jugosSandwiches,
    fotos.carrotCake,
    fotos.tallerGarfieldNina,
    fotos.clienteTerraza,
  ],
};

export const equipo = {
  titulo: 'Únete al equipo: buscamos barista',
  bajada: 'Si te apasiona el café y te gusta trabajar en equipo, queremos conocerte.',
  convocatoria: 'Convocatoria abierta. Envía tu CV por WhatsApp o correo.',
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

export const visita = { titulo: 'Visítanos', como: 'Cómo llegar' };

export const footer = {
  derechos: `© ${new Date().getFullYear()} Tilca Café. Cajamarca, Perú.`,
};
