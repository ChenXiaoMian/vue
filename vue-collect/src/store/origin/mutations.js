import * as type from './mutations_types.js';
import * as func from '../function';

export default {
	// 设置产地名称
    [type.SETBASENAME](states, obj){
        states.BaseName = obj.baseName
    },
    // 设置种植户名称
    [type.SETGROWERNAME](states, obj){
        states.GrowerName = obj.growerName
    },
    // 设置药材名称
    [type.SETMEDICINE](states, obj){
        states.Medicine = obj.medicine
    }
}