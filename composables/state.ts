
export const useScreensize = ()=>{
	let windowWidth=ref(0)
	let isMobile = ref(false)
	let size= ref("default")

	const handleResize =()=>{
		windowWidth.value = window.innerWidth
		if (windowWidth.value >= 1024){
			isMobile.value = false
		} else {
			isMobile.value = true
		}

		switch (true){
			case windowWidth.value >= 1280:
			size.value = "xl"
				break
				case windowWidth.value >= 1024:
				size.value = "lg"
				break
				case windowWidth.value >= 768:
				size.value = "md"
				break
				case windowWidth.value >= 640:
				size.value="sm"
				break
				default:
				size.value = "default"
		}
	}
	onMounted(()=>{
		window.addEventListener("resize", handleResize)
		handleResize()
	})
	return{isMobile, size}
}
export const globalState = reactive({
	overlay: {
		showing: false,
		clickToClose: true
	}
})
export const useOverlay = ()=>{
	const on = ()=>{
		globalState.overlay.showing = true

	}
	const off = ()=>{
		globalState.overlay.showing = false
	}
	return {on, off}
}