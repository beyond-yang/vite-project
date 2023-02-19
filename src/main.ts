import { createApp } from 'vue'
import router from '@/router'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const app = createApp(App);

app.use(router).use(createPinia()).mount('#app');
