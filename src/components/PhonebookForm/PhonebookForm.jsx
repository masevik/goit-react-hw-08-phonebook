import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  Title,
  Button,
  StyledForm,
  Input,
  Label,
  Error,
} from './PhonebookForm.styled';
import { toast } from 'react-toastify';
import { Box } from 'components/Box';

const initialValues = { name: '', number: '+380' };

const phoneRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const schema = yup.object().shape({
  name: yup.string().min(3).max(40).required('Name is a required field'),
  number: yup
    .string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(13, 'Too short')
    .max(13, 'Too long'),
});

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameInputId = nanoid();
  const telInputId = nanoid();

  const HandleSubmit = ({ name, number }, { resetForm }) => {
    const isInContacts = contacts.some(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (isInContacts) {
      toast.error(name + ' is already in contacts');
      return false;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mr="50px">
      <Title>Add contact</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={HandleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <Label htmlFor={nameInputId}>Name</Label>
          <Input type="text" name="name" id={nameInputId} />
          <Error component="span" name="name" />
          <Label htmlFor={telInputId}>Number</Label>
          <Input type="tel" name="number" id={telInputId} />
          <Error component="span" name="number" />
          <Button type="submit">Submit</Button>
        </StyledForm>
      </Formik>
    </Box>
  );
};
