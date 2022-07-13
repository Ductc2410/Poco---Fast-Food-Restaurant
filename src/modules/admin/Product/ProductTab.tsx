import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Row, Col, Form, Input, Card, Button, Select, Collapse, Upload, notification } from "antd";
import type { NotificationPlacement } from "antd/lib/notification";
import { UploadOutlined } from "@ant-design/icons";

import ReactQuill from "react-quill";
import { productSchema } from "./product-form.schema";
import { IProductForm } from "../../../types/ProductForm";

import { upload } from "../../../api/upload";
import { createProduct, getProduct, updateProduct } from "../../../api/product";
import { getCategory } from "../../../api/category";

const { Panel } = Collapse;
const { Option } = Select;

type FormMode = {
  mode: "create" | "edit";
};

const ProductTab = ({ mode }: FormMode) => {
  const navigate = useNavigate();
  const params = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [categories, setCategories] = useState([]);
  const [initFormData, setInitFormData] = useState<any>();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<IProductForm>({
    resolver: yupResolver(productSchema)
  });

  useEffect(() => {
    if (params.id) {
      getProduct(Number(params.id)).then(({ data }) => {
        reset(data);
        setInitFormData(data);

        setText(data.description);
      });
    }
  }, [params.id, reset]);

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
    register("categoryId");
    register("status");
  }, [register]);

  useEffect(() => {
    const getCategies = async () => {
      const { data } = await getCategory();
      setCategories(data);
    };

    getCategies();
  }, []);

  const openNotification = (placement: NotificationPlacement, content: string) => {
    notification.info({
      message: "Thông báo",
      description: content,
      duration: 1.5,
      placement
    });
  };

  const onSubmit: SubmitHandler<IProductForm> = async (formData: IProductForm) => {
    setLoading(true);
    const { data } = await upload(formData.image);

    try {
      if (mode === "create") {
        createProduct({
          ...formData,
          image: data.url
        });
        setLoading(false);
        openNotification("top", "Create Success");
      }

      if (mode === "edit") {
        updateProduct(
          {
            ...formData,
            image: data.url
          },
          Number(params.id)
        );
        setLoading(false);
        openNotification("top", "Update Success");
      }

      setTimeout(() => {
        navigate("/admin/product");
      }, 1500);
    } catch (error) {
      openNotification("top", "Có lỗi xảy ra");
      setLoading(false);
    }
  };

  const handleChangeValue = (name: any, value: any) => {
    setValue(name, value);
    setInitFormData({
      ...initFormData,
      [name]: value
    });
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
                <Input
                  onChange={(e) => handleChangeValue("name", e.target.value)}
                  value={initFormData?.name}
                />
                {errors.name && (
                  <div className="ant-form-item-explain-error">{errors.name.message}</div>
                )}
              </Form.Item>
              <Form.Item label="Regular Price">
                <Input
                  onChange={(e) => handleChangeValue("price", e.target.value)}
                  value={initFormData?.price}
                />
              </Form.Item>
              <Form.Item label="Sale Price">
                <Input
                  onChange={(e) => handleChangeValue("price_sale", e.target.value)}
                  value={initFormData?.price_sale}
                />
              </Form.Item>
            </Panel>
            <Panel header="Information" key="2">
              <Form.Item label="Overview">
                <Input
                  onChange={(e) => handleChangeValue("overview", e.target.value)}
                  value={initFormData?.overview}
                />
                {errors.overview && (
                  <div className="ant-form-item-explain-error">{errors.overview.message}</div>
                )}
              </Form.Item>
              <Form.Item label="Short Description">
                <Input.TextArea
                  onChange={(e) => handleChangeValue("description_short", e.target.value)}
                  value={initFormData?.description_short}
                />
              </Form.Item>
              <Form.Item label="Main Description">
                <ReactQuill
                  theme="snow"
                  value={text}
                  onChange={(value) => handleChange(value)}
                  defaultValue={initFormData?.description}
                />
              </Form.Item>
            </Panel>
            <Panel header="Inventory" key="3">
              <Form.Item label="SKU">
                <Input
                  onChange={(e) => handleChangeValue("sku", e.target.value)}
                  value={initFormData?.sku}
                />
              </Form.Item>
              <Form.Item label="Quantity">
                <Input
                  onChange={(e) => handleChangeValue("quantity", e.target.value)}
                  value={initFormData?.quantity}
                />
              </Form.Item>
            </Panel>
          </Collapse>
        </Col>
        <Col span={4}>
          <Card size="small" type="inner" title="Status">
            <Select
              placeholder={initFormData?.status}
              style={{ width: "100%", marginBottom: "20px" }}
              onChange={(value) => handleChangeValue("status", value)}
            >
              <Option value="visiable">Visiable</Option>
              <Option value="hidden">Hidden</Option>
            </Select>
          </Card>

          <Card size="small" type="inner" title="Category" style={{ marginTop: "40px" }}>
            <Select
              placeholder={initFormData?.categoryId}
              style={{ width: "100%" }}
              onChange={(value) => handleChangeValue("categoryId", Number(value))}
            >
              <Option value={0} disabled>
                Choose your category
              </Option>
              {categories &&
                categories.map((item: any) => (
                  <Option key={item.id} value={item.id}>
                    {`${item.id} - ${item.name}`}
                  </Option>
                ))}
            </Select>
          </Card>

          <Card size="small" type="inner" title="Product Image" style={{ marginTop: "40px" }}>
            {mode === "edit" && <img src={initFormData?.image} alt="" />}
            <Upload
              listType="picture"
              maxCount={1}
              beforeUpload={() => false}
              onChange={(value) => handleUpload(value)}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Card>

          <Button htmlType="submit" type="primary" loading={loading} style={{ marginTop: "40px" }}>
            Create
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ProductTab;
