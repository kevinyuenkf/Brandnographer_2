import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import responsive from 'vue-responsive'
import i18n from '@/localization'

Vue.config.productionTip = false
Vue.use(responsive)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

