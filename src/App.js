import styled from "@emotion/styled";
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
       <FoodCard 
        name="Ceviche" 
        price="50.00" 
        image="https://t1.rg.ltmcdn.com/es/posts/7/4/1/ceviche_peruano_18147_orig.jpg"
      />
    </Container>
  );
}

export default App;
