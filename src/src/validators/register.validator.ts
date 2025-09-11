import * as Yup from "yup";

interface InitialStateFormRegister {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: number;
  company: string;
}

export class RegisterValidatorForm {
  static initialState: InitialStateFormRegister = {
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: 0,
    company: "",
  };

  static validatorSchemaFormRegister = Yup.object({
    username: Yup.string().trim().required("* Username field is required."),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        "* Email field is not valid format."
      )
      .required("* Email field is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*.\-])(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d!@#$%^&*.\-]{10,}$/,
        "* The password must be at least 10 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character (!@#$%^&&*.-)."
      )
      .required("* Password field is required."),
    firstname: Yup.string().trim().required("* Firstname field is required."),
    lastname: Yup.string().trim().required("* Lastname field is required."),
    phone: Yup.number()
      .min(1, "* Phone field is required.")
      .required("* Phone field is required."),
    company: Yup.string().trim().required("* Company field is required."),
  });
}
