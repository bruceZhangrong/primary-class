import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'

import 'amfe-flexible'
import 'muse-ui/dist/muse-ui.css'
import '@/assets/css/style.scss'

Vue.use(MuseUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
