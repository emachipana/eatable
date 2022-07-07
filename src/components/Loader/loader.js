import * as Style from "./styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ClipLoader } from "react-spinners"; //ScaleLaoder
import { colors } from "../../styles";


function Loader() {
  return (
    <Style.Banner>
      <Style.Container>
        <div>
          <Logo />
          <Style.Text>Food for Everyone</Style.Text>
        </div>
        <ClipLoader color={colors.orange} size={50} />
      </Style.Container>
    </Style.Banner>
  )
}

export default Loader;
