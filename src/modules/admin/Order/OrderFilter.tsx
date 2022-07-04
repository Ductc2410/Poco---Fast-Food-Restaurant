import { Segmented, Form, Button, Input, Space } from "antd";

const OrderFilter = ({ changeFilter }: { changeFilter: Function }) => {
  const onFinish = (params: any) => {
    if (params.code) {
      changeFilter(params);
    } else {
      changeFilter({ code: undefined });
    }
  };

  return (
    <Space size={100} style={{ marginBottom: 40 }}>
      <Segmented
        options={["All Orders", "Processing", "Shipping", "Completed", "Cancelled"]}
        defaultValue={"All Orders"}
        onChange={(value) => changeFilter({ status: value === "All Orders" ? undefined : value })}
      />

      <Form layout="inline" onFinish={onFinish}>
        <Form.Item label="Search" name="code">
          <Input placeholder="By Order Code" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default OrderFilter;
