import "./globals.css";

export const metadata = {
  title: "VEKCIA | Tecnología y Soluciones Empresariales",

  description:
    "Analizamos los procesos de tu empresa y desarrollamos soluciones tecnológicas para mejorar operaciones, reducir tareas manuales y hacer crecer tu negocio.",

  keywords: [
    "VEKCIA",
    "desarrollo de software",
    "software a la medida",
    "desarrollo web",
    "sitios web",
    "aplicaciones empresariales",
    "software empresarial",
    "automatización de procesos",
    "integración de sistemas",
    "CRM",
    "ERP",
    "APIs",
    "soluciones tecnológicas",
    "tecnología para empresas",
  ],

  icons: {
    icon: "/logos/logo-fav.png",
    shortcut: "/logos/logo-fav.png",
    apple: "/logos/logo-fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}