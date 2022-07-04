import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { getOrderByUserId } from "../../../../api/order";

import Orderitem from "./OrderItem/Orderitem";
import OrderModal from "./OrderModal/OrderModal";
import Modal from "../../../../components/Modal/Modal";
import "./style.scss";
import IOrder from "../../../../types/Order";

const OrderHistory = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [orderSelected, setOrderSelected] = useState<IOrder>();

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

      {orders.length > 0 &&
        orders.map((order, index) => (
          <Orderitem key={index} order={order} showOrder={showOrderDetail} />
        ))}

      {openModal && (
        <Modal closeModal={closeModal}>
          <OrderModal orderSelected={orderSelected} />
        </Modal>
      )}
    </div>
  );
};

export default OrderHistory;
