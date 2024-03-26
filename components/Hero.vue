<template>
	<section id="hero" class="animate"
	>

			<div class="hero-container flex justify-center items-center  h-[95vh] w-[100vw]">
				<div class="bg1 bg" :class="{ active: data.activeIndex === 0 }"></div>
				<div class="bg2 bg" :class="{ active: data.activeIndex === 1 }"></div>
				<div class="bg3 bg" :class="{ active: data.activeIndex === 2 }"></div>
				<div class="bg4 bg" :class="{ active: data.activeIndex === 3 }"></div>
				<div class="bg5 bg" :class="{ active: data.activeIndex === 4 }"></div>
				<div class="bg6 bg" :class="{ active: data.activeIndex === 5 }"></div>


				<div
					class="outer-container flex justify-center items-center  w-[80%] sm:w-[70%] lg:w-[65%] xl:w-[60%] min-h-fit py-14 max-w-screen-lg">
					<div class="text-container flex flex-col justify-end items-center  w-[80%] mx-auto space-y-7 lg:space-y-14">
						<h1
							class=" text-3xl sm:text-4xl  lg:text-6xl text-center animate__animated animate__zoomIn animate__delay-1s ">
							Welcome to <br> Nick's Restaurant
						</h1>
						<p class="text-center lg:w-[80%] mx-auto">
							Specializing in fresh seafood and prime-cut steaks, the Gust family has been welcoming
							guests from all over
							the world since 1927. </p>
					<button class=" text-white font-bold py-4 px-8 border border-none rounded"><nuxt-link to="/about">
 Our Story</nuxt-link>
</button>
					</div>
				</div>
			</div>

	</section>
</template>

<script setup>


const data = reactive({
	activeIndex: 0,
})

const setActiveIndex = () => {
	setInterval(() => {
		data.activeIndex = (data.activeIndex + 1) % 6
	},6000)
}

onMounted(() => {
	setActiveIndex()
})
</script>