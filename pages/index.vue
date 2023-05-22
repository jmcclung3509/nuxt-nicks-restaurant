<template>

	<Hero />
	<Hours />

</template>

<script setup>

const size = useScreensize()
onMounted(()=>{
	setTimeout(()=>{
		useAnimateObserver()
		useGoToAnchor()
	}, 100)
})
onUpdated(()=>{
setTimeout(()=>{
		useAnimateObserver()
		useGoToAnchor()
	}, 100)
})
</script>