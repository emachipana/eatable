import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import SessionHeader from "./components/SessionHeader";
import { useUser } from "./context/user-context";
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/signup-page";

function UnauthenticatedApp() {
  const { isLoading } = useUser();

  return (
    isLoading
    ?
    <Loader />
    :
    <>
      <SessionHeader />
      <Routes>
        <Route index path="/" element={<Navigate to="/login" replace={true}/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default UnauthenticatedApp;
