import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

require('./headers')

export default new Vuex.Store({
    state: {
        username:JSON.parse(localStorage.getItem('tbStore.username')),
        auth: localStorage.getItem('state.Auth'),
        token: localStorage.getItem('tbStore.jwt'),
        search:[],
    },
    getters: {
        username: state=> state.username,
        auth: state => state.auth,
        token: state => state.token,
        search: state => state.search,
    },
    mutations: {
        DO_LOGIN(state, username) { 
            state.auth = true
            state.username = username
        }
    },
    actions: {
        doLogin({ commit }, userInfo){
            var username = userInfo.username
            var password = userInfo.password
            var status = userInfo.status 
            axios.post('login', { username, password, status }).then(response => {
                localStorage.setItem('ctW.jwt', response.data.token)
                localStorage.setItem('ctW.username', JSON.stringify(username))
                commit('DO_LOGIN', username)
                
            }) 
        }
    }
})