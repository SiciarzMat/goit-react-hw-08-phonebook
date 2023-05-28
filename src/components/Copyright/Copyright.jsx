import { Link, Typography } from '@mui/material';

export const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/MrRafalGlowacki">
        Rafał Głowacki
      </Link>{' '}
      2023
      {'.'}
    </Typography>
  );
};
