import * as func from '../function';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const state = {
	tempID: '',
    pro: {
        Product: '',
        ProductName: '',
        Standard: '',
        ManufacturerName: '',
        MedicineName: '',
        BaseName: '',
        Ratio: '',
        MedicineStandard: '',
        Supplier: '',
        QualityRequire: '',
        Sale:'',
        ProductTendency: '',
        Addition: ''
    },
    Manufacturer: '',
	Medicine: '',
	BaseName: ''
}
var namespaced = true;

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced
}