import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';

// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
// import { Section } from './Section';
// import { PhonebookForm } from './PhonebookForm';
// import { ContactsList } from './ContactsList';
// import { Filter } from './Filter';
// import { Box } from './Box';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { Loader } from './Loader';

export const App = () => {
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};
