/**
 *
 * Header
 *
 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.drawerWidth,
    width: `calc(100% - ${theme.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
});

function Header(props) {
  const { isOpen, classes, handleDrawerOpen } = props;
  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: isOpen,
      })}
    >
      <Toolbar disableGutters={!isOpen}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, {
            [classes.hide]: isOpen,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          IAMS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  isOpen: PropTypes.bool,
  classes: PropTypes.object,
  handleDrawerOpen: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(Header);
