import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './assets/main.css'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)

app.use(createPinia())

createApp(App).use(vuetify).use(mdiVue, {
  icons: mdijs
}).mount('#app')