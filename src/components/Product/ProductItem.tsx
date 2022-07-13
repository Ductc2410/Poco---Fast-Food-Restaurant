import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { AppDispatch } from "../../redux/store";
import { increaseCartItem } from "../../redux/slice/cart.slide";
import IProduct from "../../types/Product";

import "./product.style.scss";

const ProductItem = ({ product }: { product: IProduct }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      increaseCartItem({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1
      })
    );
  };

  return (
    <div className="product_cart" key={product.id}>
      <div className="product_image">
        <img src={product.image} alt="" />
      </div>
      <div className="product_infor">
        <h3 className="product_name">
          <Link to={`/product/${product.name}`} state={{ id: product.id }}>
            {product.name}
          </Link>
        </h3>
        <p className="product_desc">{product.overview}</p>
        <h4 className="product_footer">
          <div className="product_price">
            {product.price_sale > 0 ? (
              <>
                <span className="product_price-normal sale">${product.price}</span>
                <span className="product_price-sale">${product.price_sale}</span>
              </>
            ) : (
              <span className="product_price">${product.price}</span>
            )}
          </div>
          <div className="product_icon" onClick={handleClick}>
            <i className="bx bxs-cart-add" />
          </div>
        </h4>
      </div>
    </div>
  );
};

export default ProductItem;
