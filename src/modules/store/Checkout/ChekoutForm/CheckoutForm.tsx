import { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { customAlphabet } from "nanoid";
import { RootState } from "../../../../redux/store";

import IOrder from "../../../../types/Order";
import { schema } from "./checkoutForm.schema";

interface FormData {
  name: string;
  address: string;
  phone: string;
  email: string;
  note?: string;
}

const CheckoutForm = () => {
  const nanoid = customAlphabet("1234567890abcdef", 10);
  const { items, amount } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: user
  });
  const onSubmit = (data: FormData) => {
    const orderDetail = items.map((item) => {
      return {
        productId: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity
      };
    });

    const order: IOrder = {
      code: nanoid(),
      name: data.name,
      phone: data.phone,
      address: data.address,
      email: data.email,
      orderDetail,
      amount: Math.round(amount * 100) / 100,
      note: data.note,
      status: "Order Placed",
      userId: user.id
    };

    setLoading(true);
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        notification.success({
          message: "Thong Bao",
          description: "Dat hang thanh cong, Tu dong chuyen ve trang chu sau 2s",
          duration: 1.75,
          placement: "top",
          onClose: () => {
            navigate("/account/order-history");
          }
        });
      });
  };

  return (
    <form className="checkout_form grid" onSubmit={handleSubmit(onSubmit)}>
      <div className="checkout_form-left">
        <div className="form_group">
          <div className="form_label">
            <label htmlFor="name" className="form_label">
              Your name
            </label>
          </div>
          <input type="text" id="name" className="form_control" {...register("name")} />
        </div>
        <div className="form_group">
          <div className="form_label">
            <label htmlFor="name" className="form_label">
              Address
            </label>
          </div>
          <input type="text" id="name" className="form_control" {...register("address")} />
        </div>
        <div className="form_group">
          <div className="form_label">
            <label htmlFor="name" className="form_label">
              Phone
            </label>
          </div>
          <input type="text" id="name" className="form_control" {...register("phone")} />
        </div>
        <div className="form_group">
          <div className="form_label">
            <label htmlFor="name" className="form_label">
              Email Address
            </label>
          </div>
          <input type="text" id="name" className="form_control" {...register("email")} />
        </div>
      </div>
      <div className="checkout_form-right">
        <div className="form_group">
          <div className="form_label">
            <label htmlFor="name" className="form_label">
              Order notes
            </label>
          </div>
          <textarea className="form_control" {...register("note")} />
        </div>
        <button type="submit" className="btn btn-primary btn-hover btn-loading">
          Place Order
          {loading && <i className="bx bx-loader bx-spin" />}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
