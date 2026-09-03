export default function Tecnologias() {
  const grupos = [
    {
      titulo: "Web / Frontend",
      tecnologias: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "ASP.NET Core MVC 8",
      ],
    },
    {
      titulo: "Backend / APIs",
      tecnologias: [
        ".NET 8",
        "C#",
        "REST API",
      ],
    },
    {
      titulo: "Datos",
      tecnologias: [
        "SQL Server",
        "PostgreSQL",
        "Entity Framework Core",
      ],
    },
    {
      titulo: "Aplicaciones",
      tecnologias: [
        ".NET MAUI",
        "Android",
        "iOS",
        "Windows",
      ],
    },
    {
      titulo: "Infraestructura",
      tecnologias: [
        "Azure",
        "Docker",
        "Linux",
        "GitHub",
      ],
    },
    {
      titulo: "Impresión y documentos",
      tecnologias: [
        "Impresiones",
        "Etiquetas ZPL",
        "Códigos de barras",
        "PDF",
      ],
    },
  ];

  return (
    <section
      id="tecnologias"
      className="bg-slate-50 py-28 lg:py-36"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

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
              border-[var(--vekcia-bg)]
              text-[var(--vekcia-bg)]
            "
          >
            Tecnología
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
            Herramientas para construir
            <br className="hidden md:block" />
            soluciones que evolucionan.
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
            Utilizamos diferentes tecnologías de acuerdo con las
            necesidades de cada proyecto, buscando soluciones
            estables, escalables y adecuadas para la operación.
          </p>

        </div>

        {/* Tecnologías */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {grupos.map((grupo, index) => (
            <div
              key={grupo.titulo}
              className="
                bg-white
                rounded-[28px]
                border
                border-slate-200
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              {/* Número */}
              <div className="mb-8">

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-11
                    h-11
                    rounded-full
                    bg-[var(--vekcia-bg)]
                    text-white
                    text-sm
                    font-bold
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              {/* Título */}
              <h3
                className="
                  text-2xl
                  font-black
                  text-slate-900
                  mb-6
                "
              >
                {grupo.titulo}
              </h3>

              {/* Tecnologías */}
              <div className="space-y-3">

                {grupo.tecnologias.map((tecnologia) => (
                  <div
                    key={tecnologia}
                    className="
                      flex
                      items-center
                      gap-3
                      py-3
                      px-4
                      rounded-xl
                      bg-slate-50
                      border
                      border-slate-100
                      text-slate-700
                      font-medium
                    "
                  >

                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-[var(--vekcia-bg)]
                        flex-shrink-0
                      "
                    />

                    {tecnologia}

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Cierre */}
        <div
          className="
            mt-16
            lg:mt-20
            text-center
          "
        >

          <p
            className="
              text-lg
              lg:text-xl
              font-semibold
              text-slate-700
            "
          >
            La tecnología se elige de acuerdo con el problema,
            <span className="text-[var(--vekcia-bg)]">
              {" "}no al revés.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}