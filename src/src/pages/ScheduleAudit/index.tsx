import { useState } from "react";
import { useFormik } from "formik";
import { ScheduleValidatorForm } from "src/validators";
import styles from "./scheduleAudit.module.css";
import { Link } from "react-router-dom";

const ScheduleAudit = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: ScheduleValidatorForm.initialState,
    validationSchema: ScheduleValidatorForm.validatorSchemaFormSchedule,
    validateOnMount: false,
    onSubmit: async (values) => {
      if (formik.isValid) {
        setLoading(true);
        console.log(values);
        alert("Auditoría agendada con éxito!");
        setLoading(false);
      }
    },
  });

  return (
    <>
      <Link to={`/`} className={styles.nav}>
        <div className={styles.logo}>InspectIA-Web</div>
      </Link>
      <div className={styles.container}>
        <h1>Agendar Auditoría</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.form_input}>
            <label htmlFor="companyName">Nombre de la empresa</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              disabled={loading}
              value={formik.values.company}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Ej: Auditoría de procesos de compras"
              className={
                formik.touched.company
                  ? formik.errors.company
                    ? styles.error_input
                    : styles.input_valid
                  : ""
              }
            />
            <p className={styles.error}>
              {formik.touched.company && formik.errors.company}
            </p>
          </div>

          <div className={styles.form_input}>
            <label htmlFor="auditName">Nombre de la auditoría</label>
            <input
              type="text"
              name="auditName"
              id="auditName"
              disabled={loading}
              value={formik.values.auditName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Ej: Auditoría de procesos de compras"
              className={
                formik.touched.auditName
                  ? formik.errors.auditName
                    ? styles.error_input
                    : styles.input_valid
                  : ""
              }
            />
            <p className={styles.error}>
              {formik.touched.auditName && formik.errors.auditName}
            </p>
          </div>

          <div className={styles.form_input}>
            <label htmlFor="auditType">Tipo de norma/área a auditar</label>
            <select
              name="auditType"
              id="auditType"
              disabled={loading}
              value={formik.values.auditType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.auditType
                  ? formik.errors.auditType
                    ? styles.error_input
                    : styles.input_valid
                  : ""
              }
            >
              <option value="">Seleccione una opción</option>
              {ScheduleValidatorForm.auditTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className={styles.error}>
              {formik.touched.auditType && formik.errors.auditType}
            </p>
          </div>

          <div className={styles.form_input}>
            <label htmlFor="dateTime">Fecha y hora</label>
            <input
              type="datetime-local"
              name="dateTime"
              id="dateTime"
              disabled={loading}
              value={formik.values.dateTime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.dateTime
                  ? formik.errors.dateTime
                    ? styles.error_input
                    : styles.input_valid
                  : ""
              }
            />
            <p className={styles.error}>
              {formik.touched.dateTime && formik.errors.dateTime}
            </p>
          </div>

          <div className={styles.form_input}>
            <label htmlFor="duration">Duración estimada</label>
            <input
              type="text"
              name="duration"
              id="duration"
              disabled={loading}
              value={formik.values.duration}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Ej: 2 horas"
              className={
                formik.touched.duration
                  ? formik.errors.duration
                    ? styles.error_input
                    : styles.input_valid
                  : ""
              }
            />
            <p className={styles.error}>
              {formik.touched.duration && formik.errors.duration}
            </p>
          </div>

          <div className={styles.form_input}>
            <label htmlFor="auditor">Auditor responsable</label>
            <input
              type="text"
              name="auditor"
              id="auditor"
              disabled={loading}
              value={formik.values.auditor}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Nombre del auditor"
              className={
                formik.touched.auditor
                  ? formik.errors.auditor
                    ? styles.error_input
                    : styles.input_valid
                  : ""
              }
            />
            <p className={styles.error}>
              {formik.touched.auditor && formik.errors.auditor}
            </p>
          </div>

          <div className={styles.form_input}>
            <label htmlFor="department">Área/departamento a auditar</label>
            <input
              type="text"
              name="department"
              id="department"
              disabled={loading}
              value={formik.values.department}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Ej: Producción"
              className={
                formik.touched.department
                  ? formik.errors.department
                    ? styles.error_input
                    : styles.input_valid
                  : ""
              }
            />
            <p className={styles.error}>
              {formik.touched.department && formik.errors.department}
            </p>
          </div>

          <div className={styles.form_input}>
            <label htmlFor="objective">Objetivo de la auditoría</label>
            <textarea
              name="objective"
              id="objective"
              disabled={loading}
              value={formik.values.objective}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Describa el objetivo de la auditoría"
              className={
                formik.touched.objective
                  ? formik.errors.objective
                    ? styles.error_input
                    : styles.input_valid
                  : ""
              }
            />
            <p className={styles.error}>
              {formik.touched.objective && formik.errors.objective}
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || !formik.dirty || !formik.isValid}
            className={styles.submitButton}
          >
            Agendar {loading && <i className="fas fa-spinner fa-pulse"></i>}
          </button>
        </form>
      </div>
    </>
  );
};

export default ScheduleAudit;
