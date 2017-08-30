import * as type from './mutations_types.js';
import * as func from '../function';

export default {
    [type.SETMARKET](states, obj){
        states.Market = obj.market
    },
    [type.SETMEDICINE](states, obj){
        states.Medicine = obj.medicine
    },
    [type.SETBASENAME](states, obj){
        states.BaseName = obj.baseName
    },
    [type.SETSTANDARD](states, obj){
        states.Standard = obj.standard
    }
}