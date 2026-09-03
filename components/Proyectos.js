import Image from "next/image";

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      numero: "01",
      categoria: "Sistema Empresarial",
      title: "CRM Seguros",
      description:
        "Sistema para llevar el control de pólizas, clientes, prospectos y tareas desde un solo lugar, facilitando la operación y el seguimiento comercial.",
      image: "/images/proyectos/crm-seguros.jpg",
      tags: [
        "Pólizas",
        "Clientes",
        "Prospectos",
        "Tareas",
      ],
    },

    {
      id: 2,
      numero: "02",
      categoria: "Rastreo GPS",
      title: "Tracking GPS",
      description:
        "Sistema para el rastreo de unidades. Si ya cuentas con dispositivos GPS, podemos conectar tu operación y crear una plataforma para monitorear tus unidades desde un solo lugar.",
      image: "/images/proyectos/tracking-gps.jpg",
      tags: [
        "Rastreo GPS",
        "Monitoreo",
        "Unidades",
        "Plataforma Web",
      ],
    },

    {
      id: 3,
      numero: "03",
      categoria: "Sistema ERP",
      title: "SideXC",
      description:
        "Sistema ERP para centralizar el control de inventarios, clientes, licitaciones y compras, ayudando a mantener la información de la operación organizada en una sola plataforma.",
      image: "/images/proyectos/sidexc.jpg",
      tags: [
        "Inventarios",
        "Clientes",
        "Licitaciones",
        "Compras",
      ],
    },

    {
      id: 4,
      numero: "04",
      categoria: "Agenda y Citas",
      title: "CITA",
      description:
        "Sistema de agenda y gestión de citas diseñado para consultorios, profesionales y negocios que necesitan organizar sus horarios, servicios y atención de clientes.",
      image: "/images/proyectos/cita.jpg",
      tags: [
        "Agenda",
        "Citas",
        "Consultorios",
        "Eventos",
      ],
    },
  ];

  return (
    <section
      id="proyectos"
      className="bg-white py-28 lg:py-36"
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
            Proyectos y Soluciones
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
            Tecnología aplicada a necesidades reales.
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
            Cada empresa tiene necesidades diferentes. Por eso
            desarrollamos soluciones que pueden adaptarse desde una
            presencia digital hasta plataformas y sistemas completos
            para la operación.
          </p>

        </div>

        {/* Proyectos */}
        <div className="space-y-28 lg:space-y-36">

          {proyectos.map((proyecto, index) => (
            <article
              key={proyecto.id}
              className="
                grid
                lg:grid-cols-[1.05fr_0.95fr]
                gap-12
                lg:gap-16
                items-center
              "
            >

              {/* Imagen */}
              <div
                className={
                  index % 2 !== 0
                    ? "lg:order-2"
                    : "lg:order-1"
                }
              >
                <div
                  className="
                    relative
                    h-[300px]
                    md:h-[420px]
                    lg:h-[500px]
                    rounded-[32px]
                    lg:rounded-[36px]
                    overflow-hidden
                    border
                    border-slate-200
                    shadow-xl
                    group
                    bg-slate-100
                  "
                >

                  <Image
                    src={proyecto.image}
                    alt={`${proyecto.title} - VEKCIA`}
                    fill
                    priority={index === 0}
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Overlay sutil */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-slate-950/40
                      via-transparent
                      to-transparent
                      pointer-events-none
                    "
                  />

                  {/* Número */}
                  <div
                    className="
                      absolute
                      top-6
                      left-6
                      lg:top-8
                      lg:left-8
                      flex
                      items-center
                      justify-center
                      w-14
                      h-14
                      rounded-full
                      bg-white/95
                      text-[var(--vekcia-bg)]
                      font-bold
                      shadow-lg
                    "
                  >
                    {proyecto.numero}
                  </div>

                </div>
              </div>

              {/* Contenido */}
              <div
                className={
                  index % 2 !== 0
                    ? "lg:order-1"
                    : "lg:order-2"
                }
              >

                <span
                  className="
                    inline-block
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    uppercase
                    text-[var(--vekcia-bg)]
                    mb-4
                  "
                >
                  {proyecto.categoria}
                </span>

                <h3
                  className="
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    font-black
                    tracking-tight
                    leading-[1.05]
                    text-slate-900
                    mb-6
                  "
                >
                  {proyecto.title}
                </h3>

                <div
                  className="
                    w-24
                    h-1
                    bg-[var(--vekcia-bg)]
                    rounded-full
                    mb-8
                  "
                />

                <p
                  className="
                    text-lg
                    lg:text-xl
                    text-slate-600
                    leading-8
                    lg:leading-9
                    mb-8
                  "
                >
                  {proyecto.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">

                  {proyecto.tags.map((tag) => (
                    <span
                      key={tag}
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
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Cierre */}
        <div
          className="
            mt-28
            lg:mt-36
            rounded-[32px]
            bg-[var(--vekcia-bg)]
            px-8
            py-14
            md:px-12
            lg:px-20
            text-center
            text-white
          "
        >

          <span
            className="
              text-xs
              font-bold
              tracking-[0.25em]
              uppercase
              text-white/70
            "
          >
            Tu próximo proyecto
          </span>

          <h3
            className="
              mt-5
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-black
              tracking-tight
            "
          >
            Cuéntanos qué necesitas mejorar.
          </h3>

          <p
            className="
              max-w-3xl
              mx-auto
              mt-5
              text-lg
              lg:text-xl
              leading-8
              text-white/80
            "
          >
            Podemos analizar tu proceso actual y proponerte una solución
            tecnológica de acuerdo con las necesidades reales de tu empresa.
          </p>

          <a
            href="#contacto"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              px-7
              py-3.5
              rounded-full
              bg-white
              text-[var(--vekcia-bg)]
              font-bold
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Hablemos

            <span className="text-xl">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}