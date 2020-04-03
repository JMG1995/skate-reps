// See https://tailwindcss.com/docs/configuration for details
module.exports = {
	theme: {
		colors: {
			black: '#161616',
			white: '#f6f6f6',
			'crooked-purple': '#4C52E8',
			'flow-green': '#46D66D',
			'am-blue': '#31CDD3',
			'pro-red': '#E65353',
		},
		fontFamily: {
			default: ['Helvetica Neue'],
			montserrat: ['Montserrat'],
		},
	},
	variants: {},
	// https://github.com/tailwindcss/custom-forms
	plugins: [require('@tailwindcss/custom-forms')],
};
