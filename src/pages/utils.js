import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useUser } from "../context/user-context";
import { updateUser } from "../services/user-service";
import { FormContainer } from "./styles";

export default function FormProfile() {
  const { user, setUser } = useUser();
  
  const navigate = useNavigate();

  function validate(values) {
    const errors = {};

    const { name, email, phone, address } = values;
    
    if(name === "") errors.name = "Name is required";

    if(email === "") {
      errors.email = "Email is required";
    }else if(!/.+@.+\.[A-Za-z]+$/.test(email)){
      errors.email = "Invalid email";
    }

    if(phone === "") {
      errors.phone = "Email is required";
    }else if(!/[+0-9]+/) {
      errors.phone = "Invalid phone";
    }

    if(address === "") errors.address = "Adress is required";

    return errors;
  }

  const initialForm = { 
    name: user.name || "", 
    email: user.email, 
    phone: user.phone || "", 
    address: user.address || "" 
  }

  function handleSubmit(values) {
    setUser({...user, ...values});
    updateUser(values);
    navigate("/profile");
  }

  return (
    <Formik
      initialValues={initialForm}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid
      }) => (
        <FormContainer onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Name"
            placeholder="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            isTouched={touched.name}
          />
          <Input
            type="email"
            label="Email"
            placeholder="example@mail.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            isTouched={touched.email}
          />
          <Input
            type="text"
            label="Phone"
            placeholder="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone}
            isTouched={touched.phone}
          />
          <Input
            type="text"
            label="Address"
            placeholder="adress"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.address}
            isTouched={touched.address}
          />
          <Button 
            style={{alignSelf: "center", position: "fixed", bottom: "70px"}}
            disabled={!isValid}
          >Update</Button>
        </FormContainer>
      )}
    </Formik>
  );
}
