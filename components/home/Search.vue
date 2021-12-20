<template>
    <div class="search-area">
        <div class="container">
            <div class="search-box">
                <div class="input-group">
                    <input
                        type="text"
                        class="form-control search-box__input"
                        placeholder="Search movie..."
                        aria-describedby="button-addon2"
                        @keyup.enter="search"
                        v-model="keyword">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary search-box__btn" type="button" @click="search">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return {
                keyword: ''
            }
        },
        methods: {
            search(){
                this.$router.push({path: '/search', query: {q: this.keyword}});
            }
        },
    }
</script>

<style scoped>

</style>
