/**
 *
 * Asynchronously loads the component for ListView
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
