<template>
  <div class="welcome-div">
    <h1 class="text-center title text-muted"><span class="text-success">Ct</span>Worker</h1>
    <b-col class="search-input mx-auto">
        <b-icon  icon="search" class="search-icon"></b-icon>
        <VueSimpleSuggest v-model="searchWords" @keyup.enter="makeSearch()"
    :list="simpleSuggestionList"
    :filter-by-query="true">
<!-- Filter by input text to only show the matching results -->
  </VueSimpleSuggest>
   <p>Chosen element: {{ searchWords }}</p>
    </b-col>
  </div>
</template>
<script>
export default {
    name: 'WelcomeComponent',
    data(){
        return {
            searchWords: '',
            chosen: ''
        }
    },     
    methods:{
        simpleSuggestionList() {
        return [
          'Vue.js',
          'React.js',
          'Angular.js'
        ]
      },
        makeSearch(){
            alert(this.searchWords)
        },
    }
}
</script>
<style>
.welcome-div{
    margin-top: 12%!important
}
.vue-simple-suggest.designed .input-wrapper input{
    border-radius: 180px!important;  
    height: 48px;
    padding-left: 60px!important;
    padding-right: 30px!important
}
.vue-simple-suggest.designed .suggestions{
    border-radius:0px 0px 20px 20px!important;
    height: 60px;
}
.vue-simple-suggest.designed .suggestions .suggest-item, .vue-simple-suggest.designed .suggestions .misc-item{
   padding: 10px 30px 10px!important;
   
}
.vue-simple-suggest.designed .suggestions .suggest-item.hover:hover{
   background-color: rgba(0, 128, 0, 0.63)!important;
   
}
.search-input{
    width:600px!important;
}
.form-control:focus{
    outline:0!important
}
.title{
    font-size: 4rem;
    font-weight: 800;
}
.search-icon{
    position:absolute;
    z-index: 10;
    margin-left: 20px;
    font-size: 20px;
    margin-top: 12px;
    color:grey
}

@media (min-width:0px) and (max-width: 575px) {
    .search-input{
        width: 95%!important;
    }
    .title{
        font-size: 3rem;
        font-weight: 800;
    }
    .welcome-div{
        margin-top: 30%!important
    } 
}
</style>
