import ProductItem from "../../../../components/Product/ProductItem";
import "./style.scss";

const PopularDishser = () => (
  <section className="popular section">
    <div className="popular_container container">
      <h2 className="section_title">popular disher</h2>

      <div className="popular_tab">
        <ul className="popular_filter">
          <li className="btn btn-radius active">pizza</li>
          <li className="btn btn-radius">sushi</li>
          <li className="btn btn-radius">salats</li>
          <li className="btn btn-radius">burger</li>
          <li className="btn btn-radius">dersest</li>
        </ul>
        <div className="popular_products">{/* <ProductItem /> */}</div>
      </div>
    </div>
  </section>
);

export default PopularDishser;
