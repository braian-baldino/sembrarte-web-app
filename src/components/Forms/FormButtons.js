import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import colors from '../../utilities/colors.module.scss';

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
  },
});

const FormButtons = props => {
  const { color, variant, acceptHandler, cancelHandler } = props;
  return (
    <ThemeProvider theme={theme}>
      <Stack direction='row' spacing={2}>
        <Button
          color={color ?? 'primary'}
          variant={variant ?? 'contained'}
          style={{ color: 'white' }}
          onClick={acceptHandler}
        >
          <CheckIcon />
        </Button>
        <Button
          color={color ?? 'primary'}
          style={{ color: 'white' }}
          variant={variant ?? 'contained'}
          onClick={cancelHandler}
        >
          <CloseIcon />
        </Button>
      </Stack>
    </ThemeProvider>
  );
};

export default FormButtons;
