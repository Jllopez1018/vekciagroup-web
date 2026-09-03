import {
  Search,
  Lightbulb,
  Code2,
  TrendingUp,
} from "lucide-react";

export default function Proceso() {
  const pasos = [
    {
      number: "01",
      icon: Search,
      title: "Analizamos",
      description:
        "Conocemos cómo funciona actualmente tu empresa, entendemos tus necesidades e identificamos procesos que pueden mejorarse mediante tecnología.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Proponemos",
      description:
        "Convertimos las oportunidades detectadas en una propuesta tecnológica clara, buscando la solución adecuada para tu operación y tus objetivos.",
    },
    {
      number: "03",
      icon: Code2,
      title: "Desarrollamos",
      description:
        "Construimos la solución que necesita tu empresa, desde un sitio o plataforma hasta una aplicación, automatización, integración o sistema empresarial.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Implementamos y evolucionamos",
      description:
        "Ponemos la solución en operación y la hacemos evolucionar conforme cambian las necesidades y crece tu negocio.",
    },
  ];

  return (
    <section
      id="proceso"
      className="bg-white py-32 lg:py-40"
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
              bg-blue-50
              border
              border-[var(--vekcia-bg)]
              text-[var(--vekcia-bg)]
            "
          >
            Cómo trabajamos
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
              text-[#081221]
              max-w-5xl
            "
          >
            De un problema de negocio a una solución tecnológica.
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
            No necesitas llegar con una solución definida. Nosotros
            analizamos tu operación, identificamos oportunidades y
            construimos la tecnología necesaria para mejorarla.
          </p>

        </div>

        {/* Process */}
        <div className="relative">

          {/* Línea de conexión */}
          <div
            className="
              hidden
              lg:block
              absolute
              left-[12%]
              right-[12%]
              top-[44px]
              h-px
              bg-slate-200
            "
          />

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
              lg:gap-6
            "
          >

            {pasos.map((paso) => {
              const Icon = paso.icon;

              return (
                <div
                  key={paso.number}
                  className="
                    relative
                    group
                  "
                >

                  {/* Número / Icono */}
                  <div
                    className="
                      relative
                      z-10
                      w-[88px]
                      h-[88px]
                      rounded-full
                      bg-white
                      border
                      border-slate-200
                      shadow-lg
                      flex
                      items-center
                      justify-center
                      mx-auto
                      mb-8
                      transition-all
                      duration-300
                      group-hover:-translate-y-2
                      group-hover:border-[var(--vekcia-bg)]
                    "
                  >

                    <Icon
                      size={30}
                      strokeWidth={1.8}
                      className="
                        text-[var(--vekcia-bg)]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                  </div>

                  {/* Número */}
                  <div
                    className="
                      text-center
                      text-xs
                      font-bold
                      tracking-[0.2em]
                      text-[var(--vekcia-bg)]
                      mb-3
                    "
                  >
                    PASO {paso.number}
                  </div>

                  {/* Título */}
                  <h3
                    className="
                      text-center
                      text-2xl
                      lg:text-3xl
                      font-bold
                      text-slate-900
                      mb-4
                    "
                  >
                    {paso.title}
                  </h3>

                  {/* Descripción */}
                  <p
                    className="
                      text-center
                      text-slate-600
                      text-base
                      lg:text-lg
                      leading-7
                      max-w-sm
                      mx-auto
                    "
                  >
                    {paso.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* Cierre */}
        <div
          className="
            mt-24
            lg:mt-28
            text-center
          "
        >

          <p
            className="
              text-2xl
              lg:text-3xl
              font-semibold
              text-slate-900
              max-w-4xl
              mx-auto
              leading-relaxed
            "
          >
            La tecnología es el medio.
            <span className="text-[var(--vekcia-bg)]">
              {" "}El objetivo es hacer que tu empresa trabaje mejor.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}