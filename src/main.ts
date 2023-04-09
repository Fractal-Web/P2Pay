import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { store, key } from './store/store'

import './style.css'

// components
import App from './App.vue'
import PaymentMethod from './components/PaymentMethod.vue';
import Transfer from './components/Transfer.vue';
import PaymentRequest from './components/PaymentRequest.vue'

const router = createRouter({
	routes: [
		{
			path: '/',
			component: PaymentMethod,
		},
		{
			path: '/transfer',
			component: Transfer,
		},
		{
			path: '/request',
			component: PaymentRequest,
		},
	],
	history: createWebHistory(),
});

const app = createApp(App);

app.use(router);
app.use(store, key);

app.mount('#app');
