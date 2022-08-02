import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ValidationObserver, ValidationProvider} from 'vee-validate'
import store from './store'
import Routes from './routes'
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css' // Optional CSS

require('./formValidation')
require('./headers')

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(VueSimpleSuggest)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(vueRouter)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('VueSimpleSuggest', VueSimpleSuggest)
Vue.config.productionTip = false

const routes = new vueRouter({
  mode: 'history',
  routes: Routes
})

//checking if user is logged in with auth token
routes.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = store.state.auth

  if (requiresAuth && !isAuthenticated) {
    next({ name: "Welcome" })
  } else if(isAuthenticated && to.name === 'Login'){
    next({ name: "Welcome" })
  }else{
    next()
  }
})

new Vue({
  store,
  render: h => h(App),
  router: routes,
}).$mount('#app')

