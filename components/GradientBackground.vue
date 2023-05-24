<template>
	<div class="gradient w-full">
		<div class="content pt-0 mt-0">
		<slot/>
		</div>
	</div>
</template>

<script setup>
const props=defineProps({
	startColor: {
		type: Array,
		default: [227, 242, 255]
	},
	endColor: {
		type: Array,
		default: [230, 244,241]
	},
	a:{
		type: Number,
		default: 1,
	}
})
onMounted(()=>{
	window.addEventListener("scroll", updateGradient)
})
onUnmounted(()=>{
	window.removeEventListener("scroll", updateGradient)
})

const updateGradient = ()=>{
const gradient = document.querySelector(".gradient");
const content = document.querySelector(".content")
const  windowHeight = window.innerHeight
const scrollTop= window.scrollY || window.pageYOffset
const contentHeight= content.offsetHeight
const scrollProgress = scrollTop / (contentHeight-windowHeight);
const gradientColor =  calculateGradientColor(scrollProgress)

gradient.style.background = gradientColor



}

const calculateGradientColor =(scrollProgress)=>{

	const startColor = props.startColor;
	const endColor = props.endColor;

	const r=Math.round(startColor[0] + (endColor[0]- startColor[0]) * scrollProgress)
	const g=Math.round(startColor[1] + (endColor[1]- startColor[1]) * scrollProgress)
	const b=Math.round(startColor[2] + (endColor[2]- startColor[2]) * scrollProgress)
	const a=props.a
	return `rgba(${r}, ${g}, ${b}, ${a})`
}
</script>
<style>
body {
  overflow-y: scroll; /* Enable vertical scrolling */
}

.gradient {
  width: 100%;

  pointer-events: none;
}
.gradient-section {
  position: relative;
  z-index: 1;
  background: transparent;
}
</style>