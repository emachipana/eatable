import styled from "@emotion/styled";
import SessionForm from "./components/SessionForm/session-form";
import SessionHeader from "./components/SessionHeader";

const Container = styled.div`
  margin: 5rem;
`;

function App() {
  function handleSubmit(values) {
    console.log(values)
  }

  return (
    <>
      <SessionHeader />
      <Container>
        <SessionForm type="Login" handleSubmit={handleSubmit}/>
      </Container>
    </>
  );
}

export default App;
