import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: 'VEKCIA Group | Tecnología, Seguros y Soluciones Empresariales',
  description:
    'Grupo empresarial especializado en tecnología, seguros, rastreo GPS y transformación digital. Impulsamos empresas mediante software, automatización, análisis de datos y soluciones estratégicas para su crecimiento.',
  keywords: [
    'vekcia group',
    'grupo empresarial',
    'tecnologia',
    'seguros',
    'gps',
    'desarrollo de software',
    'transformacion digital',
    'automatizacion',
    'inteligencia artificial',
    'telemetria',
    'consultoria empresarial',
    'soluciones empresariales'
  ],
  icons: {
    icon: "/logos/logo-fav.png",
    shortcut: "/logos/logo-fav.png",
    apple: "/logos/logo-fav.png",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}