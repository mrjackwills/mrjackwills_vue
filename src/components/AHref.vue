<template>
	<router-link v-if='internal' :to='to' :class='text_color' class='font-weight-bold'><slot name='icon' />{{ txt }}</router-link>
	<a v-else :href='to' target='_blank' rel='noopener noreferrer' :class='text_color' class='font-weight-bold'><slot name='icon'></slot>{{ txt }}</a>
</template>

<script setup lang="ts">


const text_color = computed((): string => {
	return darkmodeModule().text_color;
});


defineProps<{to: string, txt?: string, internal?: boolean}>();
</script>