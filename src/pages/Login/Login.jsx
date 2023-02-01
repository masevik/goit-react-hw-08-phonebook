// import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Title, Button, StyledForm, Input, Label, Error } from './Login.styled';
import { Box } from 'components/Box';

const initialValues = { login: '', password: '' };

const schema = yup.object().shape({
  login: yup.string().min(3).max(10).required('Login is a required field'),
  password: yup
    .string()
    .min(3)
    .max(10)
    .required('Password is a required field'),
});

export const LoginForm = () => {
  const loginInputId = nanoid();
  const passwordInputId = nanoid();

  const HandleSubmit = ({ login, password }, { resetForm }) => {
    resetForm();
  };

  return (
    <Box ml="50px" mt="20px">
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <Title>Please enter login and password</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={HandleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <Label htmlFor={loginInputId}>Login</Label>
          <Input type="text" name="login" id={loginInputId} />
          <Error component="span" name="login" />
          <Label htmlFor={passwordInputId}>Password</Label>
          <Input
            type="password"
            name="password"
            id={passwordInputId}
            autoComplete="off"
          />
          <Error component="span" name="password" />
          <Button type="submit">LogIn</Button>
        </StyledForm>
      </Formik>
    </Box>
  );
};
