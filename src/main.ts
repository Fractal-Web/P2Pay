import { createApp } from 'vue'
import { store, key } from './store/store'
import './style.css'
import App from './App.vue'

const app = createApp(App);

app.use(store, key);

app.mount('#app');
