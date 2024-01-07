import { BE, propDefaults, propInfo } from 'be-enhanced/BE.js';
import { XE } from 'xtal-element/XE.js';
export class BeButtonedUp extends BE {
    static get beConfig() {
        return {
            parse: true,
            //primaryProp: 'to'
        };
    }
    async attach(enhancedElement, enhancementInfo) {
        super.attach(enhancedElement, enhancementInfo);
        const popoverTarget = enhancedElement.popoverTargetElement;
        popoverTarget.addEventListener('click', e => {
            const target = e.target;
            if (target instanceof HTMLButtonElement) {
                if (target.value) {
                    enhancedElement.value = target.value;
                    popoverTarget.hidePopover();
                    enhancedElement.dispatchEvent(new Event('change'));
                }
            }
        });
        // popoverTarget.addEventListener('toggle', e => {
        //     console.log(e);
        // })
    }
}
export const tagName = 'be-buttoned-up';
const xe = new XE({
    config: {
        tagName,
        propDefaults: {
            ...propDefaults,
        },
        propInfo: {
            ...propInfo,
        },
        actions: {}
    },
    superclass: BeButtonedUp
});
