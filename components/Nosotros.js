export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="bg-white py-32 lg:py-40"
      data-aos="fade-up"
    >
      <div className="vekcia-container">

        <div className="max-w-6xl mx-auto">

          {/* Encabezado */}
          <div className="text-center">

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
              Nosotros
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
              "
            >
              Tecnología enfocada en mejorar la forma de trabajar.
            </h2>

            <div
              className="
                w-24
                h-1
                bg-[var(--vekcia-bg)]
                mx-auto
                mt-8
                rounded-full
              "
            />

          </div>

          {/* Contenido */}
          <div
            className="
              mt-14
              lg:mt-16
              grid
              lg:grid-cols-[1.1fr_0.9fr]
              gap-12
              lg:gap-20
              items-start
            "
          >

            {/* Texto principal */}
            <div>

              <p
                className="
                  text-xl
                  lg:text-2xl
                  leading-9
                  lg:leading-10
                  text-slate-600
                "
              >
                En VEKCIA ayudamos a empresas a convertir sus necesidades
                operativas en soluciones tecnológicas que les permitan
                trabajar de forma más eficiente, organizada y productiva.
              </p>

              <p
                className="
                  mt-7
                  text-lg
                  lg:text-xl
                  leading-8
                  lg:leading-9
                  text-slate-600
                "
              >
                Analizamos cómo funciona cada negocio, identificamos
                oportunidades de mejora y diseñamos soluciones que pueden
                ir desde un sitio web o una plataforma digital hasta
                aplicaciones, automatización de procesos, integraciones
                y sistemas empresariales.
              </p>

              <p
                className="
                  mt-7
                  text-lg
                  lg:text-xl
                  leading-8
                  lg:leading-9
                  text-slate-600
                "
              >
                Nuestro objetivo no es implementar tecnología por
                implementarla. Buscamos que cada solución tenga un
                propósito claro: reducir trabajo manual, mejorar la
                información disponible y ayudar a que las empresas
                puedan crecer con procesos más eficientes.
              </p>

            </div>

            {/* Principios */}
            <div
              className="
                rounded-[32px]
                bg-slate-50
                border
                border-slate-200
                p-8
                lg:p-10
              "
            >

              <div className="space-y-8">

                {/* Principio 01 */}
                <div className="flex gap-5">

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      shrink-0
                      rounded-2xl
                      bg-white
                      border
                      border-slate-200
                      text-sm
                      font-bold
                      text-[var(--vekcia-bg)]
                    "
                  >
                    01
                  </span>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-slate-900
                        mb-2
                      "
                    >
                      Entendemos el negocio
                    </h3>

                    <p
                      className="
                        text-slate-600
                        leading-7
                      "
                    >
                      Antes de proponer tecnología, buscamos entender
                      cómo funciona realmente la operación.
                    </p>

                  </div>

                </div>

                {/* Principio 02 */}
                <div className="flex gap-5">

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      shrink-0
                      rounded-2xl
                      bg-white
                      border
                      border-slate-200
                      text-sm
                      font-bold
                      text-[var(--vekcia-bg)]
                    "
                  >
                    02
                  </span>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-slate-900
                        mb-2
                      "
                    >
                      Diseñamos la solución
                    </h3>

                    <p
                      className="
                        text-slate-600
                        leading-7
                      "
                    >
                      Proponemos herramientas tecnológicas de acuerdo
                      con las necesidades y objetivos de cada empresa.
                    </p>

                  </div>

                </div>

                {/* Principio 03 */}
                <div className="flex gap-5">

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      shrink-0
                      rounded-2xl
                      bg-white
                      border
                      border-slate-200
                      text-sm
                      font-bold
                      text-[var(--vekcia-bg)]
                    "
                  >
                    03
                  </span>

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-slate-900
                        mb-2
                      "
                    >
                      Construimos para evolucionar
                    </h3>

                    <p
                      className="
                        text-slate-600
                        leading-7
                      "
                    >
                      Creamos soluciones que pueden crecer y adaptarse
                      conforme evoluciona el negocio.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}