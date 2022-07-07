import styled from "@emotion/styled";
import Input from "./components/Input";

const Container = styled.div`
  margin: 5rem;
`;

function App() {
  return (
    <Container>
      <Input label="Email" type="email" error="invalid format" isTouched/>
    </Container>
  );
}

export default App;
