import * as Yup from "yup";

interface InitialStateFormRegister {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  company: string;
  password: string;
  confirm_password: string;
}

export class RegisterValidatorForm {
  static initialState: InitialStateFormRegister = {
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    company: "",
    password: "",
    confirm_password: "",
  };

  static validatorSchemaFormRegister = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        "* El campo del correo electrónico no tiene un formato válido."
      )
      .required("* El campo del correo electrónico es obligatorio."),
    firstname: Yup.string()
      .trim()
      .required("* El campo nombres es obligatorio."),
    lastname: Yup.string()
      .trim()
      .required("* El campo apellidos es obligatorio."),
    phone: Yup.string()
      .min(1, "* El campo teléfono es obligatorio.")
      .max(10, "* El campo no puede contener mas de 10 caracteres.")
      .required("* El campo teléfono es obligatorio."),
    company: Yup.string().trim().required("* El campo Empresa es obligatorio."),
    password: Yup.string()
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*.\-])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d!@#$%^&*.\-]{10,}$/,
        "* La contraseña debe tener al menos 10 caracteres, contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (!@#$%^&&*.-)."
      )
      .required("* El campo de contraseña es obligatorio."),
    confirm_password: Yup.string()
      .required("*  El campo Confirmar contraseña es obligatorio.")
      .oneOf([Yup.ref("password")], "* Las contraseñas no coinciden."),
  });
}
