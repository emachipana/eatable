import * as Style from "./styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { colors } from "../../styles";
import { useUser } from "../../context/user-context";

function SessionHeader() {
  const { setError } = useUser();

  function handleClick() {
    setError(null);
  }

  return (
    <Style.Container>
      <Style.Section>
        <div>
          <Logo />
          <Style.Text>Food for Everyone</Style.Text>
        </div>
        <Style.Links>
          <Style.Link 
            to={"/login"}
            onClick={handleClick}
            style={({ isActive }) => (
              isActive 
              ?
              {borderBottom: `2px solid ${colors.orange}` }
              :
              {borderBottom: "none"}
            )}
          >
            Login
          </Style.Link>
          <Style.Link 
            to="/signup"
            onClick={handleClick}
            style={({ isActive }) => (
              isActive 
              ?
              {borderBottom: `2px solid ${colors.orange}` }
              :
              {borderBottom: "none"}
              )}
          >
            Sign Up
          </Style.Link>
        </Style.Links>
      </Style.Section>
    </Style.Container>
  )
}

export default SessionHeader;
