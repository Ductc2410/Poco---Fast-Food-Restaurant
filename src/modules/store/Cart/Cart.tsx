import "./cart.style.scss";

const Cart = () => (
  <div className="cart section">
    <div className="cart_container container">
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
          <tr>
            <td className="image">
              <img
                src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655085113/cart-2_aepe6f.png"
                alt=""
              />
            </td>
            <td>
              <a href="#">Bacon Alfredo</a>
            </td>
            <td className="price">
              <p>$8.13</p>
            </td>
            <td className="quantity">
              <div className="down">
                <i className="bx bx-minus" />
              </div>
              <span>2</span>
              <div className="up">
                <i className="bx bx-plus" />
              </div>
            </td>
            <td className="total">$16.26</td>
          </tr>
        </tbody>
      </table>

      <div className="cart_total">
        <h2 className="cart_total-title">Cart totals</h2>
        <div className="cart_total-item">
          <p>Subtotal</p>
          <p>$36.12</p>
        </div>
        <div className="cart_total-item">
          <p>Shipping</p>
          <p>Free Shipping</p>
        </div>
        <div className="cart_total-item">
          <p>Total</p>
          <p>$36.12</p>
        </div>
      </div>
      <div className="cart_btn">
        <button type="button" className="btn btn-primary">
          Proceed to cart
        </button>
      </div>
    </div>
  </div>
);

export default Cart;
