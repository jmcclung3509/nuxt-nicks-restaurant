<template>
	<div
		class="py-4"
		:class="addCssClasses">
		<div class="inner-wrapper px-4 flex justify-center items-center">
			<template v-if="isMobile">
				<div class="flex justify-center items-center py-7">
					<p class="font-bold">
						Nick's car show is back!  Thursday June, 8, 2023
					</p>
				</div>
			</template>
			<template v-else>
				<div class="flex flex-wrap justify-center items-center space-x-7 py-4 ">
					<img
						class=""
						src=""
						alt="" />

			<p><span class="gradient-text">Nick's Car Show </span> this Thursday, 06-08-2023!
					</p>
					<img
						class=""
						src=""
						alt="" />
				</div>
			</template>
			<i
				class="icon-close icon cursor-pointer text-5xl z-2000 bi-x"
				@click="$emit('notify-close')"></i>
		</div>
	</div>
</template>

<script setup>
const isMobile = useScreensize().isMobile;

const props = defineProps({
	cssClasses: {
		type: String,
		default: "",
	},
	open: {
		type: Boolean,
		default: false,
	},
});

const addCssClasses = computed(() => {
	let classes = [];
	if (props.classes) {
		classes.push(props.cssClasses);
	}
	return classes.join(" ");
});
</script>
