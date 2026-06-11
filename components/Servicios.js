import Image from "next/image";

export default function Servicios() {
  const servicios = [
    {
      id: 1,
      numero: "01",
      image: "/images/servicios/seguros.jpg",
      title: "Seguros Empresariales y Patrimoniales",
      description:
        "Protegemos personas, vehículos, flotillas y empresas mediante soluciones diseñadas para minimizar riesgos y garantizar continuidad operativa. Trabajamos con las principales aseguradoras del mercado para ofrecer alternativas competitivas y acompañamiento especializado.",
      bullets: [
        "Autos",
        "Flotillas",
        "Transporte de carga",
        "Responsabilidad Civil",
        "Gastos Médicos",
      ],
      url: "https://seguros.vekcia.com",
      active: true
    },
    {
      id: 2,
      numero: "02",
      image: "/images/servicios/gps.png",
      title: "GPS y Telemetría",
      description:
        "Monitoreo inteligente para vehículos y flotillas con herramientas que permiten optimizar operaciones, incrementar la seguridad y tomar decisiones basadas en datos en tiempo real.",
      bullets: [
        "Rastreo GPS",
        "Geocercas",
        "Alertas",
        "Monitoreo 24/7",
        "Telemetría"        
      ],
      url: "https://tracking.vekcia.com",
      active: false
    },
    {
      id: 3,
      numero: "03",
      image: "/images/servicios/tech.jpg",
      title: "Tecnología y Desarrollo",
      description:
        "Diseñamos soluciones tecnológicas a la medida para empresas que buscan automatizar procesos, mejorar el control operativo y acelerar su crecimiento mediante herramientas digitales.",
      bullets: [
        "CRM para pólizas",
        "Desarrollo Web",
        "Automatización",
        "Integraciones API",
        "Dashboards",
        "Landing Pages",
      ],
      url: "https://tech.vekcia.com",
      active: true
    },
  
  ];

  return (
    <section
      id="servicios"
      className="bg-white py-28"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-5xl mb-12">

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
            Nuestros Servicios
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
            Soluciones diseñadas para impulsar y proteger tu crecimiento.
          </h2>

          <p
            className="
              text-xl
              text-slate-600
              leading-9
              max-w-4xl
            "
          >
            Integramos protección, monitoreo y tecnología dentro de un
            ecosistema empresarial que ayuda a nuestros clientes a operar
            con mayor seguridad, eficiencia y escalabilidad.
          </p>

        </div>

        {/* Servicios */}
        <div className="space-y-28">

          {servicios.filter(service => service.active).map((servicio, index) => (
            <div
              key={servicio.id}
              className="
                grid
                lg:grid-cols-[1.15fr_0.85fr]
                gap-16
                items-center
              "
            >

              {/* Imagen */}
              {/* Imagen */}
                <div
                className={`
                    ${index % 2 !== 0 ? "lg:order-2" : ""}
                `}
                >
                <div
                    className="
                    relative
                    h-[550px]
                    rounded-[36px]
                    overflow-hidden
                    shadow-xl
                    border
                    border-slate-200
                    group
                    "
                >

                    <Image
                    src={servicio.image}
                    alt={servicio.title}
                    fill
                    className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                    "
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Overlay suave */}
                    <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-900/20
                        via-transparent
                        to-transparent
                    "
                    />

                   

                </div>
                </div>

              {/* Contenido */}
              <div
                className={`
                  ${index % 2 !== 0 ? "lg:order-1" : ""}
                `}
              >
                
                <h3
                  className="
                    text-4xl
                    lg:text-5xl
                    font-bold
                    text-slate-900
                    mt-4
                    mb-6
                    leading-tight
                  "
                >
                  {servicio.title}
                </h3>
<div
  className="
    w-24
    h-1
    bg-[var(--vekcia-bg)]
    rounded-full
    my-6
  "
/>
                <p
                  className="
                    text-xl
                    text-slate-600
                    leading-9
                    mb-10
                  "
                >
                  {servicio.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">

                  {servicio.bullets.map((item) => (
                    <span
                      key={item}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        text-slate-700
                        text-sm
                        font-medium
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <a
                  href= {servicio.url}
                  className="
                    inline-flex
                    items-center
                    px-6
                    py-3
                    rounded-full
                    bg-slate-900
                    text-white
                    font-semibold
                    hover:bg-slate-800
                    transition
                  "
                >
                  Conocer más

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  >
                    →
                  </span>

                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}