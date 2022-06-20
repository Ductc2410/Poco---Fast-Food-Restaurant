import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    address: "10 Downing Street"
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }
];

const CategoryList = () => {
  return <Table bordered dataSource={dataSource} columns={columns} pagination={false} />;
};

export default CategoryList;
