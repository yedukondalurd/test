// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { getRequest } from 'utils/request';
import { LOAD_SENSOR_SUMMARY } from './constants';
import { loadSensorSummarySuccess, loadSensorSummaryFailed } from './actions';

export function* getSensorSummary() {
  const requestURL = `dataintelapi/sha/deltadetectionv3/geteventsSummary?st=1547359666471&et=1547446066471&zone=all&station=all&category=all&id=&rank=8&groupby=zone,type&advance=true&recommend=all&timethreshold=300000&myevent=false&isShowZero=false&sensortypes=all`;

  try {
    const response = yield call(getRequest, requestURL);
    if (response.errorCode === '0') {
      yield put(loadSensorSummarySuccess(response.response));
    } else {
      yield put(loadSensorSummaryFailed());
    }
  } catch (err) {
    yield put(loadSensorSummaryFailed());
  }
}

// Individual exports for testing
export default function* sensorSummarySaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_SENSOR_SUMMARY, getSensorSummary);
}
