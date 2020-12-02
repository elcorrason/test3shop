import Vue from 'vue'
import Vuex from 'vuex'
import ads from './modules/ads'
import user from './modules/user'
import shared from './modules/shared'
import orders from './modules/orders'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ads,
    user,
    shared,
    orders
  },

})
