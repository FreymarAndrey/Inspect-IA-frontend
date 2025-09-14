import { ChangeEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { RegisterValidatorForm } from "src/validators";
import { authRoutes, publicRoutes } from "src/routes";
import styles from "../auth.module.css";
import useAxios from "src/hooks/useAxios";
import { AuthService } from "src/services/auth.service";
import { UIContext } from "src/context";

const Register = () => {
  const { callEndpoint } = useAxios();
  const { setToast } = useContext(UIContext);
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: RegisterValidatorForm.initialState,
    validationSchema: RegisterValidatorForm.validatorSchemaFormRegister,
    validateOnMount: false,
    onSubmit: async (values) => {
      if (formik.isValid) {
        setLoading(true);
        const res = await callEndpoint(AuthService.register(values));
        if (res) {
          setToast({
            type: "success",
            title: "Existo!",
            message: "Usuario registrado correctamente",
            duration: 5000,
          });
          formik.resetForm();
        }
        setLoading(false);
      }
    },
  });

  const handleChangeInputNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const { name } = e.target;
    formik.setFieldValue(name, value);
  };

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
              type="text"
              name="phone"
              id="phone"
              disabled={loading}
              maxLength={11}
              value={formik.values.phone || ""}
              onChange={handleChangeInputNumber}
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
              placeholder="Contraseña"
              type="password"
            />
            <label htmlFor="password">Contraseña</label>
          </div>
          <p>{formik.touched.password && formik.errors.password}</p>
        </div>
        <div className={styles.form_input}>
          <div>
            <input
              name="confirm_password"
              id="confirm_password"
              disabled={loading}
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Confirma la contraseña"
              type="password"
            />
            <label htmlFor="confirm_password">Confirma la contraseña</label>
          </div>
          <p>
            {formik.touched.confirm_password && formik.errors.confirm_password}
          </p>
        </div>

        <div className={styles.form_input}>
          <div>
            <ul>
              <li>
                <p
                  className={
                    formik.values.password
                      ? /[a-z]/.test(formik.values.password)
                        ? styles.success
                        : styles.error
                      : ""
                  }
                >
                  1 letra mayúscula
                </p>
              </li>
              <li>
                <p
                  className={
                    formik.values.password
                      ? /[A-Z]/.test(formik.values.password)
                        ? styles.success
                        : styles.error
                      : ""
                  }
                >
                  1 letra minúscula
                </p>
              </li>
              <li>
                <p
                  className={
                    formik.values.password
                      ? /\d/.test(formik.values.password)
                        ? styles.success
                        : styles.error
                      : ""
                  }
                >
                  1 número
                </p>
              </li>
              <li>
                <p
                  className={
                    formik.values.password
                      ? /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(
                          formik.values.password
                        )
                        ? styles.success
                        : styles.error
                      : ""
                  }
                >
                  1 carácter especial (por ejemplo, !@#$%&*)
                </p>
              </li>
            </ul>
            <strong>
              La contraseña debe tener al menos 10 caracteres e incluir:
            </strong>
          </div>
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
