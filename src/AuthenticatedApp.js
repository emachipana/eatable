import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useProducts } from "./context/products-context";
import HomePage from "./pages/home-page";
import ProductPage from "./pages/product-page";
import ProfilePage from "./pages/profile-page";

function AuthenticatedApp() {
  const { isLoading } = useProducts();

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
        <Route path="/profile/edit" element={<h1>Edit page</h1>}/>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default AuthenticatedApp;
