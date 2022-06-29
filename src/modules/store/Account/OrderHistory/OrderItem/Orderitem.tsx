import { Link } from "react-router-dom";
import IOrder from "../../../../../types/Order";
import "./orderItem.style.scss";

const Orderitem = ({ order }: { order: IOrder }) => {
  return (
    <div className="order_item">
      <div className="order_item-header">
        <p>September 25, 2020</p>
        <p className="total">Total: ${order.amount}</p>
      </div>
      <div className="order_item-content">
        <img src={order.orderDetail[0].image} alt="" />

        <div className="order_infor">
          <p className="name">Chocolate cake</p>
          <p>Quantity: 1</p>
        </div>
      </div>
      <div className="order_item-footer">
        <p>
          Order Number : <span>{order.code}</span>
        </p>
        <Link to={"#"}>See Details</Link>
      </div>
    </div>
  );
};

export default Orderitem;
