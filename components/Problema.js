export default function Problema() {
  const problemas = [
    {
      number: "01",
      title: "Demasiado trabajo manual",
      description:
        "Tareas repetitivas que consumen tiempo y que podrían realizarse de forma más rápida mediante tecnología.",
    },
    {
      number: "02",
      title: "Información dispersa",
      description:
        "Datos distribuidos entre archivos de Excel, correos, documentos y diferentes herramientas que dificultan el control de la operación.",
    },
    {
      number: "03",
      title: "Procesos que dependen de personas",
      description:
        "Operaciones que requieren capturas, revisiones o seguimientos manuales y que pueden detenerse cuando alguien no está disponible.",
    },
    {
      number: "04",
      title: "Sistemas que no se comunican",
      description:
        "Información que debe capturarse nuevamente porque las herramientas que utiliza la empresa no están integradas entre sí.",
    },
  ];

  return (
    <section
      id="problema"
      className="relative overflow-hidden bg-slate-100 py-32 lg:py-40"
      data-aos="fade-up"
    >

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            top-0
            right-0
            w-[600px]
            h-[600px]
            rounded-full
            bg-blue-500/5
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/5
            blur-[140px]
          "
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-5xl mb-20">

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
              border-slate-200
              text-[var(--vekcia-bg)]
              mb-8
            "
          >
            Identificamos oportunidades
          </span>

          <h2
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              tracking-tight
              leading-[1.02]
              text-[#081221]
            "
          >
            ¿Tu empresa todavía depende de Excel o procesos manuales?
          </h2>

          <div
            className="
              w-24
              h-1
              bg-[var(--vekcia-bg)]
              rounded-full
              mt-8
              mb-8
            "
          />

          <p
            className="
              max-w-4xl
              text-xl
              lg:text-2xl
              leading-9
              text-slate-600
            "
          >
            Muchas empresas comienzan utilizando herramientas sencillas para
            administrar su operación. El problema aparece cuando el negocio
            crece y esos procesos empiezan a consumir tiempo, generar errores
            y dificultar el control de la información.
          </p>

        </div>

        {/* Problems */}
        <div className="grid md:grid-cols-2 gap-6">

          {problemas.map((problema) => (
            <div
              key={problema.number}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                bg-white
                border
                border-slate-200
                p-8
                lg:p-10
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* Number */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-2xl
                  bg-slate-50
                  border
                  border-slate-200
                  text-sm
                  font-bold
                  text-[var(--vekcia-bg)]
                  mb-7
                  transition-all
                  duration-300
                  group-hover:bg-[var(--vekcia-bg)]
                  group-hover:text-white
                "
              >
                {problema.number}
              </div>

              <h3
                className="
                  text-2xl
                  lg:text-3xl
                  font-bold
                  text-slate-900
                  mb-4
                "
              >
                {problema.title}
              </h3>

              <p
                className="
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                {problema.description}
              </p>

            </div>
          ))}

        </div>

        {/* Solution */}
        <div
          className="
            mt-20
            lg:mt-24
            rounded-[32px]
            bg-[var(--vekcia-bg)]
            p-8
            md:p-12
            lg:p-16
            text-white
            shadow-xl
          "
        >

          <div
            className="
              grid
              lg:grid-cols-[1.2fr_0.8fr]
              gap-10
              lg:gap-16
              items-center
            "
          >

            {/* Text */}
            <div>

              <span
                className="
                  text-sm
                  font-semibold
                  tracking-[0.25em]
                  uppercase
                  text-white/70
                "
              >
                La tecnología debe adaptarse a tu negocio
              </span>

              <h3
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-black
                  leading-[1.05]
                "
              >
                Nosotros analizamos el proceso y diseñamos la solución.
              </h3>

              <p
                className="
                  mt-7
                  text-lg
                  lg:text-xl
                  leading-8
                  text-white/80
                  max-w-3xl
                "
              >
                Analizamos cómo trabaja actualmente tu empresa, identificamos
                qué puede mejorarse y realizamos una propuesta tecnológica
                enfocada en reducir procesos manuales, mejorar el control de
                la información y hacer más eficiente la operación.
              </p>

            </div>

            {/* Solution Types */}
            <div
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
            "
            >

              <div
                className="
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/10
                  p-6
                "
              >
                <div className="text-2xl mb-3">
                  Web
                </div>

                <p className="text-sm leading-6 text-white/70">
                  Sitios y plataformas digitales para tu negocio.
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/10
                  p-6
                "
              >
                <div className="text-2xl mb-3">
                  Apps
                </div>

                <p className="text-sm leading-6 text-white/70">
                  Aplicaciones adaptadas a las necesidades de tu operación.
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/10
                  p-6
                "
              >
                <div className="text-2xl mb-3">
                  Automatización
                </div>

                <p className="text-sm leading-6 text-white/70">
                  Menos tareas repetitivas y mayor eficiencia.
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/10
                  p-6
                "
              >
                <div className="text-2xl mb-3">
                  Integración
                </div>

                <p className="text-sm leading-6 text-white/70">
                  Conectamos sistemas e información para trabajar mejor.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}