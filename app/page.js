import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Nosotros from '../components/Nosotros'
import Problema from '../components/Problema'
import Proceso from '../components/Proceso'
import Servicios from '../components/Servicios'
import Paquetes from '../components/Paquetes'
import Proyectos from '../components/Proyectos'
import Tecnologia from '../components/Tecnologia'
import Contacto from '../components/Contacto'
import Clientes from '../components/Clientes'
import Footer from '../components/Footer'
import AOSInit from '../components/AOSInit'
import BackToTop from '../components/BackToTop'

export default function Home() {
  return (
    <>
      <AOSInit />
      <Navbar />
      <Hero />
      <Nosotros />
      <Problema />
      <Proceso />
      <Servicios />
      <Paquetes />
      <Proyectos />
      <Tecnologia />
      <Contacto />
      <Clientes />
      <Footer />
      <BackToTop />
    </>
  )
}