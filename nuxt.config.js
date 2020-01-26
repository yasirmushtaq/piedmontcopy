import axios from 'axios'

export default {
  mode: 'universal',
  router: {
    base: '/vue/',
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'http://piedmontcopy.com/wp/wp-content/themes/piedmont/assets/images/favicons/favicon-16x16.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i&display=swap&subset=latin-ext,vietnamese' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css', integrity: 'sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh', crossorigin:'anonymous' },
      
    ],
    script: [
      { src: 'https://kit.fontawesome.com/de5e03e7d4.js', crossorigin: 'anonymous' }
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
    '@/assets/css/navigation.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/bootstrap-vue',
    '@/plugins/vue-slick',
    
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    //'@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
    
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {

   
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /* generate: {
    fallback: true,
    interval: 100
  } */
   generate: {
    /*  routes (callback) {
      axios.get('http://piedmontcopy.com/wp/wp-json/routeParams/all')
        .then((response) => {
          const routes = response.data.map((product) => {
            return '/product/' + product.id
          })
          callback(null, routes)
        })
        .catch(callback)
    } */
   /*  routes () {
      return axios.get('http://piedmontcopy.com/wp/wp-json/routeParams/all')
        .then((response) => {
          return response.data.map((products) => {
          return '/product/' + products.id
         })
        })
    } */
  }, 
  
}

