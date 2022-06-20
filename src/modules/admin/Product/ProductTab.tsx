import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Row, Col, Form, Input, Card, Button, Select, Collapse, Upload, notification } from "antd";
import type { NotificationPlacement } from "antd/lib/notification";
import { UploadOutlined } from "@ant-design/icons";

import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { productSchema } from "./product-form.schema";
import { IProductForm } from "../../../types/ProductForm";

import { upload } from "../../../api/upload";
import { createProduct } from "../../../api/product";

const { Panel } = Collapse;
const { Option } = Select;

const ProductTab = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IProductForm>({
    resolver: yupResolver(productSchema)
  });

  useEffect(() => {
    register("sku");
    register("name");
    register("image");
    register("price");
    register("price_sale");
    register("overview");
    register("description");
    register("description_short");
    register("quantity");
    register("category_id");
    register("status");
  }, [register]);

  const openNotification = (placement: NotificationPlacement, content: string) => {
    notification.info({
      message: "Thông báo",
      description: content,
      duration: 3,
      placement
    });
  };

  console.log(errors);

  const onSubmit: SubmitHandler<IProductForm> = async (formData: IProductForm) => {
    setLoading(true);
    const { data } = await upload(formData.image);

    try {
      createProduct({
        ...formData,
        image: data.url
      });
      setLoading(false);
      openNotification("top", "Thêm thành công");

      setTimeout(() => {
        navigate("/admin/product");
      }, 3000);
    } catch (error) {
      openNotification("top", "Có lỗi xảy ra");
      setLoading(false);
    }
  };

  const handleChangeValue = (name: any, value: any) => {
    setValue(name, value);
  };

  const handleChange = (value: string) => {
    setText(value);
    handleChangeValue("description", value);
  };

  const handleUpload = (data: any) => {
    const { fileList } = data;
    handleChangeValue("image", fileList[0]);
  };

  return (
    <Form
      name="product-create"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 20 }}
      labelAlign="left"
      autoComplete="off"
      onFinish={handleSubmit(onSubmit)}
    >
      <Row gutter={30}>
        <Col span={20}>
          <Collapse defaultActiveKey={["1", "2", "3"]}>
            <Panel header="General" key="1">
              <Form.Item label="Product Name">
                <Input onChange={(e) => handleChangeValue("name", e.target.value)} />
              </Form.Item>
              <Form.Item label="Regular Price">
                <Input onChange={(e) => handleChangeValue("price", e.target.value)} />
              </Form.Item>
              <Form.Item label="Sale Price">
                <Input onChange={(e) => handleChangeValue("price_sale", e.target.value)} />
              </Form.Item>
            </Panel>
            <Panel header="Information" key="2">
              <Form.Item label="Overview">
                <Input onChange={(e) => handleChangeValue("overview", e.target.value)} />
                {errors.overview && (
                  <div className="ant-form-item-explain-error">{errors.overview.message}</div>
                )}
              </Form.Item>
              <Form.Item label="Short Description">
                <Input.TextArea
                  onChange={(e) => handleChangeValue("description_short", e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Main Description">
                <ReactQuill theme="snow" value={text} onChange={(value) => handleChange(value)} />
              </Form.Item>
            </Panel>
            <Panel header="Inventory" key="3">
              <Form.Item label="SKU">
                <Input onChange={(e) => handleChangeValue("sku", e.target.value)} />
              </Form.Item>
              <Form.Item label="Quantity">
                <Input onChange={(e) => handleChangeValue("quantity", e.target.value)} />
              </Form.Item>
            </Panel>
          </Collapse>
        </Col>
        <Col span={4}>
          <Card size="small" type="inner" title="Status">
            <Select
              defaultValue="visiable"
              onChange={(value) => handleChangeValue("status", value)}
              style={{ width: "100%", marginBottom: "20px" }}
            >
              <Option value="visiable">Visiable</Option>
              <Option value="hidden">Hidden</Option>
            </Select>

            <Button htmlType="submit" type="primary" loading={loading}>
              Create
            </Button>
          </Card>

          <Card size="small" type="inner" title="Category" style={{ marginTop: "40px" }}>
            <Select
              defaultValue={1}
              onChange={(value) => handleChangeValue("category_id", Number(value))}
              style={{ width: "100%" }}
            >
              <Option value={1}>Burgers</Option>
              <Option value={2}>Cold Drinks</Option>
              <Option value={3}>Hot Drinks</Option>
              <Option value={4}>Pasta</Option>
              <Option value={5}>Pizza</Option>
              <Option value={6}>Uncategorized</Option>
            </Select>
          </Card>

          <Card size="small" type="inner" title="Product Image" style={{ marginTop: "40px" }}>
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={() => false}
              onChange={(value) => handleUpload(value)}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default ProductTab;
