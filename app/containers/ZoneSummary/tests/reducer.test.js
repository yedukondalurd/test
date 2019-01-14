import { fromJS } from 'immutable';
import zoneSummaryReducer from '../reducer';

describe('zoneSummaryReducer', () => {
  it('returns the initial state', () => {
    expect(zoneSummaryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
