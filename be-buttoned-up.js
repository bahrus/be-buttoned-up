// @ts-check
/** @import {Actions, PAP, AllProps, AP} from './types/be-buttoned-up/types' */;
/** @import {RoundaboutOptions} from './types/roundabout/types' */;
/** @import {ElementEnhancementGateway} from './types/assign-gingerly/types' */;
/** @import {EMC} from './types/mount-observer/types' */;
/** @import {RAConfig} from './types/roundabout/types' */;
/**
 * @type {EMC<any, AllProps, Element, RAConfig<AllProps, Actions>>}
 */
import emc from './emc.json' with {type: 'json'};

const {customData} = emc;

/**
 * @implements {Actions}
 */
export class BeButtonedUp {

    /**
     * @this {AllProps & Actions}
     * @param {Element & ElementEnhancementGateway} enhancedElement 
     * @param {*} ctx 
     * @param {AllProps} initVals 
     */
    constructor(enhancedElement, ctx, initVals){
        this.init(this, enhancedElement, initVals);
    }

    /**
     * @param {AllProps} self 
     * @param {Element & ElementEnhancementGateway} enhancedElement 
     * @param {PAP} initVals 
     */
    async init(self, enhancedElement, initVals){
        const {defaultPropVals} = customData;
        /**
         * @type {RoundaboutOptions}
         */
        const raOptions = {
            ...customData,
            vm: self,
            initialPropVals: {
                enhancedElement,
                ...defaultPropVals,
                ...initVals
            }
        };
        (await import('roundabout-lib/roundabout.js')).roundabout(raOptions);
    }

    /**
     * @param {AP} self 
     */
    hydrate(self){
        const { enhancedElement } = self;
        const popoverTarget = /** @type {any} */ (enhancedElement).popoverTargetElement;
        popoverTarget.addEventListener('click', /** @param {Event} e */ (e) => {
            const target = e.target;
            if(target instanceof HTMLButtonElement){
                if(target.value){
                    /** @type {any} */ (enhancedElement).value = target.value;
                    popoverTarget.hidePopover();
                    enhancedElement.dispatchEvent(new Event('change'));
                }
            }
        });
    }
}
