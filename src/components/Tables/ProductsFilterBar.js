import ContainerBox from '../../components/UI/ContainerBox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import colors from '../../utilities/colors.module.scss';
import classes from './FilterBar.module.css';
import TextField from '@mui/material/TextField';

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
  },
});

const ProductsFilterBar = () => {
  return (
    <ContainerBox width={'100%'} height={85}>
      <div className={classes.FilterContainer}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </div>
    </ContainerBox>
  );
};

export default ProductsFilterBar;
