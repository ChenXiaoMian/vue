import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import common from './common';
import stock from './stock';
import origin from './origin';

export default new Vuex.Store({
  modules: {
    common,
    stock,
    origin
  }
});

// const store = new Vuex.Store({
//   state: {
//     kmUrl: 'http://km126.km1818.com:8181/KMInfoCollect/services',
//     tempNum: 20,
//     historyNum: 20,
//     regexp: {
//       regexp: {
//           IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
//           NUMBER: /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/
//       }
//     },
//     // 地理位置
//     location: ''
//   },
//   getters: {
//     getLocation(state){
//       return state.location
//     }
//   },
//   mutations: {
//     ONADDTODO(state,item){
//       state.aTodos.push(item)
//     },
//     ONDELTODO(state,index){
//       state.aTodos.splice(index,1)
//     },
//     ONERROR(state,str){
//       state.message = str
//     },
//     SETLOCATION(state,context){
//       state.location = context;
//     }
//   },
//   actions: {
//     onAddTodo(context,item){
//       if(item.value!=""){
//         content.commit("ONADDTODO",item);
//         context.commit("ONERROR","");
//       }else{
//         context.commit("ONERROR","添加失败");
//       }
//     },
//     onDelTodo({commit},index){
//       commit("ONDELTODO",index);
//     },
//     setLocation({commit},context){
//       if(context.value!=""){
//         commit("SETLOCATION",context);
//       }
//     }
//   },
//   modules: {}
// });


