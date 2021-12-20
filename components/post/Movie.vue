<template>
    <div class="movie-item">
        <div class="movie-item__img">
<div class="home">
    <div class="container movies">
         <div id="movie-grid" class="movies-grid">
             <div class="movie">
                 <div class="movie-img">
            <nuxt-link  :to="'/movie/' + movie.id">
                <img :src="imgUrl"
                     :alt="movie.title" class="img-fluid"></nuxt-link>
                     <p class="overview">IMDB Rating: <br> <i class="fas fa-star"></i> {{movie.vote_average}} / 10 <br><br>
                      Released:<br>{{ new Date(movie.release_date).toLocaleString('en-us',{
               month:'long',
               day:'numeric',
               year:'numeric',
               })
               }}<br><br><nuxt-link :to="'/movie/' + movie.id">Name: <br>{{movie.title}}</nuxt-link></p>
       </div> 
       </div>
        </div>
</div>
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
