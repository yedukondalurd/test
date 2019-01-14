/**
 *
 * Asynchronously loads the component for ContentWrapper
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
