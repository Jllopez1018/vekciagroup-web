import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo + Descripción */}
        <div className="text-center mb-16">

          <img
            src="/logos/logot.png"
            alt="VEKCIA"
            className="h-30 mx-auto mb-1"
          />

          <p
            className="
              text-slate-400
              leading-8
              max-w-3xl
              mx-auto
            "
          >
            VEKCIA Group integra empresas especializadas que colaboran para generar
            valor, fortalecer operaciones y crear nuevas oportunidades de crecimiento
            para clientes, aliados estratégicos y proyectos empresariales.
          </p>

        </div>

        {/* Links */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Sobre VEKCIA */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              VEKCIA Group
            </h3>

            <p className="text-slate-400 leading-8">
            Somos un grupo empresarial enfocado en impulsar soluciones integrales
            mediante tecnología, seguridad, monitoreo y servicios especializados,
            promoviendo la colaboración entre empresas para generar crecimiento
            sostenible y nuevas oportunidades de negocio.
            </p>
          </div>

          {/* Servicios */}
         {/* Servicios */}

            <div>
            <h3 className="text-xl font-bold mb-6">
                Áreas de Negocio
            </h3>

            <ul className="space-y-4 text-slate-400">

                <li>
                <Link
                    href="#servicios"
                    className="hover:text-white transition-colors"
                >
                    Tecnología y Desarrollo de Software
                </Link>
                </li>

                <li>
                <Link
                    href="#servicios"
                    className="hover:text-white transition-colors"
                >
                    Rastreo Satelital y Monitoreo GPS
                </Link>
                </li>

                <li>
                <Link
                    href="#servicios"
                    className="hover:text-white transition-colors"
                >
                    Seguros y Protección Patrimonial
                </Link>
                </li>

                <li>
                <Link
                    href="#servicios"
                    className="hover:text-white transition-colors"
                >
                    Consultoría Empresarial
                </Link>
                </li>

                <li>
                <Link
                    href="#servicios"
                    className="hover:text-white transition-colors"
                >
                    Proyectos Estratégicos y Alianzas
                </Link>
                </li>

            </ul>
            </div>

          {/* Empresas del Grupo */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Empresas del Grupo
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  href="https://tracking.vekcia.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  VEKCIA GPS
                </Link>
              </li>

              <li>
                <Link
                  href="https://tech.vekcia.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  VEKCIA Technologies
                </Link>
              </li>

              <li>
                <Link
                  href="https://seguros.vekcia.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  VEKCIA Seguros
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-slate-500 text-sm text-center">
            © 2026 VEKCIA Seguros. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}