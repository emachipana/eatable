import SessionForm from "../components/SessionForm";
import { useUser } from "../context/user-context";
import { MainContainer } from "./ui";

function LoginPage() {

  const { login, error } = useUser();

  function handleSubmit(values){
    login(values);
  }

  return (
    <MainContainer>
      <SessionForm 
        handleSubmit={handleSubmit}
        type="Login"
        error={error}
      />
    </MainContainer>
  );
}

export default LoginPage;
