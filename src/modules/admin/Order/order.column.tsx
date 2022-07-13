import { Select } from "antd";
import IOrder from "../../../types/Order";
import OrderStatus from "../../../constants/OrderStatus";

const { Option } = Select;

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
    render: (_: any, record: IOrder) => (
      <Select defaultValue={record.status}>
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

export default orderColumn;
