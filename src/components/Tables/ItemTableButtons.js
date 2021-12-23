import React from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import colors from '../../utilities/colors.module.scss';
import classes from './ItemTableButtons.module.scss';

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
  },
});

const fabConfig = {
  color: 'secondary',
  size: 'small',
};

const iconConfig = {
  color: 'primary',
  fontSize: 'small',
};

const ItemTableButtons = () => {
  const dispatch = useDispatch();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.Buttons}>
        <Fab {...fabConfig} aria-label='Editar'>
          <ModeEditIcon {...iconConfig} />
        </Fab>
        <Fab {...fabConfig} aria-label='Editar'>
          <ContentCopyIcon {...iconConfig} />
        </Fab>
      </div>
    </ThemeProvider>
  );
};

export default ItemTableButtons;
