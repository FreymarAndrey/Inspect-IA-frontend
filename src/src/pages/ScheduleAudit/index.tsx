import { useContext, useState } from "react";
import { useFormik } from "formik";
import { ScheduleValidatorForm } from "src/validators";
import styles from "./scheduleAudit.module.css";
import { Link } from "react-router-dom";
import useAxios from "src/hooks/useAxios";
import { ScheduleService } from "src/services/schedule.service";
import { UIContext } from "src/context";

const ScheduleAudit = () => {
  const { callEndpoint } = useAxios();
  const { setToast } = useContext(UIContext);
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: ScheduleValidatorForm.initialState,
    validationSchema: ScheduleValidatorForm.validatorSchemaFormSchedule,
    validateOnMount: false,
    onSubmit: async (values) => {
      if (formik.isValid) {
        setLoading(true);
        const res = await callEndpoint(ScheduleService.createSchedule(values));
        if (res) {
          setToast({
            type: "success",
            title: "Existo!",
            message: "Se ha agendado la auditoria correctamente",
            duration: 5000,
          });
          formik.resetForm();
        }
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
            <label htmlFor="company">Nombre de la empresa</label>
            <input
              type="text"
              name="company"
              id="company"
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
              type="time"
              name="duration"
              id="duration"
              min="00:45"
              max="03:00"
              step="60"
              value={formik.values.duration ?? ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.errors.duration ? (
              <p className={styles.error}>
                {formik.touched.duration && formik.errors.duration}
              </p>
            ) : (
              <p>entre 0:45 minutos y 3:00 horas</p>
            )}
          </div>

          <div className={styles.form_input}>
            <label htmlFor="responsibleAudit">Responsable</label>
            <input
              type="text"
              name="responsibleAudit"
              id="responsibleAudit"
              disabled={loading}
              value={formik.values.responsibleAudit}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Nombre del auditor"
              className={
                formik.touched.responsibleAudit
                  ? formik.errors.responsibleAudit
                    ? styles.error_input
                    : styles.input_valid
                  : ""
              }
            />
            <p className={styles.error}>
              {formik.touched.responsibleAudit &&
                formik.errors.responsibleAudit}
            </p>
          </div>

          <div className={styles.form_input}>
            <label htmlFor="auditArea">Área/departamento a auditar</label>
            <input
              type="text"
              name="auditArea"
              id="auditArea"
              disabled={loading}
              value={formik.values.auditArea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Ej: Producción"
              className={
                formik.touched.auditArea
                  ? formik.errors.auditArea
                    ? styles.error_input
                    : styles.input_valid
                  : ""
              }
            />
            <p className={styles.error}>
              {formik.touched.auditArea && formik.errors.auditArea}
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
            className={styles.submit}
          >
            Agendar {loading && <i className="fas fa-spinner fa-pulse"></i>}
          </button>
        </form>
      </div>
    </>
  );
};

export default ScheduleAudit;
