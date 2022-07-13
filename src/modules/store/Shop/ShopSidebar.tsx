import { ChangeEvent, useEffect, useState } from "react";
import { Slider, Tag } from "antd";

import { IParamsFilter } from "../../../types/Pagination";
import ICategory from "../../../types/Category";
import { getCategory } from "../../../api/category";
import useDebounce from "../../../hooks/useDebounce";

interface ShopSidebarProps {
  changeParams: Function;
  params: IParamsFilter;
}
const ShopSidebar = ({ changeParams, params }: ShopSidebarProps) => {
  const [category, setCategory] = useState<ICategory[]>();
  const [key, setKey] = useState<any>();
  const debouncedValue = useDebounce(key, 500);

  useEffect(() => {
    getCategory().then(({ data }) => setCategory(data));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKey({
      name_like: e.target.value
    });
  };

  useEffect(() => {
    changeParams(debouncedValue);
  }, [debouncedValue]);

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
            {category && category.find((item) => item.id === params.categoryId)?.name}
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

      <div className="sidebar_item sidebar_form">
        <input type="text" placeholder="Search products...." onChange={handleChange} />
        <i className="bx bx-search-alt-2" />
        {/* <i className="bx bx-loader bx-spin" /> */}
      </div>

      <div className="sidebar_item sidebar_category">
        <h3 className="sidebar_title sidebar_title-cate">Categories</h3>
        <ul className="category_list">
          {category &&
            category.map((item) => (
              <li
                key={item.id}
                className="category_item"
                onClick={() =>
                  changeParams({
                    categoryId: item.id
                  })
                }
              >
                <span>{item.name}</span>
              </li>
            ))}
        </ul>
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
