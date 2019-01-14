/**
 *
 * ContentWrapper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: '10px',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

function ContentWrapper(props) {
  const { classes, children } = props;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </main>
  );
}

ContentWrapper.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default withStyles(styles, { withTheme: true })(ContentWrapper);
