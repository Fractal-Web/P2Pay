<script setup lang="ts">
import './DataEncryptPopup.css';

// assets
import CloseIcon from '../assets/popup/close_icon.svg';

defineProps<{ ChangePopup: (popupName: 'none' | 'DataEncrypt' | 'QR') => void }>();
</script>

<template>
	<div class="dataencrypt-popup" @click="ChangePopup('none')">
		<div class="wrapper">
			<img :src="`${CloseIcon}`" @click="ChangePopup('none')" />
			<p>
				Шифрування даних<br />
				Кожна операція кодується за допомогою вдосконаленої технології шифрування.
			</p>
		</div>
	</div>
</template>
