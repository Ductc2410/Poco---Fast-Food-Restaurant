import "./menu.style.scss";

const Menu = () => (
  <section className="menu section" id="menu">
    <button type="button" className="btn btn-primary menu_btn">
      <a href="#menu">MENU</a>
    </button>
    <div className="menu_container grid container">
      <div className="menu_item">
        <img
          src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087593/final/menu-1_wjzo6l.png"
          alt=""
        />
        <a href="#">Combo</a>
      </div>
      <div className="menu_item">
        <img
          src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087593/final/menu-2_fffz28.png"
          alt=""
        />
        <a href="#">Kids menus</a>
      </div>
      <div className="menu_item">
        <img
          src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087593/final/menu-3_smysol.png"
          alt=""
        />
        <a href="#">Kids menus</a>
      </div>
      <div className="menu_item">
        <img
          src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087593/final/menu-4_wughtd.png"
          alt=""
        />
        <a href="#">Kids menus</a>
      </div>
      <div className="menu_item">
        <img
          src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087593/final/menu-5_fbu6zn.png"
          alt=""
        />
        <a href="#">Kids menus</a>
      </div>
      <div className="menu_item">
        <img
          src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087593/final/menu-6_mcksk0.png"
          alt=""
        />
        <a href="#">Kids menus</a>
      </div>
      <div className="menu_item">
        <img
          src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087594/final/menu-7_iu0sxr.png"
          alt=""
        />
        <a href="#">Kids menus</a>
      </div>
      <div className="menu_item">
        <img
          src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087594/final/menu-8_xbgsuf.png"
          alt=""
        />
        <a href="#">Kids menus</a>
      </div>
    </div>
  </section>
);

export default Menu;
