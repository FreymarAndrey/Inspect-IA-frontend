import * as Yup from "yup";

interface InitialStateFormSchedule {
  company: string;
  auditName: string;
  auditType: string;
  dateTime: string;
  duration: string;
  responsibleAudit: string;
  auditArea: string;
  objective: string;
}

export class ScheduleValidatorForm {
  static initialState: InitialStateFormSchedule = {
    company: "",
    auditName: "",
    auditType: "",
    dateTime: "",
    duration: "",
    responsibleAudit: "",
    auditArea: "",
    objective: "",
  };

  static validatorSchemaFormSchedule = Yup.object({
    company: Yup.string()
      .trim()
      .required("* Nombre de la empresa es requerido."),
    auditName: Yup.string()
      .trim()
      .required("* Nombre de la auditoría es requerido."),
    auditType: Yup.string().required("* Tipo de norma/área es requerido."),
    dateTime: Yup.string()
      .required("* Fecha y hora son requeridas.")
      .test(
        "is-valid-datetime",
        "* Formato de fecha y hora no válido.",
        (value) => (value ? !isNaN(Date.parse(value)) : false)
      ),
    duration: Yup.string()
      .required("* Duración estimada es requerida.")
      .matches(
        /^([0-1]\d|2[0-3]):([0-5]\d)$/,
        "* Duración debe estar en formato HH:mm"
      ),
    responsibleAudit: Yup.string()
      .trim()
      .required("* Auditor responsable es requerido."),
    auditArea: Yup.string()
      .trim()
      .required("* Área/departamento es requerido."),
    objective: Yup.string()
      .trim()
      .required("* Objetivo de la auditoría es requerido."),
  });

  static auditTypeOptions = [
    { value: 1, label: "ISO 9001 (Calidad)" },
    { value: 2, label: "ISO 27001 (Seguridad de la Información)" },
    { value: 3, label: "ISO 14001 (Gestión Ambiental)" },
    {
      value: 4,
      label: "ISO 45001 (Seguridad y Salud en el Trabajo)",
    },
    { value: 5, label: "Otras Auditorías de Sistemas" },
  ];
}
