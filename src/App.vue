<template>
  <div id="app">
    <WelcomeComponent/>
    <LoginComponent/>
  </div>
</template>
<script>
import LoginComponent from './components/LoginComponent.vue'
import WelcomeComponent from './components/WelcomeComponent.vue'
export default {
  name: 'App',
  components: {
    WelcomeComponent,
    LoginComponent,
  }
}
</script>
<style>
@import './css/style.css';
</style>
