import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiReducer';
import Modal from '../UI/Modal';
import TextField from '@mui/material/TextField';
import classes from './ProductForm.module.css';
import colors from '../../utilities/colors.module.scss';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ContainerBox from '../UI/ContainerBox';
import ChipBadge from '../UI/ChipBadge';

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
  },
});

const ProductForm = props => {
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(uiActions.onCloseProductForm());
  };

  return (
    <Modal onClose={onCloseHandler}>
      <ContainerBox width={'100%'} height={'100%'}>
        <ThemeProvider theme={theme}>
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
            <Stack direction='row' spacing={2}>
              <Button color='primary' variant='contained'>
                <CheckIcon />
              </Button>
              <Button color='primary' variant='contained'>
                <CloseIcon />
              </Button>
            </Stack>
          </div>
        </ThemeProvider>
      </ContainerBox>
    </Modal>
  );
};

export default ProductForm;
