console.log("index.js file called");
var slideIndex = 0;
function validate(){
	var x = document.getElementsByClassName("category");
	console.log(x.length);

	for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(validate, 2000); 
}
