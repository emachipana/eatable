import * as Style from "./styles";

function Counter({ value, handleDecrease, handleIncrease}) {
  return (
    <Style.Container>
      <Style.Text isButton onClick={handleDecrease}>-</Style.Text>
      <Style.Text>{ value }</Style.Text>
      <Style.Text isButton onClick={handleIncrease}>+</Style.Text>
    </Style.Container>
  )
}

export default Counter;
