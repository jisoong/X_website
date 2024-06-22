import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import 'es6-promise/auto';

const app = createApp(App);

// 플러그인을 등록합니다.
app.use(router);
app.use(store);

// 애플리케이션을 마운트합니다.
app.mount('#app');