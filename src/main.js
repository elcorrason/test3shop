import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import fb from 'firebase/app'
import 'firebase/auth';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
    created() {
      var firebaseConfig = {
        apiKey: "AIzaSyAdKIXlZL3W1m68PAjcH1mhad1irbqMt1g",
        authDomain: "test3shop.firebaseapp.com",
        databaseURL: "https://test3shop.firebaseio.com",
        projectId: "test3shop",
        storageBucket: "test3shop.appspot.com",
        messagingSenderId: "446608937164",
        appId: "1:446608937164:web:e5c30bf94b783ca204b269"
      }
      fb.initializeApp(firebaseConfig)

      fb.auth().onAuthStateChanged(user => {
        if(user) {
          this.$store.dispatch('autoLoginUser', user)
        }
      })
  },
  render: h => h(App),

}).$mount('#app')
