import { useState } from "react";
import { useProducts } from "../../context/products-context";
import Counter from "../Counter";
import * as Style from "./styles";

function CardItem({id, currentValue, handleProduct}) {
  const { findProduct } = useProducts();

  const product = findProduct(id);
  const products = JSON.parse(localStorage.getItem("cartProducts"));
  const productCart = products.find(product => product.id === id);
  const index = products.findIndex(product => product.id === id);

  const [counter, setCounter] = useState(currentValue || 1);

  function handleIncrease() {
    setCounter(counter + 1);
    productCart.quantity = counter + 1;
    products[index] = productCart;
    localStorage.setItem("cartProducts", JSON.stringify(products));
    handleProduct(products);
  }

  function handleDecrease() {
    if(counter <= 1) {
      const newProducts =  products.filter(product => product.id !== id);
      localStorage.setItem("cartProducts", JSON.stringify(newProducts));
      handleProduct(newProducts);
      return;
    };
    
    setCounter(counter - 1);
    productCart.quantity = counter - 1;
    products[index] = productCart;
    localStorage.setItem("cartProducts", JSON.stringify(products));
    handleProduct(products);
  }

  return (
    <Style.Container>
      <Style.Image src={product.picture_url} alt="food-image" />
      <Style.Info>
        <Style.Name>{product.name}</Style.Name>
        <Style.Section>
          <Style.Price>${product.price}</Style.Price>
          <Counter
            value={counter}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
          />
        </Style.Section>
      </Style.Info>
    </Style.Container>
  );
}

export default CardItem;
