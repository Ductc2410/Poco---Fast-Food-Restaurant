import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required(),
    address: yup.string().required(),
    phone: yup
      .string()
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Nhap dung dinh dang so dien thoai")
      .required(),
    email: yup.string().required()
  })
  .required();
