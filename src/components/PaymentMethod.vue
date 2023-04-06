<script setup lang="ts">
import { useStore } from 'vuex';
import { key } from '../store/store';
import './PaymentMethod.css';

const store = useStore(key);
const banks = store.state.banks;
</script>

<template>
	<div class="payment-method">
		<img src="#" alt="logo" />
		<h1>Сума до сплати</h1>
		<p>500 ₴</p>
		<h2>Виберіть спосіб переказу</h2>
		<div class="banks">
			<li v-for="item in banks" :key="item.name">{{ item.name }}</li>
		</div>
	</div>
</template>
