import * as func from '../function';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

// const state = func.local.get() || {
//     event: [],
//     count: 0
// }

const state = {
    kmUrl: 'http://km126.km1818.com:8181/KMInfoCollect/services',   //api
    tempNum: 20,													//保存模板数
    historyNum: 20,													//历史记录数
    regexp: {
      regexp: {
          IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
          NUMBER: /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/
      }
    },
    location: ''  													// 地理位置
}

export default {
    state,
    getters,
    actions,
    mutations
}