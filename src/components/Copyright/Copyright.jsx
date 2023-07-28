import { Link, Typography } from '@mui/material';

export const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Made with ❤️ by '}
      <Link color="inherit" href="https://github.com/SiciarzMat">
        Mateusz Siciarz
      </Link>{' '}
      2023
      {'.'}
    </Typography>
  );
};
