
// layout.js

// src/app/layout.js
import './globals.css';
import styles from './styles/styles.module.css';

export const metadata = {
  title: 'Transportes Novelli',
  description: 'Tu socio confiable en logística',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={styles.body}>{children}</body>
    </html>
  );
}
