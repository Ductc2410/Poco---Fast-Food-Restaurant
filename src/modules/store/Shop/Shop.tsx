import "./shop.style.scss";
import ShopList from "./ShopList";
import ShopSidebar from "./ShopSidebar";

const Shop = () => {
  return (
    <section className="shop section">
      <div className="shop_container container">
        <ShopList />
        <ShopSidebar />
      </div>
    </section>
  );
};

export default Shop;
