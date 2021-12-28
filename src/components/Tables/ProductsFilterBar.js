import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tableActions } from '../../store/tableReducer';
import { uiActions } from '../../store/uiReducer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import colors from '../../utilities/colors.module.scss';
import classes from './FilterBar.module.css';
import TextField from '@mui/material/TextField';
import OutlinedContainer from '../UI/OutlinedContainer';
import ViewIcon from '../UI/ViewIcon';

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
  },
});

const commonConfig = {
  color: 'secondary',
};

const ProductsFilterBar = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.items);
  const viewCosto = useSelector(state => state.ui.toggleCosto);

  const codigoRef = useRef(null);
  const nombreRef = useRef(null);
  const descrpcionRef = useRef(null);
  const precioRef = useRef(null);
  const costoRef = useRef(null);

  const filterHandler = () => {
    const filters = {
      codigo: codigoRef.current.value,
      nombre: nombreRef.current.value,
      descripcion: descrpcionRef.current.value,
      precio: precioRef.current.value,
      costo: costoRef.current.value,
    };

    dispatch(
      tableActions.filterProducts({ products: products, filters: filters })
    );
  };

  const toggleCostoHandler = () => {
    dispatch(uiActions.onToggleCosto());
  };

  return (
    <div style={{ marginBottom: '1%', marginTop: '1%' }}>
      <OutlinedContainer border={'2px'} {...commonConfig} shadow={true}>
        <div className={classes.FilterContainer}>
          <ThemeProvider theme={theme}>
            <TextField
              id='codigo-input'
              label='Codigo'
              variant='standard'
              {...commonConfig}
              inputRef={codigoRef}
              onChange={filterHandler}
            />
            <TextField
              id='nombre-input'
              label='Nombre'
              variant='standard'
              {...commonConfig}
              inputRef={nombreRef}
              onChange={filterHandler}
            />
            <TextField
              id='descripcion-input'
              label='Descripcion'
              variant='standard'
              {...commonConfig}
              inputRef={descrpcionRef}
              onChange={filterHandler}
            />
            <TextField
              id='precio-input'
              label='Precio'
              variant='outlined'
              type={'number'}
              {...commonConfig}
              inputRef={precioRef}
              onChange={filterHandler}
            />
            <TextField
              id='costo-input'
              label='Costo'
              variant='outlined'
              type={'number'}
              {...commonConfig}
              inputRef={costoRef}
              onChange={filterHandler}
            />
            <ViewIcon
              color='primary'
              isVisible={!viewCosto}
              size='medium'
              fabSize='small'
              onToggle={toggleCostoHandler}
            />
          </ThemeProvider>
        </div>
      </OutlinedContainer>
    </div>
  );
};

export default ProductsFilterBar;
