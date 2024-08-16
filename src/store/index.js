// src/store/index.js  
import { createStore } from 'vuex';  
  
export default createStore({  
  state() {  
    return {  
        key:"",
    };  
  },  
  mutations: {  
    increment(state,v) {  
        state.key = v
    }  
  },  
  actions: {  
  },  
  getters: {  
  }  
});