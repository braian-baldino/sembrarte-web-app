import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiReducer';
import Modal from '../UI/Modal';
import TextField from '@mui/material/TextField';
import classes from './ProductForm.module.css';
import colors from '../../utilities/colors.module.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ChipBadge from '../UI/ChipBadge';
import OutlinedContainer from '../UI/OutlinedContainer';
import FormButtons from './FormButtons';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const theme = createTheme({
  palette: {
    primary: { main: colors.secondary },
    secondary: { main: colors.primary },
  },
});

const checkboxLabel = { inputProps: { 'aria-label': 'IVA' } };

const CalculatePriceForm = props => {
  const [codigo, setCodigo] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    setCodigo(event.target.value);
  };

  const onCloseHandler = () => {
    dispatch(uiActions.onCloseCalculateForm());
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
                text={'Aplicar Margen'}
                type={'filled'}
                color={'primary'}
              />
            </div>
            <div className={classes.FormGrid}>
              <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id='codigo-input-label'>Codigo</InputLabel>
                <Select
                  labelId='codigo-select-label'
                  id='codigo-select'
                  value={codigo}
                  onChange={handleChange}
                  label='Codigo'
                >
                  <MenuItem value=''>
                    <em>-</em>
                  </MenuItem>
                  <MenuItem value={'AD'}>AD</MenuItem>
                  <MenuItem value={'Faber'}>Faber</MenuItem>
                  <MenuItem value={'Winsor'}>Winsor</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id='margen-input'
                label='Margen (%)'
                variant='outlined'
                type={'number'}
              />
              <div style={{ margin: '0 auto' }}>
                <FormControlLabel
                  label='IVA (21%)'
                  labelPlacement='start'
                  control={
                    <Checkbox
                      {...checkboxLabel}
                      defaultChecked
                      sx={{
                        color: colors.secondary,
                        '&.Mui-checked': {
                          color: colors.secondary,
                        },
                      }}
                    />
                  }
                />
              </div>
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

export default CalculatePriceForm;
