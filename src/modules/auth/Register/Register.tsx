import "./register.style.scss";

const RegisterForm = () => (
  <div className="login_container container">
    <div className="login_form section">
      <div className="form_group">
        <input type="text" className="form_control" placeholder="First Name" />
      </div>
      <div className="form_group">
        <input type="text" className="form_control" placeholder="Last Name" />
      </div>
      <div className="form_group">
        <input type="text" className="form_control" placeholder="Email" />
      </div>
      <div className="form_group">
        <input type="text" className="form_control" placeholder="Password" />
      </div>
      <button type="button" className="btn btn-primary">
        Sign In
      </button>

      <div className="login_navigate">
        <a href="home">Return to Store</a>
      </div>
    </div>
  </div>
);

export default RegisterForm;
