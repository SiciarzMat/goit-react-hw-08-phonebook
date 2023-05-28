import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function BasicDateCalendar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('850'));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {isDesktop && (
        <Paper
          elevation={2}
          sx={{
            marginLeft: '10px',
            maxWidth: '320px',
          }}
        >
          <DateCalendar />
        </Paper>
      )}
    </LocalizationProvider>
  );
}
