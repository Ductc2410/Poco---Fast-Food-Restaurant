import * as yup from "yup";

export const registerSchema = yup.object({
  fullname: yup.string().required("Please enter your fullname."),
  email: yup.string().email().required("Please enter your email."),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Your password is too short."),
  confirmPassword: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match.")
});
