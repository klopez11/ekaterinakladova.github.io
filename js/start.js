function resetPass() {
	let username = prompt("Please enter your username");
	let sq = "What is your favorite color?"; /*placeholder*/
	let sq_answer = "Blue" /*placeholder*/
	if (username != null && username != "") {
		let answer = prompt(sq);
		if (answer == sq_answer && answer != null && answer != "") {
			let new_pass = prompt("What is your new password?");
			if (new_pass != null && new_pass != "") {
				alert ("Thank you " + username + ", your password has been reset");
			}
			else 
				alert("Blank password; reset aborted");
		}
		else 
			alert("Incorrect Answer");
	}
	else 
		alert("Please try again with a valid username");
}

function createform() { //In beta, not really working yet
	// Create element:
	const para = document.createElement("form");
	para.innerHTML = "Please enter your username";
	// Append to another element:
	document.getElementById("myDIV").appendChild(para);
	document.getElementById("myDIV").appendChild(document.createElement("input"));
	//document.getElementById("myDIV").appendChild(document.getElementById("register_box"));
}

function confirmation() {
	if (confirm("Are you sure you want to log out?") == true) {
		window.location.replace('start.html');
	}
} 