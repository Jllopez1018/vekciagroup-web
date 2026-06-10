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
          <div className="flex items-center gap-3">

            <img
              src="/logos/logo-texto.png"
              alt="VEKCIA"
              className="h-10 w-auto"
            />

            <span
              className="
                hidden
                sm:block
                text-lg
                font-bold
                uppercase
                tracking-[0.25em]
                text-slate-300
              "
            >
              Group
            </span>

          </div>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-10 text-white font-semibold">
            <li>
              <a href="#nosotros" className="hover:opacity-80">
                Nosotros
              </a>
            </li>

            <li>
              <a href="#metas" className="hover:opacity-80">
                Pilares
              </a>
            </li>

            <li>
              <a href="#servicios" className="hover:opacity-80">
                Servicios
              </a>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
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
                href="#metas"
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-white"
              >
                Metas
              </a>
            </li>

            <li>
              <a
                href="#servicios"
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-white"
              >
                Servicios
              </a>
            </li>

          </ul>

        </div>
      )}
    </nav>
  );
}