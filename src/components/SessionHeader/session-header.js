import * as Style from "./styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { colors } from "../../styles";

function SessionHeader() {
  return (
    <Style.Container>
      <Style.Section>
        <div>
          <Logo />
          <Style.Text>Food for Everyone</Style.Text>
        </div>
        <Style.Links>
          <Style.Link to="/login" style={({ isActive }) => (
            isActive 
            ?
            {borderBottom: `2px solid ${colors.orange}` }
            :
            {borderBottom: "none"}
          )}>Login</Style.Link>
          <Style.Link to="/signup" style={({ isActive }) => (
            isActive 
            ?
            {borderBottom: `2px solid ${colors.orange}` }
            :
            {borderBottom: "none"}
          )}>Sign Up</Style.Link>
        </Style.Links>
      </Style.Section>
    </Style.Container>
  )
}

export default SessionHeader;
