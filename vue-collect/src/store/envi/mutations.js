import * as type from './mutations_types.js';
import * as func from '../function';

export default {
    // 设置产地名称
    [type.SETBASENAME](states, obj){
        states.BaseName = obj.baseName
    }
}
