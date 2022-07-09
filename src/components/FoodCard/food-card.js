import * as Style from "./styles";

function FoodCard({ id, name, price, image }) {
  return (
    <Style.Container to={`/product/${id}`}>
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
