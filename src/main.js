import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
// import axios from 'axios'
// import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import APlayer from '@moefe/vue-aplayer'
// Vue.prototype.$http = axios
Vue.use(ElementUI, APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
