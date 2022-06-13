import "./product.style.scss";

const ProductItem = () => (
  <div className="product_cart">
    <div className="product_image">
      <img
        src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655085113/cart-2_aepe6f.png"
        alt=""
      />
    </div>
    <div className="product_infor">
      <h3 className="product_name">BBQ chicken breast</h3>
      <p className="product_desc">
        A mighty meaty double helping of all the reasons you love our burger.
      </p>
      <h4 className="product_footer">
        <div className="product_price">
          <span className="product_price-normal sale">$12.61</span>
          <span className="product_price-sale">$8.00</span>
        </div>
        <div className="product_icon">
          <i className="bx bxs-cart-download" />
        </div>
      </h4>
    </div>
  </div>
);

export default ProductItem;
