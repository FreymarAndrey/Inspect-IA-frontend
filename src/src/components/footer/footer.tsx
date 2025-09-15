import styles from "../footer/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2025 InspectIA-Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
