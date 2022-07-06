import * as Style from "./styles";

function Button({ children, ...other }) {
  return (
    <Style.StyledButton {...other}>
      { children }
    </Style.StyledButton>
  );
}

export default Button;
