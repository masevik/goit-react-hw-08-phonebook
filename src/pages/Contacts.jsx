import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/operations';
import { Section } from 'components/Section';
import { PhonebookForm } from 'components/PhonebookForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';
import { Box } from 'components/Box';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box ml="50px" mt="20px" mr="50px" mb="20px">
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && (
          <>
            <Filter />
            <ContactsList />
          </>
        )}
        {isLoading && !error && <Loader />}
      </Section>
    </Box>
  );
};
