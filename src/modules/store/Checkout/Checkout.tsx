import "./checkout.style.scss";

const Checkout = () => (
  <div className="checkout section">
    <div className="checkout_container container">
      <h2 className="checkout_title">Billing details</h2>
      <form className="checkout_form grid">
        <div className="checkout_form-left">
          <div className="form_group">
            <div className="form_label">
              <label htmlFor="name" className="form_label">
                First name
              </label>
            </div>
            <input type="text" id="name" className="form_control" />
          </div>
          <div className="form_group">
            <div className="form_label">
              <label htmlFor="name" className="form_label">
                First name
              </label>
            </div>
            <input type="text" id="name" className="form_control" />
          </div>
          <div className="form_group">
            <div className="form_label">
              <label htmlFor="name" className="form_label">
                Last name
              </label>
            </div>
            <input type="text" id="name" className="form_control" />
          </div>
          <div className="form_group">
            <div className="form_label">
              <label htmlFor="name" className="form_label">
                Company
              </label>
            </div>
            <input type="text" id="name" className="form_control" />
          </div>
          <div className="form_group">
            <div className="form_label">
              <label htmlFor="name" className="form_label">
                Street Address
              </label>
            </div>
            <input type="text" id="name" className="form_control" />
          </div>
          <div className="form_group">
            <div className="form_label">
              <label htmlFor="name" className="form_label">
                Phone
              </label>
            </div>
            <input type="text" id="name" className="form_control" />
          </div>
          <div className="form_group">
            <div className="form_label">
              <label htmlFor="name" className="form_label">
                Email Address
              </label>
            </div>
            <input type="text" id="name" className="form_control" />
          </div>
        </div>
        <div className="checkout_form-right">
          <div className="form_group">
            <div className="form_label">
              <label htmlFor="name" className="form_label">
                Order notes
              </label>
            </div>
            <textarea className="form_control" rows={8} />
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Checkout;
