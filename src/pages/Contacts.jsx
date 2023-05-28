import { Container } from '@mui/material';
import { AddForm } from 'components/AddForm/AddForm';
import Calendar from 'components/Calendar/Calendar';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsAction } from 'redux/contacts/contactOperations';
import { selectError, selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);
  return (
    <Container
      sx={{
        display: { xs: 'block', sm: 'grid' },
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: '20px',
      }}
    >
      <AddForm />
      {isLoading && !error && <Loader />}
      <ContactsList />
      <Calendar />
    </Container>
  );
};
export default Contacts;
