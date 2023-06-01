<template>
	<div class="flex justify-center items-center py-7 lg:py-20" :class="addCssClasses">
		<template v-if="isMobile">
			<div class="flex justify-center items-center py-7">
				<p class="font-bold"> Mark your calenders for this July 4th </p>
			</div>
		</template>
		<template v-else>
			<div class="flex justify-center-items-center space-x-7 py-4">
				<img class="" src="" alt=""/>
				<p class="blue"> Mark your calenders: <span class="gradient-text">July 4th Celebration</span></p>
					<img class="" src="" alt=""/>
			</div>
			</template>
				<i
					class="icon-close icon cursor-pointer text-5xl z-2000 bi-x"
					@click="$emit('notify-close')"></i>
		</div>
</template>


<script setup>
const isMobile = useScreensize().isMobile

const props = defineProps({
	cssClasses:{
		type: String,
		default: ""
	},
	open: {
		type: Boolean,
		default: false
	}

})

const addCssClasses = computed(()=>{
	let classes = []
	if (props.classes){
		classes.push(props.cssClasses)
	}
	return classes.join(" ")
})
</script>
