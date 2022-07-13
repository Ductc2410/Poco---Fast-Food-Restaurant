import { useState } from "react";
import { Pagination } from "antd";

import ShopList from "./ShopList";
import ShopSidebar from "./ShopSidebar";
import { useGetProductsQuery } from "../../../api/produc.api";
import { IPagination, IParamsFilter } from "../../../types/Pagination";
import "./shop.style.scss";

const Shop = () => {
  const [pagination, setPagination] = useState<IPagination>({
    _page: 1,
    _limit: 8
  });

  const [params, setParams] = useState<IParamsFilter>({
    name_like: "",
    categoryId: undefined,
    price_gte: undefined,
    price_lte: undefined
  });

  const { isLoading, isFetching, data } = useGetProductsQuery({
    ...pagination,
    ...params
  });

  const changeParams = (value: Object) => {
    setParams({
      ...params,
      ...value
    });
  };

  return (
    <section className="shop section">
      <div className="shop_container container">
        <ShopList isLoading={isLoading} isFetching={isFetching} data={data} />
        <ShopSidebar changeParams={changeParams} params={params} />

        {data && (
          <Pagination
            defaultCurrent={1}
            pageSize={pagination._limit}
            total={data.total}
            onChange={(value) => setPagination({ ...pagination, _page: value })}
          />
        )}
      </div>
    </section>
  );
};

export default Shop;
