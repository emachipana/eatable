import SessionForm from "../components/SessionForm";
import { useUser } from "../context/user-context";
import { Container, MainContainer } from "./styles";

function SignupPage() {
  const { error } = useUser();

  const { signup } = useUser();

  function handleSubmit(values){
    signup(values);
  }

  return (
    <MainContainer>
      <Container>
        <SessionForm 
          handleSubmit={handleSubmit}
          type="Sign Up"
          error={error}
        />
      </Container>
    </MainContainer>
  );
}

export default SignupPage;
