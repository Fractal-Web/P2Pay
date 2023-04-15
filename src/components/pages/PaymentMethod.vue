<script setup lang="ts">
import { Store, useStore } from 'vuex';
import { key } from '../../store/store';
import './PaymentMethod.css';

// assets
import Logo from '../../assets/logo.svg';
import BanksOther from '../../assets/banks/banksIcon_other.svg';

// interfaces
import { IBanks, IStore } from '../../store/store';
import CustomAlert from '../CustomAlert.vue';

const store: Store<IStore> = useStore(key);
const banks: IBanks[] = store.state.banks;

const isBankNotPicked = () => {
	store.state.isCustomAlertOpened = true;
	setTimeout(() => store.state.isCustomAlertOpened = false, 3000);
}
</script>

<template>
	<CustomAlert v-if="store.state.isCustomAlertOpened" text="Прежде чем продолжить, выберите один из банков" />
	<div class="payment-method page-container">
		<img :src="`${Logo}`" class="logo" />
		<div class="container">
			<h1>Сума до сплати</h1>
			<div class="summ">
				<p>{{ store.state.paymentInfo.summ }} ₴</p>
			</div>
		</div>
		<div class="container">
			<h2>Виберіть спосіб переказу</h2>
			<div class="banks">
				<div
					v-for="item in banks"
					:class="`bank ${store.state.paymentInfo.pickedBank == item && 'active'}`"
					@click="
						() => {
							store.commit('userPickBank', { bank: item });
						}
					"
				>
					<img :src="`${item.logo}`" />
					<p :key="item.name">{{ item.name }}</p>
				</div>
				<div
					class="bank other"
					:class="`bank ${
						store.state.paymentInfo.pickedBank?.name == 'Інший банк' && 'active'
					}`"
					@click="
						() => {
							store.commit('userPickBank', {
								bank: { logo: BanksOther, name: 'Інший банк' },
							});
						}
					"
				>
					<img :src="`${BanksOther}`" />
					<p>Інший банк</p>
				</div>
			</div>
		</div>

		<router-link :to="{ path: store.state.paymentInfo.pickedBank ? '/transfer' : '/' }" @click="() => store.state.paymentInfo.pickedBank == null && isBankNotPicked()">
			<button class="main">Продовжити</button></router-link
		>
	</div>
</template>
