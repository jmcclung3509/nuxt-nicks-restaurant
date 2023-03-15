<template>
	<section id="hero">

			<div class="hero-container flex justify-center items-center pt-24 h-[100vh] w-[100vw]">
				<div class="bg1 bg" :class="{ active: data.activeIndex === 0 }"></div>
				<div class="bg2 bg" :class="{ active: data.activeIndex === 1 }"></div>
				<div class="bg3 bg" :class="{ active: data.activeIndex === 2 }"></div>
				<div class="bg4 bg" :class="{ active: data.activeIndex === 3 }"></div>

				<div
					class="outer-container flex justify-center items-center  w-[90%] h-[80%] md:h-[70%]   lg:w-2/3 mx-auto">
					<div class="text-container flex flex-col justify-end items-center  w-[80%] mx-auto space-y-7 lg:space-y-14">
						<h1
							class="text-4xl md:text-5xl text-center animate__animated animate__zoomIn animate__delay-1s ">
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
		data.activeIndex = (data.activeIndex + 1) % 4
	},6000)
}

onMounted(() => {
	setActiveIndex()
})
</script>

<!-- <style  lang="scss">

.bg {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0;
	z-index: -1;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	transition: opacity 4.5s;


&.bg1 {
	background-image: url("@/assets/images/homepage/saira-C5Uk-pdNXWg-unsplash.png");
}

&.bg2 {
	background-image: url("@/assets/images/homepage/leo-korman-VHIhK52epL0-unsplash.jpg");
}

&.bg3 {
	background-image: url("@/assets/images/homepage/jairo-gonzalez-vGP-QLJu9LM-unsplash.jpg");
}

&.active {
	opacity: 1;
	z-index: 0;
}
}
</style> -->