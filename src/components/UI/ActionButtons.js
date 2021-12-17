import React from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { uiActions } from '../../store/uiReducer';
import Fab from '@mui/material/Fab';
import classes from './ActionButtons.module.scss';
import colors from '../../utilities/colors.module.scss';

//Icons import
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CalculateIcon from '@mui/icons-material/Calculate';

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
  },
});

const fabConfig = {
  color: 'secondary',
  size: 'medium',
};

const iconConfig = {
  color: 'primary',
  fontSize: 'large',
};

const ActionButtons = () => {
  const dispatch = useDispatch();

  const openAddFormHandler = () => {
    dispatch(uiActions.onShowProductForm());
  };

  const openCalculateFormHandler = () => {
    dispatch(uiActions.onShowCalculateForm());
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.ActionBar}>
        <Fab
          {...fabConfig}
          ariaLabel='Agregar producto'
          onClick={openAddFormHandler}
        >
          <AddCircleOutlineIcon {...iconConfig} />
        </Fab>
        <Fab
          {...fabConfig}
          aria-label='Aplicar margen'
          onClick={openCalculateFormHandler}
        >
          <CalculateIcon {...iconConfig} />
        </Fab>
      </div>
    </ThemeProvider>
  );
};

export default ActionButtons;
