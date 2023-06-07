<template>
	<br>
	<br>
	It is the {{ computed_text }} companion to  {{ the }}<IHref :repo='repo' />
</template>

<script setup lang="ts">
import type { TGithubRepos } from '@/types';

const the = computed((): string => {
	return props.repo == 'staticpi_backend' ? `` : `the `;
});

const computed_text = computed((): string => {
	return props.repo.endsWith('_vue') ? 'backend' : 'frontend';
});

const props = defineProps<{repo: TGithubRepos}>();

</script>