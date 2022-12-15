import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TheA from './components/TheA.vue'
import TheB from './components/TheB.vue'

const router = createRouter({
  routes: [
    {
      path: '/a',
      component: TheA
    },
    {
      path: '/b',
      component: TheB
    }
  ],
  history: createWebHistory(),
})

const app = createApp(App)
app.use(router)
app.mount('#app')
