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
              Tu aliado estratégico en auditorías inteligentes. <br />
              Impulsamos la confianza y el crecimiento de tu negocio con
              soluciones de auditoría precisas, innovadoras y confiables,
              diseñadas para garantizar el cumplimiento normativo y la
              excelencia operativa.
            </h3>
            <img
              src={heroImg}
              alt="hero-img"
              className={`${styles.placeholder_image} ${styles.mobile}`}
            />
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
              En InspectIA-Web somos especialistas en servicios de auditoría que
              transforman la gestión empresarial. Ayudamos a empresas de todos
              los tamaños a detectar oportunidades de mejora, fortalecer sus
              procesos y cumplir con los estándares internacionales más
              exigentes. <br />
              Nuestro equipo combina experiencia, conocimiento normativo y
              tecnología avanzada, para ofrecer diagnósticos confiables que
              inspiran seguridad y generan valor real en tu organización.
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
                <h4>Trayectoria y Confianza</h4>
                <p>
                  Más de 10 años ayudando a organizaciones a elevar sus
                  estándares de calidad y seguridad.
                </p>
              </div>
              <div className={styles.feature}>
                <h4>Innovación en Cada Auditoría</h4>
                <p>
                  Integramos tecnología avanzada y metodologías ágiles para
                  ofrecer resultados rápidos, precisos y fáciles de implementar.
                </p>
              </div>
              <div className={styles.feature}>
                <h4>Impacto Real y Medible</h4>
                <p>
                  Nuestros informes no solo detectan hallazgos, también brindan
                  recomendaciones prácticas que generan mejoras visibles en la
                  gestión.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
