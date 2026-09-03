import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

        {/* Logo + Descripción */}
        <div className="text-center mb-16">

          <img
            src="/logos/logot.png"
            alt="VEKCIA"
            className="h-24 w-auto mx-auto mb-6"
          />

          <p
            className="
              max-w-3xl
              mx-auto
              text-slate-400
              text-lg
              leading-8
            "
          >
            Analizamos cómo trabaja tu empresa y desarrollamos
            soluciones tecnológicas para mejorar procesos,
            reducir trabajo manual y hacer crecer tu operación.
          </p>

        </div>

        {/* Columnas */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">

          {/* Sobre VEKCIA */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              VEKCIA
            </h3>

            <p className="text-slate-400 leading-8">
              Tecnología enfocada en resolver necesidades reales.
              Desarrollamos sitios web, aplicaciones, plataformas
              empresariales, automatizaciones e integraciones
              adaptadas a cada empresa.
            </p>

          </div>

          {/* Navegación */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Navegación
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  href="#nosotros"
                  className="hover:text-white transition-colors"
                >
                  Nosotros
                </Link>
              </li>

              <li>
                <Link
                  href="#proceso"
                  className="hover:text-white transition-colors"
                >
                  Cómo trabajamos
                </Link>
              </li>

              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Soluciones
                </Link>
              </li>

              <li>
                <Link
                  href="#proyectos"
                  className="hover:text-white transition-colors"
                >
                  Proyectos
                </Link>
              </li>

              <li>
                <Link
                  href="#clientes"
                  className="hover:text-white transition-colors"
                >
                  Clientes
                </Link>
              </li>

              <li>
                <Link
                  href="#contacto"
                  className="hover:text-white transition-colors"
                >
                  Hablemos
                </Link>
              </li>

            </ul>

          </div>

          {/* Soluciones */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Soluciones
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  href="#servicio-1"
                  className="hover:text-white transition-colors"
                >
                  Desarrollo de Software
                </Link>
              </li>

              <li>
                <Link
                  href="#servicio-2"
                  className="hover:text-white transition-colors"
                >
                  Sitios Web y Presencia Digital
                </Link>
              </li>

              <li>
                <Link
                  href="#servicio-3"
                  className="hover:text-white transition-colors"
                >
                  Software Empresarial
                </Link>
              </li>

              <li>
                <Link
                  href="#servicio-4"
                  className="hover:text-white transition-colors"
                >
                  Automatización e Integración
                </Link>
              </li>

              <li>
                <Link
                  href="#contacto"
                  className="hover:text-white transition-colors"
                >
                  Solicitar propuesta
                </Link>
              </li>

            </ul>

          </div>

        </div>


        {/* Copyright */}
        <div
          className="
            border-t
            border-slate-800
            mt-10
            pt-8
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-3
              text-center
              md:text-left
            "
          >

            <p className="text-slate-500 text-sm">
              © 2026 VEKCIA. Todos los derechos reservados.
            </p>

            <p className="text-slate-600 text-sm">
              Tecnología para empresas.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}