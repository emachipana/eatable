import { Container, Title } from "./styles";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { colors } from "../../styles";

function Founded({ lenght, type, message }){
  const data = {
    search: {
      icon: <BiSearch 
              size="130px"
              color={colors.gray.normal}
            />,
      message: "No products Found"
    },
    history: {
      icon: <AiOutlineCalendar 
              size="130px"
              color={colors.gray.normal}
            />,
      message: "No history yet"
    },
    cart: {
      icon: <FiShoppingCart
              size="130px"
              color={colors.gray.normal}
            />,
      message: "No items in the cart"
    }
  }

  return (
    lenght > 0
    ?
    <Title>{ message }</Title>
    :
    <Container>
      {data[type].icon}
      <Title>{data[type].message}</Title>
    </Container>
  );
}

export default Founded;
