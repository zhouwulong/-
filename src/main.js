import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// import './assets/js/ScreenCompatible'
import './plugins/element.js'
import axios from 'axios'
import './assets/css/global.css'

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
