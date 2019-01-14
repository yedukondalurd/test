/*
 *
 * MainPage reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_TOGGLE_DRAWER, SET_SELECTED_NAV } from './constants';

export const initialState = fromJS({
  isDrawerOpen: false,
  selectedNav: 'sensor-summary',
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    case SET_SELECTED_NAV:
      return state.set('selectedNav', action.data);
    default:
      return state;
  }
}

export default mainPageReducer;
