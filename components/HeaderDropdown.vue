<template>
    <div class="navbar-contents">
        <nuxt-link :to="props.page.link" class="cap font-bold" @mouseenter="mouseEnter" @mouseleave="mouseLeave"
            ref="parentLink">{{ props.page.name }}</nuxt-link>
        <div class="dropdown" v-show="props.open" @mouseleave="mouseleaveDropdown">
            <slot :page="props.page"></slot>
        </div>
    </div>
</template>
<script setup>


const parentLink = ref(null)
const emit = defineEmits(["toggleDropdown"])

const props = defineProps({
    page: Object,
    open: Boolean
})

const mouseEnter = (e) => {
    emitOpen(true)
}
const mouseLeave = (e) => {
    emitOpen(false)
}
const emitOpen = (open) => {
    emit("toggleDropdown",{
        id: props.page.id,
        open: open,
    })
}
</script>