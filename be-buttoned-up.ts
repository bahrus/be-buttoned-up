import {BE, propDefaults, propInfo} from 'be-enhanced/BE.js';
import {BEConfig, EnhancementInfo} from 'be-enhanced/types';
import {XE} from 'xtal-element/XE.js';
import {Actions, AllProps, AP, PAP, ProPAP, POA} from './types';
import {register} from 'be-hive/register.js';

export class BeButtonedUp  extends BE<AP, Actions> implements Actions{
    static  override get beConfig(){
        return {
            parse: true,
            //primaryProp: 'to'
        } as BEConfig
    }
    override async attach(enhancedElement: Element, enhancementInfo: EnhancementInfo){
        super.attach(enhancedElement, enhancementInfo);
        const popoverTarget = (enhancedElement as any).popoverTargetElement as HTMLElement;
        popoverTarget.addEventListener('toggle', e => {
            console.log(e);
        })
    }
}

export interface BeButtonedUp extends AllProps{}

const tagName = 'be-buttoned-up';
const ifWantsToBe = 'buttoned-up';
const upgrade = '*';

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

register(ifWantsToBe, upgrade, tagName);

