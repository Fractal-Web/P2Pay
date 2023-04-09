<script setup lang="ts">
import { Store, useStore } from 'vuex';
import { Ref, ref } from 'vue';
import { key } from '../../store/store';
import VueCountdown from '@chenfengyuan/vue-countdown';
import DataEncryptPopup from '../DataEncryptPopup.vue';
import QRPopup from '../QRPopup.vue';
import './Transfer.css';

// assets
import Logo from '../../assets/logo.svg';
import CopyIcon from '../../assets/copy_icon.svg';
import LockIcon from '../../assets/lock_icon.svg';

// interfaces
import { IStore } from '../../store/store';

const store: Store<IStore> = useStore(key);
const ClipboardCopy = (text: string) => navigator.clipboard.writeText(text);

const isPopupOpened: Ref<'none' | 'DataEncrypt' | 'QR'> = ref('none');
const ChangePopup = (popupName: 'none' | 'DataEncrypt' | 'QR') => {
	isPopupOpened.value = popupName;
	console.log(isPopupOpened.value);
};
</script>

<template>
	<DataEncryptPopup :ChangePopup="ChangePopup" v-if="isPopupOpened == 'DataEncrypt'" />
	<QRPopup :ChangePopup="ChangePopup" v-if="isPopupOpened == 'QR'" />
	<div class="transfer page-container">
		<img :src="`${Logo}`" class="logo" />
		<div class="container">
			<h1>
				Переказ <span>{{ store.state.paymentInfo.summ }} ₴</span>
			</h1>
			<div class="payment-info">
				<div class="topbar">
					<div>
						<img :src="`${store.state.paymentInfo.pickedBank!.logo}`" />
						<p>
							<b>{{ store.state.paymentInfo.pickedBank!.name }}</b>
						</p>
					</div>

					<div class="timer">
						<vue-countdown :time="10 * 60 * 1000" v-slot="{ minutes, seconds }">
							{{ minutes }}:{{ seconds }}
						</vue-countdown>
					</div>
				</div>
				<div class="main-info">
					<div>
						<p>
							Переказ <span>{{ store.state.paymentInfo.summ }} ₴</span>
						</p>
						<img
							:src="`${CopyIcon}`"
							@click="ClipboardCopy(`${store.state.paymentInfo.summ} ₴`)"
						/>
					</div>
					<div>
						<p>
							на карту
							<span>{{
								store.state.paymentInfo.card.toString().replace(/\d{4}/g, '$& ')
							}}</span>
						</p>
						<img
							:src="`${CopyIcon}`"
							@click="
								ClipboardCopy(
									store.state.paymentInfo.card.toString().replace(/\d{4}/g, '$& ')
								)
							"
						/>
					</div>
				</div>
				<p>
					{{
						store.state.paymentInfo.comment
							? store.state.paymentInfo.comment
							: 'Без коментаря до переказу'
					}}
				</p>
			</div>
		</div>
		<button class="add modify" @click="ChangePopup('DataEncrypt')">
			<img :src="`${LockIcon}`" />
			<p>Переказ захищений</p>
		</button>
		<div class="container">
			<ol>
				<li>
					<span>Відкрийте додаток {{ store.state.paymentInfo.pickedBank?.name }}</span>
				</li>
				<li>
					<span
						>Переведіть <b>{{ store.state.paymentInfo.summ }} ₴</b> в
						{{ store.state.paymentInfo.pickedBank?.name }}
					</span>
				</li>
				<li><span>Поверніться і натисніть кнопку нижче</span></li>
			</ol>
			<div class="payment-choise">
				<button class="add">Сплатити у додатку</button>
				<p class="payment-choise-or"><b>або</b></p>
				<button class="add" @click="ChangePopup('QR')">Отримати QR код для оплати</button>
			</div>
		</div>
		<div class="container">
			<input type="checkbox" id="singlePayment" value="Я здійснив переказ (одним платежом)" />
			<label for="singlePayment">Я здійснив переказ (одним платежом)</label>
			<router-link :to="{ path: '/request' }">
				<button class="main">Продовжити</button></router-link
			>
		</div>
	</div>
</template>
