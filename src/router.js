import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './view/Home.vue'




const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes:[
        {path: '/', name: 'Home', component:Home},
        {path: '/about', name: 'About', component: () => import('./view/About.vue')},
        {path: '/projects', name: 'Projects', component: () => import('./view/Project.vue')},
        {path: '/articles', name: 'Articles', component: () => import('./view/Articles.vue')},
        {path: '/now', name: 'Now', component: () => import('./view/Now.vue')}
    ]

})
createApp(App).use(router).mount('#app')

