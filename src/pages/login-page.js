import SessionForm from "../components/SessionForm";
import { useUser } from "../context/user-context";
import { Container, MainContainer } from "./styles";

function LoginPage() {

  const { login, error } = useUser();

  function handleSubmit(values){
    login(values);
  }

  return (
    <MainContainer>
      <Container>
        <SessionForm 
          handleSubmit={handleSubmit}
          type="Login"
          error={error}
        />
      </Container>
    </MainContainer>
  );
}

export default LoginPage;
