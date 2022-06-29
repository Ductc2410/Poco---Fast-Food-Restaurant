import * as yup from "yup";

export const productSchema = yup.object({
  sku: yup.string().required("This field is require"),
  name: yup.string().required("Input your name"),
  image: yup.object().required("Require Field"),
  price: yup.number().min(10, "Price canot be empty").required(),
  price_sale: yup.number().notRequired(),
  overview: yup.string().required("Overview canot be empty"),
  description: yup.string().required("Description canot be empty"),
  description_short: yup.string().required("Description canot be empty"),
  quantity: yup.number().min(1, "Quantity too low").required("Quantity is require"),
  categoryId: yup.number().required("Require Field"),
  status: yup.string()
});
