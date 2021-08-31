import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import installElementPlus from './plugins/element'
import router from './router'



const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')