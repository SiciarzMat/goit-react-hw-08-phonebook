import React, { Suspense } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { setFilterAction } from 'redux/filtersSlice';
import logo from '../../components/Icon/Phonebook192x192.png';
import css from './SearchAppBar.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './SearchAppBar.styled';

export const SearchAppBar = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contactsList = useSelector(selectContacts);
  const contactsAmount = contactsList.length;
  
  const handleChange = event => {
    const value = event.target.value;
    dispatch(setFilterAction(value));
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <img
              src={logo}
              alt="phonebook icon"
              width={35}
              height={35}
              className={css.logo}
            />
            <Box
              sx={{ marginRight: 'auto', display: { xs: 'none', sm: 'block' } }}
            >
              <Typography variant="h6" noWrap component="div">
                Phonebook
              </Typography>
              <Typography variant="h9" noWrap>
                {contactsAmount === 0
                  ? 'You have no contacts'
                  : contactsAmount === 1
                  ? 'You have only one contact'
                  : `You have ${contactsAmount} contacts`}
              </Typography>
            </Box>
            <Search sx={{ marginRight: 'auto' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
                autoComplete="off"
                type="text"
                name="filter"
                value={filter}
              />
            </Search>
            <UserMenu />
            <Button
              className={css.btn}
              variant="contained"
              type="button"
              onClick={() => dispatch(logOut())}
            >
              LogOut
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </Box>
  );
};
