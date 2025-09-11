import * as Yup from "yup";

interface InitialStateFormLogin {
  email: string;
  password: string;
}

export class LoginValidatorForm {
  static initialState: InitialStateFormLogin = {
    email: "",
    password: "",
  };

  static validatorSchemaFormLogin = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        "* El campo del correo electrónico no tiene un formato válido."
      )
      .required("* El campo del correo electrónico es obligatorio."),
    password: Yup.string()
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*.\-])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d!@#$%^&*.\-]{10,}$/,
        "* La contraseña debe tener al menos 10 caracteres, contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (!@#$%^&&*.-)."
      )
      .required("* El campo de contraseña es obligatorio.")
      .max(30, "* La contraseña debe tener un máximo de 30 caracteres."),
  });
}
