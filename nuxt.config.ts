// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	postcss: {
		plugins: {
			autoprefixer: {},
			tailwindcss: {},
		},
	},
	modules: ['@pinia/nuxt', 'nuxt-icons'],
})
