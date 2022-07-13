import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import axios from "axios";
import { registerSchema } from "./register.schema";
import { registerUser } from "../../../api/auth";

interface FormData {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setErrMessage("");
    try {
      await registerUser({
        email: data.email,
        password: data.password,
        name: data.fullname
      });
      toast.success("Register User Success", {
        onClose: () => navigate("/login")
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data as string;
        setErrMessage(message);
      }
    }
  };

  return (
    <div className="login_container container">
      <form className="login_form section" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_group">
          <input
            type="text"
            className="form_control"
            placeholder="Fullname"
            {...register("fullname")}
          />
          {errors.fullname && <p className="form_error">{errors.fullname.message}</p>}
        </div>
        <div className="form_group">
          <input type="text" className="form_control" placeholder="Email" {...register("email")} />
          {errors.email && <p className="form_error">{errors.email.message}</p>}
        </div>
        <div className="form_group">
          <input
            type="text"
            className="form_control"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <p className="form_error">{errors.password.message}</p>}
        </div>
        <div className="form_group">
          <input
            type="text"
            className="form_control"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <p className="form_error">{errors.confirmPassword.message}</p>}
        </div>

        {errMessage && <p className="form_error-login">{errMessage}</p>}
        <button type="submit" className="btn btn-primary">
          Create
        </button>

        <div className="login_navigate">
          <a href="home">Return to Store</a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
