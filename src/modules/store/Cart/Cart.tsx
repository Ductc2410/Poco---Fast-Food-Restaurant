import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store";
import { increaseCartItem, decreaseCartItem } from "../../../redux/slice/cart.slide";
import "./cart.style.scss";

const Cart = () => {
  const dispatch: AppDispatch = useDispatch();
  const { items, amount } = useSelector((state: RootState) => state.cart);

  return (
    <div className="cart section">
      <div className="cart_container container">
        {items.length === 0 && (
          <div className="cart_empty">
            <div className="cart_empty-content">
              <i className="bx bx-cart-alt" />
              <p>Your cart is currently empty.</p>
            </div>
            <button type="button" className="btn btn-primary">
              <a href="/shop">return to shop</a>
            </button>
          </div>
        )}

        {items.length > 0 && (
          <>
            <table className="cart_table">
              <thead className="cart_table-header">
                <tr>
                  <th> </th>
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
                      <td className="image">
                        <img src={item.image} alt="" />
                      </td>
                      <td>
                        <a href={`/product/${item.name}`}>{item.name}</a>
                      </td>
                      <td className="price">
                        <p>${item.price}</p>
                      </td>
                      <td className="quantity">
                        <div
                          className="down"
                          onClick={() =>
                            dispatch(decreaseCartItem({ id: item.id, price: item.price }))
                          }
                        >
                          <i className="bx bx-minus" />
                        </div>
                        <span>{item.quantity}</span>
                        <div
                          className="up"
                          onClick={() =>
                            dispatch(
                              increaseCartItem({ id: item.id, quantity: 1, price: item.price })
                            )
                          }
                        >
                          <i className="bx bx-plus" />
                        </div>
                      </td>
                      <td className="total">${item.quantity * item.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="cart_total">
              <h2 className="cart_total-title">Cart totals</h2>
              <div className="cart_total-item">
                <p>Subtotal</p>
                <p>${amount.toFixed(2)}</p>
              </div>
              <div className="cart_total-item">
                <p>Shipping</p>
                <p>Free Shipping</p>
              </div>
              <div className="cart_total-item">
                <p>Total</p>
                <p>${amount.toFixed(2)}</p>
              </div>
            </div>

            <div className="cart_btn">
              <button type="button" className="btn btn-primary">
                <Link to={"/checkout"}>Proceed to checkout</Link>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
