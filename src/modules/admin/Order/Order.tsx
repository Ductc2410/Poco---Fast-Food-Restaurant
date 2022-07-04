import { useState } from "react";
import OrderFilter from "./OrderFilter";
import OrderList from "./OrderList";

const Order = () => {
  const [filter, setFilter] = useState({
    status: undefined,
    code: undefined
  });

  const changeFilter = (params: any) => {
    setFilter({
      ...filter,
      ...params
    });
  };

  console.log("render");

  return (
    <>
      <OrderFilter changeFilter={changeFilter} />
      <OrderList filter={filter} />
    </>
  );
};

export default Order;
