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
            localStorage.setItem('ctWorker.username', JSON.stringify(userInfo.user))
            localStorage.setItem('ctWorker.jwt', userInfo.token) 
            localStorage.setItem('state.Auth', true)
            state.auth = true
            state.username = userInfo.user
            state.token = userInfo.token
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
        },
        DO_LOGOUT(state) {
            localStorage.removeItem('ctWorker.username')
            localStorage.removeItem('ctWorker.jwt')
            localStorage.removeItem('state.Auth')
            state.auth = false
            state.username = null
            state.token = null
            axios.defaults.headers.common['Authorization'] = null
        },  
    },

    actions: {
        do_logout({commit}) {
            axios.post('employees_logout').then(() => { 
                return console.log('user verified') 
            }).catch(error => {
                if(error.response.status){
                    alert('La sesión ya ha expirado')
                    return console.log('not verified')
                }
            })
            commit('DO_LOGOUT') 

        },
        checkUserAuth({ commit }){
            if(localStorage.getItem('ctWorker.username') || localStorage.getItem('ctWorker.jwt') != null){
                axios.post('checkUser').then(() => { 
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