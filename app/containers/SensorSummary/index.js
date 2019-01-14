/**
 *
 * SensorSummary
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
//import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Paper from '@material-ui/core/Paper';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import SummaryTable from 'components/SummaryTable/Loadable';
import { makeSelectSensorSummaryData } from './selectors';
import reducer from './reducer';
import saga from './saga';
//import messages from './messages';
import { loadSensorSummary } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class SensorSummary extends React.PureComponent {
  componentDidMount() {
    const { getSensorSummary } = this.props;
    getSensorSummary();
  }
  render() {
    const { summaryData } = this.props;
    const { headers, records } = summaryData;
    return (
      <div>
        <Helmet>
          <title>SensorSummary</title>
          <meta name="description" content="Description of SensorSummary" />
        </Helmet>
        {/*<FormattedMessage {...messages.header} />*/}

        <Paper>
          <SummaryTable
            title="Sensor Summary"
            headers={headers}
            records={records}
          />
        </Paper>
      </div>
    );
  }
}

SensorSummary.propTypes = {
  dispatch: PropTypes.func.isRequired,
  summaryData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  summaryData: makeSelectSensorSummaryData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getSensorSummary: () => {
      dispatch(loadSensorSummary());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'sensorSummary', reducer });
const withSaga = injectSaga({ key: 'sensorSummary', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SensorSummary);
