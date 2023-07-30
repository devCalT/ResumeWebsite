
//Animated scroll to id
const scrollSmoothToElement = (id) => {
		const yPos = id.getBoundingClientRect().top + window.scrollY;
		console.log(document.documentElement.clientHeight)	
		document.documentElement.scrollTop += yPos;;
}

//Animated scroll to top
const scrollSmoothToTop = () => {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}
