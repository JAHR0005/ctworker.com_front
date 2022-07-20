<template>
    <div>
        <b-card class="mx-auto login-div">
            <ValidationObserver ref="loginForm" v-slot="{ handleSubmit }">
                <b-form class="mb-3" @submit.prevent="handleSubmit(login)">
                <h2 class="mb-3">Iniciar Sesión</h2>
                <div class="my-auto d-block">
                    <ValidationProvider vid="username" name="username" rules="required">
                        <div class="input-field mt-3" slot-scope="{ valid, errors }">
                            <label for="username">Usuario</label>
                            <b-form-input id="username" :state="errors[0] ? false : (valid ? true : null)" v-model="username" autocomplete="on"></b-form-input>
                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider vid="password" name="password" rules="required">
                        <div class="input-field my-3" slot-scope="{ valid, errors }">
                            <label for="password">Contraseña</label>
                            <b-form-input id="password" :state="errors[0] ? false : (valid ? true : null)" v-model="password" type="password" autocomplete="on"></b-form-input>
                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                        </div>
                    </ValidationProvider>
                </div>
                <b-overlay :show="show" rounded="sm" class="login-overlay mx-auto">
                    <b-button type="submit" block class="my-5 mx-auto d-block" variant="success">Iniciar Sesión</b-button>
                </b-overlay>
            </b-form>
            </ValidationObserver>
            <p class="text-center my-3">
                <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted" class="mx-auto d-block">Recuérdame</b-form-checkbox>
            </p>
        </b-card>
    </div>
</template>
<script>
export default {
    name: 'LoginComponent',
    components:{
    
    },
    data(){
        return{
            status: 'not_accepted',
            username:'',
            password:'',
            show: false
        }
    },
    methods:{
        login(){
            this.show = true
            
            var username = this.username
            var password = this.password
        
            this.axios.post('employee_login', {username, password}).then(response => {
                alert(response.data)
                //this.$store.dispatch('doLogin', infoUser)
                this.$router.push({name: 'WelcomeComponent'})
            }).catch(error => {
                console.log(error)
        
            })
            
            this.show = false        
        }
    }
}
</script>
<style scoped>
    .login-div{
        width: 350px;
        height: 440px;
        margin-top: 5%!important
    }
    .login-overlay{
        width: 118px;
        height:40px
    }
    @media (min-width:0px) and (max-width: 575px) {
        .login-div{
            margin-top: 15%!important;
        }
    }
</style>
