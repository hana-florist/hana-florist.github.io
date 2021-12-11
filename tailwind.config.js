module.exports = {
	purge: [
		"./index.html",
		"./src/**/*.{js,vue}"
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				hf: {
					beige: "rgb(246, 240, 225)",
					gray: "rgb(81, 78, 69)"
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
