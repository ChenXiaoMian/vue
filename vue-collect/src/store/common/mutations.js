import * as type from './mutations_types.js';
import * as func from '../function';

export default {
    [type.SETLOCATION](states, obj){
        states.location = obj.location;
    }
}