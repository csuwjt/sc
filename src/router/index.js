import { createRouter,createWebHistory } from 'vue-router'

import myHome from '../views/myHome.vue';
import sign from '../views/sign.vue';
import HomeView from '../views/HomeView.vue';
import myInfo from '../views/myInfo.vue';
import myTeam from '../views/myTeam.vue';

const routes =[
    {path:'/myHome',component:myHome},
    {path:'/sign',component:sign},
    {path:'/',component:HomeView},
    {path:'/myInfo',component:myInfo},
    {path:'/myTeam',component:myTeam},
]
const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router
