import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

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
        component:()=>import('../components/selectListen.vue'),
        props: true
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
    routes
  });
  
  router.beforeEach((to, from, next) => {
    if (from.name === 'selectSinger' && to.name === 'videoPage') {
      store.dispatch('setLoading', true);
    }
    else if(from.name === 'selectDuetsinger' && to.name === 'listenMusic') {
        store.dispatch('setLoading', true);
    }
    next();
  });
  
  router.afterEach((to, from) => {
    if ((from.name === 'selectSinger' && to.name === 'videoPage') || 
        (from.name === 'selectDuetsinger' && to.name === 'listenMusic')) {
      store.dispatch('setLoading', true); // 로딩 시작
      setTimeout(() => {
        store.dispatch('setLoading', false); // 예: 1초 후 로딩 상태를 false로 설정
      }, 2000); // 1초 지연
    }
  });

export default router
