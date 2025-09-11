import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./auth.module.css";

const Auth = () => {
  const Register = lazy(() => import("src/pages/Auth/Register"));
  const Login = lazy(() => import("src/pages/Auth/Login"));

  return (
    <section className={styles.form_auth}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Suspense>
    </section>
  );
};

export default Auth;
