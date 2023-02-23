<template>
	<Html>

	<Body :class="`page-${route.name}`">

		<Header @mobileMenuClick="onMobileMenuClick" />

		<template v-if="data.isMobileOpen">
			<Overlay></Overlay>
			<HeaderMobile></HeaderMobile>
		</template>

		<template v-else>
			<slot></slot>
		</template>

		<Footer />
	</Body>

	</Html>
</template>
<script setup>

const route = useRoute()
const { isMobile } = useScreensize()

const data = reactive({
	isMobileOpen: false,

})

const onMobileMenuClick = (payload) => {

	data.isMobileOpen = payload
	console.log('click',payload)
}
const isMobileMenuOpen = computed(() => {

	return data.isMobileOpen
})


</script>
