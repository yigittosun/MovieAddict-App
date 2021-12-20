<template>
    <div class="media">
        <img :src="logoUrl" class="mr-3" :alt="company.name">
        <div class="media-body">
            <h5 class="mt-0">{{company.name}} ({{company.origin_country}})</h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Media",
        props: {
            company: {
                type: Object,
                required: true,
            }
        },
        computed: {
            logoUrl(){
                return this.company.logo_path !== null ? 'https://image.tmdb.org/t/p/w500' + this.company.logo_path : '/img/default.jpg';
            }
        },
    }
</script>

<style scoped>

</style>
