import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { useProducts } from "./context/products-context";
import HomePage from "./pages/home-page";

function AuthenticatedApp() {
  const { isLoading } = useProducts();

  return (
    isLoading
    ?
    <Loader />
    :
    <Routes>
      <Route index path="/" element={<Navigate to="/home" replace={true} />} />
      <Route path="/home" element={<HomePage />}/>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default AuthenticatedApp;
