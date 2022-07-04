import { Table, Select } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrder, getOrderList } from "../../../redux/slice/order.slide";
import { RootState, AppDispatch } from "../../../redux/store";
import IOrder from "../../../types/Order";
import OrderStatus from "../../../constants/OrderStatus";

interface IOrderList {
  filter: { status?: string; code?: string };
}

const { Option } = Select;
const OrderList = ({ filter }: IOrderList) => {
  const dispatch: AppDispatch = useDispatch();
  const { orders, loading } = useSelector((state: RootState) => state.order);

  const handleChange = ({ id, status }: { id: number; status: string }) => {
    // eslint-disable-next-line no-alert
    const isConfirm = window.confirm("Wanna change status of this order ???");

    if (isConfirm) {
      dispatch(changeOrder({ id, status }));
    }
  };

  const orderColumn = [
    {
      title: "Order Code",
      dataIndex: "code",
      key: "code"
    },
    {
      title: "Customer",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, record: any) => (
        <Select
          defaultValue={record.status}
          onChange={(value) => handleChange({ id: record.id, status: value })}
        >
          {OrderStatus.map((status, index) => (
            <Option key={index} value={status}>
              {status}
            </Option>
          ))}
        </Select>
      )
    },
    {
      title: "Total",
      dataIndex: "amount",
      key: "amount",
      render: (_: any, record: IOrder) => `$${record.amount}`
    }
  ];

  useEffect(() => {
    dispatch(getOrderList(filter));
  }, [dispatch, filter]);

  return (
    <Table
      dataSource={orders}
      columns={orderColumn}
      rowKey={(data: IOrder) => data.code}
      loading={loading}
      pagination={false}
    />
  );
};

export default OrderList;
