



export default {
	head: {
		title: "Nicks Restaurant",
		charset: "utf-8",
		meta: [
			{
				name: "viewport",
				content:
					"width=device-width, inital-scale=1, viewport-fit=cover",
			},
		],
		link: [
			{
				rel: "icon",
				type: "image/png",
				href: "/static/images/favicon.png",
			},
			{
				href: "https://fonts.googleapis.com/css2?family=Oswald&display=swap",
				rel: "stylesheet",
			},
            {
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap",
				rel: "stylesheet",
			},
            {
				href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
				rel: "stylesheet",
			},
            {
            rel:"stylesheet",
             href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
            },

		],

	},
	build: {
		loaders: {
			scss: {
				implementation: require("sass"),
				sassOptions: {
					indentedSyntax: true,
				},
			},
		},
	},
	vite: {
		css: {
			devSourcemap: true,
		},
	},
	css: ["@/assets/scss/styles.scss"],

components: true,

plugins: [


],

	buildModules: ["@nuxtjs/google-fonts"],

	modules: ["@nuxtjs/tailwindcss"],
	googleFonts: {
		families: {
			"Playfair+Display": true,
			Oswald: true,
			"Material+Icons": true,
		},
	},


};
