import * as Style from "./styles";
import { BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { colors } from "../../styles";

function Search() {
  return (
    <Style.Container>
      <Style.Section>
        <BiSearch 
          size="19px"
          style={{cursor: "pointer"}}
        />
        <Style.Input type="text" placeholder="Search"/>
      </Style.Section>
      <BsCart 
        size="22px"
        color={colors.gray.normal}
        style={{cursor: "pointer"}}
      />
    </Style.Container>
  )
}

export default Search;
