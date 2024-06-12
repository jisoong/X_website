import { createRouter, createWebHistory} from 'vue-router'
import store from '../store';

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
    {
        path: '/loading',
        name: 'Loading',
        component:()=>import('../components/loadingPage.vue'),
    }
]

// const router = createRouter({
//     history: createWebHistory(),
//     base: process.env.BASE_URL,
//     routes,
//     scrollBehavior() {
//         // always scroll to top
//         return { top: 0 }
//     },
// })

// export default router

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  router.beforeEach((to, from, next) => {
    if (from.name === 'selectWatch' && to.name === 'videoPage') {
      store.dispatch('setLoading', true);
    }
    else if(from.name === 'selectListen' && to.name === 'listenMusic') {
        store.dispatch('setLoading', true);
    }
    next();
  });
  
  router.afterEach((to, from) => {
    if ((from.name === 'selectWatch' && to.name === 'videoPage') || 
        (from.name === 'selectListen' && to.name === 'listenMusic')) {
      store.dispatch('setLoading', true); // 로딩 시작
      setTimeout(() => {
        store.dispatch('setLoading', false); // 예: 1초 후 로딩 상태를 false로 설정
      }, 2000); // 1초 지연
    }
  });
  
  export default router;