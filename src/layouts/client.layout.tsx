import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function ClientLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </>
  );
}
