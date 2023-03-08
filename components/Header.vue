<template>
	<header class="main relative flex bg-grey-900 text-grey-100 py-3.5 px-6 shadow justify-between w-full">
		<div class="container m-auto flex justify-between items-end">
			<div class="left">
				<img src="@/assets/images/logo-pelican.png"
					alt="Nick's logo" />
			</div>
			<template v-if="['lg', 'xl'].includes(size)">
				<nav class="w-3/4 right main flex justify-end items-center">
					<ul class="flex justify-between gap-10">
						<li><nuxt-link to="/">Home</nuxt-link></li>
						<li>
							<Accordion id="0"
								:open="data.pages[0].open"
								@toggleAccordion="data.pages[0].open = !data.pages[0].open">
								<template #visible="visibleProps">
									<nuxt-link to=""
										class="parent-link">Menu</nuxt-link>
								</template>
								<template #hidden="{ closeAccordion }">
									<div class="flex flex-col dropdown"
										@mouseleave="closeAccordion">
										<nuxt-link @click="closeAccordion"
											to="/menu#breakfast"
											class="child-link whitespace-nowrap">
											Breakfast & Lunch
										</nuxt-link>
										<nuxt-link @click="closeAccordion"
											to="/menu#dinner"
											class="child-link whitespace-nowrap">Dinner</nuxt-link>
										<nuxt-link @click="closeAccordion"
											to="/menu#dessert"
											class="child-link whitespace-nowrap">
											Dessert
										</nuxt-link>
										<nuxt-link @click="closeAccordion"
											to="/menu#bar"
											class="child-link whitespace-nowrap">
											Bar & Lounge
										</nuxt-link>
										<nuxt-link @click="closeAccordion"
											to="/menu#happy-hour"
											class="child-link whitespace-nowrap">Happy
											Hour</nuxt-link>
										<nuxt-link @click="closeAccordion"
											to="/menu#banquet"
											class="child-link whitespace-nowrap">Banquets</nuxt-link>
										<nuxt-link @click="closeAccordion"
											to="/menu#music"
											class="child-link whitespace-nowrap">Live
											Music</nuxt-link>

									</div>
								</template>


							</Accordion>
						</li>

						<li><nuxt-link to="/about">About Us</nuxt-link></li>
						<li><a href="https://www.seabreezemotel.net" target="_blank"> Sea Breeze Motel</a> </li>
						<li>
							<Accordion :id="1"
								:open="data.pages[1].open"
								@toggleAccordion="data.pages[1].open = !data.pages[1].open">
								<template #visible="visibleProps">
									<nuxt-link to=""
										class="parent-link">
										Gallery</nuxt-link>
								</template>
								<template #hidden="{ closeAccordion }">
									<div class="flex flex-col dropdown"
										@mouseleave="closeAccordion">

										<nuxt-link @click="closeAccordion"
											class="child-link whitespace-nowrap"
											to="/gallery#views">Views</nuxt-link>
										<nuxt-link @click="closeAccordion"
											class="child-link whitespace-nowrap"
											to="/gallery#food">Menu
											Items</nuxt-link>
										<nuxt-link @click="closeAccordion"
											class="child-link whitespace-nowrap"
											to="/gallery#fun">Fun
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
					:class="`bi-${data.isMobileOpen ? 'x' : 'list'}`"
					@click="(data.isMobileOpen = !data.isMobileOpen), $emit('mobileMenuClick', data.isMobileOpen)"></i>
			</template>

		</div>
	</header>
</template>

<script setup>


const data = reactive({

	isMobileOpen: false,
	pages: [
		{ id: "0",name: "Menu",open: false },
		{ id: "1",name: "Gallery",open: false }
	]

})


const size = useScreensize().size

const onMobileMenuClick = (payload) => {
	console.log(data.isMobileOpen)
	data.isMobileOpen = payload

	console.log(payload)


}


</script>


