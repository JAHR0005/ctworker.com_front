import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

require('./headers')

export default new Vuex.Store({
    state: {
        username:JSON.parse(localStorage.getItem('ctWorker.username')),
        auth: localStorage.getItem('state.Auth'),
        token: localStorage.getItem('ctWorker.jwt'),
        search:[],
    },
    getters: {
        username: state=> state.username,
        auth: state => state.auth,
        token: state => state.token,
        search: state => state.search,
    },
    mutations: {
        DO_LOGIN(state, userInfo) {
            localStorage.setItem('ctWorker.username', JSON.stringify(userInfo.username))
            localStorage.setItem('ctWorker.jwt', userInfo.token) 
            localStorage.setItem('state.Auth', true)
            state.auth = true
            state.username = userInfo.username    
            state.token = userInfo.token
        }
    },
    actions: {
        checkUserAuth({ commit },user){
            if(localStorage.getItem('ctWorker.username') || localStorage.getItem('ctWorker.jwt') != null){
                axios.post('user',{ user }).then(() => { 
                    commit('CHECK_USER_AUTH')
                    console.log('user verified') 
                }).catch(error => {
                    if(error.response.status){
                       commit('DO_LOGOUT')
                    }
                })
            }
        }
    }
})