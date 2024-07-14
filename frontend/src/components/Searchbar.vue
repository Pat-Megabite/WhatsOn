<script setup>
import axios from 'axios';

</script>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            Search: '',
        }
    },
    emits: ['passResults'],
    methods: 
    {
        ExecuteSearch: async function() {
            try {
                let data;
                await axios.post('/api/search',{
                    title: this.Search
                }).then(function (response) {
                    data = response;
                    console.log('here')
                }).catch( function (response) {
                    console.log(response)
                })
                this.$emit('passResults', data); 
            }
            catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<template>
    <div class="container-fluid row">
        <div class="col">
            <input type="text" v-model="Search" placeholder="Search here" @keyup.enter="ExecuteSearch" class="form-control" size="20"> 
        </div>
        <div class="col-2">
            <button type="button" class='btn btn-primary col' @click="ExecuteSearch">Search</button>
        </div>
    </div>
</template>

<style scoped>

</style>