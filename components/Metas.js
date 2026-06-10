import {
  Handshake,
  Building2,
  Network,
  TrendingUp,
} from "lucide-react";

export default function Metas() {
  const pilares = [
    {
      icon: Handshake,
      title: "Generación de Oportunidades",
      description:
        "Conectamos empresas, emprendedores y especialistas para impulsar nuevas oportunidades comerciales.",
    },
    {
      icon: Building2,
      title: "Alianzas Estratégicas",
      description:
        "Construimos relaciones de valor que fortalecen el crecimiento y la expansión de nuestros clientes.",
    },
    {
      icon: Network,
      title: "Innovación y Tecnología",
      description:
        "Integramos soluciones tecnológicas y automatización para acelerar resultados.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Empresarial",
      description:
        "Impulsamos la evolución de negocios mediante estrategias enfocadas en escalabilidad y rentabilidad.",
    },
  ];

  return (
    <section
      id="metas"
      className="relative overflow-hidden py-36 bg-slate-100"
      data-aos="fade-up"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[900px]
            bg-emerald-500/5
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-[600px]
            h-[600px]
            bg-cyan-500/5
            blur-[160px]
          "
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-5xl mb-24">

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
              mb-8
            "
          >
            Nuestros Pilares
          </span>

          <h2
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-slate-900
              leading-[1.05]
              mb-8
            "
          >
            Impulsamos el crecimiento a través de un ecosistema diseñado para generar valor.
          </h2>

          <p
            className="
              text-xl
              text-slate-600
              max-w-4xl
              leading-9
            "
          >
            Combinamos relaciones estratégicas, innovación y visión empresarial
            para crear oportunidades sostenibles de crecimiento para empresas,
            emprendedores y organizaciones.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {pilares.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  p-10
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]
                "
              >
                {/* Top Accent */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    from-emerald-500
                    via-green-500
                    to-transparent
                  "
                />

                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-slate-50
                    border
                    border-slate-200
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >
                  <Icon
                    className="
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                    size={24}
                    style={{
                      color: "var(--vekcia-bg)",
                    }}
                  />
                </div>

                {/* Content */}
                <h3
                  className="
                    text-3xl
                    font-bold
                    text-slate-900
                    mb-5
                    max-w-sm
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-slate-600
                    text-lg
                    leading-8
                  "
                >
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}