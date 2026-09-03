"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[var(--vekcia-bg)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logos/logo-texto.png"
              alt="VEKCIA"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">

            <ul className="flex items-center gap-8 text-white font-semibold">

              <li>
                <a
                  href="#nosotros"
                  className="hover:opacity-80 transition-opacity"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#proceso"
                  className="hover:opacity-80 transition-opacity"
                >
                  Cómo trabajamos
                </a>
              </li>

              <li>
                <a
                  href="#servicios"
                  className="hover:opacity-80 transition-opacity"
                >
                  Soluciones
                </a>
              </li>

              <li>
                <a
                  href="#paquetes"
                  className="hover:opacity-80 transition-opacity"
                >
                  Paquetes
                </a>
              </li>

              <li>
                <a
                  href="#proyectos"
                  className="hover:opacity-80 transition-opacity"
                >
                  Proyectos
                </a>
              </li>

              <li>
                <a
                  href="#clientes"
                  className="hover:opacity-80 transition-opacity"
                >
                  Clientes
                </a>
              </li>

            </ul>

            {/* CTA */}
            <a
              href="#contacto"
              className="
                inline-flex
                items-center
                justify-center
                px-5
                py-2.5
                rounded-full
                bg-white
                text-[var(--vekcia-bg)]
                font-bold
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
              "
            >
              Hablemos
            </a>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[var(--vekcia-bg)] border-t border-white/10">

          <ul className="flex flex-col py-4">

            <li>
              <a
                href="#nosotros"
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-white"
              >
                Nosotros
              </a>
            </li>

            <li>
              <a
                href="#proceso"
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-white"
              >
                Cómo trabajamos
              </a>
            </li>

            <li>
              <a
                href="#servicios"
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-white"
              >
                Soluciones
              </a>
            </li>

            <li>
              <a
                href="#paquetes"
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-white"
              >
                Paquetes
              </a>
            </li>

            <li>
              <a
                href="#proyectos"
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-white"
              >
                Proyectos
              </a>
            </li>

            <li>
              <a
                href="#clientes"
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-white"
              >
                Clientes
              </a>
            </li>

            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="
                  block
                  mx-6
                  mt-3
                  px-6
                  py-3
                  rounded-full
                  bg-white
                  text-[var(--vekcia-bg)]
                  text-center
                  font-bold
                "
              >
                Hablemos
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}