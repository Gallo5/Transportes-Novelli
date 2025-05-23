

'use client'; // Mark this file as a Client Component

import React, { useState, useEffect }  from 'react';
import styles from './styles/styles.module.css'//stilos CSS si los tienes
import Image from 'next/image';
import 'boxicons/css/boxicons.min.css';

const images = [
  '/images/imagen1.jpg',
  '/images/imagen2.jpg',
  '/images/imagen3.jpg'
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <header className={styles.header}>
      <div className={styles.carousel}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === current ? styles.active : ''}`}
          >
            <img src={src} alt={`Imagen ${index + 1}`} />
          </div>
        ))}

        <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
        <button className={styles.next} onClick={nextSlide}>&#10095;</button>
      </div>
    </header>
    <header>      
        <nav className={styles.navbar}>
  <div className={styles.logo}>
    <a href="#">
      <i className="bx bxs-bus bx-lg bx-tada"></i> <span>Transportes Novelli</span>
    </a>
  </div>

  {/* Botón hamburguesa */}
  <button
    className={styles.hamburger}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Menú"
  >
    <i className="bx bx-menu"></i>
  </button>
   
  {/* Menú colapsable para móviles */}
  <ul className={`${styles.navlinks} ${menuOpen ? styles.open : ''}`}>
  {['Nosotros', 'Servicios', 'Vehiculos', 'Clientes', 'Contacto', 'Redes'].map((item) => (
    <li key={item} className={styles.navitem}>
      <a
        href={`#${item}`}
        onClick={() => setMenuOpen(false)} // Cierra menú al hacer clic
      >
        {item}
      </a>
    </li>
  ))}
</ul>
</nav>
      </header>
      <hr width="100%" />
      <main>
        <div id="Nosotros">
          <section>
            <h4>Nosotros</h4>
            <div className="TarjetaNosotros">
            <p>Somos una empresa fundada desde 1979 con la finalidad de satisfacer las necesidades del mercado en el área de servicios de transporte de pasajeros.</p>
            <p>Tres generaciones al servicio del transporte de pasajeros.</p>
            <p>Disponemos de Vehículos de distintas capacidades según su necesidad, totalmente equipadas y cumpliendo con la reglamentación vigente.</p>
            <p>Contamos con personal capacitado y con amplia experiencia.</p>
            <p>Atención personal realizada por sus Dueños.</p>
            <p>Más de 46 años de experiencia.</p>
            <br />
            </div>
            <div className="TarjetaNosotros">
            <p>
              • MISIÓN <br />
              Nuestro enfoque principal es ofrecer soluciones inmediatas a nuestros clientes diariamente, de manera eficiente, responsable y manteniendo el compromiso de brindar un excelente servicio.<br />
              • VISIÓN <br />
              Buscamos consolidarnos como la empresa líder en el mercado de transporte, brindando un mejor servicio cada día, estableciendo alianzas estratégicas, comprometiéndonos con las necesidades del cliente y orientándonos hacia un servicio cada vez más integral que nos permita alcanzar un reconocido prestigio.<br />
              • VALORES <br />
              Nuestros valores: Confianza, Respeto, Compromiso y Responsabilidad.
            </p>
            </div>
          </section>
        </div>
        <hr width="100%" />
        <div id="Servicios">
          <section>
            <h4>Servicios</h4>
            <p>Nos especializamos en brindar servicios tales como:</p>
            <ul>
              <li>Viajes (Corta - Media - Larga distancia)</li>
              <li>Excursiones</li>
              <li>Campamentos</li>
              <li>Cumpleaños</li>
              <li>City Tours</li>
              <li>Traslados de Planteles Deportivos</li>
              <li>Colegios</li>
              <li>Centro de Jubilados</li>
              <li>Universidades</li>
              <li>Instituciones</li>
              <li>Sindicatos</li>
            </ul>
          </section>
        </div>
        <hr width="100%" />
<div id="Vehiculos">
  <section>
    <h4>Nuestros Vehículos</h4>
    <div className={styles.Vehiculos}>
      <div>
        <img src="/images/imagen3.jpg" alt="imagen3" />
      </div>
      <div>
        <img src="/images/imagen4.jpg" alt="imagen4" />
      </div>
      <div>
        <img src="/images/imagen5.jpg" alt="imagen5" />
      </div>
      <div>
        <img src="/images/imagen6.jpg" alt="imagen6" />
      </div>
      <div>
        <img src="/images/imagen7.jpg" alt="imagen7" />
      </div>
      <div>
        <img src="/images/imagen8.jpg" alt="imagen8" />
      </div>
    </div>

    <div className={styles.DescripcionVehiculos}>
      <p>
        • Unidades de 45/49 Asientos <br />
        • Aire Acondicionado <br />
        • Telefonía Celular en flota <br />
        • Música Funcional <br />
        • Habilitadas por el organismo de contralor <br />
        • Verificación técnica vehicular al día <br />
        • Seguro Automotor obligatorio <br />
        • Cumplimentando con la Reglamentación vigente de Normas de Seguridad
      </p>
    </div>
  </section>
