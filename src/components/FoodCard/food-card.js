import * as Style from "./styles";

function FoodCard({ name, price, image }) {
  return (
    <Style.Container>
      <Style.Card>
        <Style.Image src={ image } alt="food-picture" />
        <Style.Info>
          <Style.Name>{ name }</Style.Name>
          <Style.Price>${ price }</Style.Price>
        </Style.Info>
      </Style.Card>
    </Style.Container>
  );
}

export default FoodCard;
