import Breakscrumb from "../../../components/Breadscrumb/Breakscrumb";
import LoginForm from "../../../modules/auth/LoginForm/LoginForm";

const Login = () => (
  <div className="login">
    <Breakscrumb text="sign in" />
    <LoginForm />
  </div>
);

export default Login;
