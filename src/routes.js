import WelcomeComponent from "./components/WelcomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"

export default[
    
    // dynamic segments start with a colon
    { path: '/', name: 'Welcome', component: WelcomeComponent },
    { path: '/login', name: 'Login', component: LoginComponent},

]
