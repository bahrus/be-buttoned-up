// @ts-check
/** @import {Actions, PAP, AllProps, AP} from './types/be-buttoned-up/types' */;
/** @import {RoundaboutOptions} from './types/roundabout/types' */;
/** @import {ElementEnhancementGateway, SpawnContext} from './types/assign-gingerly/types' */;
/** @import {EMC} from './types/mount-observer/types' */;
/** @import {RAConfig} from './types/roundabout/types' */;

/**
 * @implements {Actions}
 */
export class BeButtonedUp {

    /**
     * @this {AllProps & Actions}
     * @param {Element & ElementEnhancementGateway} enhancedElement 
     * @param {SpawnContext} ctx 
     * @param {PAP} initVals 
     */
    constructor(enhancedElement, ctx, initVals){
        this.init(this, enhancedElement, ctx, initVals);
    }

    /**
     * @param {AllProps} self 
     * @param {Element & ElementEnhancementGateway} enhancedElement 
     * @param {SpawnContext} ctx 
     * @param {PAP} initVals 
     */
    async init(self, enhancedElement, ctx, initVals){
        const {customData} = /** @type {EMC<any, AllProps, Element, RAConfig<AllProps, Actions>>} */ (ctx.emc || ctx.config);
        /**
         * @type {RoundaboutOptions}
         */
        const raOptions = {
            ...customData,
            vm: self,
            initialPropVals: {
                enhancedElement,
                ...customData?.defaultPropVals,
                ...initVals
            }
        };
        await (await import('roundabout-lib/roundabout.js')).roundabout(raOptions);
        self.initialized = true;
    }

    /**
     * @param {AP} self 
     * @returns {PAP}
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
        return {
            resolved: true,
        };
    }
}
