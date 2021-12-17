import { Fragment } from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Fragment>
      <img
        src={require('../../assets/logo.png')}
        alt='logo'
        className={styles.Logo}
      />
    </Fragment>
  );
};

export default Logo;
