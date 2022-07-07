import { Formik } from "formik";
import Button from "../Button";
import Input from "../Input";
import { Form, Container, ErrorMessage } from "./styles";

function SessionForm({ handleSubmit, type, error }) {
  function validate(values) {
    const errors = {};

    const { email, password } = values;
    if(email === "") {
      errors.email = "Email is required";
    }else if(!/.+@.+\.[A-Za-z]+$/.test(email)) {
      errors.email = "Format is invalid";
    }

    if(password === "") {
      errors.password = "Password is required";
    }else if(password.length < 6) {
      errors.password = "At least 6 chacarters long";
    }

    return errors;
  }

  const initialForm = { email: "", password: "" }

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
        <Form onSubmit={handleSubmit}>
          <Container>
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
              type="password"
              label="Password"
              placeholder="**********"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              isTouched={touched.password}
            />
            { error && <ErrorMessage>{ error }</ErrorMessage>}
          </Container>
          <Button disabled={!isValid} type="submit">{type}</Button>
        </Form>
      )}
    </Formik>
  )
}

export default SessionForm;
