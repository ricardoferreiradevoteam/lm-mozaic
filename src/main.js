import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UsingScss from "./UsingScss.vue";

import MozaicVue from '@mozaic-ds/vue-3';
import '@mozaic-ds/vue-3/dist/mozaic-vue.css'; // Import the css of all components (158ko)

  
const app = createApp(UsingScss);
app.use(MozaicVue);
app.mount('#app')
