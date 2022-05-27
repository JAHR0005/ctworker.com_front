<template>
    <div>
        <b-card class="mt-3 mb-2 mr-3 mx-auto register-div">
            <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                <b-form class="mb-3" @submit.prevent="handleSubmit(login)">
                <h3 class="mb-3">Iniciar Sesión</h3>
                <div class="my-auto d-block">
                    <ValidationProvider vid="email" name="email" rules="required">
                        <div class="input-field mt-3" slot-scope="{ valid, errors }">
                            <label for="email">Correo electrónico</label>
                            <b-form-input id="email" :state="errors[0] ? false : (valid ? true : null)" v-model="email" autocomplete="on"></b-form-input>
                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                        </div>
                    </ValidationProvider>
                    <ValidationProvider vid="password" name="password" rules="required">
                        <div class="input-field mt-3" slot-scope="{ valid, errors }">
                            <label for="password">Contraseña</label>
                            <b-form-input id="password" :state="errors[0] ? false : (valid ? true : null)" v-model="password" type="password" autocomplete="on"></b-form-input>
                            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                        </div>
                    </ValidationProvider>
                </div>
                <b-overlay :show="show" rounded="sm">
                    <b-button type="submit" block class="mt-3 mx-auto d-block w-font" variant="success">Iniciar Sesión</b-button>
                </b-overlay>
            </b-form>
            </ValidationObserver>
            <p class="text-center mb-1">
                <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted" class="mx-auto d-block">Recuérdame</b-form-checkbox>
            </p>
        </b-card>
        <div class="register-div mx-auto">
            <p class="text-divider text-center mt-5 text-secondary">¿Aún no estás registrado en Syblins?</p>
            <router-link :to="{ name: 'Register' }" class="mr-3 mt-2 text-d-none"><b-button block class="bc-light-grey text-dark block-button">Crea tu cuenta en Syblins</b-button></router-link>
        </div>
        <SessionFooter></SessionFooter>
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
            email:'',
            password:'',
            show: false
        }
    },
    methods:{
        login(){
            this.show = true
            if (this.password.length > 0){
                let email = this.email
                let password = this.password
                let status = this.status
                
                this.axios.post('https://localhost/syblins.com/public/api/login', {email, password, status})
                .then(response => {
                    
                    this.$store.dispatch('setAuthToken', response.data.token)
                    this.$store.dispatch('setEmail', response.data.email)
                    this.$store.dispatch('doLogin', response.data.username)
                    this.$root.$emit('loggedIn', response.data.username)
                    this.show = false
                    this.$router.push({name: 'Welcome'})
                }).catch((error) => {
                    if(error.response.status === 500){
                        this.$refs.form.setErrors({
                            password: ['Contraseña incorrecta']
                        })
                    }
                    if(error.response.status === 404){
                        this.$refs.form.setErrors({
                            email: ['Este email no existe']
                        })
                    }
                    this.show = false
                })
            }
        }
    }
}
</script>
<style>
    .block-button:hover{
        color:white!important;
    }
</style>
