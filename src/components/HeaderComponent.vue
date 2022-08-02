<template>
    <header>
        <div class="m-3">
            <b-nav align="right" tabs class="users-top-nav mt-3" v-if="this.$store.getters.auth">
                <b-nav-item active v-if="this.$store.getters.auth"><router-link to="" class="text-success">Hola {{this.$store.getters.username}}</router-link></b-nav-item>
                <b-nav-item @click="logout()" active>Cerrar Sesión</b-nav-item>
            </b-nav>
            <b-nav align="right" tabs class="users-top-nav mt-3" v-else>
                <b-nav-item active>
                    <router-link :to="{ name: 'Login'}" class="text-success">Iniciar Sesión</router-link>
                </b-nav-item>
            </b-nav>
        </div>
    </header>
</template>
<script>
export default {
    name: 'HeaderComponent',
    methods:{
        logout(){
            this.$store.dispatch('do_logout', this.$store.getters.username)
            this.$router.push({name: 'Welcome'}).catch(()=>{})
        }
    }
}
</script>
<style scoped>
    .users-top-nav{
        width: 100%;
    }
    
</style>