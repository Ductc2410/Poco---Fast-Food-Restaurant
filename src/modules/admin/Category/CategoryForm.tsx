import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Form, Input } from "antd";

interface IFormInput {
  name: string;
  description: string;
}

const schema = yup
  .object({
    name: yup.string().required("Input your name"),
    description: yup.string().max(100, "Too Long")
  })
  .required();

const CategoryForm = () => {
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
    register("description");
  }, [register]);

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => console.log(data);

  const handleChangeValue = (name: any, value: any) => {
    setValue(name, value);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 15 }}
      labelAlign="left"
      initialValues={{ remember: true }}
      onFinish={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <Form.Item label="Name">
        <Input onChange={(e) => handleChangeValue("name", e.target.value)} />
        {errors.name && <div className="ant-form-item-explain-error">{errors.name.message}</div>}
      </Form.Item>

      <Form.Item label="Description">
        <Input onChange={(e) => handleChangeValue("description", e.target.value)} />
        {errors.description && (
          <div className="ant-form-item-explain-error">{errors.description.message}</div>
        )}
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4 }}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CategoryForm;
