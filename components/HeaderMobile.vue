
<template>
	<div class="mobile-menu flex flex-col lg:hidden overflow-auto space-y-4 absolute">
		<ul>
			<li>
				<Accordion id="0" :open="data.accordionPages[0].open" @toggleAccordion="onAccordionClick">
					<template #visible="visibleProps">
						<nuxt-link to="/menu" class="parent-link underline-link">Menu</nuxt-link>
					</template>
					<template #hidden>
						<div class="flex flex-col">

							<nuxt-link class="child-link underline-link whitespace-nowrap" :external="true"
								to="/menu#breakfast">Breakfast & Lunch</nuxt-link>
							<nuxt-link class="child-link underline-link whitespace-nowrap" :external="true"
								to="/menu#dinner">Dinner</nuxt-link>
							<nuxt-link class="child-link underline-link whitespace-nowrap" :external="true"
								to="/menu#dessert">Dessert</nuxt-link>
							<nuxt-link class="child-link underline-link whitespace-nowrap" :external="true" to="/menu#bar">Bar &
								Lounge</nuxt-link>
							<nuxt-link class="child-link underline-link whitespace-nowrap" :external="true" to="/menu#happy-hour">Happy
								Hour</nuxt-link>
							<nuxt-link class="child-link underline-link whitespace-nowrap" :external="true"
								to="/menu#banquet">Banquets</nuxt-link>
							<nuxt-link class="child-link underline-link whitespace-nowrap" :external="true" to="/menu#music">Live
								Music</nuxt-link>

						</div>
					</template>
				</Accordion>
			</li>
			<li><nuxt-link to="/about"  class="parent-link underline-link">About Us</nuxt-link></li>
			<li><nuxt-link to="/seabreeze"  class="parent-link underline-link">SeaBreeze</nuxt-link></li>
			<li>
				<Accordion :id="1" :open="data.accordionPages[1].open" @toggleAccordion="onAccordionClick">
					<template #visible="visibleProps">
						<nuxt-link to="/gallery" class="parent-link underline-link">
							Gallery</nuxt-link>
					</template>
					<template #hidden>
						<div class="flex flex-col">

							<nuxt-link class="child-link underline-link whitespace-nowrap" :external="true"
								to="/gallery#views">Views</nuxt-link>
							<nuxt-link class="child-link underline-link whitespace-nowrap" :external="true" to="/gallery#food">Menu
								Items</nuxt-link>
							<nuxt-link class="child-link underline-link whitespace-nowrap" :external="true" to="/gallery#fun">Fun
								Times</nuxt-link>

						</div>
					</template>
				</Accordion>
			</li>

		</ul>
	</div>
</template>

<script setup>
const data = reactive({
	accordionPages: [
		{ id: 0,name: "Menu",open: false },
		{ id: 1,name: "Gallery",open: false },
	]
})
const onAccordionClick=(payload)=>{
	data.accordionPages.forEach((item)=>(item.open = item.id === payload.id ? payload.open : false))
}

</script>

