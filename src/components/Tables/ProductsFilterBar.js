import { createTheme, ThemeProvider } from '@mui/material/styles';
import colors from '../../utilities/colors.module.scss';
import classes from './FilterBar.module.css';
import TextField from '@mui/material/TextField';
import OutlinedContainer from '../UI/OutlinedContainer';

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
            />
            <TextField
              id='nombre-input'
              label='Nombre'
              variant='standard'
              {...commonConfig}
            />
            <TextField
              id='descripcion-input'
              label='Descripcion'
              variant='standard'
              {...commonConfig}
            />
            <TextField
              id='precio-input'
              label='Precio'
              variant='outlined'
              type={'number'}
              {...commonConfig}
            />
            <TextField
              id='costo-input'
              label='Costo'
              variant='outlined'
              type={'number'}
              {...commonConfig}
            />
          </ThemeProvider>
        </div>
      </OutlinedContainer>
    </div>
  );
};

export default ProductsFilterBar;
