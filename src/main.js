import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Toast } from 'vant'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'wx-open-launch-app',
]
Vue.prototype.$toast = Toast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
