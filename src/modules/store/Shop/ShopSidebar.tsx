import { Slider, Tag } from "antd";
import { IParamsFilter } from "../../../types/Pagination";

interface ShopSidebarProps {
  changeParams: Function;
  params: IParamsFilter;
}
const ShopSidebar = ({ changeParams, params }: ShopSidebarProps) => {
  return (
    <div className="shop_sidebar">
      <div className="sidebar_item">
        <h3 className="sidebar_title">Your Filters</h3>
        <div className="sidebar_tag">
          <Tag
            color="orange"
            closable
            visible={!!params.categoryId}
            onClose={() => changeParams({ categoryId: undefined })}
          >
            Pizza
          </Tag>

          <Tag
            color="orange"
            closable
            visible={!!params.name_like}
            onClose={() => changeParams({ name_like: undefined })}
          >
            {params.name_like}
          </Tag>

          <Tag
            color="orange"
            closable
            visible={!!params.price_lte}
            onClose={() => changeParams({ price_gte: undefined, price_lte: undefined })}
          >
            ${params.price_gte} - ${params.price_lte}
          </Tag>
        </div>
      </div>

      <div className="sidebar_item sidebar_category">
        <h3 className="sidebar_title sidebar_title-cate">Categories</h3>
        <ul className="category_list">
          <li
            className="category_item"
            onClick={() =>
              changeParams({
                categoryId: 1
              })
            }
          >
            <i className="bx bxs-pizza" />
            <span>Pizza</span>
          </li>
          <li className="category_item">
            <i className="bx bxs-baguette" />
            <span>Burgers</span>
          </li>
          <li className="category_item">
            <i className="bx bxs-pizza" />
            <span>Hots Drinks</span>
          </li>
          <li className="category_item">
            <i className="bx bxs-bowl-hot" />
            <span>Drinks</span>
          </li>
          <li className="category_item">
            <i className="bx bxs-pizza" />
            <span>Pasta</span>
          </li>
          <li className="category_item">
            <i className="bx bxs-food-menu" />
            <span>Uncategorized</span>
          </li>
        </ul>
      </div>

      <div className="sidebar_item sidebar_form">
        <input
          type="text"
          placeholder="Search products...."
          onChange={(e) =>
            changeParams({
              name_like: e.target.value
            })
          }
        />
        <i className="bx bx-search-alt-2" />
        {/* <i className="bx bx-loader bx-spin" /> */}
      </div>

      <div className="sidebar_item sidebar_price">
        <h3 className="sidebar_title">Filter by price</h3>
        <Slider
          range
          defaultValue={[0, 50]}
          step={10}
          max={50}
          tooltipVisible={false}
          onChange={(value) =>
            changeParams({
              price_gte: value[0],
              price_lte: value[1]
            })
          }
        />
        <p className="price">Price: $0 - $50</p>
        <button type="button" className="btn btn-primary btn-hover btn-filter">
          Filter
        </button>
      </div>

      <div className="sidebar_item sidebar_history">
        <h3 className="sidebar_title">Recently watched</h3>
        <div className="history_list">
          <div className="history_item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655710062/Shop/m9xnxgtsphlufstu59tk.png"
                alt=""
              />
            </div>
            <div className="infor">
              <div className="infor-start">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bx-star" />
              </div>
              <p className="infor-name">Vegge Lover</p>
              <p className="infor-price">$9.13</p>
            </div>
          </div>
          <div className="history_item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655710062/Shop/m9xnxgtsphlufstu59tk.png"
                alt=""
              />
            </div>
            <div className="infor">
              <div className="infor-start">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bx-star" />
              </div>
              <p className="infor-name">Vegge Lover</p>
              <p className="infor-price">$9.13</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
