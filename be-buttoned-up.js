import { BE, propDefaults, propInfo } from 'be-enhanced/BE.js';
import { XE } from 'xtal-element/XE.js';
import { register } from 'be-hive/register.js';
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
                    enhancedElement.dispatchEvent(new Event('change'));
                }
            }
        });
        // popoverTarget.addEventListener('toggle', e => {
        //     console.log(e);
        // })
    }
}
const tagName = 'be-buttoned-up';
const ifWantsToBe = 'buttoned-up';
const upgrade = 'button';
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
register(ifWantsToBe, upgrade, tagName);
