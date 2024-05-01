<template>
	<v-col cols='12' :md='cols' class='ma-0 pa-0'>
		<v-row justify='center' class='ma-0 pa-0 mb-n3'>
			<v-col cols='auto' class='ma-0 pa-0 text-caption'>
				<v-btn size='small' variant='text' @click='show=!show' ><v-icon :icon='icon'/>{{ show_text }} </v-btn>
			</v-col>
		</v-row>
		<v-expand-transition>

			<v-row justify='center' class='ma-0 pa-0' v-if='show'>
				<v-col cols='12' class='ma-0 pa-0'>
					<pre
						:class='language_class'
						v-html='highlight_code' />
				</v-col>
			</v-row>
		</v-expand-transition>
		<v-row justify='center' class='ma-0 pa-0' v-if='label'>
			<v-col cols='auto' class='ma-0 pa-0 text-caption'>
				{{ label }}
			</v-col>
		</v-row>
		<!-- <v-row justify='start' class='ma-0 pa-0 '> -->
		
	</v-col>
</template>

<script setup lang="ts">
import '@/sass/abc.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-rust';
import type { code_lang } from '@/types';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

const language_class = computed(() => {
	return props.lang === 'JSON' ? `language-json` : `language-rust`;
});
const show = ref(true);

const icon = computed(() => {
	return show.value ? mdiChevronDown : mdiChevronUp;
});

const show_text = computed(() => {
	return show.value ? `hide` : `show`;

});
//
const highlight_code = computed((): string => {
	if (props.lang === 'JSON') {
		return Prism.highlight(props.code, Prism.languages.json, 'json').trim();

	} else {
		return Prism.highlight(props.code, Prism.languages.rust, 'rust').trim();
	}
});

const props = withDefaults(defineProps<{code: string, label?: string, lang:code_lang, cols: string}>(), { cols: 'auto' });

</script>