import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mapView state domain
 */

const selectMapViewDomain = state => state.get('mapView', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MapView
 */

const makeSelectMapView = () =>
  createSelector(selectMapViewDomain, substate => substate.toJS());

export default makeSelectMapView;
export { selectMapViewDomain };
