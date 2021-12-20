<template>
    <div class="movie-detail__img">
        <img :src="posterUrl" :alt="poster.title" class="img-fluid">
        <div class="movie-detail__btn" v-if="poster.website.length > 0">
            <a :href="poster.website" target="_blank" class="btn btn-block"><i class="fas fa-link"></i> Website</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Poster",
        props: {
            poster: {
                type: Object,
                required: true,
            }
        },
        computed: {
            posterUrl(){
                return `https://image.tmdb.org/t/p/w500${this.poster.poster_path}`
            },
        },
    }
</script>

<style scoped>

</style>
