import instance from "./instance";

export const upload = (data: any) => {
  const formData = new FormData();
  formData.append("file", data.originFileObj);

  return instance.post("http://localhost:5000/api/upload", formData);
};
