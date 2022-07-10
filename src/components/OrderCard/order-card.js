import { colors } from "../../styles";
import * as Style from "./styles";

function OrderCard({ date, items, total, details, address }) {
  const newDate = new Date(date)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = newDate.toLocaleDateString("en-US", options);
  
  return (
    <Style.Container>
      <Style.Section>
        <p>{dateString}</p>
      </Style.Section>
      <Style.Section>
        <p>{items} items</p>
        <p style={{color: colors.orange, fontWeight: 600}}>${total}</p>
      </Style.Section>
      <Style.Title>Order</Style.Title>
      {details.map(detail => (
        <Style.Section key={detail.id}>
          <p>{`${detail.quantity}-${detail.product_name}`}</p>
          <p>${detail.subtotal}</p>
        </Style.Section>
      ))}
      <hr />
      <Style.Title>Delivery</Style.Title>
      <Style.Section>
        <p>{address}</p>
      </Style.Section>
    </Style.Container>
  );
}

export default OrderCard;
