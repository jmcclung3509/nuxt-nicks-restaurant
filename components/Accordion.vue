<template>
	<div class="accordion" :class="{ open: isOpen, transition: transition, enabled: enabled }">
		<div class="visible-part" v-on="enabled ? {click:toggleAccordion}: {}">
			<slot name="visible" :open="isOpen" :enabled="enabled">
			</slot>
		</div>
		<template v-if="transition">
			<Transition @before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter"
				@before-leave="onBeforeLeave" @leave="onLeave" @after-leave="onAfterLeave">
				<div class="hidden-part">
					<slot name="hidden"></slot>
				</div>
			</Transition>
		</template>
		<template v-else>
			<div class="hidden-part" v-show="isOpen">
				<slot name="hidden"></slot>
			</div>
		</template>
	</div>
</template>
<script setup>
const props = defineProps({
	open: {
		type: Boolean,
		default: undefined
	},
	enabled: {
		type: Boolean,
		default: true,

	},
	transition: {
		type: Boolean,
		default: false,
	},
	id: {
		type: [Number,String],
		default: undefined
	}
})
const emit = defineEmits(["toggleAccordion"])


const data = reactive({
	open: props.open
})

const isOpen = computed(() => {
	if (props.open !== undefined) {
		return props.open
	}
	return data.open
})
const onBeforeEnter = (el) => {
	el.style.height = "0px"
}
const onEnter = (el) => {
	el.style.height = ""
}
const onAfterEnter = (el) => {
	el.style.height = el.scroll.height + "px"
}
const onLeave = (el) => {
	setTimeout(() => {
		el.style.height = "0px"
	},100)
}
const onAfterLeave = (el) => {
	el.style.height = ""
}
const toggleAccordion = (e) => {
	if (props.open !== undefined) {
		emit("toggleAccordion",{ open: !props.open,id: props.id })
	} else {
		data.open = !data.open
	}
}
</script>