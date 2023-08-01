
//Animated scroll to id
const scrollSmoothToElement = (id) => {
	const elementPos = id.getBoundingClientRect().top //Finds the difference between current scroll point and desired element
	//console.log(elementPos);
	if (elementPos > 0 ){ document.documentElement.scrollTop += elementPos; }
	else if (elementPos < 0){ document.documentElement.scrollTop += elementPos; }	
}

//Animated scroll to top
const scrollSmoothToTop = () => {
	document.documentElement.scrollTop = 0;
}

