import { useState } from "react";
import { useFormik } from "formik";
import { LoginValidatorForm } from "src/validators";
import eye from "src/assets/icons/eye.webp";
import noeye from "src/assets/icons/no-eye.webp";
import styles from "../auth.module.css";
import { Link } from "react-router-dom";
import { authRoutes, publicRoutes } from "src/routes";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPaswword, setShowPaswword] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: LoginValidatorForm.initialState,
    validationSchema: LoginValidatorForm.validatorSchemaFormLogin,
    validateOnMount: false,
    onSubmit: async ({ email, password }) => {
      if (formik.isValid) {
        setLoading(true);
        console.log(email, password);
        setLoading(false);
      }
    },
  });

  return (
    <>
      <div className={styles.form_auth}>
        <h3>ExpectIA</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.form_input}>
            <div>
              <input
                type="text"
                name="email"
                id="email"
                disabled={loading}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Escriba su usuario"
                className={
                  formik.touched.email
                    ? formik.errors.email
                      ? styles.error_input
                      : styles.input_valid
                    : ""
                }
                maxLength={120}
              />
              <label
                htmlFor="email"
                className={
                  formik.touched.email && formik.errors.email
                    ? styles.error_label
                    : ""
                }
              >
                Usuario
              </label>
            </div>

            <p>{formik.touched.email && formik.errors.email}</p>
          </div>
          <div className={styles.form_input}>
            <div>
              <input
                type={showPaswword ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="current-password"
                disabled={loading}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Escriba su contraseña"
                className={
                  formik.touched.password
                    ? formik.errors.password
                      ? styles.error_input
                      : styles.input_valid
                    : ""
                }
                maxLength={30}
              />
              <img
                onClick={() => setShowPaswword(!showPaswword)}
                src={showPaswword ? eye : noeye}
                alt="toggle show icon"
              />
              <label
                htmlFor="password"
                className={
                  formik.touched.password && formik.errors.password
                    ? styles.error_label
                    : ""
                }
              >
                Contraseña
              </label>
            </div>

            <p>{formik.touched.password && formik.errors.password}</p>
          </div>
          <button
            type="submit"
            disabled={loading || !formik.dirty || !formik.isValid}
          >
            Ingresar {loading && <i className="fas fa-spinner fa-pulse"></i>}
          </button>
        </form>
        <div className={styles.form_start}>
          <p>¿No tienes una cuenta?</p>
          <Link to={`/${publicRoutes.AUTH}/${authRoutes.REGISTER}`}>
            Registrate
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
