import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import installElementPlus from './plugins/element'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App)
installElementPlus(app)
app.use(router).use(VueAxios, axios).mount('#app')