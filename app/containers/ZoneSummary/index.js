/**
 *
 * ZoneSummary
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
import makeSelectZoneSummary from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ZoneSummary extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>ZoneSummary</title>
          <meta name="description" content="Description of ZoneSummary" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ZoneSummary.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  zoneSummary: makeSelectZoneSummary(),
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

const withReducer = injectReducer({ key: 'zoneSummary', reducer });
const withSaga = injectSaga({ key: 'zoneSummary', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ZoneSummary);
