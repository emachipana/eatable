import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/products-context";
import Button from "../components/Button";
import { colors } from "../styles";
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
  const product = findProduct(parseInt(params.id));
  const navigate = useNavigate();

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
          <Button style={{alignSelf: "center"}}>Add to Cart</Button>
        </Section>
      </Container>
    </MainContainer>
  );
}

export default ProductPage;
