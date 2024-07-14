<script>
export default {
    name: 'SearchCard',
    props: {
        title: String,
        overview: String,
        image: String,
        year: Number,
        streamingOptions: Array

    },
    setup(props) {
        return {
            props
        };
    }
}
</script>

<template>
    <div class="card my-2">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src='image' class="img-fluid rouded-start"/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ title }} ({{ year }})</h5>
                    <p class="card-text"> {{ overview }}</p>
                </div>
                <div class="row">
                    <div v-for="result in streamingOptions" :key="result.service.id" class="col text-center">
                        <a :href="result.link">
                            <img :src="result.service.imageSet.lightThemeImage" class=""/>
                        </a>
                        <p>{{ result.type }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>