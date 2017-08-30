export default {
    setmarket: ({commit}, param) => commit('SETMARKET', {market: param}),
    setmedicine: ({commit}, param) => commit('SETMEDICINE', {medicine: param}),
    setbase: ({commit}, param) => commit('SETBASENAME', {baseName: param}),
    setstandard: ({commit}, param) => commit('SETSTANDARD', {standard: param})
}