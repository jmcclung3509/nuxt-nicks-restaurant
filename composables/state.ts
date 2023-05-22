
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

export const useScroll=()=>{
	const scrollPosition=ref(0)
	const lastScrollPosition=ref(0)
	const scrollDirectionUp=ref(false)

	const handleScroll = ()=>{
		//set current scroll position
		scrollPosition.value=window.pageYOffset
		//set scroll direction
		scrollDirectionUp.value=lastScrollPosition.value > scrollPosition.value
		//update lastScrollPosition
		lastScrollPosition.value=scrollPosition.value
	}
	onMounted(()=>{
		window.addEventListener("scroll", handleScroll, {passive:true})
	})
	onUnmounted(()=>{
		window.removeEventListener("scroll", handleScroll, {passive:true})
	})
	return {scrollPosition, scrollDirectionUp}
}

export const useAnimateObserver =()=>{
	const animatedEls=document.querySelectorAll(".animate")

	const options={
		threshold: .4,
	}
	let observer=new IntersectionObserver((entries)=>{
		entries.forEach((entry)=>{
			if(entry.isIntersecting){
				entry.target.classList.add("animated")
				observer.unobserve(entry.target)
			}
		})
	}, options)
	animatedEls.forEach((el)=>observer.observe(el))
}

export const useGoToAnchor = ()=>{
	document.querySelectorAll("a[data-go-go]").forEach((anchor)=>{
		anchor.addEventListener("click", function(e){
			e.preventDefault()
			document.getElementById(this.getAttribute("data-go-go"))?.scrollIntoView({
				behavior: "smooth",
				block: "center",

			})
		})
	})
}