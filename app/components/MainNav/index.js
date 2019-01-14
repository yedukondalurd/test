/**
 *
 * MainNav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
// import styled from 'styled-components';

const styles = theme => ({
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: theme.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

function MainNav(props) {
  const {
    handleDrawerClose,
    isOpen,
    classes,
    theme,
    navList,
    selectedNav,
    handleNavClick,
  } = props;
  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        }),
      }}
      open={isOpen}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {navList.map(item => (
          <Tooltip key={item.key} title={item.name} aria-label={item.name}>
            <ListItem
              component={Link}
              to={`/${item.key}`}
              button
              selected={selectedNav === item.key}
              onClick={e => {
                handleNavClick(e, item.key);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
}

MainNav.propTypes = {
  handleDrawerClose: PropTypes.func,
  isOpen: PropTypes.bool,
  classes: PropTypes.object,
  navList: PropTypes.array,
  handleNavClick: PropTypes.func,
  selectedNav: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default withStyles(styles, { withTheme: true })(MainNav);
