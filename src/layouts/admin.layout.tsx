import { Outlet, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./admin.style.scss";

const { Content, Sider } = Layout;

const items = [
  {
    label: "Product",
    key: "product",
    children: [
      { label: <Link to="/admin/product">List</Link>, key: "product-list" },
      { label: <Link to="/admin/product/create">Create</Link>, key: "product-create" }
    ]
  },
  {
    label: <Link to="/admin/category">Category</Link>,
    key: "category"
  },
  {
    label: <Link to="/shop">Shop</Link>,
    key: "Shop"
  }
];

export default function AdminLayout() {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
