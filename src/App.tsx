import { BarraMovil, Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Carta } from './components/Carta';
import { Oficio } from './components/Oficio';
import { Fidelidad } from './components/Fidelidad';
import { Talleres } from './components/Talleres';
import { Reservas } from './components/Reservas';
import { Galeria } from './components/Galeria';
import { Equipo } from './components/Equipo';
import { Visita } from './components/Visita';
import { Footer } from './components/Footer';
import { Interruptor } from './components/Interruptor';

export default function App() {
  return (
    <>
      <Nav />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero />
        <Carta />
        <Oficio />
        <Fidelidad />
        <Talleres />
        <Reservas />
        <Galeria />
        <Equipo />
        <Visita />
      </main>
      <Footer />
      <BarraMovil />
      <Interruptor />
    </>
  );
}
