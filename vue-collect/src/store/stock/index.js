import * as func from '../function';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
// const state = func.local.get() || {
//     event: [],
//     count: 0
// }

const state = {
	tempID: '',
	Market: '',
	Medicine: ''
}

export default {
    state,
    getters,
    actions,
    mutations
}