<script setup lang="ts">
import './QRPopup.css';

// assets
import CloseIcon from '../assets/popup/close_icon.svg';
import QR from '../assets/popup/qr.jpg';

defineProps<{ ChangePopup: (popupName: 'none' | 'DataEncrypt' | 'QR') => void }>();
</script>

<template>
	<div class="qr-popup" @click="ChangePopup('none')">
		<div class="wrapper">
			<img :src="`${CloseIcon}`" @click="ChangePopup('none')" />
			<img class="qr" :src="`${QR}`" />
		</div>
		<p>
			Відскануйте QR за допомогою<br />
			вашого телефона і здійсніть оплату
		</p>
	</div>
</template>
