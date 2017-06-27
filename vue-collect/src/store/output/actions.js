export default {
    setbase: ({commit}, param) => commit('SETBASENAME', {baseName: param}),
    setgrower: ({commit}, param) => commit('SETGROWERNAME', {growerName: param}),
    setmedicine: ({commit}, param) => commit('SETMEDICINE', {medicine: param})
}