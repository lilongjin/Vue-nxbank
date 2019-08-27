import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    all_data:[],
  },
  mutations:{
    // showPeople(state,msg){
    //   state.name = msg
    // }
    // save_alldata(state,data){
    //   state.all_data = data
    // }
  }
})
export default store
