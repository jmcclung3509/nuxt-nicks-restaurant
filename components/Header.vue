<template>
	<header class="main relative flex flex-col" >
		<div class="container m-auto flex justify-between items-center">
			<div class="left">
				<img src="@/assets/images/logo-pelican.png" alt="Nick's logo" />
			</div>
			<nav class="right main flex justify-center items--center">
				<ul class="flex">
					<li class="relative">
						<HeaderDropdown v-slot="slotProps" :page="usePages('Menu')" :open="data.isOpen === 0"
							@toggleDropdown="onToggleDropdown">
							<div class="inner flex">
								<div class="flex flex-col space-y-6 p-8">
									<nuxt-link v-for="item in slotProps.page.subpages" :key="item.id" :subpage="subpage"
										:to="item.link">{{ item.name }}</nuxt-link>
								</div>
							</div>
						</HeaderDropdown>
					</li>
					<li class="relative px-5">
						<nuxt-link to="/about">About Us</nuxt-link>
					</li>
					<li class="relative px-5">
						<nuxt-link to="/seabreeze">SeaBreeze Motel</nuxt-link>
					</li>
					<li class="relative px-5">
						<HeaderDropdown v-slot="slotProps" :page="usePages('Gallery')" :open="data.isOpen === 3"
							@toggleDropdown="onToggleDropdown">
							<div class="inner flex">
								<div class="flex flex-col space-y-6 p-8">
									<nuxt-link v-for="item in slotProps.page.subpages" :key="item.id" :subpage="subpage"
										:to="item.link">{{ item.name }}</nuxt-link>
								</div>
							</div>
						</HeaderDropdown>
					</li>
				</ul>

			</nav>
		</div>
	</header>
</template>

<script setup>
import pagesJson from "assets/json/pages.json"


const pages = pagesJson
const data = reactive({
	isOpen: false,
})
const onToggleDropdown= (payload)=> {
	data.isOpen = payload.open ? payload.id : null
}


</script>

