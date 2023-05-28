import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputHandlerAction } from 'redux/contacts/contactsSlice';
import { addContactAction } from 'redux/contacts/contactOperations';
import { selectContacts, selectName, selectNumber } from 'redux/selectors';
import css from './AddForm.module.css';
import { AddName } from './AddName/AddName';
import { AddPhone } from './AddPhone/AddPhone';
import { Button, IconButton } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export const AddForm = () => {
  const name = useSelector(selectName);
  const number = useSelector(selectNumber);
  const contactsList = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const found = contactsList.find(contact => contact.name === name);
    if (found) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(
        addContactAction({
          name: name,
          number: number,
        })
      );
      dispatch(inputHandlerAction({ name: 'name', value: '' }));
      dispatch(inputHandlerAction({ name: 'number', value: '' }));
    }
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Add new contact:</h3>
      <form className={css.form} onSubmit={handleSubmit}>
        <AddName />
        <AddPhone />
        <Button
          className={css.button}
          sx={{ textTransform: 'none' }}
          variant="contained"
          type="submit"
          startIcon={<PersonAddAlt1Icon />}
        >
          Add contact
        </Button>
        <IconButton color="primary" aria-label="add contact"></IconButton>
      </form>
    </div>
  );
};
