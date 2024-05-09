<template>
	<v-col cols='12' :md='cols'>
		<v-row justify='center' class='ma-0 pa-0'>
			<v-col cols='auto' class='ma-0 pa-0 text-caption text-center'>
				<v-row justify='center' class='ma-0 pa-0'>
					<v-col cols='auto' class='ma-0 pa-0'>
						<v-btn size='small' density='compact' variant='text' @click='show = !show'><v-icon :icon='icon' class='mr-1'/>{{ show_text }}<span v-if='!show'>: {{ label }}</span></v-btn>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		<v-expand-transition>
			<section v-if='show'>

				<v-row justify='center' class='ma-0 pa-0'>
					<v-col cols='12' class='mx-4 ma-0 pa-0' :class='lines'>
						<div v-html='code' />
					</v-col>
				</v-row>
				<v-row justify='space-between' class='ma-0 pa-0'>
					<v-col cols='2' class='ma-0 pa-0 text-caption'>
				
					</v-col>
					<v-col cols='auto' class='ma-0 pa-0 text-caption text-center'>
						{{ label }}
					</v-col>
					<v-col cols='2' class='ma-0 pa-0 text-caption text-end'>
						<section v-if='show && isSupported'>
							<v-btn rounded='pill' size='small' density='compact' variant='plain' @click='copy_text' :ripple='false'>
								<v-icon size='small' :icon='mdiContentCopy'/>
							</v-btn>
							<v-tooltip
								v-if='show_tooltip'
								activator='parent'
								scroll-strategy='close'
								:content-class='dark_mode?"tooltip_light":"tooltip_dark"'
								:open-on-click='true'
								:open-on-focus='false'
								:open-on-hover='false'
								location='bottom end'
							>
								<span>code copied</span>
							</v-tooltip>
				
						</section>
					</v-col>
			
				</v-row>
			</section>
		</v-expand-transition>

	</v-col>
</template>

<script setup lang="ts">
import { mdiChevronDown, mdiChevronUp, mdiContentCopy } from '@mdi/js';
import { getHighlighterCore } from 'shiki/core';
import getWasm from 'shiki/wasm';
import { useClipboard } from '@vueuse/core';

import slack
	from 'shiki/themes/slack-dark.mjs';

const props = withDefaults(defineProps<{ code: string, label?: string, lang: string, cols?: string, hidden?: boolean }>(), { cols: 'auto', hidden: false });
const { copy, isSupported } = useClipboard({ source: props.code });

const show = ref(true);

const timeout = ref(0);

onMounted(() => {
	if (props.hidden) {
		show.value = false;
	}
});

// /NEED TO ADD NONCE

// const addIndent = (input: string): string => {
// 	const lines = input.split('\n');
// 	if (lines.length > 1) {
// 		return lines.map((line) => `  ${line}`).join('\n');
// 	} else {
// 		return input;
// 	}
// };

const icon = computed(() => show.value ? mdiChevronDown : mdiChevronUp);

const show_text = computed(() => show.value ? `hide` : `show`);
const show_tooltip = ref(false);
const theme = 'slack-dark';

const dark_mode = computed(() => darkmodeModule().darkmode);

const lines = computed(() => props.lang === 'rust' ? 'numbered_line' : '');

const copy_text = ():void => {
	clearTimeout(timeout.value);
	show_tooltip.value = true;
	copy();
	timeout.value = window.setTimeout(() => {
		show_tooltip.value = false;
	}, 3000);

};

const highlighter = await getHighlighterCore({
	themes: [ slack ],
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	langs: [ () => import('shiki/langs/rust.mjs'), () => import('shiki/langs/javascript.mjs'), () => import('shiki/langs/json.mjs'), ],
	loadWasm: getWasm
});

const code = computed((): string => {
	return highlighter.codeToHtml(props.code, {
		lang: props.lang,
		theme,
	});

});

</script>

<style>
code {
	counter-reset: step;
	counter-increment: step 0;
}

pre {
	font-size: 0.75rem!important;
}

.numbered_line .line::before {
	content: counter(step);
	counter-increment: step;
	width: 1rem;
	margin-right: 1rem;
	display: inline-block;
	text-align: right;
	color: rgba(115, 138, 148, 0.4);
}

</style>