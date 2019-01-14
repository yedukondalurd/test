import { fromJS } from 'immutable';
import mapViewReducer from '../reducer';

describe('mapViewReducer', () => {
  it('returns the initial state', () => {
    expect(mapViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
