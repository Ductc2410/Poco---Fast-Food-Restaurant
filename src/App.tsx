import { Route, Routes, Navigate } from "react-router-dom";

import ClientLayout from "./layouts/client.layout";
import Home from "./pages/store/Home";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Detail from "./pages/store/Detail";
import CartPage from "./pages/store/Cart";
import CheckoutPage from "./pages/store/checkout";

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
      </Routes>
    </div>
  );
}

export default App;
