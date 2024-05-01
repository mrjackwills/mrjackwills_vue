<template>
	<v-row align='start' justify='space-around' no-gutters class='ma-0 pa-0 mt-md-12 mt-4 no-gutters' :class='text_color' >
		<v-col cols='11' md='8' class='ma-0 pa-0'>
			<v-row align='center' justify='space-around' no-gutters class='ma-0 pa-0'>
				
				<v-col cols='auto' class='ma-0 pa-0 text-h1 cl' :class='mobile?"text-h3 text-center":"text-h1"' @click='home' >
					Mr Jack Wills
				</v-col>
				<v-col cols='auto' class='ma-0 pa-0'>
					<v-row class='ma-0 pa-0' align='center' justify='center'>
						<v-col cols='auto' class='ma-0 pa-0'>
							<v-icon
								:class='mobile?"":"mr-2"'
								:color='color'
								:icon='mdiLightbulbNight'
							/>
						</v-col>
						<v-col cols='auto' class='ma-0 pa-0 mb-n5'>
							<v-switch :color='color' v-model='dark_mode' aria-label='toggle darkmode' density='compact' inset/>
						</v-col>
								
					</v-row>
				</v-col>
			</v-row>

			<v-row align='center' justify='space-around' no-gutters class='ma-0 pa-0'>

				<v-col v-for='(item, index) in links' :key='index' cols='auto' class='ma-0 pa-0'>
					<AHref :to='item.href' :aria-label='item.tooltip' :id='`nav_${index}`' :internal='item.internal'>
						<template v-slot:icon>
							<v-icon :color='color' class='mr-2' size='x-large' :icon='item.icon' />
							<v-tooltip
								v-if='show_tooltip'
								:activator='`#nav_${index}`'
								:content-class='dark_mode?"tooltip_light":"tooltip_dark"'
								:open-on-click='false'
								:open-on-focus='false'
								location='top center'
							>
								<span>{{ item.tooltip }}</span>
							</v-tooltip>
						</template>
					</AHref>
						
				</v-col>
			</v-row>

			<AppDivider />

			<v-row align='center' justify='space-around' no-gutters class='my-4'>
				<v-col cols='auto' class='ma-0 pa-0 text-h8 font-weight-bold'>
					Autodidactic digital dweller. Adept at Rust, TypeScript, PostgreSQL, Docker, Vue, Redis, Linux, and more.
				</v-col>
			</v-row>

			<AppDivider />
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { mdiBookOpenVariantOutline, mdiEmail, mdiGithub, mdiLightbulbNight, mdiTwitter } from '@mdi/js';

const mobile = computed((): boolean => {
	return mobileModule().mobile;
});

const darkmodeStore = darkmodeModule();

const text_color = computed((): string => {
	return darkmodeStore.text_color;
});

const router = useRouter();
// const route = useRoute();
const home = ():void => {
	router.push({ path: '/', query: undefined });

};

/// Don't show tooltips when on android or ios if also on mobile view!
const show_tooltip = computed((): boolean => {
	return !(mobileModule().android_ios && mobile.value);
});

const links = [
	{
		icon: mdiGithub,
		href: 'https://www.github.com/mrjackwills',
		tooltip: 'GitHub profile'
	},
	{
		icon: mdiTwitter,
		href: 'https://www.twitter.com/mrjackwills',
		tooltip: 'Twitter profile'
	},
	{
		icon: mdiEmail,
		href: 'mailto:email@mrjackwills.com',
		tooltip: 'email me'
	},
	{
		icon: mdiBookOpenVariantOutline,
		href: '/words',
		tooltip: 'Words',
		internal: true
	},
];

const dark_mode = computed({
	get (): boolean {
		return darkmodeStore.darkmode;
	},
	set (b: boolean): void {
		darkmodeStore.set_darkmode(b);
	}
});

const color = computed((): string => {
	return darkmodeStore.color;
});

</script>
