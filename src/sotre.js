import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
Vue.use(VueAxios, axios)

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

        }
    },
    actions: {

    }
})