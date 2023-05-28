import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsListItem.module.css';
import { useDispatch } from 'react-redux';
import {
  setOpenedContactAction,
  showHideModalAction,
} from 'redux/modal/modalSlice';
import { Avatar, Chip } from '@mui/material';

const stringToColor = string => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};
const stringAvatar = name => {
  const names = name.split(' ');
  const firstLetters = names.slice(0, 2).map(n => n[0]);
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: firstLetters.join('').toUpperCase(),
  };
};

export const ContactsListItem = ({
  contact,
  id,
  name,
  number,
  onContactRemove,
}) => {
  const dispatch = useDispatch();
  const handleContactsEdit = contact => {
    dispatch(showHideModalAction());
    dispatch(setOpenedContactAction(contact));
  };
  return (
    <Chip
      avatar={<Avatar {...stringAvatar(`${name}`)} />}
      key={id}
      className={css.item}
      label={`${name}: ${number}`}
      variant="outlined"
      onClick={() => handleContactsEdit(contact)}
      onDelete={() => onContactRemove(id, name)}
    />
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  number: PropTypes.string,
  onContactRemove: PropTypes.func,
};
