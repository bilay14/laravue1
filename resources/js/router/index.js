import { createRouter , createWebHistory } from "vue-router";

import apppage from '../component/app.vue';
import notfound from '../component/notfound.vue';

const routes = [
    {
        path:'/',
        component:apppage
    },
    {
        path:'/:pathMatch(.*)*',
        component:notfound
    }
];

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;
