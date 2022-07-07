import SessionForm from "../components/SessionForm";
import { useUser } from "../context/user-context";
import { Container } from "./ui";

function SignupPage() {
  const { error } = useUser();

  const { signup } = useUser();

  function handleSubmit(values){
    signup(values);
  }

  return (
    <Container>
      <SessionForm 
        handleSubmit={handleSubmit}
        type="Sign Up"
        error={error}
      />
    </Container>
  );
}

export default SignupPage;
