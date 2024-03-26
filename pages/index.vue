<template>

	<Hero />
	<Hours />

</template>

<script setup>
// const config = useRuntimeConfig()
// const route = useRoute();
// console.log('config', config)

// const host = config.public.BASE_API_BROWSER_URL;
// const title = "Nick's Restaurant";
// const description ="Specializing in fresh seafood and prime-cut steaks, the Gust family has been welcoming guests from all over the world since 1927.";
// const image= host + "/static/images/nicks-restaurant-featured-image.jpeg";
// const url=host + route.fullPath;


// useHead({
// 	titleTemplate: (globalTitle) => {
// 		return globalTitle ? `${globalTitle} | ${title}` : title;
// 	},
// 	meta: [
// 		{name: "title", content: title},
// 		{name: "description", content: description},
// 		{hid: "og:type", property: "og:type", content: "website"},
// 		{hid: "og:title", property: "og:title", content: title},
// 		{hid: "og:description", property: "og:description", content: description},
// 		{hid: "og:url", property: "og:url", content: url},
// 		{hid: "og:image", property: "og:image", content: image},
// 		{hid: "twitter:title", name: "twitter:title", content: "title"},
// 		{hid: "twitter:description", name: "twitter:description", content: description},
// 		{hid: "twitter:image", name: "twitter:image", content: image},
// 		{hid: "twitter:url", name: "twitter:url", content: url},
// 	]
// })



onMounted(()=>{
	setTimeout(()=>{
		useAnimateObserver()
		useGoToAnchor()
	}, 100)
})
onUpdated(()=>{
setTimeout(()=>{
		useAnimateObserver()
		useGoToAnchor()
	}, 100)
})
</script>