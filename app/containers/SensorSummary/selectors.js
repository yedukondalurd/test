import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sensorSummary state domain
 */

const selectSensorSummaryDomain = state =>
  state.get('sensorSummary', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SensorSummary
 */

const makeSelectSensorSummary = () =>
  createSelector(selectSensorSummaryDomain, substate => substate.toJS());
const makeSelectSensorSummaryData = () =>
  createSelector(selectSensorSummaryDomain, substate =>
    substate.get('summaryData').toJS(),
  );

export default makeSelectSensorSummary;
export { selectSensorSummaryDomain, makeSelectSensorSummaryData };
