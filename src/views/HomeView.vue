<template>
	<v-row align='start' justify='space-around' class='mt-md-4 ma-0 pa-0' :class='text_color' >
				
		<v-col cols='11' md='8' class='ma-0 pa-0'>

			<v-container class='card_height ma-a pa-0'  v-touch='{
				left: () => next(),
				right: () => previous()
			}'>
					
				<v-row justify='center' align='center' class='ma-0 pa-0 ' >
					<v-col cols='12' class='text-center font-weight-bold ma-0 pa-0 mb-2' :class='mobile?"text-h6":"text-h4"'>
						{{ current_project.name }}
					</v-col>
				</v-row>
					
				<v-row justify='space-between' align='center' class='ma-0 pa-0' >
						
					<v-col cols='12' lg='6' class='text-center ma-0 pa-0' :order='mobile?"1":"2"' :class='mobile?"mb-1":""'>
						<v-img
							:class='mobile?"":"mt-1"'
							:src='image'
							class='max-img'
							contain
						>
							<template #sources>
								<source :srcset='webp'>
							</template>
						</v-img>
							
					</v-col>

					<v-col cols='auto' class='ma-0 pa-0' :order='mobile?"2":"1"'>
						<v-btn class='ma-0 pa-0' :disabled='previous_disabled' variant='text' :size='icon_size' :color='color' @click='previous' :icon='mdiChevronDoubleLeft' />
					</v-col>
						
					<v-col cols='auto' class='ma-0 pa-0' order='3' >
						<v-btn class='ma-0 pa-0' :disabled='next_disabled' @click='next' variant='text' :size='icon_size' :color='color' :icon='mdiChevronDoubleRight' />
					</v-col>
				</v-row>

				<v-row justify='start' align='center' class='ma-0 pa-0 mt-2 mb-4'>

					<v-col cols='auto' class='center ma-0 pa-0' :class='mobile?"":"center"'>

						<AHref :href='computed_github' text='explore source code' >
							<template v-slot:icon>
								<v-icon :color='color' class='mr-2' :icon='mdiFileCode' />
								<v-tooltip
									v-if='show_tooltip'
									:content-class='dark_mode?"tooltip_light":"tooltip_dark"'
									:open-on-click='false'
									:open-on-focus='false'
									activator='parent'
									location='top center'
								>
									<span>see {{ current_project.name }} on GitHub</span>
								</v-tooltip>
							</template>
						</AHref>
							
					</v-col>

					<v-spacer v-if='mobile'/>

					<v-col cols='auto' class='ma-0 pa-0' v-if='current_project.link' :class='mobile?"":"ml-12"'>

						<AHref :href='current_project.link.href' text='live site' >
							<template v-slot:icon>
								<v-icon :color='color' class='mr-2' :icon='mdiOpenInNew' />
								<v-tooltip
									v-if='show_tooltip'
									activator='parent'
									:open-on-click='false'
									:open-on-focus='false'
									location='top center'
									:content-class='dark_mode?"tooltip_light":"tooltip_dark"'
								>
									<span>{{ current_project.link.tooltip }}</span>
								</v-tooltip>
							</template>
						</AHref>

					</v-col>

				</v-row>

				<v-row justify='center' align='center' class='ma-0 pa-0'>

					<v-col cols='12' class='text-body-1 ma-0 pa-0' >
						<component :is='current_project.component' />
					</v-col>

				</v-row>
				
			</v-container>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { mdiChevronDoubleLeft, mdiChevronDoubleRight, mdiFileCode, mdiOpenInNew, } from '@mdi/js';
import type { TGithubRepos, TProject, u } from '@/types';

import AHref from '@/components/AHref.vue';

import Adsbdb from '@/components/Projects/AdsbdbVue.vue';
import BelugasnoozeClient from '@/components/Projects/BelugasnoozeClient.vue';
import BelugasnoozeSite from '@/components/Projects/BelugasnoozeSite.vue';
import Havn from '@/components/Projects/HavnVue.vue';
import LeafcastClient from '@/components/Projects/LeafcastPi.vue';
import LeafcastSite from '@/components/Projects/LeafcastSite.vue';
import MealpedantApi from '@/components/Projects/MealpedantApi.vue';
import MealpedantSite from '@/components/Projects/MealpedantSite.vue';
import MrJackWills from '@/components/Projects/MrJackWills.vue';
import Obliqoro from '@/components/Projects/ObliqoroVue.vue';
import Oxker from '@/components/Projects/OxkerVue.vue';
import StaticpiBackend from '@/components/Projects/StaticpiBackend.vue';
import StaticpiSite from '@/components/Projects/StaticpiVue.vue';

const route = useRoute();
const router = useRouter();
const darkmodeStore = darkmodeModule();
const image_store = imageModule();

const text_color = computed((): string => {
	return darkmodeStore.text_color;
});

const next_disabled = computed((): boolean => {
	return project_index.value === projects.length -1;
});

