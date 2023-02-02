import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Title,
  Button,
  StyledForm,
  Input,
  Label,
  Error,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box } from 'components/Box';

const initialValues = { email: '', password: '' };

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(3)
    .max(10)
    .required('Password is a required field'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const HandleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Title>Please enter login and password</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={HandleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <Label htmlFor={emailInputId}>Email</Label>
          <Input type="text" name="email" id={emailInputId} />
          <Error component="span" name="email" />
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
