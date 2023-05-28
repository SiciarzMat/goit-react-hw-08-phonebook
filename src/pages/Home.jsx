import { Button, Stack } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Stack spacing={2} direction="row">
        <Button variant="contained" component={Link} to="/login">
          Log In
        </Button>
        <Button variant="contained" component={Link} to="/register">
          Register
        </Button>
      </Stack>
    </Container>
  );
};
export default Home;
