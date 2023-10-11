import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router.js'
import {store}  from './store/index.js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import BaseCard from './ui/BaseCard.vue'
import BaseButton from './ui/BaseButton.vue'

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(store)
app.component('base-card',BaseCard)
app.component('base-button',BaseButton)
app.mount('#app')
