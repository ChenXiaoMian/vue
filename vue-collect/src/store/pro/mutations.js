import * as type from './mutations_types.js';
import * as func from '../function';

export default {
    [type.SETMANUFACTURER](states, obj){
        states.Manufacturer = obj.manufacturer
    },
    [type.SETMEDICINE](states, obj){
        states.Medicine = obj.medicine
    },
    [type.SETBASENAME](states, obj){
        states.BaseName = obj.baseName
    }
}