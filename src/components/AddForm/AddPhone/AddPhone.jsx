import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputHandlerAction } from 'redux/contacts/contactsSlice';
import { selectNumber } from 'redux/selectors';
import css from './AddPhone.module.css';

export const AddPhone = () => {
  const dispatch = useDispatch();
  const number = useSelector(selectNumber);

  const handleChange = event => {
    const payload = { name: event.target.name, value: event.target.value };
    dispatch(inputHandlerAction(payload));
  };

  return (
    <>
      <TextField
        className={css.number}
        size="small"
        id="outlined-basic"
        onChange={handleChange}
        autoComplete="off"
        type="tel"
        name="number"
        value={number}
        label="Enter number"
        variant="outlined"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </>
  );
};
