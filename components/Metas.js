import {
  Lightbulb,
  Code2,
  Building2,
  Rocket,
} from "lucide-react";

export default function Metas() {
  const pilares = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Innovación Tecnológica",
      description:
        "Aplicamos tecnología e innovación para optimizar procesos, reducir tiempos operativos y generar ventajas competitivas para nuestros clientes.",
    },
    {
      number: "02",
      icon: Code2,
      title: "Software a la Medida",
      description:
        "Creamos soluciones de software adaptadas a la operación de cada empresa, integrando procesos, datos y necesidades específicas del negocio.",
    },
    {
      number: "03",
      icon: Building2,
      title: "Soluciones Empresariales",
      description:
        "Implementamos sistemas empresariales para CRM, inventarios, logística, seguimiento de operaciones y gestión de clientes.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Compromiso y Evolución",
      description:
        "Construimos relaciones de largo plazo mediante soporte continuo, mejora constante y tecnología preparada para crecer junto a tu empresa.",
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
            bg-blue-500/5
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
              bg-blue-50
              border
              border-[var(--vekcia-bg)]
              mb-8
            "
            style={{
              color: "var(--vekcia-bg)",
            }}
          >
            Nuestra Propuesta de Valor
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
            Transformamos desafíos empresariales en soluciones tecnológicas.
          </h2>

          <p
            className="
              text-xl
              text-slate-600
              max-w-4xl
              leading-9
            "
          >
            Ayudamos a empresas a optimizar procesos,
mejorar la productividad y acelerar su
transformación digital mediante software,
plataformas empresariales, sitios web y
soluciones tecnológicas diseñadas para generar
resultados reales.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {pilares.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
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
                    from-[var(--vekcia-bg)]
                    via-darkblue-500
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