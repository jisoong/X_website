import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'startApp',
        component:()=>import('../components/startApp.vue')
    },
    {
        path: '/selectWatch',
        name: 'selectWatch',
        component:()=>import('../components/selectWatch.vue')
    },
    {
        path: '/selectListen',
        name: 'selectListen',
        component:()=>import('../components/selectListen.vue')
    },
    {
        path: '/selectSinger/:albumId/:albumName',
        name: 'selectSinger',
        component:()=>import('../components/selectSinger.vue'),
        props: true
    },
    {
        path: '/selectDuetsinger/:albumId/:albumName',
        name: 'selectDuetsinger',
        component:()=>import('../components/selectDuetsinger.vue'),
        props: true
    },
    {
        path: '/videoPage/:albumId/:albumName/:singerId/:singerName',
        name: 'videoPage',
        component:()=>import('../components/videoPage.vue'),
        props: true
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
        component:()=>import('../components/ourTeam.vue')
    },
    {
        path: '/test',
        name: 'testPage',
        component:()=>import('../components/testPage.vue')
    }
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
