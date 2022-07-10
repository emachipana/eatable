import { Container, Header, MainContainer, IconStyle, Title, CartSection, SectionProfile } from "./styles";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Founded from "../components/Founded";
import CardItem from "../components/CardItem/card-item";
import { useUser } from "../context/user-context";
import Button from "../components/Button";
import { useState } from "react";

function CartPage() {
  const navigate = useNavigate();
  const { user } = useUser();

  const productsFromStorage = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const filterProducts = productsFromStorage.filter(product => product.user === user.email);

  const [products, setProducts] = useState(filterProducts);

  return (
    <MainContainer>
      <Container>
        <Header>
          <AiOutlineLeft
            onClick={() => navigate("/home")}
            {...IconStyle}
          />
          <Title>Cart</Title>
        </Header>
          {
            products.length <= 0
            ?
            <Founded 
              lenght={0}
              type="cart"
            />
            :
            <>
            {products.map(product => (
              <CardItem
                key={product.id}
                id={product.id}
                handleProduct={setProducts}
                currentValue={product.quantity}
              />
            ))}
            <CartSection>
              <SectionProfile>
                <p>Total</p>
                <Title>${products.reduce((acc, prod) => parseInt(prod.price * prod.quantity) + acc, 0)}</Title>
              </SectionProfile>
              <Button>Checkout</Button>
            </CartSection>
            </>
          }
      </Container>
    </MainContainer>
  );
}

export default CartPage;
