<template>
	<br>
	<br>
	A previous, now outdated and unmaintained, TypeScript <AHref :href='computed_href' text='branch' /> is available in the GitHub repository.
</template>

<script setup lang="ts">
import AHref from '@/components/AHref.vue';
import type { TGithubRepos } from '@/types';

const computed_href = computed((): string => {
	return `https://github.com/mrjackwills/${props.repo}/tree/typescript`;
});

const props = defineProps({
	repo: {
		type: String as PropType<TGithubRepos>,
		required: true
	}
});
</script>