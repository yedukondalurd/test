/*
 *
 * SensorSummary actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_SENSOR_SUMMARY,
  LOAD_SENSOR_SUMMARY_SUCCESS,
  LOAD_SENSOR_SUMMARY_FAILED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadSensorSummary() {
  return { type: LOAD_SENSOR_SUMMARY };
}

export function loadSensorSummarySuccess(data) {
  return { type: LOAD_SENSOR_SUMMARY_SUCCESS, data };
}
export function loadSensorSummaryFailed(err) {
  return { type: LOAD_SENSOR_SUMMARY_FAILED, err };
}
