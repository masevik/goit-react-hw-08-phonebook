import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { PhonebookForm } from 'components/PhonebookForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';
import { Box } from 'components/Box';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box display="flex" ml="50px" mt="50px" mr="50px" mb="20px">
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <PhonebookForm />
      <Box
        display="flex"
        flexDirection="column"
        flexGrow="1"
        alignItems="center"
        width="500px"
      >
        {contacts.length > 0 && (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
        {isLoading && !error && <Loader />}
      </Box>
    </Box>
  );
};

export default Contacts;
