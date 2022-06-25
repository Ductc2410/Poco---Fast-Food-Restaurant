import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import "./Header.style.scss";

const Header = () => (
  <header className="header container">
    <div className="header_bottom">
      <nav className="nav">
        <div className="nav_toggle">
          <i className="bx bx-menu" />
        </div>

        <div className="nav_left">
          <a href="#">
            <img className="nav_logo" src={Logo} alt="" />
          </a>

          <ul className="nav_list">
            <li className="nav_item">
              <Link to="/home" className="nav_link">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link to="/shop" className="nav_link">
                Menu
              </Link>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link">
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link">
                Blog
              </a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav_phone">
          <i className="bx bxs-phone-outgoing" />
        </div>

        <div className="nav_action">
          <ul className="action_list">
            <li className="action_item">
              <Link to="home">
                <i className="bx bxs-store" />
              </Link>
              <Link to="home" className="action_link">
                Shop
              </Link>
            </li>
            <li className="action_item">
              <Link to="login">
                <i className="bx bxs-user" />
              </Link>
              <a href="login" className="action_link">
                Account
              </a>
            </li>
            <li className="action_item">
              <i className="bx bx-search-alt-2" />
              <a href="" className="action_link">
                Search
              </a>
            </li>
            <li className="action_item">
              <i className="bx bxs-heart" />
              <a href="" className="action_link">
                Wishlist
              </a>
            </li>
            <li className="action_item">
              <Link to="cart">
                <i className="bx bxs-cart" />
              </Link>
              <Link to="/cart" className="action_link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
