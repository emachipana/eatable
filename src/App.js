import { useEffect, useState } from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import Loader from "./components/Loader";
import { useUser } from "./context/user-context";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  return (
      isLoading
      ?
      <Loader />
      :
      user ? <AuthenticatedApp /> : <UnauthenticatedApp />
  );
}

export default App;
