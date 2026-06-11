import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: 'VEKCIA Group | Tecnología, Seguros y Soluciones Empresariales',
  description:
    'Grupo empresarial especializado en tecnología, seguros y transformación digital. Ayudamos a empresas a crecer mediante software, automatización, análisis de datos y soluciones de protección patrimonial.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}