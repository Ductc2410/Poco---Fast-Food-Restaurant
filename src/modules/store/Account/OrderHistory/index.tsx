import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getOrderByUserId } from "../../../../api/order";
import { RootState } from "../../../../redux/store";
import Orderitem from "./OrderItem/Orderitem";
import "./style.scss";

const OrderHistory = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      const { data } = await getOrderByUserId(user.id);
      setOrders(data);
    };

    getOrder();
  }, [user]);

  return (
    <div className="order-history">
      {orders.length === 0 && (
        <div className="order_empty">
          <p>You have no orders.</p>
          <i className="bx bxs-shopping-bag-alt" />
        </div>
      )}

      {orders.length > 0 && orders.map((order, index) => <Orderitem key={index} order={order} />)}
    </div>
  );
};

export default OrderHistory;
