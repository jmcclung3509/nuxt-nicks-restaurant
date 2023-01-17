
import pageData from "assets/json/pages.json"

export const usePages =(name: String) =>{
	let pages
	pageData.forEach((item)=>{
		if(item.name === name) {
			pages=item
		}
	})
	return pages
}