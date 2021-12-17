import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import colors from '../../utilities/colors.module.scss';

const ContainerBox = props => {
  const { width, height } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: width,
          height: height,
          backgroundColor: colors.secondary,
          border: '1px solid ' + colors.secondary,
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.418)',
          margin: '1%',
        },
      }}
    >
      <Paper variant='outlined'> {props.children}</Paper>
    </Box>
  );
};

export default ContainerBox;
