import AuthenticatedApp from "./AuthenticatedApp";
import { ProductProvider } from "./context/products-context";
import { useUser } from "./context/user-context";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const { user } = useUser();

  return (
      user 
      ?
      <ProductProvider>
        <AuthenticatedApp />
      </ProductProvider> 
      :
      <UnauthenticatedApp />
  );
}

export default App;
