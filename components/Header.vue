<template>
	<header class="main relative flex bg-grey-900 text-grey-100 py-3.5 px-6 shadow justify-between w-full">
		<div class="container m-auto flex justify-between items-center w-full">
			<div class="left">
				<img src="@/assets/images/logo-pelican.png" alt="Nick's logo" />
			</div>
			<template v-if="['lg', 'xl'].includes(size)">
				<nav class="w-3/4 right main flex justify-end items-center">
					<ul class="flex justify-between gap-10">
						<li>
							<Accordion id="0" :open="data.pages[0].open" toggleAccordion="onAccordionClick">
								<template #visible="visibleProps">
									<nuxt-link to="" class="parent-link">Menu</nuxt-link></template>
								<template #hidden>
									<div class="flex flex-col">
										<nuxt-link to="/menu#breakfast" class="child-link whitespace-nowrap">Breakfast &
											Lunch</nuxt-link>
										<nuxt-link to="/menu#dinner"
											class="child-link whitespace-nowrap">Dinner</nuxt-link>
										<nuxt-link to="/menu#dessert">Dessert</nuxt-link>
										<nuxt-link to="/menu#bar" class="child-link whitespace-nowrap">Bar &
											Lounge</nuxt-link>
										<nuxt-link to="/menu#happy-hour" class="child-link whitespace-nowrap">Happy
											Hour</nuxt-link>
										<nuxt-link to="/menu#banquet"
											class="child-link whitespace-nowrap">Banquets</nuxt-link>
										<nuxt-link to="/menu#music" class="child-link whitespace-nowrap">Live
											Music</nuxt-link>

									</div>
								</template>


							</Accordion>
						</li>

						<li><nuxt-link to="/about">About Us</nuxt-link></li>
						<li><nuxt-link to="/seabreeze">SeaBreeze</nuxt-link></li>
						<li>
							<Accordion :id="1" :open="data.pages[1].open" @toggleAccordion="onAccordionClick">
								<template #visible="visibleProps">
									<nuxt-link to="" class="parent-link">
										Gallery</nuxt-link>
								</template>
								<template #hidden>
									<div class="flex flex-col">

										<nuxt-link class="child-link whitespace-nowrap"
											to="/gallery#views">Views</nuxt-link>
										<nuxt-link class="child-link whitespace-nowrap" to="/gallery#food">Menu
											Items</nuxt-link>
										<nuxt-link class="child-link whitespace-nowrap" to="/gallery#fun">Fun
											Times</nuxt-link>

									</div>
								</template>
							</Accordion>
						</li>

					</ul>
				</nav>
			</template>
			<template v-else>

				<i class="mobile-nav-trigger font-icon cursor-pointer text-5xl z-2000 bi"
					:class="`bi-${data.mobileIsOpen ? 'list' : 'x'}`"
					@click="(data.mobileIsOpen = !data.mobileIsOpen), $emit('mobileMenuClick', data.mobileIsOpen)"></i>
			</template>

		</div>
	</header>
</template>

<script setup>


// const props = defineProps({
// 	open: {
// 		type: Boolean,
// 		default: false
// 	}
// })
const data = reactive({

	mobileIsOpen: false,
	pages: [
		{ id: "0",name: "Menu",open: "false" },
		{ id: "1",name: "Gallery",open: "false" }
	]

})


const size = useScreensize().size

const onMobileMenuClick = (payload) => {
	data.mobileIsOpen = payload
	console.log(payload)


}
</script>


