<template>
  <div id="app">
    <WelcomeComponent/>
  </div>
</template>
<script>
import WelcomeComponent from './components/WelcomeComponent.vue'
export default {
  name: 'App',
  components: {
    WelcomeComponent,
  }
}
</script>
<style>
@import './css/style.css';
</style>
