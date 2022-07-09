import * as Style from "./ui";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/products-context";
import Button from "../components/Button";
import { colors } from "../styles";

function ProductPage() {
  const params = useParams();
  const { findProduct } = useProducts();
  const product = findProduct(parseInt(params.id));
  const navigate = useNavigate();

  return (
    <Style.MainContainer>
      <Style.Container>
        <AiOutlineLeft 
          size="20px"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        />
        <Style.Section>
          <Style.Image src={product.picture_url} alt="food-picture" />
          <div>
            <Style.Text color={colors.black}>{ product.name }</Style.Text>
            <Style.Text color={colors.orange}>${ product.price }</Style.Text>
          </div>
        </Style.Section>
        <Style.Section>
          <div>
            <Style.Subtitle>Description</Style.Subtitle>
            <Style.Description>{ product.description }</Style.Description>
          </div>
          <Button style={{alignSelf: "center"}}>Add to Cart</Button>
        </Style.Section>
      </Style.Container>
    </Style.MainContainer>
  );
}

export default ProductPage;
