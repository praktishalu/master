console.log("index.js file called");
function init(){
	checkLogIn();
	validate();
}
var slideIndex = 0;
function checkLogIn(){
	// code for checking logged in or logged out
	if (typeof(Storage) !== "undefined") {
	    if(localStorage.getItem("loggedin") == "true"){
	    	document.getElementById("login_button").innerHTML = "sign out";
	    	document.getElementById("signup_li").style.display = "none";
	    }
	    else{
	    	if(localStorage.getItem("loogedin") == "false"){
	    		document.getElementById("login_button").innerHTML = "Login";
	    		document.getElementById("signup_li").style.display = "block";
	    	}
	    }
	}
	else{
		alert("your browser does not support web Storage..So login functionality cannot be implemented");
	}
}
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
