// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
	provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
	firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    }
  ],
  // Other config options..
  // Other config options...
});
if (ui.isPendingRedirect()) {
  ui.start('#firebaseui-auth-container', uiConfig);
}
// This can also be done via:
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  ui.start('#firebaseui-auth-container', uiConfig);
}
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'start.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};
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