import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Tmap from "@map-component/vue-tmap";
import { Tabbar,TabbarItem, buttonProps } from 'vant';
import "./router/index.js";
import Icon from 'vant';
import {Image as VanImage} from 'vant';
import Uploader from 'vant';
import { Button } from 'vant';



createApp(App)
    .use(store)
    .use(router)
    .use(Tmap)
    .use(Icon)
    .use(Tabbar)
    .use(TabbarItem)
    .use(VanImage)
    .use(Uploader)
    .use(Button)
    .mount('#app');

