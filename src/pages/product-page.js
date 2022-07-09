import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/products-context";
import Button from "../components/Button";
import { colors } from "../styles";
import { useUser } from "../context/user-context";
import { useState } from "react";
import { 
  MainContainer,
  Container,
  Section,
  Image,
  Text,
  Subtitle,
  Description } from "./styles";

function ProductPage() {
  const params = useParams();
  const { findProduct } = useProducts();
  const { user } = useUser();
  const product = findProduct(parseInt(params.id));
  const products = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const productCart = products.find(product => product.id === parseInt(params.id) && product.user === user.email);
  const [isPresent, setIsPresent] = useState(!!productCart);

  const navigate = useNavigate();

  function handleClick(){
    const newProduct = {
      id: parseInt(params.id),
      user: user.email,
      quantity: 1
    };
    setIsPresent(true);
    localStorage.setItem("cartProducts", JSON.stringify([...products, newProduct ]))
  }

  return (
    <MainContainer>
      <Container>
        <AiOutlineLeft 
          size="20px"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        />
        <Section>
          <Image src={product.picture_url} alt="food-picture" />
          <div>
            <Text color={colors.black}>{ product.name }</Text>
            <Text color={colors.orange}>${ product.price }</Text>
          </div>
        </Section>
        <Section>
          <div>
            <Subtitle>Description</Subtitle>
            <Description>{ product.description }</Description>
          </div>
          <Button 
            disabled={isPresent}
            style={{alignSelf: "center"}}
            onClick={handleClick}
          >Add to Cart</Button>
        </Section>
      </Container>
    </MainContainer>
  );
}

export default ProductPage;
