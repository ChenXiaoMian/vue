import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoLists: [],
    userName: '',
    kmUrl: 'http://km126.km1818.com:8181/KMInfoCollect/services',
    tempNum: 20,
    historyNum: 20,
    regexp: {
      regexp: {
          IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
          NUMBER: /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/
      }
    }
  },
  getters: {
    todoCount(state){
      return state.todoLists.length
    },
    getUserName(state){
      return state.userName
    }
  },
  mutations: {
    ONADDTODO(state,item){
      state.aTodos.push(item)
    },
    ONDELTODO(state,index){
      state.aTodos.splice(index,1)
    },
    ONERROR(state,str){
      state.message = str
    },
    SETUSERNAME(state,name){
      state.userName = name
    }
  },
  actions: {
    onAddTodo(context,item){
      if(item.value!=""){
        content.commit("ONADDTODO",item);
        context.commit("ONERROR","");
      }else{
        context.commit("ONERROR","添加失败");
      }
    },
    onDelTodo({commit},index){
      commit("ONDELTODO",index);
    },
    setUserName(context,name){
      if(name.value!=""){
        content.commit("SETUSERNAME",name);
        context.commit("ONERROR","");
      }else{
        context.commit("ONERROR","添加失败");
      }
    }
  },
  modules: {}
});

export default store
