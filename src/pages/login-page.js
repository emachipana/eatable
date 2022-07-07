import SessionForm from "../components/SessionForm";
import { useUser } from "../context/user-context";
import { Container } from "./ui";

function LoginPage() {

  const { login, error } = useUser();

  function handleSubmit(values){
    login(values);
  }

  return (
    <Container>
      <SessionForm 
        handleSubmit={handleSubmit}
        type="Login"
        error={error}
      />
    </Container>
  );
}

export default LoginPage;
