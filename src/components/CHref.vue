<template>
	<AHref :href='computed_href' :text='text' />
</template>

<script setup lang="ts">
import type { TCommon } from '@/types';

const props = defineProps<{text: TCommon}>();

const computed_href = computed((): string => {
	switch (props.text) {
	case 'Docker':
		return 'https://www.docker.com/';
	case 'Nginx':
		return 'https://www.nginx.com/';
	case 'PostgreSQL':
		return 'https://www.postgresql.org/';
	case 'Redis':
		return 'https://www.redis.io/';
	case 'Rust':
		return 'https://www.rust-lang.org/';
	case 'SQLite':
		return 'https://www.sqlite.org/index.html';
	case 'tauri':
		return 'https://www.tauri.app';
	case 'TypeScript':
		return 'https://www.typescriptlang.org/';
	case 'Vue':
		return 'https://www.vuejs.org/';
	case 'Vuetify':
		return 'https://www.vuetifyjs.com/';
	}
});

</script>