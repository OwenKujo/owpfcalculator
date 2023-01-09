import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const pinia = createPinia()

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .component('Datepicker', Datepicker)
//  .use(axios)
  .mount('#app')
