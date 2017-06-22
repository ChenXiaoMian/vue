export default {
    setmarket: ({commit}, param) => commit('SETMARKET', {market: param}),
    setmedicine: ({commit}, param) => commit('SETMEDICINE', {medicine: param})
}