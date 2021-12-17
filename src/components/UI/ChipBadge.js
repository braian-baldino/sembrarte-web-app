import Chip from '@mui/material/Chip';
import colors from '../../utilities/colors.module.scss';

const ChipBadge = props => {
  const { text, type, color } = props;
  return (
    <Chip
      label={text ?? ''}
      variant={type ?? 'outlined'}
      style={{
        color: 'white',
        marginBottom: '1.5rem',
        fontSize: '0.9rem',
        backgroundColor:
          color === 'primary' ? colors.primary : colors.secondary,
        border: '1px solid ' + colors.secondary,
      }}
    />
  );
};

export default ChipBadge;
