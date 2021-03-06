import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useProducts } from "./context/products-context";
import CartPage from "./pages/cart-page";
import CheckoutPage from "./pages/checkout-page";
import EditPage from "./pages/edit-page";
import HistoryPage from "./pages/history-page";
import HomePage from "./pages/home-page";
import ProductPage from "./pages/product-page";
import ProfilePage from "./pages/profile-page";
import { getOrders } from "./services/order-service";

function AuthenticatedApp() {
  const { isLoading } = useProducts();
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({});
  
  useEffect(() => {
    getOrders().then(data => setOrders(data)).catch(console.error);
  }, [])

  return (
    isLoading
    ?
    <Loader />
    :
    <>
      <Routes>
        <Route index path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/home" element={<HomePage />}/>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditPage />} />
        <Route path="/cart" element={<CartPage setNewOrder={setNewOrder}/>} />
        <Route path="/history" element={<HistoryPage orders={orders}/>} />
        <Route path="/checkout" element={<CheckoutPage newOrder={newOrder} orders={orders} setOrders={setOrders}/>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default AuthenticatedApp;