</div>              
              
       <hr width="100%" />
        <div id="Clientes">
          <section>
            <h4>Nuestros Clientes</h4>
            <p>Trabajamos con las siguientes empresas e instituciones las cuales avalan nuestro servicio, responsabilidad y trayectoria:</p>
            <ul>
              <li>Belgrano Athletic Club</li>
              <li>BBVA Banco Francés</li>
              <li>Colegio Rio de la Plata</li>
              <li>Asociacion del Poder Legislativo</li>
              <li>Centro de Jubilados</li>
              <li>Gobierno de la Ciudad de Bs As</li>
              <li>Fundación Democracia</li>
              <li>Escuela N°6 D.E. 10</li>
              <li>Escuela N°7 D.E. 10</li>
              <li>Escuela N°13 D.E. 10</li>
              <li>Escuela N°15 D.E. 10</li>
              <p>………..entre otros………..</p>
            </ul>
          </section>
        </div>
      </main>
      <hr width="100%" />
<footer className={styles.footer}>
  <div className={styles.footerContent}>
    <div id="Contacto" className={styles.contacto}>
      {/* Formulario de contacto */}
      <div className={styles.formulario}>
        <form>
          <h4>Formulario de Contacto</h4>
          <br />
          <label htmlFor="Nombre">
            <input type="text" id="Nombre" placeholder="Nombre" />
          </label>
          <br />
          <label htmlFor="Apellido">
            <input type="text" id="Apellido" placeholder="Apellido" />
          </label>
          <br />
          <label htmlFor="Edad">
            <input type="number" id="Edad" placeholder="Edad" />
          </label>
          <br />
          <label htmlFor="Genero">Genero:</label>
          <br />
          <input type="radio" name="Genero" value="Masculino" defaultChecked />
          Masculino
          <br />
          <input type="radio" name="Genero" value="Femenino" />
          Femenino
          <br />
          <input type="radio" name="Genero" value="Otro" />
          Otro
          <br />
          <label htmlFor="Nacionalidad">Nacionalidad:</label>
          <br />
          <select name="nacionalidad" id="Nacionalidad">
            <option value="Argentina">Argentina</option>
            <option value="Brasilera">Brasilera</option>
            <option value="Uruguaya">Uruguaya</option>
          </select>
          <br />
          <label htmlFor="email">
            <br />
            <input type="email" id="email" placeholder="E-mail" />
          </label>
          <br />
          <label htmlFor="Observaciones">
            Observaciones:
            <br />
            <textarea id="Observaciones" placeholder="Agrega tu comentario o consulta"></textarea>
          </label>
          <br />
          <br />
          <input type="submit" id="button" value="Enviar" />
        </form>
      </div>
    </div>
    <div id="Ubicacion" className={styles.ubicacion}>
      {/* Tarjeta de ubicación */}
      <div className={styles.ubicacionCard}>
        <figure className={styles.card}>
          <h4>Ubicacion</h4>
          <figcaption>
            <ul className={styles['card-data']}>
              <li>
                <span className={styles['card-data-titles-position']}>
                  Boulogne Sur Mer 2610, B1650-Villa Maipu
                </span>
              </li>
            </ul>
          </figcaption>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.984833674104!2d-58.55388032341717!3d-34.6023574729876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb61c921318c5%3A0x2dd44cb01c51f80f!2sBoulogne%20Sur%20Mer%202610%2C%20B1650%20Villa%20Maip%C3%BA%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1683979384389!5m2!1ses-419!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </div>
      </div>     
    <div id="Redes" className={styles.redes}>
      {/* Redes Sociales */}
      <figure className={styles['Redes-card']}>
        <h4>Redes</h4>
        <nav className={styles.Redes}>
          <ul className={styles.Redeslink}>
            <li className={styles.Reditem}>
              <a href="#">
                <i className="bx bxl-facebook-square"></i> Facebook
              </a>
            </li>
            <li className={styles.Reditem}>
              <a href="https://www.instagram.com/transportenovelli" target="_blank">
                <i className="bx bxl-instagram-alt"></i>@transportenovelli
              </a>
            </li>
            <li className={styles.Reditem}>
              <a href="https://wa.me/5491169438573">
                <i className="bx bxl-whatsapp-square bx-mg bx-tada"></i> 11-6943-8573
              </a>
            </li>
            <li className={styles.Reditem}>
              <a href="mailto:transportenovelli@gmail.com">
                <i className="bx bxs-envelope"></i>transportenovelli@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      </figure>
      <div id="Volver a Inicio" className={styles.volverInicio}>
        <nav className={styles.Volver}>
          <ul className={styles.Volverlink}>
            <li className={styles.Volveritem}>
              <a href="#">Volver a Inicio</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</footer>
</>
  );
}

