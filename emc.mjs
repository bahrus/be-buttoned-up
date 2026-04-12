//@ts-check

/** @import {EMC} from './types/mount-observer/types' */;
/** @import {AllProps, Actions} from './types/be-buttoned-up/types' */
/** @import {RAConfig} from './types/roundabout/types' */

/**
 * @type {EMC<any, AllProps, Element, RAConfig<AllProps, Actions> >}
 */
export const emc = {
    enhConfig: {
        enhKey: 'BeButtonedUp',
        spawn: 'be-buttoned-up/be-buttoned-up.js',
        withAttrs: {
            base: 'be-buttoned-up',
            eventName: '${base}-event-name',
            _closeOnSelect: {
                instanceOf: 'Boolean'
            }
        }
    },
    customData: {
        weakRef: {
            properties: ['enhancedElement']
        },
        actions: {
            hydrate: {
                ifAllOf: ['enhancedElement', 'eventName']
            }
        },
        handlers: {},
        compacts: {},
        defaultPropVals: {
            eventName: 'click'
        }
    }
}

export function render(){
    return JSON.stringify(emc, null, 4);
}

console.log(render());
