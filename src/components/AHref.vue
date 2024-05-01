<template>
	<router-link v-if='internal' :to='to' :class='text_color' class='font-weight-bold'>
		<slot name='icon'></slot>{{ txt }}
	</router-link>
	<a v-else :href='to' target='_blank' rel='noopener noreferrer' :class='text_color' class='font-weight-bold'>
		<slot name='icon'></slot>{{ txt }}
	</a>
</template>

<script setup lang="ts">

const text_color = computed((): string => {
	// return `text-${darkmodeModule().darkmode ? 'red-lighten-1' : 'deep-purple-lighten-1'}`
	// return 'text-red-lighten-1'
	// return 'text-red-darken-4'
	return darkmodeModule().text_color;
});

defineProps<{ to: string, txt?: string, internal?: boolean }>();

</script>