<script setup lang="ts">
import { Store, useStore } from 'vuex';
import { key } from '../store/store';
import './CustomAlert.css';

// interfaces
import { IStore } from '../store/store';

const store: Store<IStore> = useStore(key);

defineProps<{ text: string }>();
</script>

<template>
    <div :class="`custom-alert ${store.state.isCustomAlertOpened && 'opened'}`">
        <p>{{ text }}</p>
    </div>
</template>
