import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './vuetify'
import "./plugins/moment"
import "./plugins/axios"
// Vue.use(VueCompositionApi)
// Vue.use(pinia)

Vue.use(vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
