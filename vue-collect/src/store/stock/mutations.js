import * as type from './mutations_types.js';
import * as func from '../function';

export default {
    [type.SETMARKET](states, obj){
        states.Market = obj.market
        // func.local.set(states);
    },
    [type.SETMEDICINE](states, obj){
        states.Medicine = obj.medicine
        // func.local.set(states);
    }
}