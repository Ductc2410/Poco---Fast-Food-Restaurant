import React from "react";
import Breakscrumb from "../../components/Breadscrumb/Breakscrumb";
import Shop from "../../modules/store/Shop/Shop";

const ShopPage = () => {
  return (
    <>
      <Breakscrumb text="Menu" />
      <Shop />
    </>
  );
};

export default ShopPage;
