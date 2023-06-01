<template>
	<Html>
		<Body :class="[{'notify-open': data.notifyOpen},`page-${route.name}`]">
<Transition name="banner-open-close">
				<div class="notify flex items-center justify-center" v-if="data.notifyOpen">
					<NotifyBanner :open="data.notifyOpen" @notify-close="data.notifyOpen=false"/>
				</div>
				</Transition>
			<div
				class=" relative flex main-page page-animate"
				:class="{ 'mobile-menu-open': data.isMobileOpen }">
				<Header @mobileMenuClick="onMobileMenuClick"  />

				<div class="inner w-full overflow-hidden">
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
	notifyOpen: false
});
const onMobileMenuClick = (payload) => {
	data.isMobileOpen = payload;
	console.log("click", payload);
};
const isMobileMenuOpen = computed(() => {
	return data.isMobileOpen ;
});
const toggleNotifyOpen = ()=>{
	setTimeout(()=>{
		data.notifyOpen = true
	}, 200)
}
onMounted(()=>{
	setTimeout(()=>{
		useAnimateObserver()
		useGoToAnchor()
		toggleNotifyOpen()
	}, 100)
})

</script>
<style scoped>
.toggle-notify{
	position: relative;
	z-index: 100;
}
</style>
