import instance from "./instance";
import IUserLogin from "../types/UserLogin";

export const login = (formData: IUserLogin) => {
  const url = "/login";
  return instance.post(url, formData);
};
