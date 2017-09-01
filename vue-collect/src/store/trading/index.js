import * as func from '../function';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const state = {   
    Temp: '',
    Market: '',
	Medicine: '',
	BaseName: '',
    standardArr: []
}
var namespaced = true;

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced
}