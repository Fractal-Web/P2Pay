<script setup lang="ts">
import { Store, useStore } from 'vuex';
import { key } from '../../store/store';
import VueCountdown from '@chenfengyuan/vue-countdown';
import './PaymentRequest.css';

// assets
import Logo from '../../assets/logo.svg';
import PaymentFalse from '../../assets/paymentRequest/payment-false.svg';
import PaymentTrue from '../../assets/paymentRequest/payment-true.svg';

// interfaces
import { IStore } from '../../store/store';

const store: Store<IStore> = useStore(key);
</script>

<template>
	<div class="payment-request page-container">
		<img :src="`${Logo}`" class="logo" />
		<div :class="`wrapper ${store.state.paymentInfo.status == false && 'false'}`">
			<div class="container">
				<h2>Заява №{{ store.state.paymentInfo.requestId }}</h2>
			</div>
			<template v-if="store.state.paymentInfo.status == 'inProgress'">
				<div class="container">
					<h1>
						Партнер перевіряє<br /><b>Ваш переказ </b>
						<span>{{ store.state.paymentInfo.summ }}₴</span>
					</h1>
					<p>Як тільки партнер підтвердить переказ, <br />ми здійснимо Вашу оплату.</p>
				</div>
				<div class="container">
					<div class="timer">
						<vue-countdown :time="5 * 60 * 1000" v-slot="{ minutes, seconds }">
							{{ minutes }}:{{ seconds }}
						</vue-countdown>
					</div>
				</div>
				<div class="container">
					<p>Зазвичай перевірка займає до <br /><b>5 хвилин</b></p>
				</div></template
			>

			<template v-if="store.state.paymentInfo.status == false">
				<div class="container">
					<img :src="`${PaymentFalse}`" />
					<h1>
						Ваша оплата <br />
						<b>не здійснена</b>
					</h1>
				</div>
			</template>

			<template v-if="store.state.paymentInfo.status == true"
				><div class="container">
					<img :src="`${PaymentTrue}`" />
					<h1>
						Ваша оплата <br />
						<b>успішно здійснена</b>
					</h1>
				</div>
			</template>
		</div>
		<div class="plug">
			<template v-if="store.state.paymentInfo.status == false"
				><button class="main">Зв’язатися з підтримкою</button></template
			>
		</div>
	</div>
</template>
