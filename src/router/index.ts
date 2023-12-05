import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'App',
        // meta: {
        //     title: '登录',
        //     keepAlive: true,
        //     requireAuth: false
        // },
        component: () => import('@/App.vue')
    }
]
//创建导出路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router