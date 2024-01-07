import {BE, propDefaults, propInfo} from 'be-enhanced/BE.js';
import {BEConfig, EnhancementInfo} from 'be-enhanced/types';
import {XE} from 'xtal-element/XE.js';
import {Actions, AllProps, AP, PAP, ProPAP, POA} from './types';

export class BeButtonedUp  extends BE<AP, Actions, HTMLButtonElement> implements Actions{
    static get beConfig(){
        return {
            parse: true,
            //primaryProp: 'to'
        } as BEConfig
    }
    override async attach(enhancedElement: HTMLButtonElement, enhancementInfo: EnhancementInfo){
        super.attach(enhancedElement, enhancementInfo);
        const popoverTarget = (enhancedElement as any).popoverTargetElement as HTMLElement;
        popoverTarget.addEventListener('click', e => {
            const target = e.target as Element;
            if(target instanceof HTMLButtonElement){
                if(target.value){
                    enhancedElement.value = target.value;
                    (popoverTarget as any).hidePopover();
                    enhancedElement.dispatchEvent(new Event('change'));
                }
            }
        });
        // popoverTarget.addEventListener('toggle', e => {
        //     console.log(e);
        // })
    }
}

export interface BeButtonedUp extends AllProps{}

export const tagName = 'be-buttoned-up';


const xe = new XE<AP, Actions>({
    config: {
        tagName,
        propDefaults:{
            ...propDefaults,
        },
        propInfo:{
            ...propInfo,
        },
        actions: {

        }
    },
    superclass: BeButtonedUp
});


