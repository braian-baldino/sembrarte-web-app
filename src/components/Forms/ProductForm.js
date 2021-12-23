import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiReducer';
import Modal from '../UI/Modal';
import TextField from '@mui/material/TextField';
import classes from './ProductForm.module.css';
import colors from '../../utilities/colors.module.scss';

import ChipBadge from '../UI/ChipBadge';
import OutlinedContainer from '../UI/OutlinedContainer';
import FormButtons from './FormButtons';

const theme = createTheme({
  palette: {
    primary: { main: colors.secondary },
    secondary: { main: colors.primary },
  },
});

const ProductForm = props => {
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(uiActions.onCloseProductForm());
  };

  return (
    <Modal onClose={onCloseHandler}>
      <ThemeProvider theme={theme}>
        <OutlinedContainer border={'2px'} padding={'14px'}>
          <form className={classes.Form}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <ChipBadge
                text={'Agregar Producto'}
                type={'filled'}
                color={'primary'}
              />
            </div>
            <div className={classes.FormGrid}>
              <TextField id='codigo-input' label='Codigo' variant='standard' />
              <TextField id='nombre-input' label='Nombre' variant='standard' />
              <TextField
                id='descripcion-input'
                label='Descripcion'
                variant='standard'
              />
              <TextField
                id='precio-input'
                label='Precio'
                variant='outlined'
                type={'number'}
              />
              <TextField
                id='costo-input'
                label='Costo'
                variant='outlined'
                type={'number'}
              />
            </div>
          </form>
          <div className={classes.FormButtons}>
            <FormButtons cancelHandler={onCloseHandler} />
          </div>
        </OutlinedContainer>
      </ThemeProvider>
    </Modal>
  );
};

export default ProductForm;
