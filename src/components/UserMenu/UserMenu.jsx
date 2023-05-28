import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { SelectUserEmail, SelectUserName } from 'redux/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const userName = useSelector(SelectUserName);
  const userEmail = useSelector(SelectUserEmail);
  return (
    <Box className={css.box}>
      <Typography className={css.name}>Welcome, {userName}!</Typography>
      <Typography className={css.email}>{userEmail}</Typography>
    </Box>
  );
};

export default UserMenu;
