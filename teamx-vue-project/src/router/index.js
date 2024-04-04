import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/selectMusic',
        name: 'selectMusic',
        component:()=>import('../components/selectMusic.vue'),
        props: true
    },
    {
        path: '/',
        name: 'startApp',
        component:()=>import('../components/startApp.vue')
    },
    {
        path: '/video/:singerId/:albumId/:albumName/:singerName',
        name: 'videoPage',
        component:()=>import('../components/videoPage.vue'),
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    },
})

export default router