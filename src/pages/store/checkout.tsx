import React from "react";
import Breakscrumb from "../../components/Breadscrumb/Breakscrumb";
import Checkout from "../../modules/store/Checkout/Checkout";

export default function CheckoutPage() {
  return (
    <>
      <Breakscrumb text="Check your order" />
      <Checkout />
    </>
  );
}
