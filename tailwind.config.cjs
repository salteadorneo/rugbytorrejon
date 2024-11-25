/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#740e64"
			},
			fontFamily: {
				bebas: 'Bebas Neue'
			}
		},
	},
	plugins: [],
}
