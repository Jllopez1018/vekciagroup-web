"use client";

const clientes = [
  {
    nombre: "Auto Fletes Santa Rosa",
    logo: "/logos/partners/auto-fletes-santa-rosa.png",
    url: "https://autofletesantarosa.com/",
  },
  {
    nombre: "Agros Santa Rosa",
    logo: "/logos/partners/agro-santa-rosa.png",
    url: "https://agrosantarosa.com/",
  },
  {
    nombre: "Emblema Seguro",
    logo: "/logos/partners/emblema-seguros.png",
    url: "https://emblemaseguro.com/",
  },
];

export default function Clientes() {
  return (
    <section
      id="clientes"
      className="
        bg-white
        py-24
        lg:py-28
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >

        {/* Header */}
        <div className="text-center mb-16">

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
              bg-slate-100
              border
              border-slate-200
              text-slate-700
            "
          >
            Proyectos realizados
          </span>

          <h2
            className="
              mt-8
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
              text-slate-900
            "
          >
            Tecnología que ya está funcionando.
          </h2>

          <p
            className="
              mt-8
              text-xl
              text-slate-600
              max-w-4xl
              mx-auto
              leading-9
            "
          >
            Estos son algunos de los sitios web que hemos diseñado y
            desarrollado para empresas reales. Conoce cada proyecto
            visitando directamente su sitio.
          </p>

        </div>

        {/* Logos */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            items-stretch
          "
        >

          {clientes.map((cliente) => (
            <a
              key={cliente.nombre}
              href={cliente.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar sitio web de ${cliente.nombre}`}
              className="
                group
                flex
                items-center
                justify-center
                min-h-[180px]
                rounded-[28px]
                border
                border-slate-200
                bg-white
                px-10
                py-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-[var(--vekcia-bg)]/30
              "
            >

              <div
                className="
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                "
              >

                <img
                  src={cliente.logo}
                  alt={cliente.nombre}
                  className="
                    max-w-[220px]
                    max-h-[90px]
                    w-auto
                    h-auto
                    object-contain
                    grayscale
                    opacity-60
                    transition-all
                    duration-300
                    group-hover:grayscale-0
                    group-hover:opacity-100
                    group-hover:scale-105
                  "
                />

              </div>

            </a>
          ))}

        </div>

        {/* Indicador */}
        <div className="mt-10 text-center">

          <p
            className="
              text-sm
              font-medium
              text-slate-400
            "
          >
            Haz clic en un proyecto para visitar su sitio web
          </p>

        </div>

      </div>
    </section>
  );
}