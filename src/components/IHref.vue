<template>
	<router-link :class='text_color' class='font-weight-bold' :to='computed_href' :txt='computed_text' />
</template>

<script setup lang="ts">
import type { TGithubRepos } from '@/types';

const props = defineProps<{repo: TGithubRepos}>();

const text_color = computed((): string => {
	return darkmodeModule().text_color;
});

const computed_href = computed((): string => {
	return `/?project=${props.repo}`;
});

const computed_text = computed((): string => {
	switch (props.repo) {
	case 'adsbdb':
		return `adsbdb`;
	case 'belugasnooze_pi':
		return `Beluga Snooze client`;
	case 'belugasnooze_vue':
		return `Beluga Snooze site`;
	case 'havn':
		return `havn`;
	case 'leafcast_pi':
		return `Leafcast client`;
	case 'leafcast_vue':
		return `Leafcast site`;
	case 'mealpedant_api':
		return `Meal Pedant API`;
	case 'mrjackwills_vue':
		return `mrjackwills.com site`;
	case 'mealpedant_vue':
		return `Meal Pedant site`;
	case 'obliqoro':
		return `obliqoro`;
	case 'oxker':
		return `oxker`;
	case 'staticpi_backend':
		return `staticPi`;
	case 'staticpi_vue':
		return `staticPi site`;
	}
});

</script>