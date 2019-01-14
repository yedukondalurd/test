import { fromJS } from 'immutable';
import sensorSummaryReducer from '../reducer';

describe('sensorSummaryReducer', () => {
  it('returns the initial state', () => {
    expect(sensorSummaryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
