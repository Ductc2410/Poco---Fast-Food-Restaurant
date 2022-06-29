import { Col, Row } from "antd";
import CategoryForm from "../../modules/admin/Category/CategoryForm";
import CategoryList from "../../modules/admin/Category/CategoryList";

const AdminCategory = () => {
  return (
    <Row>
      <Col span={10}>
        <CategoryForm />
      </Col>
      <Col span={14}>
        <CategoryList />
      </Col>
    </Row>
  );
};

export default AdminCategory;
