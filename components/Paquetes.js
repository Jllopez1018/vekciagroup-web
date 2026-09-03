export default function Paquetes() {
  const paquetes = [
    {
      id: 1,
      nombre: "Presencia Digital",
      descripcion:
        "Todo lo necesario para que tu empresa tenga una presencia profesional en internet.",
      precio: "$4,000",
      periodo: "desarrollo inicial",
      destacado: false,
      servicios: [
        "Sitio web profesional",
        "Diseño responsive",
        "Hosting profesional",
        "Configuración del dominio",
        "Correo empresarial",
        "Certificado SSL",
      ],
    },

    {
      id: 2,
      nombre: "Desarrollo a la Medida",
      descripcion:
        "Soluciones tecnológicas diseñadas específicamente para los procesos y necesidades de tu empresa.",
      precio: "A medida",
      periodo: "según proyecto",
      destacado: true,
      servicios: [
        "Análisis de requerimientos",
        "Diseño de la solución",
        "Desarrollo de software",
        "Bases de datos",
        "APIs e integraciones",
        "Implementación",
      ],
    },

    {
      id: 3,
      nombre: "Solución Empresarial",
      descripcion:
        "Tecnología para empresas que necesitan mejorar procesos, automatizar operaciones e integrar información.",
      precio: "Cotización",
      periodo: "personalizada",
      destacado: false,
      servicios: [
        "Análisis de procesos",
        "Automatización",
        "Integración de sistemas",
        "Dashboards y reportes",
        "Software empresarial",
        "Evolución de la solución",
      ],
    },
  ];

  return (
    <section
      id="paquetes"
      className="bg-slate-100 py-28 lg:py-36"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-5xl mx-auto text-center">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              tracking-[0.2em]
              uppercase
              bg-white
              border
              border-[var(--vekcia-bg)]
              text-[var(--vekcia-bg)]
            "
          >
            Paquetes y Servicios
          </span>

          <h2
            className="
              mt-8
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              tracking-tight
              leading-[1.02]
              text-slate-900
            "
          >
            Comienza con lo que tu empresa necesita.
          </h2>

          <div
            className="
              w-24
              h-1
              bg-[var(--vekcia-bg)]
              rounded-full
              mx-auto
              mt-8
              mb-8
            "
          />

          <p
            className="
              max-w-4xl
              mx-auto
              text-xl
              lg:text-2xl
              leading-9
              text-slate-600
            "
          >
            Desde una presencia digital profesional hasta soluciones
            tecnológicas diseñadas para transformar la operación de tu
            empresa.
          </p>

        </div>

        {/* Paquetes */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-8
            mt-20
          "
        >

          {paquetes.map((paquete) => (
            <div
              key={paquete.id}
              className={`
                relative
                flex
                flex-col
                rounded-[32px]
                p-8
                lg:p-10
                border
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl

                ${
                  paquete.destacado
                    ? `
                      bg-[var(--vekcia-bg)]
                      border-[var(--vekcia-bg)]
                      text-white
                    `
                    : `
                      bg-white
                      border-slate-200
                      text-slate-900
                    `
                }
              `}
            >

            {/* Etiqueta */}
            {paquete.destacado && (
            <div className="flex justify-end mb-4">
                <div
                className="
                    inline-flex
                    items-center
                    px-3
                    py-1.5
                    rounded-full
                    bg-white/15
                    border
                    border-white/20
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    whitespace-nowrap
                "
                >
                Recomendado
                </div>
            </div>
            )}
            
              {/* Nombre */}
              <h3
                className={`
                  text-3xl
                  font-black
                  tracking-tight
                  ${
                    paquete.destacado
                      ? "text-white"
                      : "text-slate-900"
                  }
                `}
              >
                {paquete.nombre}
              </h3>

              {/* Descripción */}
              <p
                className={`
                  mt-5
                  text-base
                  leading-7
                  ${
                    paquete.destacado
                      ? "text-white/75"
                      : "text-slate-600"
                  }
                `}
              >
                {paquete.descripcion}
              </p>

              {/* Precio */}
              <div className="mt-8">

                <div
                  className={`
                    text-4xl
                    lg:text-5xl
                    font-black
                    ${
                      paquete.destacado
                        ? "text-white"
                        : "text-[var(--vekcia-bg)]"
                    }
                  `}
                >
                  {paquete.precio}
                </div>

                <div
                  className={`
                    mt-1
                    text-sm
                    ${
                      paquete.destacado
                        ? "text-white/60"
                        : "text-slate-500"
                    }
                  `}
                >
                  {paquete.periodo}
                </div>

              </div>

              {/* Separador */}
              <div
                className={`
                  h-px
                  my-8
                  ${
                    paquete.destacado
                      ? "bg-white/15"
                      : "bg-slate-200"
                  }
                `}
              />

              {/* Servicios */}
              <ul className="space-y-4 flex-1">

                {paquete.servicios.map((servicio) => (
                  <li
                    key={servicio}
                    className="flex items-start gap-3"
                  >

                    <span
                      className={`
                        mt-1
                        flex
                        items-center
                        justify-center
                        w-5
                        h-5
                        rounded-full
                        shrink-0
                        text-xs
                        font-bold
                        ${
                          paquete.destacado
                            ? "bg-white text-[var(--vekcia-bg)]"
                            : "bg-blue-50 text-[var(--vekcia-bg)]"
                        }
                      `}
                    >
                      ✓
                    </span>

                    <span
                      className={`
                        text-sm
                        leading-6
                        ${
                          paquete.destacado
                            ? "text-white/85"
                            : "text-slate-600"
                        }
                      `}
                    >
                      {servicio}
                    </span>

                  </li>
                ))}

              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className={`
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  mt-10
                  px-6
                  py-3.5
                  rounded-full
                  font-bold
                  transition-all
                  duration-300
                  ${
                    paquete.destacado
                      ? `
                        bg-white
                        text-[var(--vekcia-bg)]
                        hover:bg-slate-100
                      `
                      : `
                        bg-[var(--vekcia-bg)]
                        text-white
                        hover:opacity-90
                      `
                  }
                `}
              >
                Solicitar información

                <span className="text-lg">
                  →
                </span>
              </a>

            </div>
          ))}

        </div>

        {/* Servicios adicionales */}
        <div
          className="
            mt-16
            rounded-[28px]
            bg-white
            border
            border-slate-200
            p-8
            md:p-10
          "
        >

          <div
            className="
              grid
              md:grid-cols-[1fr_auto]
              gap-8
              items-center
            "
          >

            <div>

              <h3
                className="
                  text-2xl
                  lg:text-3xl
                  font-bold
                  text-slate-900
                "
              >
                Servicios adicionales
              </h3>

              <p
                className="
                  mt-3
                  text-slate-600
                  leading-7
                "
              >
                También contamos con servicios de hosting, dominios y
                correo empresarial para complementar tu solución digital.
              </p>

            </div>

            <div
              className="
                flex
                flex-wrap
                gap-3
              "
            >

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-slate-50
                  border
                  border-slate-200
                  text-sm
                  font-medium
                  text-slate-700
                "
              >
                Hosting · $1,800
              </span>

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-slate-50
                  border
                  border-slate-200
                  text-sm
                  font-medium
                  text-slate-700
                "
              >
                Dominio · Según proveedor
              </span>

              <span
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-slate-50
                  border
                  border-slate-200
                  text-sm
                  font-medium
                  text-slate-700
                "
              >
                Correo · Desde 1 GB
              </span>

            </div>

          </div>

        </div>

        {/* Nota comercial */}
        <p
          className="
            mt-8
            text-center
            text-sm
            text-slate-500
          "
        >
          Los proyectos de desarrollo y soluciones empresariales se
          cotizan de acuerdo con el alcance y las necesidades de cada
          empresa.
        </p>

      </div>
    </section>
  );
}