import React from 'react';
import colors from '../../utilities/colors.module.scss';

const OutlinedContainer = props => {
  const { padding, border, background, shadow } = props;

  const styles = {
    border: `${border} solid ${colors.secondary}`,
    borderRadius: '6px',
    padding: padding ?? '10px',
    backgroundColor: background ?? 'transparent',
    boxShadow: shadow ? '0px 3px 10px rgba(0, 0, 0, 0.342)' : 'none',
  };

  return <div style={{ ...styles }}>{props.children}</div>;
};

export default OutlinedContainer;
