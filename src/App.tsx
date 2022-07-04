import { Route, Routes, Navigate } from "react-router-dom";

import ClientLayout from "./layouts/client.layout";
import AccountLayout from "./layouts/account/account.layout";
import AdminLayout from "./layouts/admin.layout";

import Home from "./pages/store/Home";
import ShopPage from "./pages/store/Shop";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Detail from "./pages/store/Detail";
import CartPage from "./pages/store/Cart";
import CheckoutPage from "./pages/store/checkout";
import OrderHistory from "./modules/store/Account/OrderHistory";

import RequireAdmin from "./components/Auth/RequireAdmin";
import RequireUser from "./components/Auth/RequireUser";
import AdminLogin from "./pages/admin/auth/AdminLogin";
import AdminCategory from "./pages/admin/Category";
import ProductList from "./modules/admin/Product/ProductList";
import ProductTab from "./modules/admin/Product/ProductTab";
import UserList from "./modules/UserList";
import Order from "./modules/admin/Order/Order";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<ClientLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product/:name" element={<Detail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route
          path="account"
          element={
            <RequireUser>
              <AccountLayout />
            </RequireUser>
          }
        >
          <Route index element={<Navigate to="order-history" />} />
          <Route path="order-history" element={<OrderHistory />} />
        </Route>

        <Route path="auth">
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<AdminLogin />} />
        </Route>

        <Route
          path="admin"
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        >
          <Route index element={<Navigate to="product" />} />
          <Route path="product" element={<ProductList />} />
          <Route path="product/create" element={<ProductTab mode="create" />} />
          <Route path="product/:id" element={<ProductTab mode="edit" />} />
          <Route path="category" element={<AdminCategory />} />
          <Route path="order" element={<Order />} />
          <Route path="user" element={<UserList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
