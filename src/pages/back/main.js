import Vue from 'vue'
import App from './App.vue'
import router from '../../router/back'
import store from '../../store/back'
import { Toast } from 'vant'

Vue.config.productionTip = false
Vue.prototype.$toast = Toast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
