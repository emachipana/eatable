import FoodCard from "../FoodCard";
import { Container } from "./styles";

function ListProducts({ products }) {
  return (
    <Container>
      { products.map(product => (
        <FoodCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.picture_url}
        />
      )) }
    </Container>
  );
}

export default ListProducts;
