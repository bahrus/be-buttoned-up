// @ts-check
import { propInfo, rejected, resolved } from 'be-enhanced/cc.js';
import { BE} from 'be-enhanced/BE.js';
import { dispatchEvent as de } from 'trans-render/positractions/dispatchEvent.js';
/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, PAP, AllProps, AP, BAP} from './ts-refs/be-buttoned-up/types' */;

/**
 * @implements {Actions}
 */
class BeButtonedUp extends BE {
    /**
     * @type {BEConfig<AP & BEAllProps, Actions & IEnhancement>}
     */
    static config = {
        propDefaults: {
            eventName: 'click'
        },
        propInfo:{
            ...propInfo
        },
        compacts: {
            when_eventName_changes_invoke_hydrate: 0,
        },
        positractions: [resolved, rejected],
        actions: {}
    };

    /**
     * 
     * @param {BAP} self 
     * @returns 
     */
    hydrate(self){
        const { enhancedElement, eventName} = self;
        const popoverTarget = /** @type {any} */ (enhancedElement).popoverTargetElement;
        popoverTarget.addEventListener('click', e => {
            const target = e.target;
            if(target instanceof HTMLButtonElement){
                if(target.value){
                    enhancedElement.value = target.value;
                    popoverTarget.hidePopover();
                    enhancedElement.dispatchEvent(new Event('change'));
                }
            }
        });
        return /** type {PAP} */({
            resolved: true
        });
    }


    de = de;
}

await BeButtonedUp.bootUp();
export { BeButtonedUp };