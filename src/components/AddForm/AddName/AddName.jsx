import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputHandlerAction } from 'redux/contacts/contactsSlice';
import { selectName } from 'redux/selectors';
import css from './AddName.module.css';

export const AddName = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  const handleChange = event => {
    const payload = { name: event.target.name, value: event.target.value };
    dispatch(inputHandlerAction(payload));
  };

  return (
    <>
      <TextField
        className={css.name}
        id="outlined-basic"
        size="small"
        onChange={handleChange}
        autoComplete="off"
        type="text"
        name="name"
        value={name}
        label="Enter Name"
        variant="outlined"
        pattern="^[а-źА-Ź]+(([' -][а-źА-Ź ])?[а-źА-Ź]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
