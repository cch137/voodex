import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/about', component: About },
    { path: '/', component: Home }
  ]
})

app.use(router)
app.use(ElementPlus)
app.mount('#app')

export default router
