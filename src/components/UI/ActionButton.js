import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import colors from '../../utilities/colors.module.scss';

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: colors.secondary,
        },
      },
    },
  },
});

const ActionButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Box>
    </ThemeProvider>
  );
};

export default ActionButton;
