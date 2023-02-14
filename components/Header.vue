<template>
	<header class="main relative flex bg-grey-900 text-grey-100 py-3.5 px-6 shadow justify-between w-full">
		<div class="container m-auto flex justify-between items-center w-full">
			<div class="left">
				<img src="@/assets/images/logo-pelican.png" alt="Nick's logo" />
			</div>
			<template v-if="['lg', 'xl'].includes(size)">
				<nav class="w-3/4 right main flex justify-end items-center">
					<ul class="flex justify-between gap-10">
						<li><nuxt-link to="" class="dropdown-toggle"
								@click="data.showDropdown = !data.showDropdown">
								Menu</nuxt-link>
							<ul v-if="data.showDropdown" class="dropdown-menu">
								<li><nuxt-link to="/menu#breakfast">Breakfast & Lunch</nuxt-link></li>
								<li><nuxt-link to="/menu#dinner">Dinner</nuxt-link></li>
								<li><nuxt-link to="/menu#dessert">Dessert</nuxt-link></li>
								<li><nuxt-link to="/menu#bar">Bar & Lounge</nuxt-link></li>
								<li><nuxt-link to="/menu#happy-hour">Happy Hour</nuxt-link></li>
								<li><nuxt-link to="/menu#banquet">Banquets</nuxt-link></li>
								<li><nuxt-link to="/menu#music">Live Music</nuxt-link></li>
							</ul>
						</li>
						<li><nuxt-link to="/about">About Us</nuxt-link></li>
						<li><nuxt-link to="/seabreeze">SeaBreeze</nuxt-link></li>
						<li><nuxt-link to="" class="dropdown-toggle"
								@click="data.showDropdown = !data.showDropdown">
								Gallery</nuxt-link>
							<ul v-if="data.showDropdown" class="dropdown-menu">
								<li><nuxt-link to="/gallery#views">Views</nuxt-link></li>
								<li><nuxt-link to="/gallery#food">Menu Items</nuxt-link></li>
								<li><nuxt-link to="/gallery#fun">Fun Times</nuxt-link></li>
							</ul>
						</li>

					</ul>
				</nav>
			</template>
			<template v-else>

				<i class="mobile-nav-trigger font-icon cursor-pointer text-5xl z-10 bi bi-list"
				@click="(data.mobileIsOpen = !data.mobileIsOpen), $emit('mobileMenuClick', data.mobileIsOpen)"></i>
			</template>

		</div>
	</header>
</template>

<script setup>

const data = reactive({
	showDropdown: false,
	mobileIsOpen: false
})


const size = useScreensize().size

const onMobileMenuClick = (payload)=>{
	data.mobileIsOpen = payload
	console.log(payload)
}
</script>


