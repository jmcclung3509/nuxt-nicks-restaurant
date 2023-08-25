<template>
	<div
		class="py-4 ">

		<div class="inner-banner-wrapper px-4 flex justify-center items-center">

				<div class="flex justify-center items-center py-7">
					<p class="font-bold">
						Nick's car show is back!  Thursday June, 8, 2023
					</p>
				</div>


			<i
				class="icon-close icon cursor-pointer text-5xl z-2000 bi-x"
				@click="$emit('notify-close')"></i>
		</div>
	</div>

</template>

<script setup>


const props = defineProps({

	open: {
		type: Boolean,
		default: false,
	},
});


</script>
