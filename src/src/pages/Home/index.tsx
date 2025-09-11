import { Link } from "react-router-dom";
import { publicRoutes } from "src/routes";
import heroImg from "src/assets/heroImg.webp";
import styles from "./home.module.css";
import { useRef } from "react";
import Header from "src/components/header/header";
import Footer from "src/components/footer/footer";

const Home = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cardWidth =
        sliderRef.current.querySelector("div")?.clientWidth || 300;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Header />
      <div className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>Bienvenido a InspectIA-Web</h1>
            <h3 className={styles.hero_subtitle}>
              Tu socio confiable en servicios de auditoría. Ofrecemos soluciones
              expertas para asegurar la integridad y el cumplimiento de tu
              negocio.
            </h3>
            <Link
              to={`/${publicRoutes.SCHEDULE}`}
              className={styles.schedule_button}
            >
              Agendar Auditoría
            </Link>
          </div>
          <div className={styles.hero_image}>
            <img
              src={heroImg}
              alt="hero-img"
              className={styles.placeholder_image}
            />
          </div>
        </section>

        <section className={styles.about} id="aboutus">
          <div className={styles.container}>
            <h2 className={styles.section_title}>Sobre InspectiaWeb</h2>
            <p className={styles.about_text}>
              InspectiaWeb es una empresa líder en servicios de auditoría,
              dedicada a proporcionar evaluaciones precisas y confiables para
              empresas de todos los tamaños. Nuestro equipo de expertos utiliza
              las últimas tecnologías y metodologías para garantizar que tu
              negocio cumpla con los estándares más altos de calidad y
              regulación.
            </p>
          </div>
        </section>

        <section className={styles.services} id="services">
          <div className={styles.container}>
            <h2 className={styles.section_title}>
              Nuestros Servicios de Auditoría
            </h2>

            <div className={styles.slider_wrapper}>
              <button className={styles.arrow} onClick={() => scroll("left")}>
                <i className="fas fa-arrow-left"></i>
              </button>

              <div ref={sliderRef} className={styles.slider}>
                <div className={styles.service_card}>
                  <h3>ISO 9001 (Calidad)</h3>
                  <ul>
                    <li>Auditoría interna del sistema de gestión de calidad</li>
                    <li>
                      Auditoría de procesos (producción, compras, servicio al
                      cliente)
                    </li>
                    <li>
                      Auditoría de cumplimiento de requisitos legales y
                      reglamentarios
                    </li>
                  </ul>
                </div>
                <div className={styles.service_card}>
                  <h3>ISO 27001 (Seguridad de la Información)</h3>
                  <ul>
                    <li>Auditoría de controles de seguridad informática</li>
                    <li>
                      Auditoría de gestión de riesgos y continuidad del negocio
                    </li>
                    <li>
                      Auditoría de accesos, usuarios y protección de datos
                    </li>
                  </ul>
                </div>
                <div className={styles.service_card}>
                  <h3>ISO 14001 (Gestión Ambiental)</h3>
                  <ul>
                    <li>Auditoría de cumplimiento ambiental</li>
                    <li>
                      Auditoría de residuos, emisiones y consumo energético
                    </li>
                  </ul>
                </div>
                <div className={styles.service_card}>
                  <h3>ISO 45001 (Seguridad y Salud en el Trabajo)</h3>
                  <ul>
                    <li>Auditoría de condiciones de seguridad</li>
                    <li>
                      Auditoría de planes de emergencia y riesgos laborales
                    </li>
                  </ul>
                </div>
                <div className={styles.service_card}>
                  <h3>Otras Auditorías de Sistemas</h3>
                  <ul>
                    <li>
                      Auditoría de software (calidad del código, buenas
                      prácticas)
                    </li>
                    <li>
                      Auditoría de infraestructura tecnológica (servidores,
                      redes, respaldos)
                    </li>
                    <li>
                      Auditoría de proveedores (requisitos de calidad/seguridad)
                    </li>
                  </ul>
                </div>
              </div>

              <button className={styles.arrow} onClick={() => scroll("right")}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <Link
              to={`/${publicRoutes.SCHEDULE}`}
              className={styles.schedule_button}
            >
              Solicitar consulta Auditoría
            </Link>
          </div>
        </section>

        <section className={styles.why_choose_us}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>¿Por Qué Elegirnos?</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h4>Experiencia Comprobada</h4>
                <p>Más de 10 años de experiencia en el sector de auditoría.</p>
              </div>
              <div className={styles.feature}>
                <h4>Tecnología Avanzada</h4>
                <p>
                  Utilizamos herramientas de vanguardia para resultados
                  precisos.
                </p>
              </div>
              <div className={styles.feature}>
                <h4>Enfoque Personalizado</h4>
                <p>
                  Soluciones adaptadas a las necesidades específicas de tu
                  negocio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>Contáctanos</h2>
          <p className={styles.contact_text}>
            ¿Listo para mejorar la integridad de tu negocio? Ponte en contacto
            con nosotros hoy mismo.
          </p>
          <div className={styles.contact_buttons}>
            <button className={styles.consult_button}>
              Solicitar Consulta
            </button>
            <Link
              to={`/${publicRoutes.SCHEDULE}`}
              className={styles.schedule_button}
            >
              Agendar Auditoría
            </Link>
          </div>
        </div>
      </section> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
