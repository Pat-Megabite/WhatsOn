<script setup>
import SearchBar from '../components/Searchbar.vue'
import SearchCard from '../components/SearchCard.vue'
</script>

<script>
export default {
        data() {
          return {
          Results: {}
        }},
        methods: {
          handleResults: function(response) {
            let data = response.data;
            let filtered = data.filter((result) => result.overview) 
            this.Results = filtered;
          } 
        }

        
}
</script>

<template>
  <main class="container">
      <div class="row p-5">
        <div class="col d-flex flex-column justify-content-center text-center">
          <h1 class="display-3">What's On</h1>
          <img src="../assets/tickets.svg" class="img-max align-self-center" alt="Logo">
        </div>
      </div>
      <div class="row d-flex justify-content-center" >
        <div class="col d-flex justify-content-center">
          <p>Search below to find where to watch movies and tv shows in Australia.</p>
        </div>
        <SearchBar @passResults="handleResults"/>
      </div>
      <div class="container" >
        <div class="row m-2" v-for="value in Results" :key="value.id" >
          <SearchCard :title='value.title' :image="value.imageSet.verticalPoster.w240" :overview="value.overview" :year="value.releaseYear" :streamingOptions="value.streamingOptions.au"/>
        </div>
      </div>
  </main>
</template>

<style>
.img-max {
  width:10em;
  height: auto;
}
</style>