/// Don't show tooltips when on android or ios if also on mobile view!
const show_tooltip = computed((): boolean => {
	return !(mobileModule().android_ios && mobile.value);
});

const previous_disabled = computed((): boolean => {
	return project_index.value === 0;
});

const mobile = computed((): boolean => {
	return mobileModule().mobile;
});

const icon_size = computed((): string => {
	return mobile.value ? 'large' : 'x-large';
});

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

const next = (): void => {
	if (project_index.value === projects.length -1) {
		// don't allow looping around, mainly as would have to re-do mrjackwills screenshots
		// project_index.value = 0;
	} else {
		project_index.value += 1;
	}
};

const previous = (): void => {
	if (project_index.value == 0) {
		// don't allow looping around, mainly as would have to re-do mrjackwills screenshots
		// project_index.value = projects.value.length -1;
	} else {
		project_index.value -= 1;
	}
};

const computed_github = computed((): string => {
	return `https://www.github.com/mrjackwills/${current_project.value.github}`;
});

const project_index = ref(0);
const current_project = computed(() => {
	return projects[project_index.value];
});

const set_index = (name: string): void => {
	const index = projects.findIndex((i) => i.github === name);
	if (index >=0) {
		project_index.value = index;
	}
};

const arrow_key = (i: KeyboardEvent) : void => {
	if (i.key === 'ArrowRight') {
		next();
	} else if (i.key === 'ArrowLeft') {
		previous();
	}
};

onUnmounted(() => {
	document.removeEventListener('keyup', arrow_key);
});

onMounted(() => {
	document.addEventListener('keyup', arrow_key);
});

onBeforeMount(() => {
	const query = route.query?.project;
	const index = projects.findIndex((i) => i.github === query);
	if (index) {
		set_index(`${query}`);
	} else {
		router.push({ path: route.path, query: undefined });
	}
});

const url_query = computed((): undefined | string => {
	return route.query?.project ? `${route.query.project}` : undefined;
});

watch(project_index, () => {
	router.push({ path: route.path, query: { project: current_project.value.github } });
});

watch(url_query, (i) => {
	if (i) {
		set_index(i);
	} else {
		project_index.value = 0;
	}
});
const current_project_name = computed((): u<TGithubRepos> => {
	return currentProjectModule().current_project;
});

watch(() => current_project_name.value, (i) => {
	if (i) {
		set_index(i);
	}
});

// The order here is the order that they appear when navigating through them all
const projects: Array<TProject> = [
	{
		name: 'oxker',
		github: 'oxker',
		link: undefined,
		component: Oxker,
	},

	{
		name: 'adsbdb',
		github: 'adsbdb',
		component: Adsbdb,
		link: {
			href: 'https://www.adsbdb.com',
			tooltip: 'live site'
		}
	},

	{
		name: 'havn',
		github: 'havn',
		component: Havn,
		link: undefined
	},
	
	{
		name: 'Obliqoro',
		github: 'obliqoro',
		component: Obliqoro,
		link: undefined
	},
	
	{
		name: 'staticPi site',
		github: 'staticpi_vue',
		component: StaticpiSite,
		link: {
			href: 'https://www.staticpi.com',
			tooltip: 'invite on request'
		}
	},

	{
		name: 'staticPi backend',
		github: 'staticpi_backend',
		component: StaticpiBackend,
	},

	{
		name: 'Leafcast site',
		github: 'leafcast_vue',
		component: LeafcastSite,
		link: {
			href: 'https://plants.mrjackwills.com',
			tooltip: 'password on request'
		}
	},

	{
		name: 'Leafcast client',
		github: 'leafcast_pi',
		component: LeafcastClient,
	},

	{
		name: 'Meal Pedant site',
		github: 'mealpedant_vue',
		component: MealpedantSite,
		link: {
			href: 'https://www.mealpedant.com',
			tooltip: 'invite on request'
		}
	},

	{
		name: 'Meal Pedant API',
		github: 'mealpedant_api',
		component: MealpedantApi,
	},

	{
		name: 'Beluga Snooze site',
		component: BelugasnoozeSite,
		github: 'belugasnooze_vue',
		link: {
			href: 'https://www.belugasnooze.com',
			tooltip: 'invite on request'
		}
	},

	{
		name: 'Beluga Snooze client',
		component: BelugasnoozeClient,
		github: 'belugasnooze_pi',
		link: undefined
	},

	{
		name: 'Mr Jack Wills',
		github: 'mrjackwills_vue',
		component: MrJackWills,
		link: {
			href: 'https://www.mrjackwills.com/?project=mrjackwills_vue',
			tooltip: `You're already here`
		}
	}
];

const image = computed((): string => {
	return image_store.image;
});

const webp = computed((): string => {
	return image_store.webp;
});

</script>

<style>
.max-img{
	max-height: 33dvh!important;
	min-height: 20dvh!important;
}

</style>