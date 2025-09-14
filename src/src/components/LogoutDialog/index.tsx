import { useContext, useEffect, useRef, useState } from "react";
import { UIContext } from "src/context";
import styles from "./dialog.module.css";

const LogoutDialog = () => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { uiState, setLogoutDialog } = useContext(UIContext);

  useEffect(() => {
    if (uiState.logoutdialog) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (uiState.logoutdialog) {
        document.body.style.overflow = "scroll";
      }
    };
  }, [uiState.logoutdialog]);

  const handleClose = async () => {
    if (dialogRef.current && uiState.logoutdialog) {
      dialogRef.current.classList.remove("animate__fadeIn");
      dialogRef.current.classList.add("animate__fadeOut");
      await uiState.logoutdialog.handleCancel();
      setTimeout(() => {
        setLogoutDialog(null);
      }, 700);
    }
  };

  const handleAccept = async () => {
    if (uiState.logoutdialog) {
      setLoading(true);
      await uiState.logoutdialog.handleAccept();
      setLoading(false);
      setLogoutDialog(null);
    }
  };

  const getTypeDialog = (type: string) => {
    switch (type) {
      case "success":
        return styles.success;
      case "warning":
        return styles.warning;
      case "error":
        return styles.error;
      default:
        return styles.error;
    }
  };

  return (
    uiState.logoutdialog && (
      <div
        ref={dialogRef}
        className={`animate__animated animate__faster animate__fadeIn ${styles.dialog_lighbox}`}
      >
        <div className={styles.dialog_content}>
          <div
            className={`${styles.dialog_icon} ${getTypeDialog(
              uiState.logoutdialog.icon
            )}`}
          ></div>
          <div className={styles.dialog_body}>
            <h3 className={`${getTypeDialog(uiState.logoutdialog.icon)}`}>
              {uiState.logoutdialog.title}
            </h3>
            <p>{uiState.logoutdialog.message}</p>
          </div>
          <div className={styles.dialog_buttons}>
            <button
              className="btn_secundary"
              onClick={handleClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              className={styles.accept}
              onClick={handleAccept}
              disabled={loading}
            >
              {loading ? <i className="fas fa-spinner fa-pulse"></i> : "Ok"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default LogoutDialog;
