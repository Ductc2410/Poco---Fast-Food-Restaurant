import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import "./checkout.style.scss";
import CheckoutForm from "./ChekoutForm/CheckoutForm";

const Checkout = () => {
  const { items, amount } = useSelector((state: RootState) => state.cart);

  return (
    <div className="checkout section">
      <div className="checkout_container container">
        <h2 className="checkout_title">Cart details</h2>
        <table className="cart_table">
          <thead className="cart_table-header">
            <tr>
              <th className="name">Product</th>
              <th className="price">Price</th>
              <th className="quantity">Quatity</th>
              <th className="total">Subtotal</th>
            </tr>
          </thead>
          <tbody className="cart_table-body">
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <Link to={`/product/${item.name}`}>{item.name}</Link>
                  </td>
                  <td className="price">
                    <p>${item.price}</p>
                  </td>
                  <td className="quantity">
                    <span>{item.quantity}</span>
                  </td>
                  <td className="total">${item.quantity * item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="cart_total">
          <div className="cart_total-item">
            <p>Shipping</p>
            <p>0</p>
          </div>
          <div className="cart_total-item">
            <p>Total</p>
            <p>${Math.round(amount * 100) / 100}</p>
          </div>
        </div>

        <h2 className="checkout_title" style={{ marginTop: "50px" }}>
          Billing details
        </h2>
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Checkout;
