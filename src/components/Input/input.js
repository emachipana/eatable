import * as Style from "./styles";

function Input({ label, type, value, onChange, onBlur, error, isTouched }) {
  const labelParsed = label.toLowerCase().replace(/ /g, "_");
  
  return (
    <Style.Container>
      <Style.Label htmlFor={labelParsed}>{ label }</Style.Label>
      <Style.StyledInput
        type={type || "text"}
        id={labelParsed}
        name={labelParsed}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      { error && isTouched && <Style.ErrorMessage>{ error }</Style.ErrorMessage>}
    </Style.Container>
  );
}

export default Input;
