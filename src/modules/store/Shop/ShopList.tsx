import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../../api/produc.api";

const ShopList = () => {
  const { isLoading, isSuccess, data } = useGetProductsQuery();

  return (
    <div className="shop_products grid">
      {isLoading && "Loading"}

      {isSuccess &&
        data?.map((product) => (
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
                <div className="product_icon">
                  <i className="bx bxs-cart-add" />
                </div>
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShopList;
