<template>
	<Html>

	<Body :class="`page-${route.name}`">
		<div class="flex flex-wrap" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
			<Overlay></Overlay>
			<Header @mobileMenuClick = "onMobileMenuClick"/>

			<div class="wrap-inner w-full overflow-hidden" :class="{fixed: globalState.overlay.showing || isMobileMenuOpen }">
			<slot/>
		</div>
		<HeaderMobile></HeaderMobile>
		</div>
	</Body>

	</Html>
</template>
<script setup>

const route = useRoute()
const {isMobile}= useScreensize()

const data = reactive ({
	mobileIsOpen: false
})

const onMobileMenuClick = (payload)=>{
	data.mobileIsOpen = payload
}
const isMobileMenuOpen = computed(()=>{
	return data.mobileIsOpen
})


</script>