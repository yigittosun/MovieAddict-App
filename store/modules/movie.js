const API_KEY = process.env.api_key;

const state = {
    movies: [],
    searchResults: [],
    moviesSlider: [],
    movieDetail: {},
    MovieCredits:{},
};

const getters = {
    getMovies(state){
        return state.movies;
    },

    getMovieDetail(state){
        return state.movieDetail;
    },

    getSearchResults(state){
        return state.searchResults;
    },

    getMovieSlider(state){
        return state.moviesSlider;
    },

};

const mutations = {
    setMovies(state, data){
        state.movies = data;
    },

    setMovieDetail(state, movie){
        state.movieDetail = movie;
    },

    setSearchResults(state, data){
        state.searchResults = data;
    },

    setMoviesSlider(state, data){
        state.moviesSlider = data;
    },

};

const actions = {
    async fetchMovies(context, payload){
        const listType = payload.listType.replace('-','_');

        await this.$axios.$get(`/movie/${listType}?api_key=${API_KEY}&page=${payload.page}`).then(res => {
            context.commit('setMovies', res);
        })
    },

    async fetchMovieDetail(context, id){
        await this.$axios.$get(`/movie/${id}?api_key=${API_KEY}`).then(res => {
            context.commit('setMovieDetail', res);
        })
    },

    async fetchSearchMovies(context, payload){
        await this.$axios.$get(`/search/movie?api_key=${API_KEY}&query=${payload.keyword}&page=${payload.page}`).then(res => {
            context.commit('setSearchResults', res);
        })
    },

    async fetchMoviesSlider(context){
        await this.$axios.$get(`/movie/now_playing?api_key=${API_KEY}`).then(res => {
            context.commit('setMoviesSlider', res.results);
        })
    },
    
};

export default {
    state,
    getters,
    mutations,
    actions
}
