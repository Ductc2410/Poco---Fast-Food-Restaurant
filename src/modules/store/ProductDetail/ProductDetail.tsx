import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import parse from "html-react-parser";
import { Image } from "antd";

import { AppDispatch } from "../../../redux/store";
import { increaseCartItem } from "../../../redux/slice/cart.slide";
import { useGetProductByNameQuery } from "../../../api/produc.api";

import ProductItem from "../../../components/Product/ProductItem";
import "./productDetail.style.scss";
import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";

const ProductDetail = () => {
  const dispatch: AppDispatch = useDispatch();
  const params = useParams();

  const [quantity, setQuantity] = useState<number>(1);
  const [showTab, setShowTab] = useState({
    description: false,
    comment: true
  });
  const { data, isLoading } = useGetProductByNameQuery(params.name);

  const handleClick = () => {
    dispatch(
      increaseCartItem({
        id: data[0].id,
        name: data[0].name,
        image: data[0].image,
        price: data[0].price,
        quantity
      })
    );
  };

  return (
    <>
      <div className="prDetail_breadscrumb">
        <div className="container">
          <p>
            <Link to="/shop">Home -- </Link>
            {data && data[0].name}
          </p>
        </div>
      </div>
      <section className="prDetail section">
        {isLoading && (
          <div className="prDetail_container container">
            <p>Loading</p>
          </div>
        )}

        {data && data.length > 0 && (
          <>
            <div className="prDetail_container container grid">
              <div className="prDetail_image">
                <Image width={"100%"} src={data[0].image} />
              </div>
              <div className="prDetail_content">
                <h2 className="name">{data[0].name}</h2>
                <div className="start">
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bx-star" />
                  <i className="bx bx-star" />
                </div>
                <p className="desc">{data[0].overview}</p>
                <p className="price">${data[0].price}</p>
                <div className="prDetail_action">
                  <input
                    type="number"
                    className="prDetail_input"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />
                  <button type="button" className="btn btn-primary" onClick={handleClick}>
                    add to cart
                  </button>
                </div>
                <div className="category">
                  <p>
                    Status:
                    <span> {data[0].status === "visiable" ? "Available" : "Unavailable"}</span>
                  </p>
                  <p>
                    Category:
                    <span> {data[0].category.name}</span>
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
                <button
                  type="button"
                  className="btn btn-primary no-active"
                  onClick={() =>
                    setShowTab({
                      description: true,
                      comment: false
                    })
                  }
                >
                  Description
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    setShowTab({
                      description: false,
                      comment: true
                    })
                  }
                >
                  Reviews
                </button>
              </div>

              {showTab.description && (
                <div className="prDetail_tab-infor">{parse(data[0].description)}</div>
              )}

              {showTab.comment && (
                <div className="prDetail_tab-comment">
                  <CommentList id={Number(data[0].id)} />
                  <CommentForm id={Number(data[0].id)} />
                </div>
              )}
            </div>

            <div className="product_related">
              <h3 className="section_title">RELATED PRODUCTS</h3>
              <div className="related_container container grid">
                <ProductItem product={data[0]} />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ProductDetail;
