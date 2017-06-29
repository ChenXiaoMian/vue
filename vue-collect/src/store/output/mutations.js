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
    },
    // 设置转产药材名称
    [type.SETCMEDICINE](states, obj){
        states.CMedicine = obj.cmedicine
    },
    // 设置是否转产
    [type.SETCHANGEMODE](states, obj){
        states.ChangeMode = obj.changemode
    }
}