"use client";

const logos = [
  "/logos/partners/five.png",
  "/logos/partners/agro-santa-rosa.png",
  "/logos/partners/auto-fletes-santa-rosa.png",
  "/logos/partners/emblema-seguros.png",
];

export default function Partners() {
  return (
    <section
      className="
        bg-white
        py-32
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >
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
            Empresas y Aliados
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-bold
              text-slate-900
            "
          >
            Empresas que forman parte de nuestro ecosistema
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
          Estas empresas forman parte de nuestra trayectoria y representan la confianza 
          depositada en los servicios y soluciones que integran VEKCIA Group.         
          </p>
        </div>

        {/* Slider */}
        <div className="partners-slider mb-24">
          <div className="partners-track">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="partner-item"
              >
                <img
                  src={logo}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            border-t
            border-slate-200
            pt-10
            text-center
          "
        >
          
        </div>
      </div>
    </section>
  );
}