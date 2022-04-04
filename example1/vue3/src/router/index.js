import HelloWorld from '@/components/HelloWorld'
import PageIndex from '@/components/PageIndex'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/page',
        name: 'PageIndex',
        component: PageIndex
    }
]
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes
})
export default router

