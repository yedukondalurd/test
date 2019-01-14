import { fromJS } from 'immutable';
import listViewReducer from '../reducer';

describe('listViewReducer', () => {
  it('returns the initial state', () => {
    expect(listViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
