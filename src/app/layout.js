
// layout.js

import { Roboto } from 'next/font/google'; // Ejemplo de importación de fuente
import './styles/styles.module.css'//stilos CSS si los tienes
import 'boxicons/css/boxicons.min.css';
import './styles/globals.css'


const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


// Metadata del sitio
export const metadata = {
  title: "Transportes Novelli",
  description: "Empresa de transporte de pasajeros desde 1979",
};

// RootLayout definido correctamente
export default function RootLayout({ children }) {
  return (
    <html lang="es" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}




