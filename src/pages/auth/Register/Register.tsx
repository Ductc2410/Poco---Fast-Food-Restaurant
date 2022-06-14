import Breakscrumb from "../../../components/Breadscrumb/Breakscrumb";
import RegisterForm from "../../../modules/auth/Register/Register";

const Register = () => (
  <div className="login">
    <Breakscrumb text="create account" />
    <RegisterForm />
  </div>
);

export default Register;
