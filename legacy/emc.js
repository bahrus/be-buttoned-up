// @ts-check
import { BeHive, seed, MountObserver } from 'be-hive/be-hive.js';
/** @import {EMC} from './ts-refs/trans-render/be/types' */

/**
 * @type {EMC}
 */
export const emc = {
    base: 'be-buttoned-up',
    map: {
        '0.0': {
            instanceOf: 'String',
            mapsTo: 'eventName',
            valIfFalsy: 'click'
        }
    },
    enhPropKey: 'beButtonedUp',
    importEnh: async () => {
        const { BeButtonedUp } = 
        /** @type {{new(): IEnhancement<Element>}} */ 
        /** @type {any} */
        (await import('./be-buttoned-up.js'));
        return BeButtonedUp;
    }
}

const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);