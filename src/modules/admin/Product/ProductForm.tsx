import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Form, Input, Switch } from "antd";

interface IFormInput {
  name: string;
  image: string;
  price: number;
  priceMarket: number;
  overview: string;
  description: string;
  stock: number;
  isAvailable: boolean;
}

const schema = yup
  .object({
    name: yup.string().required("Input your name"),
    price: yup.number().min(10, "cwcewcew").required()
  })
  .required();

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    register("name");
    register("price");
  }, [register]);

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => console.log(data);

  const handleChangeValue = (name: any, value: any) => {
    setValue(name, value);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 10 }}
      labelAlign="left"
      onFinish={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <Form.Item label="Name">
        <Input onChange={(e) => handleChangeValue("name", e.target.value)} />
        {errors.name && <div className="ant-form-item-explain-error">{errors.name.message}</div>}
      </Form.Item>

      <Form.Item label="Price">
        <Input onChange={(e) => handleChangeValue("price", e.target.value)} />
        {errors.price && <div className="ant-form-item-explain-error">{errors.price.message}</div>}
      </Form.Item>

      <Form.Item label="Price Market">
        <Input onChange={(e) => handleChangeValue("price", e.target.value)} />
        {errors.price && <div className="ant-form-item-explain-error">{errors.price.message}</div>}
      </Form.Item>

      <Form.Item label="Overview">
        <Input onChange={(e) => handleChangeValue("price", e.target.value)} />
        {errors.price && <div className="ant-form-item-explain-error">{errors.price.message}</div>}
      </Form.Item>

      <Form.Item label="Description">
        <Input onChange={(e) => handleChangeValue("price", e.target.value)} />
        {errors.price && <div className="ant-form-item-explain-error">{errors.price.message}</div>}
      </Form.Item>

      <Form.Item label="Stock">
        <Input onChange={(e) => handleChangeValue("price", e.target.value)} />
        {errors.price && <div className="ant-form-item-explain-error">{errors.price.message}</div>}
      </Form.Item>

      <Form.Item name="switch" label="Available" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 2 }}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
