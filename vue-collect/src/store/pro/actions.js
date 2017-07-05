export default {
    setmanufacturer: ({commit}, param) => commit('SETMANUFACTURER', {manufacturer: param}),
    setmedicine: ({commit}, param) => commit('SETMEDICINE', {medicine: param}),
    setbase: ({commit}, param) => commit('SETBASENAME', {baseName: param})
}