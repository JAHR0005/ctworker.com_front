import WelcomeComponent from "./components/WelcomeComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"

export default[
    
    // dynamic segments start with a colon
    { path: '/', name: 'WelcomeComponent', component: WelcomeComponent },
    { path: '/login', name: 'LoginComponent', component: LoginComponent},

]
