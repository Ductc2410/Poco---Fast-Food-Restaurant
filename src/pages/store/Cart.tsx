import Breakscrumb from "../../components/Breadscrumb/Breakscrumb";
import Cart from "../../modules/store/Cart/Cart";

export default function CartPage() {
  return (
    <>
      <Breakscrumb text="Your Cart" />
      <Cart />
    </>
  );
}
