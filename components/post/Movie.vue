<template>
    <div class="movie-item">
        <div class="movie-item__img">
<div class="home">
    <div class="container movies">
         <div id="movie-grid" class="movies-grid">
             <div class="movie">
                 <div class="movie-img">
            <nuxt-link :to="'/movie/' + movie.id">
                <img :src="imgUrl"
                     :alt="movie.title" class="img-fluid">
                     <p class="overview">{{movie.vote_average}} /10 </p>
            </nuxt-link>
       </div> 
       </div>
        </div>
</div>
</div>


        </div>
        <div class="movie-item__content">
            <h4 class="movie-item__title">
                <nuxt-link :to="'/movie/' + movie.id">{{movie.title}}</nuxt-link>
            </h4>
            <div class="movie-item__rate">
                <i class="fas fa-star"></i>
                <span>{{movie.vote_average}}/<small>10</small></span> Release date:
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        props: {
            movie: {
                type: Object,
                required: true,
            }
        },
        computed: {
            imgUrl(){
                return this.movie.poster_path !== null ? 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path : '/img/defaultposter.png'
            }
        }
    }
</script>

<style scoped>

</style>
