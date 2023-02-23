<template>

		<slot
		name="content"
		:activeIndex="data.activeIndex">

		</slot>


</template>

<script setup>

const data = reactive({
	activeIndex: 0,
})

const setActiveIndex = () => {
	setInterval (() => {
		data.activeIndex = (data.activeIndex + 1) % 3
	},3000)

}
onMounted(() => {
	setActiveIndex()
})

</script>