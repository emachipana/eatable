import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { useProducts } from "./context/products-context";

function AuthenticatedApp() {
  const { isLoading } = useProducts();

  return (
    isLoading
    ?
    <Loader />
    :
    <Routes>
      <Route index path="/" element={<Navigate to="/home" replace={true} />} />
      <Route path="/home" element={<h1>Home Page</h1>}/>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default AuthenticatedApp;
