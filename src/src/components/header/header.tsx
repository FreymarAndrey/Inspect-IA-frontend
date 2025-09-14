import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { useContext, useRef, useState } from "react";
import { AuthContext, UIContext } from "src/context";
import { CustomStorage } from "src/lib";

const Header = () => {
  const { setUserAuth } = useContext(AuthContext);
  const { uiState, setIsAuthenticated } = useContext(UIContext);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const toggleMenuRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleInput = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handleChangeInput = () => {
    setIsChecked(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserAuth(null);
    CustomStorage.cleanTokens();
    navigate("/", { replace: true });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>InspectIA-Web</div>
      <input
        type="checkbox"
        id="menu-icon"
        onChange={handleInput}
        checked={isChecked}
        ref={toggleMenuRef}
      />
      <label htmlFor="menu-icon" className={styles.mobile}>
        <div className={styles.container_mobile}>
          {isChecked ? (
            <i className="fas fa-minus"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
        <nav className={styles.nav}>
          <a
            href="/#services"
            className={styles.link}
            onClick={handleChangeInput}
          >
            Servicios
          </a>
          <a
            href="/#aboutus"
            className={styles.link}
            onClick={handleChangeInput}
          >
            Nosotros
          </a>
          <Link
            to="/schedule"
            className={styles.link}
            onClick={handleChangeInput}
          >
            Agendar
          </Link>
          {!uiState.isAuthenticated ? (
            <Link
              to="/auth"
              className={styles.link}
              onClick={handleChangeInput}
            >
              Iniciar Sesión
            </Link>
          ) : (
            <Link to="/auth" className={styles.link} onClick={handleLogout}>
              Cerrar Sesión
            </Link>
          )}
        </nav>
        <div className={styles.lightbox}></div>
      </label>
    </header>
  );
};

export default Header;
