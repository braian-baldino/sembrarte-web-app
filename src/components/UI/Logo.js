import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <img
        src={require('../../assets/logo.png')}
        alt='logo'
        className={styles.Logo}
      />
    </div>
  );
};

export default Logo;
