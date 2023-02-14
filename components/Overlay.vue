<template>
	<Transition name ="fade">
		<div v-if="globalState.overlay.showing"
		class="h-screen w-screen bg-whitesmoke/80 fixed z-20 justify-center items-center">
	</div>
	</Transition>

</template>