import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>InspectIA-Web</div>
      <nav className={styles.nav}>
        <a href="/#services" className={styles.link}>
          Servicios
        </a>
        <a href="/#aboutus" className={styles.link}>
          Nosotros
        </a>
        <Link to="/schedule" className={styles.link}>
          Agendar
        </Link>
        <Link to="/auth" className={styles.link}>
          Iniciar Sesión
        </Link>
      </nav>
    </header>
  );
};

export default Header;
