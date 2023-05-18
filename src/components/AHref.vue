<template>
	<a :href='href' target='_blank' rel='noopener noreferrer' :class='text_color' class='font-weight-bold'><slot name='icon'></slot>{{ text }}</a>
</template>

<script setup lang="ts">

const text_color = computed((): string => {
	return darkmodeModule().text_color;
});

defineProps<{href: string, text?: string}>();
</script>