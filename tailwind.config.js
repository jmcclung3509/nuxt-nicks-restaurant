/** @type {import ('tailwindcss').Config} */

module.exports = {
	contents: [
		'./assets/**/*.{vue,js,css}',
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}'
	],
	theme: {
		screens: {
			'sm':'640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px'
		},
		extend: {
			fontSize: {
				'5xl': ['3rem', '1.25'],
				'6xl': ['3.75rem', '1.5']
			}
		}
	}
}