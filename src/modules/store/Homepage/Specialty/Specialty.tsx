import "./specialty.style.scss";

const Specialty = () => (
  <section className="specialty">
    <div className="specialty_container container grid">
      <div className="specialty_item">
        <div className="specialty_content">
          <h3 className="specialty_title">
            Any day <br />
            offers
          </h3>
          <p className="specialty_text">
            new phenomenon <br />
            burger taste
          </p>
          <span style={{ color: "#00a850" }}>$12.90</span>
        </div>
        <div className="specialty_image">
          <img
            src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087906/final/specialty-1_mlvkdg.png"
            alt=""
          />
        </div>
      </div>
      <div className="specialty_item">
        <div className="specialty_content">
          <h3 className="specialty_title">Other flavors</h3>
          <p className="specialty_text">
            save room <br />
            we mada salats
          </p>
          <span>$12.90</span>
        </div>
        <div className="specialty_image">
          <img
            src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087906/final/specialty-2_djvmtt.png"
            alt=""
          />
        </div>
      </div>
      <div className="specialty_item">
        <div className="specialty_content">
          <h3 className="specialty_title">
            Find a Poco store
            <br />
            near you
          </h3>
          <p className="specialty_text" />
          <span>Contact Us</span>
        </div>
        <div className="specialty_image">
          <img
            src="https://res.cloudinary.com/dzoav55s4/image/upload/v1655087906/final/specialty-3_cb5hdv.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
);

export default Specialty;
