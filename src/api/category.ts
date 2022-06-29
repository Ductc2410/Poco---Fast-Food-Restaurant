import instance from "./instance";

export const getCategory = () => {
  const url = "/categories";
  return instance.get(url);
};
