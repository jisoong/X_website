import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import Vuex from 'vuex'
// import 'es6-promise/auto'

createApp(App).use(router).use(router).mount('#app')
createApp(App).use(router).use(Vuex)