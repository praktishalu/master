console.log("main js called");
var valid_email = false;
var valid_password = false;
if (typeof(Storage) !== "undefined") {
	var user = JSON.parse(localStorage.getItem("user_details"));
	if(user != null){
		console.log("localStorage is not empty");
		var user = JSON.parse(localStorage.getItem("user_details"));
	}
	else{
		console.log("localStorage is empty");
		var user = {};
		user.test = {};
		user.test.name = "test";
		user.test.company = "test company";
		user.test.email = "test@gmail.com";
		user.test.username = "test username";
		user.test.password = "test";
	}
}
else{
	alert("your browser does not support web Storage.. So login functionality cannot be implemented");
}
function validate_signout(){
	document.getElementById("login_button").disabled = true;
	document.getElementById("login_password").disabled = true;
	if (typeof(Storage) !== "undefined") {
	    if(localStorage.getItem("loggedin") == "true"){
	    	localStorage.setItem("loggedin", "false");
	    	location.href='../index.html';
	    }
	}
	else{
		alert("your browser does not support web Storage..So login functionality cannot be implemented");
	}
}

function login(){
	var login_email = document.getElementById("login_email").value;
	var login_password = document.getElementById("login_password").value;
	// if (typeof(Storage) !== "undefined") {
	// 	var user = JSON.parse(localStorage.getItem("user_details"));
	// }
	// else{
	// 	alert("your browser does not support web Storage.. So login functionality cannot be implemented");
	// }
	console.log(JSON.stringify(user));
	for(var i in user){
		if(login_email == user[i].email && login_password == user[i].password){
			if (typeof(Storage) !== "undefined") {
				localStorage.setItem("loggedin", "true");
			}
			else{
				alert("your browser does not support web Storage.. So login functionality cannot be implemented");
			}
			location.href='../index.html';
		}
	}
}

function sign_up(){
	var name = document.getElementById("signup_name").value;
	var company = document.getElementById("signup_company").value;
	var email = document.getElementById("signup_email").value;
	var username = document.getElementById("signup_username").value;
	var password = document.getElementById("signup_password").value;
	user[name] = {};
	user[name].name = name;
	user[name].company = company;
	user[name].email = email;
	user[name].username = username;
	user[name].password = password;
	localStorage.setItem("user_details", JSON.stringify(user));
	location.href='../html/login.html';
}
function validate_signin_email(){
	console.log(document.getElementById("login_email").value);
	var login_email = document.getElementById("login_email").value;
	var pos = login_email.search("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}");
	if(pos == -1){
		console.log("invalid email");
		valid_email = false;
		document.getElementById("login_password").disabled = true;
	}
	else{
		console.log("valid email");
		valid_email = true;
		document.getElementById("login_password").disabled = false;
	}
	// document.getElementById("login_button").disabled = false;
}
function validate_signin_password(){
	console.log(document.getElementById("login_password").value);
	if((document.getElementById("login_password").value).length != null){
		document.getElementById("login_button").disabled = false;
	}
	else{
		document.getElementById("login_button").disabled = true;
	}
}