import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import common from './common';
import stock from './stock';
import origin from './origin';
import output from './output';
import envi from './envi';
import pieces from './pieces';
import pro from './pro';
import trading from './trading';

export default new Vuex.Store({
  modules: {
    common,
    stock,
    origin,
    output,
    envi,
    pieces,
    pro,
    trading
  }
});


