/*
 *
 * MainPage actions
 *
 */

import { SET_TOGGLE_DRAWER, SET_SELECTED_NAV } from './constants';

export function toggleDrawerAction() {
  return { type: SET_TOGGLE_DRAWER };
}
export function setSelectedNav(data) {
  return { type: SET_SELECTED_NAV, data };
}
