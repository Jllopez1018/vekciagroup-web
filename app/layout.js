import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: 'VEKCIA Tech | Desarrollo de Software, IA y Soluciones Empresariales',
  description:
    'Desarrollamos software a la medida, aplicaciones web, plataformas empresariales, inteligencia artificial, automatización de procesos, integraciones y soluciones tecnológicas para empresas en crecimiento.',
  keywords: [
    'desarrollo de software',
    'software a la medida',
    'desarrollo web',
    'nextjs',
    'react',
    'inteligencia artificial',
    'automatizacion',
    'erp',
    'crm',
    'aplicaciones empresariales',
    'transformacion digital',
    'consultoria tecnologica',
    'vekcia tech'
  ],
  icons: {
    icon: "/logos/logo-fav.png",
    shortcut: "/logos/logo-fav.png",
    apple: "/logos/logo-fav.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}