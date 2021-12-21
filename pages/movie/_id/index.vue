<template>
    <div class="movie-detail-area">
        <Cover :backdropPath="detail.backdrop_path" />

        <div class="movie-detail">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-3">
                        <Poster :poster="posterData" />
                    </div>
                    <div class="col-12 col-md-8 col-lg-9">
                        <div class="movie-detail__content">
                            <div class="movie-detail__title">
                                <h1>{{detail.title}}</h1>
                                <div class="movie-detail__rate">
                                    <i class="fas fa-star"></i>
                                    <span>{{detail.vote_average}} / 10</span>
                                </div>
                            </div>
                            <div class="movie-detail__desc">
                                <p>{{detail.overview}}</p>
                                <p v-if="detail.imdb_id !== null">IMDB: <a :href="imdbUrl" target="_blank">{{imdbUrl}}</a></p>
                            </div>
                            <div class="row">
                                <div class="col-12 col-lg-8">
                                    <div class="movie-detail__left">
                                        <div class="movie-detail__cast">
                                            <div class="movie-detail__block-title">
                                                <h3>Production Companies:</h3>
                                            </div>
                                            <Media
                                                v-for="company in detail.production_companies"
                                                :key="company.id"
                                                :company="company" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4">
                                    <div class="movie-detail__right">
                                        <div class="movie-detail__right-block">
                                            <span>Genres:</span>
                                            <p>
                                                <span
                                                    v-for="genre in detail.genres"
                                                    :key="genre.id">
                                                    {{genre.name}},
                                                </span>
                                            </p>
                                        </div>
                                        <div class="movie-detail__right-block">
                                            <span>Release Date:</span>
                                            <p>{{releaseDate}}</p>
                                        </div>
                                        <div class="movie-detail__right-block">
                                            <span>Duration:</span>
                                            <p>{{detail.runtime}} min</p>
                                        </div>
                                         <div class="movie-detail__right-block">
                                            <span>Tags:</span>
                                            <p>{{detail.tagline}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Cover from '~/components/detail/Cover'
    import Poster from '~/components/detail/Poster'
    import Media from '~/components/detail/Media'

    import {mapGetters} from 'vuex'

    export default {
        name: "_id",
        components: {
            Cover,
            Poster,
            Media,
        },
        head(){
            return {
                title: this.detail.title,
                meta: [
                    { hid: 'description', name: 'description', content: this.detail.overview.length >= 120 ? this.detail.overview.substring(0, 120) + '...' : this.detail.overview },
                    { hid: 'og:type', content: 'article' },
                    { hid: 'og:title', content: this.detail.title },
                    { property: 'og:description', content: this.detail.overview.length >= 120 ? this.detail.overview.substring(0, 120) + '...' : this.detail.overview },
                    { property: 'og:image', content: 'https://image.tmdb.org/t/p/w500' + this.detail.poster_path },
                ]
            }
        },
        computed: {
            ...mapGetters({
                detail: 'getMovieDetail'
            }),

            posterData(){
                return {
                    title: this.detail.title,
                    poster_path: this.detail.poster_path,
                    website: this.detail.homepage
                }
            },
            releaseDate(){
                return this.detail.release_date.split('-').join('/');
            },
            imdbUrl(){
                return `https://www.imdb.com/title/${this.detail.imdb_id}`
            },
            socialSharingUrl(){
                if (!process.server){
                    return window.location.origin + this.$route.path;
                }
            }
        },
        async fetch({store, params}){
            await store.dispatch('fetchMovieDetail', params.id);
        },
    }
</script>

<style scoped>

</style>
