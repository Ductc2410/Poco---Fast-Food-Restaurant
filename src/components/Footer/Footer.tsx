import Logo from "../../assets/logo.svg";
import "./Footer.style.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer_top section">
      <div className="footer_logo">
        <img src={Logo} alt="" />
      </div>

      <div className="footer_container container grid">
        <div className="address">
          <h2 className="footer_title">ADDRESS</h2>
          <p>
            570 8th Ave, <br />
            New York, NY 10018 <br />
            United States
          </p>
        </div>
        <div className="booking">
          <h2 className="footer_title">BOOK A TABLE</h2>
          <p>
            Dogfood och Sliders foodtruck. <br />
            Under Om oss kan ni läsa
          </p>
          <h3 className="phone">(850) 435-4155</h3>
        </div>
        <div className="open">
          <h2 className="footer_title">OPENING HOURS</h2>
          <p>
            Monday - Friday: 8am - 4pm <br />
            Saturday: 9am - 5pm
          </p>
        </div>
        <div className="newsletter">
          <h2 className="footer_title">NEWSLETTER</h2>
          <p>
            Subscribe to the weekly newsletter for all <br />
            the latest updates
          </p>

          <div className="newsletter_form">
            <input type="text" placeholder="Your Email...." />
            <button type="button" className="btn btn-primary footer_btn">
              subcribe
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="footer_bottom">
      <div className="container">
        <p>
          Copyright © 2020
          <span>pocofood</span>. All Rights Reserved.
        </p>

        <img
          src="https://demo2wpopal.b-cdn.net/poco/wp-content/uploads/2020/08/footer_img1.png"
          alt=""
        />
      </div>
    </div>
  </footer>
);

export default Footer;
