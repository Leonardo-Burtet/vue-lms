import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Importe apenas os estilos e o createVuetify.
// O vite-plugin-vuetify cuidará do resto.
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  // Não passe "components" ou "directives"
  // O plugin de treeshaking fará isso por você
  theme: {
    defaultTheme: 'light',
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)
app.mount('#app')
