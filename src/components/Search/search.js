import * as Style from "./styles";
import { BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";
import { colors } from "../../styles";

function Search({ isSearching, handleChange, value, handleClick }) {

  function onChange(e) {
    handleChange(e.target.value)
  }

  return (
    <Style.Container>
      <Style.Section>
        {
          isSearching
          ?
          <AiOutlineLeft
            onClick={handleClick}
            size="18px"
            style={{cursor: "pointer"}}
          />
          :
          <BiSearch 
          size="19px"
          style={{cursor: "pointer"}}
          />
        }
        <Style.Input
          autoComplete="off"
          name="search"
          type="text"
          placeholder="Search"
          onChange={onChange}
          value={value}
        />
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
