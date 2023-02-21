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
		cspNonce: 'le82eTTKUwMLsvfITR0whqOh50xGH52QbDwQx8anWgZOSq3JkuOyDX0cbsJeauIeI77nqietIxxj6Lwn',
	},
});
