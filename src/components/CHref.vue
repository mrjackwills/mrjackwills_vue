<template>
	<AHref :href='computed_href' :text='computed_text' />
</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import type { TCommon } from '@/types';

const computed_text = computed((): string => {
	return props.text;
});

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

const props = defineProps({
	text: {
		type: String as PropType<TCommon>,
		required: true
	}
});

</script>