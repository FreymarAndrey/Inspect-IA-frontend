import * as Yup from "yup";

interface InitialStateFormSchedule {
  company: string;
  auditName: string;
  auditType: string;
  dateTime: string;
  duration: string;
  auditor: string;
  department: string;
  objective: string;
}

export class ScheduleValidatorForm {
  static initialState: InitialStateFormSchedule = {
    company: "",
    auditName: "",
    auditType: "",
    dateTime: "",
    duration: "",
    auditor: "",
    department: "",
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
    dateTime: Yup.string().required("* Fecha y hora son requeridas."),
    duration: Yup.string().trim().required("* Duración estimada es requerida."),
    auditor: Yup.string()
      .trim()
      .required("* Auditor responsable es requerido."),
    department: Yup.string()
      .trim()
      .required("* Área/departamento es requerido."),
    objective: Yup.string()
      .trim()
      .required("* Objetivo de la auditoría es requerido."),
  });

  static auditTypeOptions = [
    { value: "ISO 9001", label: "ISO 9001 (Calidad)" },
    { value: "ISO 27001", label: "ISO 27001 (Seguridad de la Información)" },
    { value: "ISO 14001", label: "ISO 14001 (Gestión Ambiental)" },
    {
      value: "ISO 45001",
      label: "ISO 45001 (Seguridad y Salud en el Trabajo)",
    },
    { value: "Otras", label: "Otras Auditorías de Sistemas" },
  ];
}
