import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/selectWatch',
        name: 'selectWatch',
        component:()=>import('../components/selectWatch.vue'),
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
    {
        path: '/selectListen',
        name: 'selectListen',
        component:()=>import('../components/selectListen.vue'),
        // props: true
    },
    {
        path: '/listenMusic/:singerIds/:albumId/:albumName/:singerNames',
        name: 'listenMusic',
        component:()=>import('../components/listenMusic.vue'),
        props: true
    },
    {
        path: '/ourTeam',
        name: 'ourTeam',
        component:()=>import('../components/ourTeam.vue'),
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