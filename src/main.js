import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ValidationObserver, ValidationProvider} from 'vee-validate'
import store from './store'
import Routes from './routes'

require('./headers')
require('./formValidation')

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(vueRouter)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.config.productionTip = false

const routes = new vueRouter({
  mode: 'history',
  routes: Routes
})

new Vue({
  store,
  render: h => h(App),
  router: routes,
}).$mount('#app')
