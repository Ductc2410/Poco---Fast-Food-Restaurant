import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Form, Input, Typography } from "antd";
import { useEffect } from "react";
import { signin } from "../../../redux/slice/auth.slide";
import IUserLogin from "../../../types/UserLogin";
import { AppDispatch, RootState } from "../../../redux/store";

const { Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { error, loading, isLogging } = useSelector((state: RootState) => state.auth);

  const handleSubmit = (data: IUserLogin) => {
    dispatch(signin(data));
  };

  useEffect(() => {
    if (isLogging) {
      navigate("/admin/product");
    }
  }, [isLogging, navigate]);

  return (
    <Form
      name="login"
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 10 }}
      autoComplete="off"
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password autoComplete="off" />
      </Form.Item>

      {error && (
        <Form.Item wrapperCol={{ offset: 7 }}>
          <Text type="danger">{error}</Text>
        </Form.Item>
      )}

      <Form.Item wrapperCol={{ offset: 7 }}>
        <Button type="primary" htmlType="submit" disabled={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
