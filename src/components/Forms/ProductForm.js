import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiReducer';
import { productActions } from '../../store/productsReducer';
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
    secondary: { main: colors.error },
  },
});

const ProductForm = props => {
  //State
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0);
  const [costo, setCosto] = useState(0);
  const [formIsValid, setFormIsValid] = useState(false);

  //Functions
  const dispatch = useDispatch();

  const codigoHandler = event => {
    setCodigo(event.target.value);
  };

  const nombreHandler = event => {
    setNombre(event.target.value);
  };

  const descripcionHandler = event => {
    setDescripcion(event.target.value);
  };

  const precioHandler = event => {
    setPrecio(event.target.value);
  };

  const costoHandler = event => {
    setCosto(event.target.value);
  };

  const onCloseHandler = () => {
    dispatch(uiActions.onCloseProductForm());
  };

  const inputsValid =
    codigo.trim() !== '' || nombre.trim() !== '' || descripcion.trim() !== '';

  useEffect(() => {
    if (inputsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [inputsValid]);

  const onAddProductHandler = () => {
    dispatch(
      productActions.addProduct({
        product: {
          id: 8,
          codigo: codigo,
          nombre: nombre,
          descripcion: descripcion,
          precio: precio,
          costo: costo,
        },
      })
    );

    setCodigo('');
    setNombre('');
    setDescripcion('');
    setPrecio(0);
    setCosto(0);
  };

  //Component
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
              <TextField
                id='codigo-input'
                label='Codigo'
                variant='standard'
                onChange={codigoHandler}
                value={codigo}
              />
              <TextField
                id='nombre-input'
                label='Nombre'
                variant='standard'
                onChange={nombreHandler}
                value={nombre}
              />
              <TextField
                id='descripcion-input'
                label='Descripcion'
                variant='standard'
                onChange={descripcionHandler}
                value={descripcion}
              />
              <TextField
                id='precio-input'
                label='Precio'
                variant='outlined'
                type={'number'}
                onChange={precioHandler}
                value={precio}
              />
              <TextField
                id='costo-input'
                label='Costo'
                variant='outlined'
                type={'number'}
                onChange={costoHandler}
                value={costo}
              />
            </div>
          </form>
          <div className={classes.FormButtons}>
            <FormButtons
              disabled={!formIsValid}
              acceptHandler={onAddProductHandler}
              cancelHandler={onCloseHandler}
            />
          </div>
        </OutlinedContainer>
      </ThemeProvider>
    </Modal>
  );
};

export default ProductForm;
