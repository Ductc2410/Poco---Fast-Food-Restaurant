import IOrder from "../../../../../types/Order";
import "./orderItem.style.scss";

const Orderitem = ({ order, showOrder }: { order: IOrder; showOrder: any }) => {
  return (
    <div className="order_item">
      <div className="order_item-header">
        <p>September 25, 2020</p>
        <p className="total">Total: ${order.amount}</p>
      </div>
      <div className="order_item-content">
        <img src={order.orderDetail[0].image} alt="" />

        <div className="order_infor">
          <p className="name">Chocolate cake {order.orderDetail.length > 1 && "(More...)"}</p>
          <p>Quantity: {order.orderDetail[0].quantity}</p>
        </div>
      </div>
      <div className="order_item-footer">
        <p>
          Order Number : <span>{order.code}</span>
        </p>
        <h4 onClick={() => showOrder(order.code)}>See Details</h4>
      </div>
    </div>
  );
};

export default Orderitem;
