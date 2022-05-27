<template>
  <div class="hello">
     <div>
    <h1 class="text-center my-5 title text-muted"><span class="text-success">Ct</span>Worker</h1>
    <b-col class="search-input mx-auto">
        <b-icon  icon="search" class="search-icon"></b-icon>
        <b-form-input @keyup.enter="hola()"></b-form-input> 
    </b-col>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
