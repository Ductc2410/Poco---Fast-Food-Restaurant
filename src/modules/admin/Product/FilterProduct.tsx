import { Space, Select, Form, Input, Button } from "antd";
import "./filter.style.scss";

const { Option } = Select;
const FilterProduct = ({ changeFilter }: { changeFilter: (data: any) => void }) => {
  return (
    <div className="product-filter">
      <Space align="center" size="middle" style={{ marginRight: 60 }}>
        <span>Filter</span>
        <Select
          placeholder="Category"
          style={{ width: 120 }}
          onChange={(value) => changeFilter({ categoryId: value })}
        >
          <Option value="1">Pizza</Option>
          <Option value="2">Burger</Option>
          <Option value="3">Drinks</Option>
        </Select>
      </Space>

      <Space align="center" size="middle" style={{ marginRight: 60 }}>
        <span>Sort</span>
        <Select
          placeholder="Default"
          style={{ width: 120 }}
          onChange={(value) => changeFilter({ orderBy: value })}
        >
          <Option value="desc">Price Desc</Option>
          <Option value="asc">Price Asc</Option>
        </Select>
      </Space>

      <Space align="center" size="middle">
        <span>Search By Name</span>
        <Form layout="inline" onFinish={(value) => changeFilter({ name_like: value.key })}>
          <Form.Item name="key">
            <Input autoComplete="off" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
};

export default FilterProduct;
