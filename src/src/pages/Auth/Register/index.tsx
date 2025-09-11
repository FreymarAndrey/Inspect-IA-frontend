import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { RegisterValidatorForm } from "src/validators";
import { authRoutes, publicRoutes } from "src/routes";
import styles from "../auth.module.css";

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: RegisterValidatorForm.initialState,
    validationSchema: RegisterValidatorForm.validatorSchemaFormRegister,
    validateOnMount: false,
    onSubmit: async () => {
      if (formik.isValid) {
        setLoading(true);
      }
    },
  });

  return (
    <div className={styles.form_auth}>
      <h3>ExpectIA</h3>
      <form
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        className={styles.form_register}
      >
        <div className={styles.form_input}>
          <div>
            <input
              type="text"
              name="firstname"
              id="firstname"
              disabled={loading}
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Nombres"
            />
            <label htmlFor="firstname">Nombres</label>
          </div>
          <p>{formik.touched.firstname && formik.errors.firstname}</p>
        </div>
        <div className={styles.form_input}>
          <div>
            <input
              type="text"
              name="lastname"
              id="lastname"
              disabled={loading}
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Apellidos"
            />
            <label htmlFor="lastname">Apellidos</label>
          </div>
          <p>{formik.touched.lastname && formik.errors.lastname}</p>
        </div>
        <div className={styles.form_input}>
          <div>
            <input
              type="number"
              name="phone"
              id="phone"
              disabled={loading}
              value={formik.values.phone || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Teléfono"
            />
            <label htmlFor="phone">Teléfono</label>
          </div>
          <p>{formik.touched.phone && formik.errors.phone}</p>
        </div>
        <div className={styles.form_input}>
          <div>
            <input
              type="text"
              name="company"
              id="company"
              disabled={loading}
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Empresa"
            />
            <label htmlFor="company"> Empresa</label>
          </div>
          <p>{formik.touched.company && formik.errors.company}</p>
        </div>
        <div className={styles.form_input}>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              disabled={loading}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Correo"
            />
            <label htmlFor="email">Correo</label>
          </div>
          <p>{formik.touched.email && formik.errors.email}</p>
        </div>
        <div className={styles.form_input}>
          <div>
            <input
              name="password"
              id="password"
              disabled={loading}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Conntraseña"
            />
            <label htmlFor="password">Contraseña</label>
          </div>
          <p>{formik.touched.password && formik.errors.password}</p>
        </div>
        <button
          type="submit"
          disabled={loading || !formik.dirty || !formik.isValid}
          className={styles.btn_register}
        >
          Registrarse
          {loading && <i className="fas fa-spinner fa-pulse"></i>}
        </button>
        <div className={styles.form_links}>
          <p>
            ¿Ya te has registrado?{" "}
            <Link to={`/${publicRoutes.AUTH}/${authRoutes.LOGIN}`}>
              Inicia sesión
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
