import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, notification, Button, Modal } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store";

import { deleteProduct, getProducts } from "../../../redux/slice/product.slide";
import IProduct from "../../../types/Product";
import FilterProduct from "./FilterProduct";

const ProductList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  const [filters, setFilters] = useState({
    categoryId: undefined,
    orderBy: undefined,
    name_like: undefined
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productSelect, setProductSelect] = useState<number>(0);

  const handleClick = (id: number) => {
    setIsOpen(true);
    setProductSelect(id);
  };

  const changeFilter = (data: any) => {
    setFilters({
      ...filters,
      ...data
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_: any, record: IProduct) => <Link to={`${record.id}`}>{record.name}</Link>
    },
    {
      title: "",
      dataIndex: "image",
      key: "name",
      render: (_: any, record: IProduct) => (
        <img src={record.image} alt={record.name} style={{ width: "100px" }} />
      )
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity"
    },
    {
      title: "Available",
      dataIndex: "isAvailable",
      key: "available",
      render: (_: any, record: IProduct) => (
        <Checkbox defaultChecked={record.status === "visiable"} />
      )
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: IProduct) => (
        <Button type="primary" danger onClick={() => handleClick(record.id)}>
          Delete
        </Button>
      )
    }
  ];

  useEffect(() => {
    dispatch(getProducts(filters));
  }, [dispatch, filters]);

  useEffect(() => {
    if (error) {
      notification.open({
        message: "Error Connection",
        description: error
      });
    }
  }, [error]);

  const handleOk = () => {
    dispatch(deleteProduct(productSelect));
    setIsOpen(false);
  };

  return (
    <>
      <FilterProduct changeFilter={changeFilter} />

      <Table
        bordered
        columns={columns}
        dataSource={products}
        rowKey={(data: IProduct) => data.id}
        pagination={false}
        loading={loading}
      />

      <Modal
        title="Confirm"
        visible={isOpen}
        onOk={() => handleOk()}
        onCancel={() => setIsOpen(false)}
      >
        <p>Xoa san pham</p>
      </Modal>
    </>
  );
};

export default ProductList;
