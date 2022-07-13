import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Form, Input } from "antd";
import { useCreateCategoryMutation } from "../../../api/category.api";

interface IFormInput {
  name: string;
  description: string;
}

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    description: yup.string().max(100, "Too Long")
  })
  .required();

const CategoryForm = () => {
  const [category, setCategory] = useState({
    name: "",
    description: ""
  });
  const [createCategory] = useCreateCategoryMutation();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: ""
    }
  });

  useEffect(() => {
    register("name");
    register("description");
  }, [register]);

  // eslint-disable-next-line no-console

  const handleChangeValue = (name: any, value: any) => {
    setValue(name, value);
    setCategory({
      ...category,
      [name]: value
    });
  };

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    createCategory(data);
    reset();
    setCategory({
      name: "",
      description: ""
    });
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 15 }}
      labelAlign="left"
      onFinish={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <Form.Item label="Name">
        <Input value={category.name} onChange={(e) => handleChangeValue("name", e.target.value)} />
        {errors.name && <div className="ant-form-item-explain-error">{errors.name.message}</div>}
      </Form.Item>

      <Form.Item label="Description">
        <Input
          value={category.description}
          onChange={(e) => handleChangeValue("description", e.target.value)}
        />
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
