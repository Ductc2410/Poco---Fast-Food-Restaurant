import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

import Orderitem from "./OrderItem/Orderitem";
import OrderModal from "./OrderModal/OrderModal";
import Modal from "../../../../components/Modal/Modal";
import { getOrderByUserId } from "../../../../api/order";
import IOrder from "../../../../types/Order";
import "./style.scss";

const OrderHistory = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [orderSelected, setOrderSelected] = useState<IOrder>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const getOrder = async () => {
      const { data } = await getOrderByUserId(user.id);
      setOrders(data);
    };

    getOrder();
  }, [user]);

  const closeModal = () => {
    setOpenModal((prev) => !prev);
  };

  const showOrderDetail = (orderNumber: string) => {
    const order = orders.find((item) => item.code === orderNumber);

    setOpenModal((prev) => !prev);
    setOrderSelected(order);
  };

  return (
    <div className="order-history">
      {orders.length === 0 && (
        <div className="order_empty">
          <p>You have no orders.</p>
          <i className="bx bxs-shopping-bag-alt" />
        </div>
      )}

      <div className="order_list">
        {orders.length > 0 &&
          orders.map((order, index) => (
            <Orderitem key={index} order={order} showOrder={showOrderDetail} />
          ))}
      </div>

      {openModal && (
        <Modal closeModal={closeModal}>
          <OrderModal orderSelected={orderSelected} />
        </Modal>
      )}
    </div>
  );
};

export default OrderHistory;
