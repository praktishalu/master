console.log("main js called");
var user = {};
user.test = {};
user.test.name = "test";
user.test.company = "test company";
user.test.email = "test@gmail.com";
user.test.username = "test username";
user.test.password = "test";
function login(){
	var login_email = document.getElementById("login_email").value;
	var login_password = document.getElementById("login_password").value;
	if(login_email == "test@gmail.com" && login_password == "test"){
		location.href='../index.html'
	}
}

function validate(){
	// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
}
