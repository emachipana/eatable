import styled from "@emotion/styled";
import Button from "./components/Button";
import CardItem from "./components/CardItem/card-item";
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
      <CardItem />
    </Container>
  );
}

export default App;
