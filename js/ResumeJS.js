
//Animated scroll to div

const scrollSmoothToElement = (id) => {
	
    const element = document.getElementById(id);
	element.scrollTop = element.scrollHeight;
}

const scrollSmoothToTop = (id) => {
	const element = document.getElementById(id);
	element.scrollTop = 0;
}