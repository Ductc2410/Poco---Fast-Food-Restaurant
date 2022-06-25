import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, notification, Button } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store";

import { getProducts } from "../../../redux/slice/product.slide";
import IProduct from "../../../types/Product";

const ProductList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

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
        <Button type="primary" danger>
          Delete
        </Button>
      )
    }
  ];

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      notification.open({
        message: "Error Connection",
        description: error
      });
    }
  }, [error]);

  return (
    <>
      {loading && (
        <div className="box">
          <h3>Loading....</h3>
        </div>
      )}

      {!loading && products.length >= 0 && (
        <Table
          bordered
          columns={columns}
          dataSource={products}
          rowKey={(data: IProduct) => data.id}
        />
      )}
    </>
  );
};

export default ProductList;
