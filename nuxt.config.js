
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Movie Addict' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,700;1,400&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#dd003f',
    height: '2px',
  },

  router: {
      linkActiveClass: 'active',
      scrollBehavior: function(to, from, savedPosition) {
          return { x: 0, y: 0 };
      }
  },

  transition: {
      pageTransition: {
          name: 'slide',
          mode: 'out-in'
      },
  },

  env: {
      api_key: '5ae08006b2ce34eb38f5ccde2ac48a1a'
  },

  /*
  ** Global CSS
  */
  css: [
      '~/assets/css/style.scss',
      'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      { src: '~/plugins/vue-slick-carousel.js' },
      { src: '~/plugins/vue-social-sharing.js' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
      '@nuxtjs/axios',
  ],

  axios: {
      baseURL: 'https://api.themoviedb.org/3'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
}
