import "./login.style.scss";

const LoginForm = () => (
  <div className="login_container container">
    <div className="login_form section">
      <div className="form_group">
        <input type="text" className="form_control" placeholder="Email" />
      </div>
      <div className="form_group">
        <input type="text" className="form_control" placeholder="Passwpord" />
      </div>
      <button type="button" className="btn btn-primary loading" disabled>
        Sign In
      </button>

      <div className="login_navigate">
        <a href="register">Forgot your passwpord ???</a>
        <a href="home">Return to Store</a>
      </div>
    </div>
  </div>
);

export default LoginForm;
