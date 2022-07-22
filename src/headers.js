import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8083/api/'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('ctWorker.jwt')
axios.defaults.headers.common['Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure']