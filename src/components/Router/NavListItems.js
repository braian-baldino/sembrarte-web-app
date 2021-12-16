import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import colors from '../../utilities/colors.module.scss';
import styles from './NavListItems.module.scss';

//Icons import
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';

const NavListItems = () => {
  return (
    <List sx={{ bgcolor: colors.primary }} className={styles.NavItem}>
      <NavLink to='/home'>
        <ListItem button key='home'>
          <ListItemIcon>
            <HomeIcon sx={{ color: colors.secondary }} />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
      </NavLink>
      <NavLink to='/productos'>
        <ListItem button key='productos'>
          <ListItemIcon>
            <ListAltIcon sx={{ color: colors.secondary }} />
          </ListItemIcon>
          <ListItemText primary='Productos' />
        </ListItem>
      </NavLink>
    </List>
  );
};

export default NavListItems;
