import styled from "@emotion/styled";
import SessionForm from "./components/SessionForm/session-form";

const Container = styled.div`
  margin: 5rem;
`;

function App() {
  function handleSubmit(values) {
    console.log(values)
  }

  return (
    <Container>
      <SessionForm type="login" handleSubmit={handleSubmit}/>
    </Container>
  );
}

export default App;
