<template>
  <div id="app">
    <HeaderComponent v-if="$route.name !== 'Login'"/>
    <router-view/>
  </div>
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>
<style>
  @import './css/style.css';
</style>
