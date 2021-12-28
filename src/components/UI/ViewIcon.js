import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import colors from '../../utilities/colors.module.scss';

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
  },
});

const ViewIcon = props => {
  const { isVisible, onToggle, color, size, fabSize } = props;

  const fabConfig = {
    color: color === 'primary' ? 'secondary' : 'primary',
    size: fabSize ?? 'small',
  };
  const iconConfig = { color: color ?? 'primary', fontSize: size ?? 'small' };

  return (
    <ThemeProvider theme={theme}>
      <Fab {...fabConfig} aria-label='Mostrar Costo' onClick={onToggle}>
        {isVisible ? (
          <VisibilityIcon {...iconConfig} />
        ) : (
          <VisibilityOffIcon {...iconConfig} />
        )}
      </Fab>
    </ThemeProvider>
  );
};

export default ViewIcon;
