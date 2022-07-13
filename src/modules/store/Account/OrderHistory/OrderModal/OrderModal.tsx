import IOrder from "../../../../../types/Order";
import "./orderModal.style.scss";

const OrderModal = ({ orderSelected }: { orderSelected: IOrder | undefined }) => {
  console.log(orderSelected);

  return (
    <div className="modal-order grid">
      <div className="detail">
        <div className="detail-status">
          <div className="detail-item">
            <h4>Delivery Address</h4>
            <p>{orderSelected?.address}</p>
          </div>

          <div className="detail-item">
            <h4>Payment Method</h4>
            <div className="flex">
              <p>Cash On Delivery</p>
              <p className="status">{orderSelected?.status}</p>
            </div>
          </div>
        </div>

        <div className="detail-cart">
          {orderSelected?.orderDetail.map((order, index) => (
            <div className="cart-item" key={index}>
              <img src={order.image} alt="" />
              <div>
                <p className="name">{order.name}</p>
                <p>
                  Quantity: {order.quantity} - Price: ${order.price}
                </p>
                <p>Amount: ${order.quantity * order.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="summary">
        <h4>Order Summary</h4>
        <div className="flex">
          <p>Product Subtotal</p>
          <p>${orderSelected?.amount}</p>
        </div>
        <div className="flex">
          <p>Shipping</p>
          <p>$0</p>
        </div>
        <div className="flex">
          <p>Discount</p>
          <p>$0</p>
        </div>

        <div className="total">
          <div className="flex">
            <p>Total</p>
            <p>${orderSelected?.amount}</p>
          </div>

          <button type="button" className="btn btn-primary btn-trans">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
