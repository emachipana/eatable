import { useState } from "react";
import Counter from "../Counter";
import * as Style from "./styles";

function CardItem({id, currentValue}) {
  // pending find by id in my context

  const [counter, setCounter] = useState(currentValue || 1);

  function handleIncrease() {
    setCounter(counter + 1);
  }

  function handleDecrease() {
    if(counter < 1) return;
    setCounter(counter - 1);
  }

  return (
    <Style.Container>
      <Style.Image src="https://live.mrf.io/statics/i/ps/irecetasfaciles.com/wp-content/uploads/2019/01/pizza-con-salami-chorizo-beacon.jpg?width=1200&enable=upscale" alt="food-image" />
      <Style.Info>
        <Style.Name>Veggie tomato mix</Style.Name>
        <Style.Section>
          <Style.Price>$75.45</Style.Price>
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
