import { Container, Header, MainContainer, IconStyle, Title, CartSection, SectionProfile, Checkout, Subtitle, LinkEdit, FormContainer, FormTitle } from "./styles";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user-context";
import Input from "../components/Input";
import Button from "../components/Button";
import { createOrder } from "../services/order-service";

function CheckoutPage({ newOrder, orders, setOrders }) {
  const navigate = useNavigate();
  const { user } = useUser();

  if(!!newOrder) navigate("/cart");

  async function handleClick() {
    const { _total, ...order } = newOrder;
    const orderNew = await createOrder(order);
    setOrders([...orders, orderNew]);
    navigate("/history");
    localStorage.removeItem("cartProducts");
  }

  return(
    <MainContainer>
      <Container>
        <Header>
          <AiOutlineLeft
            onClick={() => navigate("/cart")}
            {...IconStyle}
          />
          <Title>Checkout</Title>
        </Header>
        <SectionProfile>
          <Checkout>Delivery</Checkout>
        </SectionProfile>
        <SectionProfile>
          <Subtitle>Personal details</Subtitle>
          <LinkEdit to="/profile/edit">change</LinkEdit>
        </SectionProfile>
        <FormContainer>
          <FormTitle>{ user.name || "User"}</FormTitle>
          <Input 
            disabled
            name="address"
            value={user.address || "Please first provide an address"}
          />
          <Input 
            disabled
            name="phone"
            value={user.phone || "No phone provide"}
          />
        </FormContainer>
        <CartSection>
          <SectionProfile>
            <p>Total</p>
            <Title>${newOrder.total}</Title>
          </SectionProfile>
          <Button 
            disabled={!user.address}
            onClick={handleClick}
          >Complete Order</Button>
        </CartSection>
      </Container>
    </MainContainer>
  );
}

export default CheckoutPage;
