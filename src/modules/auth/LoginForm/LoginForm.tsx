import { useDeferredValue, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signin } from "../../../redux/slice/auth.slide";
import { AppDispatch, RootState } from "../../../redux/store";
import "./login.style.scss";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required()
  })
  .required();

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { error, isLogging } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<FormData> = (data) => dispatch(signin(data));

  useEffect(() => {
    if (isLogging) navigate("/shop");
  }, [isLogging]);

  return (
    <div className="login_container container">
      <form className="login_form section" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_group">
          <input type="text" className="form_control" placeholder="Email" {...register("email")} />
          {errors.email && <p className="form_error">{errors.email.message}</p>}
        </div>
        <div className="form_group">
          <input
            type="text"
            className="form_control"
            placeholder="Passwpord"
            {...register("password")}
          />
          {errors.password && <p className="form_error">{errors.password.message}</p>}
        </div>

        {error && <p className="form_error-login">{error}</p>}
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>

        <div className="login_navigate">
          <a href="register">Forgot your passwpord ???</a>
          <a href="home">Return to Store</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
