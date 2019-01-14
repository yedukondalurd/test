import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the listView state domain
 */

const selectListViewDomain = state => state.get('listView', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ListView
 */

const makeSelectListView = () =>
  createSelector(selectListViewDomain, substate => substate.toJS());

export default makeSelectListView;
export { selectListViewDomain };
