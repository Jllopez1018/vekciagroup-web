import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Nosotros from '../components/Nosotros'
import Metas from '../components/Metas'
import Servicios from '../components/Servicios'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import AOSInit from '../components/AOSInit'
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <>
      <AOSInit />
      <Navbar />
      <Hero />
      <Nosotros />
      <Metas />
      <Servicios />
      <Partners />
      <Footer />
      <BackToTop />
    </>
  );
}
