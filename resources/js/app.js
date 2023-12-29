import './bootstrap';

import { createApp } from 'vue';
import router from './router/index';
import app from './component/app.vue';

createApp(app).use(router).mount('#app');
