/**
 *
 * Asynchronously loads the component for MapView
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
