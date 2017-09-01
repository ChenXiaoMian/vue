export default {
    settemp: ({commit}, param) => commit('SETTEMP', {temp: param}),
    setmarket: ({commit}, param) => commit('SETMARKET', {market: param}),
    setmedicine: ({commit}, param) => commit('SETMEDICINE', {medicine: param}),
    setbase: ({commit}, param) => commit('SETBASENAME', {baseName: param}),
    setstandard: ({commit}, param) => commit('SETSTANDARD', {standardArr: param}),
    setAll: ({commit},param) => commit('SETALL',{all:param}),
    reset: ({commit}) => commit('RESET')
}