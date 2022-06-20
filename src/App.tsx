import { Route, Routes, Navigate } from "react-router-dom";

import ClientLayout from "./layouts/client.layout";
import AdminLayout from "./layouts/admin.layout";
import Home from "./pages/store/Home";

import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Detail from "./pages/store/Detail";
import CartPage from "./pages/store/Cart";
import CheckoutPage from "./pages/store/checkout";

import RequireAdmin from "./components/Auth/RequireAuth";
import AdminLogin from "./pages/admin/auth/AdminLogin";
import AdminCategory from "./pages/admin/Category";
import ProductList from "./modules/admin/Product/ProductList";
import ProductTab from "./modules/admin/Product/ProductTab";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<ClientLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
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
          <Route path="product/create" element={<ProductTab />} />
          <Route path="category" element={<AdminCategory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
