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
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const initialValues = { name: '', email: '', password: '' };

const schema = yup.object().shape({
  name: yup.string().min(3).max(10).required('Name is a required field'),
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

export const RegisterForm = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  const dispatch = useDispatch();

  const HandleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <>
      <Title>Please your data for registration</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={HandleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <Label htmlFor={nameInputId}>Name</Label>
          <Input type="text" name="name" id={nameInputId} />
          <Error component="span" name="name" />
          <Label htmlFor={emailInputId}>E-mail</Label>
          <Input type="email" name="email" id={emailInputId} />
          <Error component="span" name="email" />
          <Label htmlFor={passwordInputId}>Password</Label>
          <Input
            type="password"
            name="password"
            id={passwordInputId}
            autoComplete="off"
          />
          <Error component="span" name="password" />
          <Button type="submit">Registration</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
