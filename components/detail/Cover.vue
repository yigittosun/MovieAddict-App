<template>
    <div class="movie-cover" :style="{backgroundImage: 'url(' + coverUrl + ')'}"></div>
</template>

<script>
    export default {
        name: "Cover",
        props: {
            backdropPath: {
                type: String,
                required: true,
            }
        },
        computed: {
            coverUrl(){
                return `https://image.tmdb.org/t/p/w500${this.backdropPath}`;
            }
        }
    }
</script>

<style scoped>

</style>
