import 'vuetify/styles';
import '../sass/variables.scss';

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { createVuetify } from 'vuetify';

export default createVuetify({
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		},
	},
	
	theme: {
		cspNonce: document.querySelector<HTMLMetaElement>('meta[property=csp-nonce]')?.nonce,
	},
});
