import { useState } from "react";
import { Table, Button, Popconfirm } from "antd";
import { useGetCategoryQuery } from "../../../api/category.api";
import ICategory from "../../../types/Category";

const CategoryList = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetCategoryQuery();

  const removeCategory = (id: number) => {
    setOpen(true);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: ICategory) => (
        <Popconfirm title="Are you sure to delete this category?" okText="Yes" cancelText="No">
          <Button danger onClick={() => removeCategory(record.id)}>
            Delete
          </Button>
        </Popconfirm>
      )
    }
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey={(category) => category.id}
      loading={isLoading}
      pagination={false}
      bordered
    />
  );
};

export default CategoryList;
