<template>
  <div class="welcome-div">
    <h1 class="text-center title text-muted"><span class="text-success">Ct</span>Worker</h1>
    <b-col class="search-input mx-auto">
        <b-icon  icon="search" class="search-icon"></b-icon>
        <b-form-input @keyup.enter="makeSearch()" v-model="searchWords"></b-form-input> 
    </b-col>
  </div>
</template>
<script>
export default {
    name: 'WelcomeComponent',
    data(){
        return {
            searchWords: '',
        }
    },        
    methods:{
        makeSearch(){
            alert(this.searchWords)
        }
    }
}
</script>
<style scoped>
.welcome-div{
    margin-top: 12%!important
}
.form-control{
    border-radius: 180px;  
    height: 48px;
    padding-left: 60px;
    padding-right: 30px
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
