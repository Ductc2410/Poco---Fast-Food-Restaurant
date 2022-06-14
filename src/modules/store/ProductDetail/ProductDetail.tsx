import ProductItem from "../../../components/Product/ProductItem";
import "./productDetail.style.scss";

const ProductDetail = () => (
  <section className="prDetail section">
    <div className="prDetail_container container grid">
      <div className="prDetail_image">
        <div>
          <img
            src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/49-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="prDetail_content">
        <h2 className="name">Tagliatelle Molto</h2>
        <div className="start">
          <i className="bx bxs-star" />
          <i className="bx bxs-star" />
          <i className="bx bxs-star" />
          <i className="bx bx-star" />
          <i className="bx bx-star" />
        </div>
        <p className="desc">
          A mighty meaty double helping of all the reasons you love our burger.
        </p>
        <p className="price">$5.04</p>
        <div className="prDetail_action">
          <input type="number" className="prDetail_input" min="1" />
          <button type="button" className="btn btn-primary">
            add to card
          </button>
        </div>
        <div className="category">
          <p>
            Category:
            <span> Pasta</span>
          </p>
          <div className="share">
            Share:
            <div className="share_list">
              <i className="bx bxl-facebook" />
              <i className="bx bxl-twitter" />
              <i className="bx bxl-instagram" />
            </div>
          </div>
          <ul className="shipping">
            <li>Free global shipping on all orders</li>
            <li>30 days easy returns if you change your mind</li>
            <li>Order before noon for same day dispatch</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="prDetail_tab container">
      <div className="prDetail_tab-header">
        <button type="button" className="btn btn-primary">
          Description
        </button>
        <button type="button" className="btn btn-primary">
          Reviews
        </button>
      </div>

      <div className="prDetail_tab-infor">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium molestiae,
          doloribus earum molestias esse beatae adipisci sapiente ea ipsa reprehenderit quos nam.
          Earum corporis, sapiente sunt ab quaerat temporibus? Voluptatibus quae laboriosam, quos
          explicabo tempora odit ducimus quod voluptas repellendus atque minima sit saepe eligendi
          doloribus maiores, delectus neque ex praesentium facere suscipit repudiandae facilis
          reprehenderit eum voluptate! Hic?
        </p>
      </div>
    </div>

    <div className="product_related">
      <h3 className="section_title">Product Related</h3>
      <div className="related_container container grid">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  </section>
);

export default ProductDetail;
