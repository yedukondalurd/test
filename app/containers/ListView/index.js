/**
 *
 * ListView
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
import makeSelectListView from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class ListView extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>ListView</title>
          <meta name="description" content="Description of ListView" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ListView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listView: makeSelectListView(),
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

const withReducer = injectReducer({ key: 'listView', reducer });
const withSaga = injectSaga({ key: 'listView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListView);
