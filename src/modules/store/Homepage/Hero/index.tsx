import "./hero.style.scss";

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero_overlay" />
      <div className="hero_content container">
        <div className="hero_text">
          <h1 className="hero_text-main">
            UNLIMITED <br />
            MEDIUM
            <span style={{ color: "#ffcc00" }}>PIZZAS</span>
          </h1>
          <h2 className="hero_text-sub">Medium 2-topping* pizza</h2>
          <p className="hero_text-normal">
            *Additional charge for premium toppings. Minimum of 2 required.
          </p>

          <button type="button" className="btn btn-primary hero-btn">
            ORDER NOW
          </button>
        </div>
        <div className="hero_image">
          <img
            src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087169/final/hero_pizza_i1y29s.png"
            alt=""
          />
        </div>
      </div>
      <div className="hero_images">
        <img
          className="hero_images-left"
          src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087274/final/hero-1_ejgtoa.png"
          alt=""
        />
        <img
          className="hero_images-right"
          src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087274/final/hero-1_ejgtoa.png"
          alt=""
        />
      </div>
    </section>
  );
}
