export default function Contacto() {
  return (
    <section
      id="contacto"
      className="bg-[var(--vekcia-bg)] py-24 lg:py-32"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Información */}
          <div className="text-white">

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
                bg-white/10
                border
                border-white/20
                text-white
              "
            >
              Hablemos
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
              "
            >
              ¿Tienes un proceso
              <br />
              que quieres mejorar?
            </h2>

            <div
              className="
                w-24
                h-1
                bg-white
                rounded-full
                mt-8
                mb-8
              "
            />

            <p
              className="
                max-w-xl
                text-xl
                lg:text-2xl
                leading-9
                text-white/80
              "
            >
              Cuéntanos cómo funciona actualmente tu empresa.
              Analizamos tus necesidades y te proponemos una
              solución tecnológica de acuerdo con tu operación.
            </p>

            {/* Correo */}
            <div className="mt-10">

              <span
                className="
                  block
                  text-xs
                  font-bold
                  tracking-[0.2em]
                  uppercase
                  text-white/50
                  mb-3
                "
              >
                Escríbenos directamente
              </span>

              <a
                href="mailto:contacto@vekcia.com"
                className="
                  inline-flex
                  items-center
                  text-lg
                  md:text-xl
                  font-semibold
                  text-white
                  hover:text-white/70
                  transition
                "
              >
                contacto@vekcia.com
              </a>

            </div>

          </div>

          {/* Formulario */}
          <div
            className="
              bg-white
              rounded-[32px]
              p-7
              md:p-10
              shadow-2xl
            "
          >

            <div className="mb-8">

              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-black
                  text-slate-900
                "
              >
                Cuéntanos sobre tu proyecto
              </h3>

              <p
                className="
                  mt-2
                  text-slate-500
                  leading-7
                "
              >
                Déjanos tus datos y nos pondremos en contacto contigo.
              </p>

            </div>

            <form className="space-y-5">

              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                    mb-2
                  "
                >
                  Nombre
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    text-slate-900
                    outline-none
                    transition
                    focus:border-[var(--vekcia-bg)]
                    focus:ring-2
                    focus:ring-[var(--vekcia-bg)]/10
                  "
                />
              </div>

              {/* Empresa */}
              <div>
                <label
                  htmlFor="empresa"
                  className="
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                    mb-2
                  "
                >
                  Empresa
                </label>

                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    text-slate-900
                    outline-none
                    transition
                    focus:border-[var(--vekcia-bg)]
                    focus:ring-2
                    focus:ring-[var(--vekcia-bg)]/10
                  "
                />
              </div>

              {/* Correo + WhatsApp */}
              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label
                    htmlFor="correo"
                    className="
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                      mb-2
                    "
                  >
                    Correo
                  </label>

                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    placeholder="tu@empresa.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-slate-900
                      outline-none
                      transition
                      focus:border-[var(--vekcia-bg)]
                      focus:ring-2
                      focus:ring-[var(--vekcia-bg)]/10
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                      mb-2
                    "
                  >
                    Teléfono / WhatsApp
                  </label>

                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="81 0000 0000"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-slate-900
                      outline-none
                      transition
                      focus:border-[var(--vekcia-bg)]
                      focus:ring-2
                      focus:ring-[var(--vekcia-bg)]/10
                    "
                  />
                </div>

              </div>

              {/* Necesidad */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                    mb-2
                  "
                >
                  ¿Qué necesitas mejorar?
                </label>

                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  placeholder="Cuéntanos brevemente sobre tu proceso, problema o proyecto..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-3.5
                    text-slate-900
                    outline-none
                    transition
                    resize-none
                    focus:border-[var(--vekcia-bg)]
                    focus:ring-2
                    focus:ring-[var(--vekcia-bg)]/10
                  "
                />
              </div>

              {/* Botón */}
              <button
                type="button"
                className="
                  w-full
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[var(--vekcia-bg)]
                  px-6
                  py-4
                  text-white
                  font-bold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Enviar solicitud

                <span className="text-xl">
                  →
                </span>
              </button>

              <p
                className="
                  text-center
                  text-xs
                  leading-5
                  text-slate-400
                "
              >
                Tus datos serán utilizados únicamente para dar seguimiento
                a tu solicitud.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}