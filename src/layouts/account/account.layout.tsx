import { Link, Outlet } from "react-router-dom";
import Breakscrumb from "../../components/Breadscrumb/Breakscrumb";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./style.scss";

const AccountLayout = () => {
  return (
    <>
      <Header />

      <Breakscrumb text="account" />

      <div className="account">
        <div className="account_container container grid">
          <div className="account_sidebar">
            <ul className="account_sidebar-list">
              <li className="account_sidebar-item active">
                <i className="bx bx-time-five" />
                <Link to={"/account/order-history"}>order history</Link>
              </li>
              <li className="account_sidebar-item">
                <i className="bx bx-location-plus" />
                <Link to={"/account/order-history"}>addresses</Link>
              </li>

              <li className="account_sidebar-item">
                <i className="bx bx-user-circle" />
                <Link to={"/account/order-history"}>Personal Details</Link>
              </li>
            </ul>
          </div>
          <div className="account_content">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AccountLayout;
