import * as Yup from "yup";

// https://github.com/jquense/yup
export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Please enter a valid email address."),
  password: Yup.string()
    .required("Please enter a password.")
    .min(6, "Password must have at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match"),
});
