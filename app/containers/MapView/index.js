/**
 *
 * MapView
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMapView from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class MapView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>MapView</title>
          <meta name="description" content="Description of MapView" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

MapView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mapView: makeSelectMapView(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mapView', reducer });
const withSaga = injectSaga({ key: 'mapView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MapView);
