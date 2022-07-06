import styled from "@emotion/styled";
import Button from "./components/Button";
import Counter from "./components/Counter";
import FoodCard from "./components/FoodCard";

const Container = styled.div`
  margin: 5rem;
`;

function App() {
  return (
    <Container>
      <FoodCard 
        name="Veggie tomato" 
        price="15.45" 
        image="https://live.mrf.io/statics/i/ps/irecetasfaciles.com/wp-content/uploads/2019/01/pizza-con-salami-chorizo-beacon.jpg?width=1200&enable=upscale"
      />
      <Button>Login</Button>
      <Button disabled>SignUp</Button>
      <Counter value={1}/>
    </Container>
  );
}

export default App;
