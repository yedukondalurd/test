/*
 *
 * SensorSummary reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_SENSOR_SUMMARY_SUCCESS } from './constants';
import { parseSensorSummary } from 'utils/helpers';

export const initialState = fromJS({
  summaryData: { headers: [], records: [] },
});

function sensorSummaryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SENSOR_SUMMARY_SUCCESS:
      return state.set('summaryData', fromJS(parseSensorSummary(action.data)));
    default:
      return state;
  }
}

export default sensorSummaryReducer;
