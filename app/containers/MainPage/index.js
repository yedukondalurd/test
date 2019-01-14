/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
//import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Loadable';
import ContentWrapper from 'components/ContentWrapper/Loadable';
import MainNav from 'components/MainNav/Loadable';

import MapView from 'containers/MapView/Loadable';
import ListView from 'containers/ListView/Loadable';
import ZoneSummary from 'containers/ZoneSummary/Loadable';
import SensorSummary from 'containers/SensorSummary/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMainPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { toggleDrawerAction, setSelectedNav } from './actions';
import { mainNavList } from './config';
//import messages from './messages';

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.PureComponent {
  render() {
    const { classes, toggleDrawer, mainPage, handleNavClick } = this.props;
    const { isDrawerOpen, selectedNav } = mainPage;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>MainPage</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>
        <Header handleDrawerOpen={toggleDrawer} isOpen={isDrawerOpen} />
        <MainNav
          handleDrawerClose={toggleDrawer}
          isOpen={isDrawerOpen}
          navList={mainNavList}
          handleNavClick={handleNavClick}
          selectedNav={selectedNav}
        />
        <ContentWrapper>
          <Switch>
            <Route exact path="/" component={SensorSummary} />
            <Route exact path="/map-view" component={MapView} />
            <Route exact path="/list-view" component={ListView} />
            <Route exact path="/zone-summary" component={ZoneSummary} />
            <Route exact path="/sensor-summary" component={SensorSummary} />
            <Route component={NotFoundPage} />
          </Switch>
        </ContentWrapper>
      </div>
    );
  }
}

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainPage: makeSelectMainPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    toggleDrawer: () => {
      dispatch(toggleDrawerAction());
    },
    handleNavClick: (e, data) => {
      dispatch(setSelectedNav(data));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mainPage', reducer });
const withSaga = injectSaga({ key: 'mainPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles, { withTheme: true }),
)(MainPage);
