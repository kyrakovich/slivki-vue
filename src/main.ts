import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // импорт роутера
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light'
  }
})

const app = createApp(App)

app.use(router) // используй роутер ПЕРЕД монтированием
app.use(vuetify)

app.mount('#app')