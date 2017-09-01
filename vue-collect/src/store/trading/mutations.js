import * as type from './mutations_types.js';
import * as func from '../function';

export default {
    [type.SETTEMP](states, obj){
        states.Temp = obj.temp
    },
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
        states.standardArr = obj.standardArr
    },
    [type.SETALL](states, obj){
        states.Market = obj.all.Market
        states.Medicine = obj.all.Medicine
        states.BaseName = obj.all.BaseName
        states.standardArr = obj.all.standardArr
    },
    [type.RESET](states){
        states.Temp = ''
        states.Market = ''
        states.Medicine = ''
        states.BaseName = ''
        states.standardArr = ''
    }
}