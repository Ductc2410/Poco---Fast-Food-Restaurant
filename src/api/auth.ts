import instance from "./instance";
import IUserLogin, { IUserRegister } from "../types/UserLogin";

export const login = (formData: IUserLogin) => {
  const url = "/login";
  return instance.post(url, formData);
};

export const registerUser = (formData: IUserRegister) => {
  const url = "/register";
  return instance.post(url, formData);
};
