<template>
	<Html>
		<Body :class="`page-${route.name}`">
			<div
				class="flex main-page page-animate"
				:class="{ 'mobile-menu-open': data.isMobileOpen }">
				<Header @mobileMenuClick="onMobileMenuClick"  />
				<div class="inner w-full">
					<slot />
					<Footer />
				</div>

				<HeaderMobile></HeaderMobile>
			</div>
		</Body>
	</Html>
</template>
<script setup>
const route = useRoute();
const { isMobile } = useScreensize();


const data = reactive({
	isMobileOpen: false,
});
const onMobileMenuClick = (payload) => {
	data.isMobileOpen = payload;
	console.log("click", payload);
};
const isMobileMenuOpen = computed(() => {
	return data.isMobileOpen ;
});

</script>
