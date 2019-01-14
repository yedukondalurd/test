import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the zoneSummary state domain
 */

const selectZoneSummaryDomain = state => state.get('zoneSummary', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ZoneSummary
 */

const makeSelectZoneSummary = () =>
  createSelector(selectZoneSummaryDomain, substate => substate.toJS());

export default makeSelectZoneSummary;
export { selectZoneSummaryDomain };
