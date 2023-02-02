import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import {
  ContactItem,
  UserIcon,
  PhoneIcon,
  Button,
} from './ContactsList.styled';
import { Box } from 'components/Box';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter)
  );
  const actualList = filter === '' ? contacts : filteredContacts;

  return (
    <>
      {actualList.length > 0 && (
        <Box
          width="100%"
          pl="20px"
          pr="20px"
          pt="20px"
          pb="20px"
          borderRadius="5px"
          as="ul"
          backgroundColor="#3f51b5"
        >
          {actualList.map(({ id, name, number }) => (
            <ContactItem key={id}>
              <span>
                <UserIcon /> {name}
              </span>
              <span>
                <PhoneIcon />
                {number}
              </span>
              <Button
                disabled={isLoading}
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </Button>
            </ContactItem>
          ))}
        </Box>
      )}
    </>
  );
};
